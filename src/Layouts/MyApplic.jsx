import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyApplic = () => {

    const myApp = useLoaderData()
    const [applies, setApplies] = useState(myApp)

    // console.log(applies)

    // -----------------------removing data---------------------
    const handleRemove = (id) => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/apply/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = myApp.filter(visa => visa._id !== id)
                                setApplies(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Application has been deleted.",
                                    icon: "success"
                                });
                            }
                        });
                }
            })
    }

    return (
        <div>
            {/* ----------TITLE TEXT-------------- */}
            <div
                className='text-center bg-[#87A922] rounded-b-full md:mx-20'>
                <h1 className='text-3xl md:text-6xl font-bold py-5'>
                    My Applies
                </h1>

                <h2 className="text-xl font-serif italic text-center my-3 font-semibold">Total Applies : {applies.length}</h2>

                <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                    Here are all the visas that you are applied for . Chose your application to delete or update the visa information as needed.
                </p>
            </div>

            {/* --------------------------all visa--------------------- */}
            <div className=" mx-10 md:mx-10 my-10">

                {applies.map(visa =>
                    <Slide>
                        <div className=" shadow-md my-4  mx-2 border rounded-md p-2"
                            style={{ backgroundImage: `url(${visa.visaInfo.countryImage})` }}
                            key={visa._id}>

                            <div className='bg-[#feffbdc2] py-4 md:py-8 '>
                                <div className='md:flex items-center justify-between gap-4  px-2 md:px-20'>

                                    <div className="md:w-1/3 h-[200px]  my-3 md:my-0 md:h-[250px]">
                                        <img src={visa.visaInfo.countryImage}
                                            className="w-full h-full object-cover rounded-xl shadow-xl border border-black mx-auto" />
                                    </div>

                                    <div className='md:flex items-center gap-5 justify-evenly'>
                                        <div >
                                            {/* ----------------------text-------------------------- */}
                                            <div className='md:py-5 pl-5'>

                                                <p className='bg-white text-2xl font-black font-serif italic rounded-full mb-2 w-full text-center'> {visa.visaInfo.countryName}</p>

                                                <h1 className=" font-bold">Visa Type : {visa.visaInfo.visaType}</h1>

                                                <p className="  ">
                                                    Visa Fee: {visa.visaInfo.fee ? visa.visaInfo.fee : 300} $
                                                </p>

                                                <p className=" ">
                                                    Visa Application Method: {visa.visaInfo.applicationMethod}
                                                </p>

                                                <p className="  ">
                                                    Visa Processing Time: {visa.visaInfo.processingTime}
                                                </p>

                                                <p className=" ">
                                                    Visa Validity: {visa.visaInfo.validity ? visa.visaInfo.validity : "5 years"}
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-white rounded-xl shadow-md px-5 py-2 my-4 md:my-0'>
                                        <h1 className='text-lg'>Applied by: <br /> <span className='md:text-3xl  text-xl font-bold font-serif'> {visa.name}</span></h1><hr />

                                        <h1 className='md:text-lg'>Applied on: <br /> <span className='md:text-2xl font-semibold'> {visa.applyDate}</span></h1><hr />

                                        <h1 className='md:text-lg'>Email: <br /> <span className='md:text-2xl font-semibold'> {visa.email}</span></h1><hr />

                                        {/* --------------buttons---------------------- */}
                                        <div className="flex justify-center my-5 gap-5">
                                            {/* -----delete */}
                                            <button onClick={() => handleRemove(visa._id)} className="btn btn-outline btn-sm md:btn-md">
                                                Cancel Visa Application
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div></Slide>)}
            </div>

        </div>
    );
};

export default MyApplic;