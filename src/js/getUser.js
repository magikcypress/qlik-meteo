import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const tenantUrl = process.env.TENANT_URL;
const webIntegrationID = process.env.WEB_INTEGRATION_ID;

import { auth, users } from "@qlik/api";

(async () => {

  auth.setDefaultHostConfig({
    host: tenantUrl,
    webIntegrationId: webIntegrationID,
    crossSiteCookies: true
  });

  const username = await users.getMyUser(auth);
  const userName = username.data.name;
  document.getElementById('userName').textContent = userName;

})();


