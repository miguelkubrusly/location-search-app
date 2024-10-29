export interface LocationSearchResponse {
  type: string;
  licence: string;
  features: Feature[];
}

export const searchPlaces = async (searchTerm: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=geojson&limit=5&addressdetails=1&layer=address`
  );
  const data: LocationSearchResponse = await res.json();
  const places = data.features.map((place: Feature) => {
    return {
      id: place.properties.place_id,
      name: place.properties.display_name,
      latitude: place.geometry.coordinates[1],
      longitude: place.geometry.coordinates[0],
    } as Place;
  });
  return places as Place[];
};
