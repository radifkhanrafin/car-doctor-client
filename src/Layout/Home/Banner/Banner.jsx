import React from 'react';
import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
import image5 from "../../../assets/images/banner/5.jpg";
import image6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img  src={image1} className="w-full h-[600px]" />
                    <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                        <div className='text-white space-y-7 lg:w-[400px] ml-12'>
                            <h1 className='text-6xl font-extrabold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-warning mr-5'> Discover More</button>
                            <button className='btn btn-outline btn-secondary'> Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle"> ❮ </a>
                        <a href="#slide2" className="btn btn-circle"> ❯ </a>
                    </div>
                    
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full h-[600px]" />
                    <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                        <div className='text-white space-y-7 lg:w-[400px] ml-12'>
                            <h1 className='text-6xl font-extrabold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-warning mr-5'> Discover More</button>
                            <button className='btn btn-outline btn-secondary'> Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full h-[600px]" />
                    <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                        <div className='text-white space-y-7 lg:w-[400px] ml-12'>
                            <h1 className='text-6xl font-extrabold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-warning mr-5'> Discover More</button>
                            <button className='btn btn-outline btn-secondary'> Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full h-[600px]" />
                    <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                        <div className='text-white space-y-7 lg:w-[400px] ml-12'>
                            <h1 className='text-6xl font-extrabold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-warning mr-5'> Discover More</button>
                            <button className='btn btn-outline btn-secondary'> Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;