import { Data } from '../Interface';

export const data: Data = {
  routes: [
    {
    id: 0,
    agency: "(operador responsable de la ruta)",
    agency_logo: "(url/image-field)",
    short_name: "(numero de la ruta)", 
    long_name: "(identificador de la ruta/nombre de ruta)",
    vehicle_type: "(combi/camion/minibus)",
    vehicle_img: "(url/image-field)",
    status: "(Activo/Inactivo)",
    color: "(representativo de la ruta)"
  },
  

],
  trips: [
    {
      id: 0,
      sense: "(Entrante/Saliente)",
      address: "(a donde se dirige/direccion)",
      stops: [
        {
          stop: {
            id: 0,
            name: "(nombre de la parada)",
            road: "(calle por la que pasa)",
            logo: "(url/image-field)",
            is_terminal: true,
            type: "(subida/bajada/subida-bajada)",
            altitude: 1986594.45,
            latitude: 504202.795
          }
        }
      ]
    }
  ]
};
