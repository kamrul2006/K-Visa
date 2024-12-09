import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';


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
    const visaTypes = ["Tourist visa ", "Student visa ", "Official visa", "Free visa", "Medical visa"];

    const ModalData = (id) => {
        fetch(`http://localhost:5000/visas/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setModal(data)
            })
    }

    const [modalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
        setModalOpen(false);
    };

    //--------------------------handle update -----------------
    const HandleUpdateVisa = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const description = e.target.description.value
        const ageRestriction = e.target.ageRestriction.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value

        const VisaData = {
            countryImage: formData.get("countryImage "),
            countryName: formData.get("countryName "),
            visaType: formData.get("visaType "),
            processingTime: formData.get("processingTime "),
            description,
            ageRestriction,
            fee,
            validity,
            applicationMethod: formData.get("applicationMethod "),
        };


        console.log(VisaData)

        //----------------sending data to server---------------
        fetch(`http://localhost:5000/visas/${modal._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(VisaData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'Visa Updated Properly.',
                        icon: 'success',
                        confirmButtonText: "It's Great"
                    })
                }
                handleButtonClick()
            })
    }




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



                        {modalOpen && <div
                            className="top-0 left-0 fixed w-full h-full flex items-center justify-center bg-[#0541058a] "
                        >
                            <div className="rounded  p-2 bg-white w-[30em]">

                                {/* <div className="mb-3">{children}</div> */}
                                <div className="mb-3 h-[530px] px-4 py-2">

                                    <div className='bg-green-600 rounded-full py-1 mb-5'>
                                        <h2 className='text-xl md:text-2xl font-bold my-2 text-center text-white '>Update visa information.</h2>
                                    </div>

                                    <form onSubmit={HandleUpdateVisa}>
                                        {/* <form > */}
                                        <div className="  ">
                                            <label className="block text-sm font-medium text-gray-700 "> Country Image (URL) </label>
                                            <input type="text "
                                                name="countryImage "
                                                defaultValue={modal.countryImage}
                                                className="  block w-full border border-gray-300 rounded-md  shadow-md     p-2 " required />
                                        </div>

                                        <div className="  ">
                                            <label className="block text-sm font-medium text-gray-700 "> Country Name </label>
                                            <input type="text "
                                                name="countryName "
                                                defaultValue={modal.countryName}
                                                className="  block w-full border border-gray-300 rounded-md  shadow-md focus:shadow-2xl  p-2 " required />
                                        </div>


                                        <div className="flex items-center  justify-between gap-3">
                                            <div className="  ">
                                                <label className="block text-sm font-medium text-gray-700 "> Visa Type </label>
                                                <select name="visaType " className="  block w-52 border border-gray-300 rounded-md  shadow-md  p-2 " required>
                                                    <option value={modal.visaType}>{modal.visaType}</option>
                                                    {visaTypes.map((type, index) => (<option key={index} value={type}>{type}</option>))}
                                                </select>
                                            </div>

                                            <div className="  ">
                                                <label className="block text-sm font-medium text-gray-700 "> Processing Time </label>
                                                <input type="text"
                                                    name="processingTime"
                                                    defaultValue={modal.processingTime}
                                                    className="  block w-full border border-gray-300 rounded-md  shadow-md    p-2 " required />
                                            </div>

                                        </div>

                                        <div className="  ">
                                            <label className="block text-sm font-medium text-gray-700 "> Description </label>

                                            <textarea
                                                className="  w-full border border-gray-300 shadow-md px-2 rounded-md"
                                                name="description"
                                                defaultValue={modal.description}
                                                placeholder="Enter description " />
                                        </div>

                                        <div className="flex items-center  justify-between gap-3">
                                            <div className="  ">
                                                <label className="block text-sm font-medium text-gray-700 "> Age Restriction </label>
                                                <input type="number"
                                                    name="ageRestriction"
                                                    defaultValue={modal.ageRestriction} id="hh" required
                                                    className="  w-full shadow-md  p-2 border border-gray-300" />
                                            </div>

                                            <div className="  ">
                                                <label className="block text-sm font-medium text-gray-700 "> Fee (in USD) </label>
                                                <input type="number"
                                                    name="fee"
                                                    defaultValue={modal.fee}
                                                    required
                                                    className="  w-full shadow-md  p-2 border border-gray-300" />
                                            </div>
                                        </div>


                                        <div className="flex items-center  justify-between gap-3">
                                            <div className="  ">
                                                <label className="block text-sm font-medium text-gray-700 "> Validity (e.g., 6 months, 1 year) </label>
                                                <input type="text"
                                                    name="validity"
                                                    defaultValue={modal.validity} id="hh" required
                                                    className="  w-full shadow-md  p-2 border border-gray-300" />
                                            </div>

                                            <div className="  ">
                                                <label className="block text-sm font-medium text-gray-700 "> Application Method </label>
                                                <input type="text "
                                                    name="applicationMethod "
                                                    defaultValue={modal.applicationMethod}
                                                    className="  block w-full border border-gray-300 rounded-md  shadow-md  p-2 " required />
                                            </div>
                                        </div>


                                        <div className="flex gap-2 my-4 justify-center">
                                            <input
                                                type="submit"
                                                className="btn btn-sm btn-success"
                                                value={'Submit'}
                                            />
                                            <button
                                                className="btn btn-sm  btn-error"
                                                onClick={handleButtonClick}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>}



                    </div>)}
            </div>
        </div>
    );
};

export default MyAdded;