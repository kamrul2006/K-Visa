import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Modal } from '../Components/Modal';
import { createPortal } from "react-dom";

const MyAdded = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const myVisa = data.filter(data => data.addedBy == user.email);
    const [AllVisa, setAllVisa] = useState(myVisa)

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
                    fetch(`http://localhost:5000/visas/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = myVisa.filter(visa => visa._id !== id)
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

    //-------------------------data for modal-------------------
    const [modal, setModal] = useState([])

    const ModalData = (e) => {
        fetch(`http://localhost:5000/visas/${e}`)
            .then(res => res.json())
            .then(data => setModal(data))
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleButtonClick = (value) => {
        setModalOpen(false);
        setMessage(value);
    };




    return (
        <div>
            {/* ----------TITLE TEXT-------------- */}
            <div
                className='text-center bg-[#87A922] rounded-b-full md:mx-20'>
                <h1 className='text-3xl md:text-6xl font-bold py-5'>
                    My Added Visas
                </h1>

                <h2 className="text-xl font-serif italic text-center my-3 font-semibold">Total Visa: {AllVisa.length}</h2>

                <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                    Here are all the visas that you added . Chose your dream to delete or update the visa information as needed.
                </p>
            </div>


            {/* --------------------------all visa--------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-10 my-10">

                {AllVisa.map(visa =>
                    <div
                        className=" shadow-md my-4  mx-2 border rounded-md p-2"
                        style={{ backgroundImage: `url(${visa.countryImage})` }}
                        key={visa._id}>

                        <div className='bg-[#feffbdc2] py-8'>
                            <div className="w-3/4 h-[200px] lg:h-[200px] md:h-[250px] mx-auto">

                                <img src={visa.countryImage}
                                    className="w-full h-full object-cover rounded-xl shadow-xl border border-black mx-auto" />
                            </div>

                            <div >
                                {/* ----------------------text-------------------------- */}
                                <div className='md:py-5 text-center'>

                                    <p className='bg-white text-2xl font-black font-serif italic rounded-full mb-2 w-full'> {visa.countryName}</p>

                                    <h1 className=" font-bold">Visa Type : {visa.visaType}</h1>

                                    <p className=" py-3 ">
                                        Visa Fee: {visa.fee ? visa.fee : 300} $
                                    </p>

                                    <p className=" ">
                                        Visa Application Method: {visa.applicationMethod}
                                    </p>

                                    <p className=" py-3 ">
                                        Visa Processing Time: {visa.processingTime}
                                    </p>

                                    <p className=" ">
                                        Visa Validity: {visa.validity ? visa.validity : "5 years"}
                                    </p>

                                </div>


                                {/* --------------buttons---------------------- */}
                                <div className="flex justify-center gap-5">

                                    {/*-----update */}

                                    <button onClick={() => {
                                        ModalData(visa._id)
                                        setModalOpen(true)
                                    }} className="btn btn-circle btn-outline p-1">
                                        <img src="https://img.icons8.com/pulsar-gradient/50/edit.png" className="w-7" />
                                    </button>


                                    {/* -----delete */}
                                    <button onClick={() => handleRemove(visa._id)} className="btn btn-circle mx-2 md:mx-0 btn-outline p-1">
                                        <img className="w-7" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever" />
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* <div className="App">
                            {message}
                            <button className="btn btn-open" onClick={() => setModalOpen(true)}>
                                Open
                            </button> */}

                        {modalOpen &&
                            createPortal(
                                <Modal
                                    modal={modal}
                                    closeModal={handleButtonClick}
                                    onSubmit={handleButtonClick}
                                    onCancel={handleButtonClick}
                                >
                                </Modal>,
                                document.body
                            )}
                        {/* </div> */}


                    </div>)}
            </div>
        </div>
    );
};

export default MyAdded;