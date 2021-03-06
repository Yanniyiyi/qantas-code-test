import { useState, useMemo } from "react";
import Select from "../Select/Select";
import { get } from "lodash";
import HotelCard from "../HotelCard/HoteCard";

const SORT_OPTIONS = [
  {
    name: "Price low to high",
    value: "ascending-offer.displayPrice.amount",
  },
  {
    name: "Price high to low",
    value: "descending-offer.displayPrice.amount",
  },
];
const HotelList = ({ hotels }) => {
  const [sortConfig, setSortConfig] = useState(SORT_OPTIONS[0].value);

  const onSortByChangeHandler = (e) => {
    setSortConfig(e.target.value);
  };

  const sortedHotels = useMemo(() => {
    const [order, key] = sortConfig.split("-");
    const sortedHotels = [...hotels].sort((a, b) => {
      return order === "ascending"
        ? get(a, key) - get(b, key)
        : get(b, key) - get(a, key);
    });
    return sortedHotels;
  }, [hotels, sortConfig]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between">
        {sortedHotels.length > 0 && (
          <p>
            <span className="font-medium">{sortedHotels.length}</span>{" "}
            <span className="italic">hotels in</span>{" "}
            <span className="font-medium">Sydney</span>
          </p>
        )}
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 text-right">
            <Select
              label="Sort By"
              options={SORT_OPTIONS}
              onChange={onSortByChangeHandler}
            />
          </div>
        </div>
      </div>
      {sortedHotels.map((hotel) => {
        return <HotelCard hotel={hotel} key={hotel.id} />;
      })}
    </div>
  );
};

export default HotelList;
