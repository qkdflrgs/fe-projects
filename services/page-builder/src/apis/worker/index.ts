import { initFetchInstance } from "../insstance";

export const WORKER_BASE_PATH = "/api/views";
export const WORKER_BASE_URL = "https://litae-front.qkdflrgs.workers.dev/";

export const workerInstance = initFetchInstance({
  baseURL: WORKER_BASE_URL,
});
