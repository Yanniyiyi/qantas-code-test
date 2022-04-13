import { useMemo } from "react";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";
import PriceBox from "../PriceBox/PriceBox";
import Rating from "../Rating/Rating";

const CANCELLATION_TYPES = {
  FREE_CANCELLATION: "Free cancellation",
  NOT_REFUNDABLE: "",
};

const HotelCard = ({ hotel }) => {
  const { property, offer } = hotel;
  const { previewImage, address, rating } = property;
  const addressStr = address.join(", ");
  const cancellationType = useMemo(() => {
    const {
      cancellationOption: { cancellationType },
    } = hotel.offer;
    return CANCELLATION_TYPES[cancellationType];
  }, [hotel]);
  return (
    <div className="max-w-7xl my-6" data-testid="hotel-card">
      <div className="flex flex-col md:flex-row w-full bg-white overflow-hidden pr-2">
        <div className="md:w-48 md:h-48 md:mr-4">
          <ImageWithLoader
            src={previewImage.url}
            alt={previewImage.caption}
            classes="object-cover w-full h-48"
          />
        </div>
        <div className="border-t-2 border-b-2 w-full flex justify-between">
          <div className="p-2 flex flex-col justify-between">
            <div className="mt-2 mb-4">
              <div className="flex flex-col md:flex-row items-center">
                <h3 className="mb-2 md:mb-0 mr-2 text-lg leading-tight font-medium text-black hover:underline">
                  {property.title}
                </h3>
                <Rating
                  score={rating.ratingValue}
                  ratingType={rating.ratingType}
                />
              </div>
              <span className="text-gray-400 text-sm">{addressStr}</span>
            </div>
            <div className="mb-4 text-red-400 underline">{offer.name}</div>
            <div className="text-gray-400 text-sm">{cancellationType}</div>
          </div>
          <PriceBox
            price={offer.displayPrice.amount}
            currency={offer.displayPrice.currency}
            saving={offer.savings?.amount}
          ></PriceBox>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
