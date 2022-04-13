import { rest } from "msw";
import data from "./data.json";
export const getHotelsHandler = rest.get(
  "http://localhost:3000/api/hotels",
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }
);

export const getHotelError = rest.get(
  "http://localhost:3000/api/hotels",
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: "something went wrong" }))
);

