import React, { useState } from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { Link, useLoaderData } from 'react-router-dom';
import nodata from "../assets/nodatas.png"

const AllVisa = () => {

    const VisaData = useLoaderData()
    const [AllVisa, setAllVisa] = useState(VisaData)

    const HandleFilter = (e) => {
        const Value = e.target.value
        // console.log(Value)
        const Filtered = VisaData.filter(data => data.visaType == Value)
        // console.log(Filtered)
        if (Value && Value != "x") {
            setAllVisa(Filtered)
        }
        else {
            setAllVisa(VisaData)
        }
    }


    // { Filter ? setAllVisa(VisaData.filter(data => data.visaType == Filter)) : setAllVisa(VisaData) }

    const visaTypes = ["Tourist visa ", "Student visa ", "Official visa", "Free visa", "Medical visa"];


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

                <div className="pb-4 flex items-center justify-center">
                    <h1 className='mx-2 text-xl font-bold'>  Filter Visa: </h1>
                    <select name="visaType" onChange={HandleFilter} className="mt-1 bg-transparent border border-gray-300 shadow-md py-2 px-5">
                        <option value="x">Select a visa type to filter</option>
                        {visaTypes.map((type, i) => (<option key={i} value={type}>{type}</option>))} </select>
                </div>
            </div>


            {/* --------------------------all visa--------------------- */}
            {AllVisa.length == 0 ? <div>
                <h1 className='md:text-4xl text-2xl font-mono font-black text-center mt-10'>No Visa Available</h1>
                <img src={nodata} className='mx-auto' />
            </div> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 md:mx-10 my-10">
                    {
                        AllVisa.map(visa =>
                            <div key={visa._id}>

                                <div
                                    className=" shadow-md my-4 gap-5 mx-2 py-8 border rounded-md bg-[#FCDC2A]"
                                >
                                    <JackInTheBox>
                                        <div className="w-3/4 mx-auto h-[200px] md:h-[250px] lg:h-[150px]">
                                            <img src={visa.countryImage} className="w-full h-full object-cover rounded-xl shadow-xl border mx-auto border-black" />
                                        </div>
                                    </JackInTheBox>
                                    <JackInTheBox>
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
                                    </JackInTheBox>
                                </div>

                            </div>)
                    }

                </div>}
        </div>
    );
};

export default AllVisa;