import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from "use-supercluster";
import './map.scss';

function MapContainer(props) {
    const [selected, setSelected] = useState({ id: 0, hidden: false })
    const [markers, setMarkers] = useState([]);
    const idField = props.idField;
    const refresher = useRef(null);
    const mapMarker = props.mapMarker;
    const MapSidebarItem = props?.mapSidebarItem;
    const autoUpdate = props?.autoUpdate ?? false;
    const [menu, setMenu] = useState(false);

    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(10);

    const fetchData = async () => {
        let newMarkers = await props?.refreshFunc() ?? [];
        if (newMarkers.length === 0) {
            console.error('Fetched data from Tristar API is empty')
            return;
        }
        setMarkers(newMarkers);
    };

    useEffect(() => {
        fetchData();
        if (autoUpdate) refresher.current = setInterval(() => fetchData(), autoUpdate);
        // cleanup
        return () => clearTimeout(refresher.current)
    }, []);

    const Marker = ({ item, MapMarker }) => {
        const current = selected.id === item[idField] && !selected.hidden;
        item.current = current;
        const onClick = () => setSelected({ id: 0, hidden: true });
        item.closeFunction = onClick;
        return <MapMarker item={item} />
    };

    const Cluster = ({ lat, lng, supercluster, cluster, pointCount }) => {
        const onClick = () => {
            const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20);
            mapRef.current.setZoom(expansionZoom);
            mapRef.current.panTo({ lat, lng });
        };
        return (<div className='marker' onClick={onClick}>
            <div className="cluster">
                {pointCount}
            </div>
        </div>);
    };

    const onChildClick = (key, data) => {
        // just to check if it's not a supercluster which doesn't have assigned idField
        const supercluster = data.item?.[idField] ?? false;
        if (supercluster) {
            setSelected(({ id, hidden }) => {
                const newId = id === data.item[idField] ? 0 : data.item[idField];
                return { id: newId, hidden }
            });
        }
        if (selected.hidden)
            setSelected({ id: 0, hidden: false })
    };

    const onClick = e => setSelected({ id: 0, hidden: false });

    const onGoogleApiLoaded = ({ map }) => {
        map.setClickableIcons(false);
        mapRef.current = map;
    };

    const Clusters = () => {
        const points = markers.map(marker => ({
            type: "Cluster",
            properties: { item: { ...marker }, cluster: false },
            geometry: { type: "Point", coordinates: [parseFloat(marker.Lon), parseFloat(marker.Lat)] }
        }));

        const { clusters, supercluster } = useSupercluster({ points, bounds, zoom, options: { radius: 25, maxZoom: 20 } });

        const newClusters = clusters.map((cluster, key) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } = cluster.properties;

            return isCluster ?
                (<Cluster key={key} lat={latitude} lng={longitude} supercluster={supercluster} cluster={cluster} pointCount={pointCount} />) :
                (<Marker key={key} lat={latitude} lng={longitude} item={cluster.properties.item} MapMarker={mapMarker} />);
        });

        return newClusters;
    };

    const onClickMenu = () => setMenu(v => !v);

    return (
        <div className='map'>
            {MapSidebarItem &&
                <div className={`map__sidebar${menu ? ' active' : ''}`}>
                    <div className='map__sidebar-container'>
                        {markers.map((item, key) => {
                            const current = item[idField] === selected.id;
                            const onClick = () => {
                                setSelected({ id: item[idField], hidden: false })
                                mapRef.current.setZoom(16);
                                mapRef.current.panTo({ lat: item.Lat, lng: item.Lon });
                            };
                            return (
                                <div className={`map__sidebar-item${current ? ' active' : ''}`} key={key} onClick={onClick}>
                                    <MapSidebarItem item={item} />
                                </div>
                            );
                        })}
                        <div className='menu-button' onClick={onClickMenu}><span></span></div>
                    </div>
                </div>
            }
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                onChildClick={onChildClick}
                onClick={onClick}
                yesIWantToUseGoogleMapApiInternals={true}
                shouldUnregisterMapOnUnmount={true}
                onGoogleApiLoaded={onGoogleApiLoaded}
                onChange={({ zoom, bounds }) => {
                    setZoom(zoom);
                    setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
                }}
            >
                {Clusters().map(item => item)}
            </GoogleMapReact>
        </div>
    );
};

export default MapContainer;