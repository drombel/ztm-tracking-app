const initial_state = [];

const routesReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ROUTES_SET":
            const routes = action.payload.routes.map(item => {
                item.title = item.tripHeadsign.replace(/\(\d+\)/g, '');
                // console.log(item);
                return item;
            })
            return routes;
        default:
            return state;
    }
};

export default routesReducer;