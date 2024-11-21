require('dotenv').config({ path: '.env' });

const projectName = process.env.PROJECT_NAME;
const tenantUrl = process.env.TENANT_URL;
const appId = process.env.APP_ID;
const sheetId = process.env.SHEET_ID;
const sheetId2 = process.env.SHEET_ID_2;
const objectId = process.env.OBJECT_ID;
const objectId2 = process.env.OBJECT_ID_2;
const objectId3 = process.env.OBJECT_ID_3;
const objectId4 = process.env.OBJECT_ID_4;
const objectId5 = process.env.OBJECT_ID_5;
const fieldID = process.env.FIELD_ID;
const webIntegrationId = process.env.WEB_INTEGRATION_ID;
const oauthClientId = process.env.OAUTH_CLIENT_ID;
const assistantId = process.env.ASSISTANT_ID;
const redirectUri = process.env.REDIRECT_URI;

module.exports = {
  plugins: {
    "posthtml-modules": {
      "root": "src",
      "input": "*.html",
      "output": "dist"
    },
    "posthtml-expressions": {
      locals: {
        "PROJECT_NAME": () => {
          return projectName;
        },
        "TENANT_URL": () => {
          return tenantUrl;
        },
        "APP_ID": () => {
          return appId;
        },
        "SHEET_ID": () => {
          return sheetId;
        },
        "SHEET_ID_2": () => {
          return sheetId2;
        },      
        "OBJECT_ID": () => {
          return objectId;
        },
        "OBJECT_ID_2": () => {
          return objectId2;
        },     
        "OBJECT_ID_3": () => {
          return objectId3;
        },    
        "OBJECT_ID_4": () => {
          return objectId4;
        },      
        "OBJECT_ID_5": () => {
          return objectId5;
        },                
        "FIELD_ID": () => {
          return fieldID;
        },                           
        "WEB_INTEGRATION_ID": () => {
          return webIntegrationId;
        },
        "OAUTH_CLIENT_ID": () => {
          return oauthClientId;
        },
        "ASSISTANT_ID": () => {
          return assistantId;
        },
        "REDIRECT_URI": () => {
          return redirectUri;
        }
      }
    }
  }
};
