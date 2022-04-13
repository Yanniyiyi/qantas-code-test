import { setupWorker } from "msw";
import { getHotelsHandler } from "./hotelsMockhandlers";
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(getHotelsHandler);
