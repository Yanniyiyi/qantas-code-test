import { rest } from "msw";
import data from "./data.json";

export const baseUrl =
  process.env.NODE_ENV != "production"
    ? "http://localhost:3000/api"
    : " https://6256a9b3e07d2c9a670a7e5c.mockapi.io/api";

export const getHotelsHandler = rest.get(
  `${baseUrl}/hotels`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }
);

export const getHotelError = rest.get(
  `${baseUrl}/hotels`,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: "something went wrong" }))
);
