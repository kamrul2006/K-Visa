import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const SomeVisa = () => {

    const [visas, setVisas] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/visas')
            .then(res => res.json())
            .then(data => setVisas(data))
    }, [])


    return (


        <div
            className='text-center bg-success rounded-full my-10 md:my-20'>
            <h1 className='text-2xl  md:text-4xl font-bold md:pt-10 pt-5'>
                Some Of our recently added Visas
            </h1>
            <p className='md:pb-10 md:px-64 text-xs px-24 pt-4 pb-6 md:text-lg'>
                Please fill out the form below to add a new visa entry. Include the country details, visa type, required documents, processing time, fees, and any additional information for accurate recordkeeping.
            </p>

            <div className="mx-auto mb-5">
                <Link to={"/allVisa/"}>
                    <button className='btn btn-outline btn-sm md:btn-md'>
                        View All Visas
                    </button>
                </Link>
            </div>


            <Marquee speed={90} pauseOnHover={true} className="space-x-5 bg-success py-4">

                {visas.slice(Math.max(visas.length - 6, 0)).map(visa => <div
                    key={visa._id}
                    className="bg-green-200 p-2 mx-5 rounded-lg shadow-lg"
                    style={{ backgroundImage: `url(${visa.countryImage})` }}>

                    <div className=" shadow-md flex md:items-center gap-5  px-5 py-3 border rounded-md  md:h-[250px] bg-[#ffffffad]">

                        <div className="md:w-[160px] w-[100px] h-[100px] md:h-[160px] flex flex-col justify-between items-center gap-4">
                            <img src={visa.countryImage} className="w-3/4 h-3/4 rounded-full object-cover shadow-xl" />

                            <Link to={`/allVisa/${visa._id}`}>
                                <button className="btn-sm btn btn-outline">Details</button></Link>
                        </div>

                        <div className=" w-[150px] md:w-[300px] text-center">

                            {/* ----------------------text-------------------------- */}
                            <div>
                                <h1 className="text-xl md:text-3xl font-bold">{visa.countryName}</h1>

                                <div className='bg-white rounded-md py-2'>
                                    <p className=" text-sm text-center md:text-xl font-bold">
                                        Visa Fee:  {visa.fee} $
                                    </p>

                                    <p className="text-sm text-center md:text-xl font-bold">
                                        Visa validity:  {visa.validity}
                                    </p>

                                    <p className="text-sm text-center font-bold">
                                        Visa processing Time:  {visa.processingTime}
                                    </p>

                                    <p className="text-sm text-center font-bold">
                                        Visa application Method:  {visa.applicationMethod}
                                    </p>
                                </div>


                                <p className="my-2 bg-white text-center py-1 rounded-full text-yellow-950 md:text-lg text-sm font-serif italic font-semibold px-2">Visa Type: <br /> {visa.visaType}</p>
                            </div>

                        </div>

                    </div>
                </div>)

                }
            </Marquee >


        </div>
    );
};

export default SomeVisa;