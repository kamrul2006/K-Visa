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
            className='text-center bg-yellow-500 rounded-full my-10 md:my-20'>
            <h1 className='text-2xl bg-white md:bg-transparent md:text-4xl font-bold md:pt-10 pt-5'>
                Some Of our recently added Visas
            </h1>
            <p className='md:pb-10 md:px-64 text-xs px-24 pt-4 pb-6 md:text-lg'>
                Please fill out the form below to add a new visa entry. Include the country details, visa type, required documents, processing time, fees, and any additional information for accurate recordkeeping.
            </p>

            <div className="mx-auto mb-5">
                <Link to={"/allVisa"}>
                    <button className='btn btn-outline btn-sm md:btn-md'>
                        View All Visas
                    </button>
                </Link>
            </div>


            <Marquee speed={150} className="space-x-5 bg-yellow-500 py-4">

                {visas.slice(Math.max(visas.length - 6, 0)).map(visa => <div
                    key={visa._id}
                    className="bg-green-200 p-2 mx-5 rounded-lg shadow-lg"
                    style={{ backgroundImage: `url(${visa.countryImage})` }}>

                    <div className=" shadow-md flex md:items-center gap-5  px-5 py-3 border rounded-md  md:h-[250px] bg-[#ffffffad]">

                        <div className="md:w-[200px] w-[100px] h-[100px] md:h-[200px]">
                            <img src={visa.countryImage} className="w-full h-full rounded-full object-cover shadow-xl" />
                        </div>

                        <div className=" w-[150px] md:w-[300px] text-center">

                            {/* ----------------------text-------------------------- */}
                            <div>
                                <h1 className="text-xl md:text-3xl font-bold">{visa.countryName}</h1>

                                <p className=" text-sm text-center md:text-xl font-bold">
                                    Visa Fee:  {visa.fee} $
                                </p>

                                <p className="text-sm text-center md:text-xl font-bold">
                                    Visa validity:  {visa.validity}
                                </p>

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