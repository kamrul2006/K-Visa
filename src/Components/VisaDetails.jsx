import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const VisaDetails = () => {
    const { user } = useContext(AuthContext)
    const visa = useLoaderData()

    //-----------------Modal info-----------------
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const [visaOpen, setVisaOpen] = useState(false);

    const handleButtonClick = () => {
        setVisaOpen(false);
    };

    const HandleAddApply = (e) => {
        e.preventDefault();
        const formData = e.target
        const Fname = formData.Fname.value
        const Lname = formData.Lname.value
        const email = formData.Email.value
        const applyDate = formData.date.value
        const name = Fname + " " + Lname
        const visaInfo = visa

        const AppliCationData = {
            email, applyDate, name, visaInfo
        }

        // console.log(AppliCationData)

        fetch('http://localhost:5000/apply', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(AppliCationData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'You Applied For Visa SuccessFully.',
                        icon: 'success',
                        confirmButtonText: "OK"
                    })
                    handleButtonClick()
                }

            })

    }

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


                <button onClick={() => setVisaOpen(true)} className='btn btn-sm md:btn-md btn-outline btn-primary md:text-xl font-serif italic mb-5'>
                    Apply For The Visa Now
                </button>


            </div>


            {/* --------------------------all visa--------------------- */}
            <div className=" mx-10 md:mx-44 my-10">
                <div className=" shadow-md my-4  border rounded-md" >

                    <div className="w-full my-2 md:w-1/2 mx-auto md:h-[250px] h-[200px] ">
                        <img src={visa.countryImage} className="w-full h-full object-cover shadow-xl border border-black mx-auto" />
                    </div>

                    <div className="text-center gap-4">

                        {/* ----------------------text-------------------------- */}
                        <div className='px-4 md:px-10 md:py-5 bg-base-100'>
                            <p className="py-1 bg-white text-center rounded-full text-yellow-950 text-lg md:text-3xl font-serif italic font-semibold ">{visa.countryName} </p>

                            <h1 className="text-xl font-bold">Visa Type : {visa.visaType}</h1>
                            <p className=" py-3 font-bold">
                                Visa Description:  <span className='font-normal italic'>{visa.description}</span>
                            </p>
                            <div className='flex items-center justify-between  text-left px-5 md:mx-10 mx-2'>
                                <div className='bg-red-300 px-2 py-3 w-1/2'>
                                    <p className="font-bold">
                                        Visa Processing Time:  <span className='font-normal italic'>{visa.processingTime ? visa.processingTime : '10-30 working day.'}</span>
                                    </p>
                                    <p className="font-bold py-2">
                                        Visa fee:  <span className='font-normal italic'>
                                            {visa.fee ? visa.fee : '300'} $</span>
                                    </p>
                                    <p className="font-bold">
                                        Visa Added By:  <span className='font-normal italic'>
                                            {visa.addedBy ? visa.addedBy : "Kamrul Islam Apurba"} .</span>
                                    </p>
                                </div>

                                <div className='bg-green-200 px-2 py-1 w-1/2'>
                                    <p className="font-bold py-2">
                                        Visa Age Restriction:  <span className='font-normal italic'>
                                            {visa.ageRestriction ? visa.ageRestriction : '18'} years.</span>
                                    </p>

                                    <p className="font-bold">
                                        Visa validity:  <span className='font-normal italic'>
                                            {visa.validity ? visa.validity : '3 years'}</span>
                                    </p>
                                    <p className="font-bold py-2">
                                        Visa Application Method:  <span className='font-normal italic'>
                                            {visa.applicationMethod ? visa.applicationMethod : 'K-Visa'} </span>
                                    </p>

                                </div>
                            </div>



                            <ul className='bg-orange-300 text-left px-10 py-2'>
                                <li className='font-bold '>Required Documents:</li>
                                {visa.requiredDocuments.map((type, i) => <li key={i}>{type}</li>)}
                            </ul>

                        </div>


                        {/* --------------buttons---------------------- */}
                        <div className="flex justify-center py-3 gap-5">

                            {/*-----update */}
                            <Link to={`/allVisa`}>
                                <button className="btn btn-sm md:btn-md btn-outline">
                                    Go Back
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>


                {/* ---------------------------Modal------------------------- */}
                {visaOpen && <div
                    className="top-0 left-0 fixed w-full h-full flex items-center justify-center bg-[#0541058a] "
                >
                    <div className="rounded  p-2 bg-white w-[30em]">

                        <div className="mb-3 px-4 py-2">

                            <div className='bg-blue-600 rounded-full py-1 mb-5'>
                                <h2 className='text-xl md:text-2xl font-bold my-2 text-center text-white '>Apply for the Visa.</h2>
                            </div>

                            <form onSubmit={HandleAddApply}>
                                {/* <form > */}
                                <div className="  ">
                                    <label className="block text-sm font-medium text-gray-700 "> Email: </label>
                                    <input type="text "
                                        name="Email"
                                        defaultValue={user.email}
                                        className="  block w-full border border-gray-300 rounded-md  shadow-md     p-2 " required />
                                </div>


                                <div className=" my-3 ">
                                    <label className="block text-sm font-medium text-gray-700 ">First Name:</label>
                                    <input type="text "
                                        name="Fname"
                                        placeholder='Enter your first name.'
                                        className="  block w-full border border-gray-300 rounded-md  shadow-md focus:shadow-2xl  p-2 " required />
                                </div>

                                <div className="  ">
                                    <label className="block text-sm font-medium text-gray-700 ">Last Name:</label>
                                    <input type="text "
                                        name="Lname"
                                        placeholder='Enter your last name.'
                                        className="  block w-full border border-gray-300 rounded-md  shadow-md focus:shadow-2xl  p-2 " required />
                                </div>

                                <div className=" my-3 ">
                                    <label className="block text-sm font-medium text-gray-700 ">Applied  date</label>
                                    <input type="text"
                                        name="date"
                                        defaultValue={`${date}/${month < 10 ? `0${month}` : `${month}`}/${year}`} required
                                        className="  w-full shadow-md  p-2 border border-gray-300" />
                                </div>

                                <div className="  ">
                                    <label className="block text-sm font-medium text-gray-700 "> Fee (in USD) </label>
                                    <input type="number"
                                        name="fee"
                                        defaultValue={visa.fee}
                                        required
                                        className="  w-full shadow-md  p-2 border border-gray-300" />
                                </div>




                                <div className="flex gap-2 my-4 justify-center">
                                    <input
                                        type="submit"
                                        className="btn btn-sm btn-outline btn-success"
                                        value={'Apply'}
                                    />
                                    <button
                                        className="btn btn-sm btn-outline btn-error"
                                        onClick={handleButtonClick}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}



            </div>
        </div>
    );
};

export default VisaDetails;