import { render, screen, cleanup } from "@testing-library/react";
import HotelCard from "./HoteCard";

describe("Component: HotelCard", () => {
  beforeEach(() => {
    const hotel = {
      id: "cxd650nuyo",
      property: {
        propertyId: "P107801",
        title: "Test-1",
        address: ["7-11 Talavera Rd", "North Ryde"],
        previewImage: {
          url: "https://unsplash.it/145/125/?random",
          caption: "Image of Courtyard by Marriott Sydney-North Ryde",
          imageType: "PRIMARY",
        },
        rating: {
          ratingValue: 3.5,
          ratingType: "self",
        },
      },
      offer: {
        promotion: {
          title: "Exclusive Deal",
          type: "MEMBER",
        },
        name: "Deluxe Balcony Room",
        displayPrice: {
          amount: 329.0,
          currency: "AUD",
        },
        savings: {
          amount: 30.0,
          currency: "AUD",
        },
        cancellationOption: {
          cancellationType: "FREE_CANCELLATION",
        },
      },
    };

    render(<HotelCard hotel={hotel} />);
  });

  afterAll(() => {
    cleanup();
  });
  test("it should render hotel price correclty", () => {
    expect(screen.getByText("329")).toBeInTheDocument();
  });

  test("it should render hotel title correclty", () => {
    expect(screen.getByText(/Test-1/i)).toBeInTheDocument();
  });
  
  test("it should render hotel savings correclty", () => {
    expect(screen.getByText("Save $30")).toBeInTheDocument();
  });

  test("it should render hotel address correclty", () => {
    expect(screen.getByText(/7-11 Talavera Rd, North Ryde/i)).toBeInTheDocument();
  });

  test("it should render hotel cancellation option correclty", () => {
    expect(screen.getByText(/Free cancellation/i)).toBeInTheDocument();
  });

  test('it should render offer correclty', () => {
    expect(screen.getByText(/Deluxe Balcony Room/i)).toBeInTheDocument();
  })
});
