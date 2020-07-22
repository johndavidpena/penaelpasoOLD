// export GOOGLE_APPLICATION_CREDENTIALS=/Users/johnpena/Documents/Code/penaelpaso-1588113112327-035c4ef8aaa5.json
'use strict'
const dialogflow = require('dialogflow');
const structjson = require('structjson');

// NOTE: For PRODUCTION
const projectId = process.env.GOOGLE_PROJECT_ID;
const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: JSON.parse(process.env.GOOGLE_PRIVATE_KEY)
};
const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });

// NOTE: For DEVELOPMENT
// FIX: Locally, all '/n' get turned into '//n' in private key, log sessionClient to see
// Below works if line 1 used first
// const sessionClient = new dialogflow.SessionsClient();

const sessionPath = sessionClient.sessionPath(process.env.GOOGLE_PROJECT_ID, process.env.DIALOGFLOW_SESSION_ID);

module.exports = {
  textQuery: async function (text, parameters = {}) {
    // let sessionPath = sessionClient.sessionPath(projectId, sessionId + userID);
    let self = module.exports;

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text,
          languageCode: process.env.DIALOGFLOW_LANGUAGE_CODE,
        },
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  eventQuery: async function (event, parameters = {}) {
    // let sessionPath = sessionClient.sessionPath(projectId, sessionId + userID);
    let self = module.exports;

    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          languageCode: process.env.DIALOGFLOW_LANGUAGE_CODE,
        },
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  handleAction: function (responses) {
    return responses;
  }
}
