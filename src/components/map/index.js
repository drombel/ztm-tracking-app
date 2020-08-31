import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from "use-supercluster";
import './map.scss';

function MapContainer(props) {
    const [selected, setSelected] = useState({ id: 0, hidden: false })
    const [markers, setMarkers] = useState([]);
    const idField = props.idField;
    const refresher = useRef(null);
    const template = props.template;
    const autoUpdate = props?.autoUpdate ?? false;

    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(10);

    const fetchData = async () => {
        const newMarkers = await props?.refreshFunc() ?? [];
        if (newMarkers.length === 0) {
            console.error('Fetched data from Tristar API is empty')
            return;
        }
        setMarkers(newMarkers);
    };

    useEffect(() => {
        fetchData();
        if(autoUpdate) refresher.current = setInterval(() => fetchData(), autoUpdate);
        // cleanup
        return () => clearTimeout(refresher.current)
    }, []);

    const Marker = ({ item, Template }) => {
        const current = selected.id === item[idField] && !selected.hidden;
        item.current = current;
        const onClick = () => setSelected({ id: 0, hidden: true });
        item.closeFunction = onClick;
        return <Template item={item} />
    };

    const Cluster = ({ lat, lng, supercluster, cluster, pointCount }) => {
        const onClick = () => {
            const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20);
            mapRef.current.setZoom(expansionZoom);
            mapRef.current.panTo({ lat, lng });
        };
        return (
            <div className='marker cluster'>
                <div className="cluster-marker" onClick={onClick}>
                    {pointCount}
                </div>
            </div>
        );
    };

    const onChildClick = (key, data) => {
        // just to check if it's not a supercluster which doesn't have assigned idField
        const supercluster = data?.supercluster ?? false;
        if (!supercluster) {
            setSelected(({ id, hidden }) => {
                const newId = id === data.item[idField] ? 0 : data.item[idField];
                return { id: newId, hidden }
            });
        }
        if (selected.hidden)
            setSelected({ id: 0, hidden: false })
    }

    const onClick = e => setSelected({ id: 0, hidden: false });
    const onGoogleApiLoaded = ({ map }) => {
        map.setClickableIcons(false);
        mapRef.current = map;
    };

    const Clusters = () => {
        const points = markers.map(marker => ({
            type: "Feature",
            properties: { item: { ...marker }, cluster: false },
            geometry: {
                type: "Point",
                coordinates: [parseFloat(marker.Lon), parseFloat(marker.Lat)]
            }
        }));

        const { clusters, supercluster } = useSupercluster({ points, bounds, zoom, options: { radius: 75, maxZoom: 20 } });

        const newClusters = clusters.map((cluster, key) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } = cluster.properties;

            return isCluster ? (<Cluster key={key} lat={latitude} lng={longitude} supercluster={supercluster} cluster={cluster} pointCount={pointCount} />) :
                (<Marker key={key} lat={latitude} lng={longitude} item={cluster.properties.item} Template={template} />);
        });

        return newClusters;
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBtEh6FMFwJA-0X7NNb8yDlQ1M7x-PJ8iU' }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                onChildClick={onChildClick}
                onClick={onClick}
                yesIWantToUseGoogleMapApiInternals={true}
                shouldUnregisterMapOnUnmount={true}
                onGoogleApiLoaded={onGoogleApiLoaded}
                onChange={({ zoom, bounds }) => {
                    setZoom(zoom);
                    setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat
                    ]);
                }}
            >
                {Clusters().map(item => item)}


                {/* {markers?.map?.((item, key) => <Marker lat={item.Lat} lng={item.Lon} item={item} key={key} Template={template} />)} */}
            </GoogleMapReact>
        </div>
    );
};

export default MapContainer;