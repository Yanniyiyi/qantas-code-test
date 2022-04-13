import Select from "../Select/Select";

const SORT_OPTIONS = [
  {
    name: "Price low to high",
    value: "price low to high",
  },
  {
    name: "Price high to low",
    value: "price high to low ",
  },
];
const HotelList = ({ hotels }) => {
  const onSortByChangeHandler = () => {};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between">
        <p>
          <span className="font-medium">{hotels.length}</span>{" "}
          <span className="italic">hotels in</span>{" "}
          <span className="font-medium">Sydney</span>
        </p>
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
      {hotels.map((hotel) => {
        return <div>{hotel.id}</div>;
      })}
    </div>
  );
};

export default HotelList;
