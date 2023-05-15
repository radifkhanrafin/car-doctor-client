import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    console.log(services)
    return (
        <div className='my-16'>
            <div className='w-full lg:w-[650px] mx-auto text-center space-y-4'>
                <h4 className='text-2xl font-bold text-orange-500'>Service</h4>
                <h1 className='text-6xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-16'>
            {
                services.map(service=> <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;