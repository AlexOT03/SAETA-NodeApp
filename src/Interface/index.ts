export interface Route {
    id: number;
    agency: string;
    agency_logo: string;
    short_name: number;
    long_name: string;
    vehicle_type: string;
    vehicle_img: string;
    status: boolean;
    color: string;
    terminal_1: number;
    terminal_2: number;
    route_type:string;
    Going:Trip[];
    Return:Trip[]
  }
  
  export interface Stop {
    id: number;
    name: string;
    road: string;
    logo: string;
    is_terminal: boolean;
    altitude: number;
    latitude: number;
  }
  
  export interface Trip {
    id: number;
    address: string;
    stops: { stop: Stop }[];
  }
  
  export interface Data {
    routes: Route[];
  }
  