/// <reference types="vite/client" />
declare global {
  interface Place {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  }

  //JSON response type
  export interface Feature {
    type: string;
    properties: Properties;
    bbox: number[];
    geometry: Geometry;
  }

  export interface Properties {
    place_id: number;
    osm_type: string;
    osm_id: number;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    address: Address;
  }

  export interface Address {
    municipality?: string;
    county?: string;
    state_district?: string;
    state: string;
    ISO3166_2_lvl4: string;
    region: string;
    country: string;
    country_code: string;
  }

  export interface Geometry {
    type: string;
    coordinates: number[];
  }
}

export {};
