require('dotenv').config()

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'POST') {
      // Block GET requests
      return { statusCode: 400, body: null }
    }

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({"apiKey":process.env.HUBSPOT_API_KEY});

    const data = JSON.parse(event.body)
    console.log('data', data);

    const course_type = [];
    Object.values(data).forEach(value => {
      if (value.includes('bootcamp') || value.includes('basics')) {
        course_type.push(value);
      }
    })

    console.log('course type', course_type);

    const hubspotData = {
      properties: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        country: data.country,
        age: data.age,
        phone: data.phone,
        experience: data.experience,
        source: data.source,
        background: data.background,
        course_type: course_type.join(';'),
        bootcamp_funnel_status:'basics_apply',
      }
    };
   
    const apiResponse = await hubspotClient.crm.contacts.basicApi.create(hubspotData);
    
    // Return a 200 if it succeeds
    return { statusCode: 200, body: JSON.stringify({ success: true }) }

  } catch (e) {
      e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
  }
}