require("dotenv").config();
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://c6497440e5e84175ba59a75d392559c0@o1031692.ingest.sentry.io/6264710",
  tracesSampleRate: 1.0,
  maxValueLength: 8000, // without this error output gets truncated
});

const handleSubmissionSuccess = () => {
  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};

const handleSubmissionError = (e) => {
  // Log error in Sentry
  Sentry.captureException(e);
  // Log error details locally
  e.message === "HTTP request failed"
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e);
  // Return 500 with error
  return {
    statusCode: 500,
    body: `Failed request. Error: ${e}`,
  };
};

exports.handler = async (event, context) => {
  // Block GET requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 400, body: null };
  }

  // Initialise HubSpot client
  const hubspot = require("@hubspot/api-client");
  const hubspotClient = new hubspot.Client({
    accessToken: process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN,
  });

  // Initialise HubSpot contact data
  const formData = JSON.parse(event.body);
  const contactData = {
    properties: {
      ...formData,
      contact_source: "website_apply_form",
      bootcamp_funnel_status: "bootcamp_apply",
    },
  };

  // Create new HubSpot contact. If contact exists, update existing contact.
  let existingContactId;
  try {
    await hubspotClient.crm.contacts.basicApi.create(contactData);
    return handleSubmissionSuccess();
  } catch (e) {
    // If error is not contact already exists, return error
    if (!e.body.message.includes("Contact already exists")) {
      return handleSubmissionError(e);
    }
    // If error is contact already exists, set existing contact ID
    existingContactId = e.body.message.split("Existing ID: ")[1];
  }

  // If contact already exists, try to update contact
  try {
    await hubspotClient.crm.contacts.basicApi.update(
      existingContactId,
      contactData
    );
  } catch (e) {
    return handleSubmissionError(e);
  }

  // If all successful, return success
  return handleSubmissionSuccess();
};
