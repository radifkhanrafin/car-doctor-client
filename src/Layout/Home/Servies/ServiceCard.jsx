import React from 'react';
import { FaBeer, FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, service_id, title, img, price, description } = service
    return (
        <div className="card card-compact w-96 bg-base-100 mb-5 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link>
                        <FaArrowAltCircleRight className='text-2xl' />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;