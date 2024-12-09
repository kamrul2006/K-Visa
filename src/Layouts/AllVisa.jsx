import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllVisa = () => {

    const VisaData = useLoaderData()
    const [AllVisa, setAllVisa] = useState(VisaData)

    return (
        <div>
            {/* ----------TITLE TEXT-------------- */}
            <div
                className='text-center bg-[#87A922] rounded-b-full md:mx-20'>
                <h1 className='text-3xl md:text-6xl font-bold py-5'>
                    Available All Visas
                </h1>

                <h2 className="text-xl font-serif italic text-center my-3 font-semibold">Total Available Visa: {AllVisa.length}</h2>

                <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                    Here are all the visa Available here . Chose your dream visa here. And visit your dream country.
                </p>
            </div>


            {/* --------------------------all visa--------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 md:mx-10 my-10">

                {AllVisa.map(visa =>
                    <div
                        className=" shadow-md my-4 gap-5 mx-2 py-8 border rounded-md bg-[#FCDC2A]"
                        key={visa._id}>

                        <div className="w-3/4 mx-auto h-[200px] md:h-[250px] lg:h-[150px]">
                            <img src={visa.countryImage} className="w-full h-full object-cover rounded-xl shadow-xl border mx-auto border-black" />
                        </div>

                        <div className="">

                            {/* ----------------------text-------------------------- */}
                            <div className='md:py-5 text-center'>

                                <p className='bg-white text-xl font-serif italic font-semibold mb-2 w-full'> {visa.countryName}</p>

                                <h1 className=" font-bold">Visa Type : {visa.visaType}</h1>

                                <p className=" py-3 ">
                                    Visa Fee: {visa.fee ? visa.fee : 300} $
                                </p>
                                <p className=" ">
                                    Visa Validity: {visa.validity ? visa.validity : "5 years"} 
                                </p>

                            </div>


                            {/* --------------buttons---------------------- */}
                            <div className="flex items-center bg-white py-2 justify-center gap-5">

                                {/* ---details */}
                                <Link to={`/allVisa/${visa._id}`}>
                                    <button className="btn btn-sm btn-outline">
                                        Details
                                    </button></Link>
                            </div>

                        </div>

                    </div>)}

            </div>
        </div>
    );
};

export default AllVisa;