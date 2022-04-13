import { render, screen, fireEvent } from "@testing-library/react";
import HotelList from "./HotelList";

describe("Component: HotelList", () => {
  const hotels = [
    {
      id: "cxd650nuyo",
      property: {
        propertyId: "P107801",
        title: "Lower Price",
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
          amount: 300.0,
          currency: "AUD",
        },
        savings: {
          amount: 30.0,
          currency: "AUD",
        },
        cancellationOption: {
          cancellationType: "NOT_REFUNDABLE",
        },
      },
    },
    {
      id: "cxd650nuy1",
      property: {
        propertyId: "P107801",
        title: "Higher price",
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
          cancellationType: "NOT_REFUNDABLE",
        },
      },
    },
  ];

  test("it should render hotel cards correclty", () => {
    const { rerender } = render(<HotelList hotels={hotels} />);
    expect(screen.getByText(/Lower price/i)).toBeInTheDocument();
    expect(screen.getByText(/Higher price/i)).toBeInTheDocument();
  });

  test("it should sort hotels correctly", () => {
    render(<HotelList hotels={hotels} />);

    fireEvent.change(screen.getByTestId('select'), {target: {value: 'descending-offer.displayPrice.amount'}});
    let hotelCards = screen.getAllByTestId('hotel-card');
    expect(hotelCards[0]).toHaveTextContent(/Higher price/i);
    expect(hotelCards[1]).toHaveTextContent(/lower price/i);

    fireEvent.change(screen.getByTestId('select'), {target: {value: 'ascending-offer.displayPrice.amount'}});
    hotelCards = screen.getAllByTestId('hotel-card');
    expect(hotelCards[0]).toHaveTextContent(/lower price/i);
    expect(hotelCards[1]).toHaveTextContent(/Higher price/i);
  });
});
