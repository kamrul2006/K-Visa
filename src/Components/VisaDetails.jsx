import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const VisaDetails = () => {

    const visa = useLoaderData()

    return (
        <div>
            {/* ----------TITLE TEXT-------------- */}
            <div
                className='text-center bg-[#87A922] rounded-b-full md:mx-20'>
                <h1 className='text-2xl md:text-4xl font-bold py-5'>
                    Visa Details of {visa.countryName} (<span className='text-2xl md:text-3xl italic font-serif'>{visa.visaType}</span>)
                </h1>

                <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                    Here are all the visa details . Chose your dream visa here. And visit your dream country.
                </p>

                <button className='btn btn-sm md:btn-md btn-outline btn-primary md:text-xl font-serif italic mb-5'>
                    Apply For The Visa Now
                </button>
            </div>


            {/* --------------------------all visa--------------------- */}
            <div className=" mx-10 md:mx-44 my-10">
                <div className=" shadow-md my-4 flex flex-col items-center gap-5  border rounded-md bg-[#68f8d4]" >

                    <div className="w-full h-[200px] md:h-[450px]">
                        <img src={visa.countryImage} className="w-full h-full object-cover shadow-xl border border-black" />
                    </div>

                    <div className=" flex flex-col justify-between items-center gap-4">

                        {/* ----------------------text-------------------------- */}
                        <div className='px-4 md:h-[320px] md:px-10 md:py-5 bg-base-100'>
                            <p className="my-2 bg-white text-center py-1 rounded-full text-yellow-950 text-lg font-serif italic font-semibold ">Country : {visa.countryName} </p>

                            <h1 className="text-xl font-bold">Visa Type : {visa.visaType}</h1>

                            <p className="text-justify py-3 ">
                                {visa.description}
                            </p>

                        </div>


                        {/* --------------buttons---------------------- */}
                        <div className="flex justify-center pb-3 gap-5">

                            {/*-----update */}
                            <Link to={`/allVisa`}>
                                <button className="btn btn-sm md:btn-md btn-outline">
                                   Go Back
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default VisaDetails;