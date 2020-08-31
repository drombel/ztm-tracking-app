import React from 'react';
import { getBuses } from './../../../utils/apis';
import Map from './../../map';

export default function Buses(props) {
    const coords = { lat: 54.385561, lng: 18.600739 };

    const template = ({ item }) => {
        return (
            <div className={`marker ${item.current ? 'info' : 'dot'}`}>
                {!item.current && item.Line}
                {item.current &&
                    <table className="table-responsive table-striped table-hover">
                        <thead className='w-100 d-table'>
                            <tr>
                                <td colSpan={2} onClick={item.closeFunction}>Hide</td>
                            </tr>
                        </thead>
                        <tbody className='w-100 d-table'>
                            <tr>
                                {item.Line && (<><td className='p-1'>Line</td><td className='border-left p-1 font-weight-bold'>{item.Line}</td></>)}
                            </tr>
                            <tr>
                                {item.Delay !== 0 && (<><td className='p-1'>{item.Delay > 0 ? 'Delay' : 'Before time'}</td><td className='border-left p-1 font-weight-bold'>{Math.abs(item.Delay)} s</td></>)}
                            </tr>
                            <tr>
                                {item.VehicleCode && (<><td className='p-1'>Vehicle code</td><td className='border-left p-1 font-weight-bold'>{item.VehicleCode}</td></>)}
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        );
    };

    return (
        <>
            {/* {data?.map?.((item, key) => (<div key={key}>{item.Line}, {item.VehicleId}, {item.Speed}, {item.Delay} Lat: {item.Lat}, Long: {item.Lon}</div>))} */}
            <div className='vh-100'>
                <Map center={coords} zoom={12} refreshFunc={getBuses} idField={'VehicleId'} autoUpdate={5000} template={template}/>
            </div>
        </>
    );
};

