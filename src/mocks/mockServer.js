import { setupServer } from "msw/node";
import { getHotelsHandler } from './hotelsMockhandlers'
// for node/test environments
const server = setupServer(getHotelsHandler)

export default server;
