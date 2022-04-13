import { render, screen } from "@testing-library/react";
import App from "./App";
import { getHotelError } from "./mocks/hotelsMockhandlers";
import server from "./mocks/mockServer";
describe("Component: App", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should render hotels", async () => {
    render(<App />);
    const hotelCards = await screen.findAllByTestId(/hotel-card/i);
    expect(hotelCards).toHaveLength(5);
  });

  test("should render error", async () => {
    server.use(
      getHotelError
    );
    render(<App />);
    const errorMessage = await screen.findByText(/something went wrong/i);
    expect(errorMessage).toBeInTheDocument();

    const hotelCards = screen.queryAllByTestId(/hotel-card/i);
    expect(hotelCards).toEqual([]);
  });
});
