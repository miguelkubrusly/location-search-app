import { useState } from "react";
import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";

export default function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className=" col-span-3 p-2">
        <LocationSearch onLocationClick={(place) => setPlace(place)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}
