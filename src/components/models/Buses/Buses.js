import React, { useEffect, useCallback } from 'react';
import { getBuses, getRoutes } from './../../../utils/apis';
import Map from './../../map';
import { useSelector, useDispatch } from 'react-redux';
import { setRoutes } from './../../../actions/routes';

function Buses(props) {
    const routes = useSelector(state => state.routes)
    const dispatch = useDispatch();

    const fetchRoutes = async () => dispatch(setRoutes({ routes: await getRoutes() }));

    useEffect(() => {
        if (routes.length === 0) fetchRoutes();
    }, [])

    const fetchBuses = useCallback(async () => {
        let buses = await getBuses();
        buses = buses.map(bus => {
            bus.RouteStop = routes.find(route => route.tripId === parseInt(bus.Route) && route.routeId === parseInt(bus.Line));
            bus.DelayTime = (new Date(Math.abs(bus.Delay) * 1000).toISOString().substr(11, 8)).replace(/00:/, '');
            return bus;
        });
        buses.sort((a, b) => a.Line.localeCompare(b.Line))
        return buses;
    }, [routes]);

    let coords = { lat: 54.385561, lng: 18.600739 };
    navigator.geolocation.getCurrentPosition(pos => {
        const crd = pos.coords;
        coords.lat = crd.latitude;
        coords.lng = crd.longitude;
    }, () => null, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });

    const map_marker = ({ item }) => {
        return (
            <div className={`marker`}>
                <div className="dot">{item.Line}</div>
                {item.current &&
                    <div className='info'>
                        <table className="table-responsive table-striped table-hover">
                            <thead className='w-100 d-table'>
                                <tr>
                                    <td colSpan={2} onClick={item.closeFunction}>Hide</td>
                                </tr>
                            </thead>
                            <tbody className='w-100 d-table'>
                                {item.Line && (<tr><td className='p-1'>Line</td><td className='border-left p-1 font-weight-bold'>{item.Line}</td></tr>)}
                                {item.Delay !== 0 && (<tr><td className='p-1'>{item.Delay > 0 ? 'Delay' : 'Before time'}</td><td className='border-left p-1 font-weight-bold'>{item.DelayTime}</td></tr>)}
                                {item.RouteStop && (<tr><td className='p-1'>Route</td><td className='border-left p-1 font-weight-bold'>{item.RouteStop.title}</td></tr>)}
                                {item.VehicleCode && (<tr><td className='p-1'>Vehicle code</td><td className='border-left p-1 font-weight-bold'>{item.VehicleCode}</td></tr>)}
                                {item.Speed > 0 && (<tr><td className='p-1'>Speed</td><td className='border-left p-1 font-weight-bold'>{item?.Speed} km/h</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    };

    const map_sidebar_item = ({ item }) => {
        return (
            <div className='row no-gutters'>
                <div className='col-2 col-sm-3 p-2 font-weight-bold d-flex align-items-center justify-content-center'>{item.Line}</div>
                <div className='col-10 col-sm-9 p-2 font-weight-bold border-left'>{item.RouteStop && item.RouteStop.title}</div>
            </div>
        );
    };

    return (
        <>
            {/* {data?.map?.((item, key) => (<div key={key}>{item.Line}, {item.VehicleId}, {item.Speed}, {item.Delay} Lat: {item.Lat}, Long: {item.Lon}</div>))} */}
            <div className='vh-100' >
                {routes.length > 0 && <Map center={coords} zoom={16} refreshFunc={fetchBuses} idField={'VehicleId'} autoUpdate={5000} mapMarker={map_marker} mapSidebarItem={map_sidebar_item} />}
            </div>
        </>
    );
};

export default Buses;