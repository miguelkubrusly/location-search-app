import { Fragment, useState } from "react";
import { searchPlaces } from "../api/searchPlaces";
import { Dispatch, SetStateAction } from "react";

interface LocationSearchProps {
  onLocationClick: (place: Place) => void;
}

export default function LocationSearch({
  onLocationClick,
}: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlaces(await searchPlaces(term));
    setTerm("");
  };

  const renderedPlaces = places.map((place: Place) => {
    return (
      <Fragment key={place.id}>
        <p className="text-sm">{place.name}</p>
        <button
          onClick={() => onLocationClick(place)}
          className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
        >
          Go
        </button>
        <div className="border-b w-full col-span-2" />
      </Fragment>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term" className="font-bold">
          Search
        </label>
        <input
          id="term"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
        />
      </form>
      <h1 className="font-bold mt-6">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {renderedPlaces}
      </div>
    </div>
  );
}
