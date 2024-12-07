import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllVisa = () => {

    const VisaData = useLoaderData()
    const [AllVisa, setAllVisa] = useState(VisaData)

    // -----------------------removing data---------------------
    const handleRemove = (id) => {
        console.log(id)

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
                    fetch(`http://localhost:5000/visas/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = VisaData.filter(visa => visa._id !== id)
                                setAllVisa(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Visa has been deleted.",
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
                    Available All Visas
                </h1>

                <h2 className="text-xl font-serif italic text-center my-3 font-semibold">Total Available Visa: {AllVisa.length}</h2>

                <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                    Here are all the visa Available here . Chose your dream visa here. And visit your dream country.
                </p>
            </div>


            {/* --------------------------all visa--------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-20 my-10">
                {AllVisa.map(visa => <div className=" shadow-md my-4 flex flex-col items-center gap-5 mx-2 py-8 border rounded-md bg-[#FCDC2A]" key={visa._id}>

                    <div className="w-3/4 h-[200px] md:h-[250px]">
                        <img src={visa.countryImage} className="w-full h-full object-cover rounded-xl shadow-xl border border-black" />
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
                        <div className="flex gap-5">

                            {/*-----update */}
                            <Link to={`/updateVisa/${visa._id}`}>
                                <button className="btn btn-sm btn-circle">
                                    <img src="https://img.icons8.com/pulsar-gradient/50/edit.png" className="w-7" />
                                </button>
                            </Link>

                            {/* -----delete */}
                            <button onClick={() => handleRemove(visa._id)} className="btn btn-sm btn-circle mx-2 md:mx-0">
                                <img className="w-7" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever" />
                            </button>

                            {/* ---details */}
                            <Link to={`/allVisa/${visa._id}`}>
                                <button className="btn btn-sm btn-circle">
                                    <img className="w-7" src="https://img.icons8.com/avantgarde/50/about.png" alt="about" />
                                </button></Link>
                        </div>

                    </div>

                </div>)}

            </div>
        </div>
    );
};

export default AllVisa;