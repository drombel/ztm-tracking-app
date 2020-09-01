export const setRoutes = ({ routes = [] }) => {
    return {
        type: 'ROUTES_SET',
        payload: { routes },
    };
};