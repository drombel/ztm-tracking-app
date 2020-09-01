import query from './query';
import axios from 'axios'

export const getBuses = async () => {
    const buses = await query.get('/gpsPositions')
        .then(response => response.data.Vehicles.filter(vehicle => vehicle.GPSQuality >= 2))
        .catch((error) => {
            console.error(error);
            return [];
        }).then(res => res);
    return buses;
};

export const getRoutes = async () => {
    const date = (new Date()).toISOString().split('T')[0];
    const routes = await axios.get('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/b15bb11c-7e06-4685-964e-3db7775f912f/download/trips.json')
        .then(response => response.data[date].trips)
        .catch((error) => {
            console.error(error);
            return [];
        }).then(res => res);
    return routes;
};
