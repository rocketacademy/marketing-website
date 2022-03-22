require('dotenv').config()
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://c6497440e5e84175ba59a75d392559c0@o1031692.ingest.sentry.io/6264710",
  tracesSampleRate: 1.0,
  maxValueLength: 8000, // without this error output gets truncated
});

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'POST') {
      // Block GET requests
      return { statusCode: 400, body: null }
    }

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({"apiKey":process.env.HUBSPOT_API_KEY});

    const data = JSON.parse(event.body)

    let bootcampFunnelStatus;

    if (data.course_type.includes('basics')) {
      bootcampFunnelStatus = 'basics_apply';
    } else {
      bootcampFunnelStatus = 'bootcamp_apply';
    }

    const hubspotData = {
      properties: {
        ...data,
        contact_source: website_apply_form,
        bootcamp_funnel_status: bootcampFunnelStatus,
      }
    };
   
    const apiResponse = await hubspotClient.crm.contacts.basicApi.create(hubspotData);
    
    // Return a 200 if it succeeds
    return { statusCode: 200, body: JSON.stringify({ success: true }) }

  } catch (e) {
    Sentry.captureException(e);

    e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)

    return {
      statusCode: 500,
      body: 'request failed',
    }
  }
}