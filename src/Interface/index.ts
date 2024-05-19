export interface Route {
    id: number;
    agency: string;
    agency_logo: string;
    short_name: string;
    long_name: string;
    vehicle_type: string;
    vehicle_img: string;
    status: string;
    color: string;
  }
  
  export interface Stop {
    id: number;
    name: string;
    road: string;
    logo: string;
    is_terminal: boolean;
    type: string;
    altitude: number;
    latitude: number;
  }
  
  export interface Trip {
    id: number;
    sense: string;
    address: string;
    stops: { stop: Stop }[];
  }
  
  export interface Data {
    routes: Route[];
    trips: Trip[];
  }
  