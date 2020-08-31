import query from './query';

export const getBuses = async () => {
    const buses =  await query.get('/gpsPositions')
    .then(response => response.data.Vehicles)
    .catch((error) => {
        console.error(error);
        return [];
    }).then(res => res);
    return buses;
};

