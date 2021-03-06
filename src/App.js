import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/qantas-logo.png";
import { getHotels } from "./api/HotelAPI";
import HotelList from "./components/HotelList/HotelList";

function App() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getHotels();
        setHotels(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchHotels();
  }, []);
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-6">
          <a href="https://www.qantas.com/">
            <img className="h-8 w-auto sm:h-10" src={logo} alt="qantas logo" />
          </a>
        </div>
      </div>
      {!loading && error &&  <p>Sorry, something went wrong</p>}
      {!loading && !error &&   <HotelList hotels={hotels} />}
    </div>
  );
}

export default App;
