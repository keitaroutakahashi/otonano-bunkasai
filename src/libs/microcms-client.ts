import { createClient } from "microcms-js-sdk";

export const microCmsClient = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICRO_CMS_API_KEY as string,
});
