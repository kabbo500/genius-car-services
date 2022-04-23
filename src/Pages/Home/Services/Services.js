import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/service`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
            <div className='row'>
                <h1 className='title-name mt-5'>Our services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;