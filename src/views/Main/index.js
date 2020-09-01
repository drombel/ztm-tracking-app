import React from 'react';

export default function () {
    return (
        <div className='p-4'>
            <pre className='text-wrap text-break'>
                <h2>ZTM Tracker</h2>
                <p>
                    Application represents ZTM data based on their API which can be found <a href='https://ckan.multimediagdansk.pl/dataset/tristar' rel="noopener noreferrer" target='_blank' className='font-weight-normal'>here</a>.
                </p>
                <p>
                    For this moment You can see current position of the vehicles like buses and trams around Gdańsk area. Each vehicle shows delay and unique vehicle code.
                </p>
                {/* <p>
                    API currently allows only to view positions of the buses. I wrote them a email and still waiting for answer. After they fix CORS error I will develop bus and tram stops, show destination point of the vehicles and maybe something else.
                </p> */}
                {/* TODO */}
            </pre>
        </div>
    );
};