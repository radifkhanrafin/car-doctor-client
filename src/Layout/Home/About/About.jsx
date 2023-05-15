import React from 'react';
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className='relative w-full lg:w-1/2'>
                    <img src={person} className="w-3/4 h-96 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 h-60 border-8 border-white absolute left-1/2 top-1/2 rounded-lg shadow-2xl" />
                </div>

                <div className=' w-full lg:w-1/2 space-y-4'>
                    <h1 className="text-2xl font-bold text-red-600">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-">Get More INfo</button>
                </div>
            </div>
        </div>
    );
};

export default About;