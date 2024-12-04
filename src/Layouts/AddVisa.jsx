import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AddVisaPage from '../Components/AddVisaForm';

const AddVisa = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* ----------TITLE TEXT-------------- */}
            <div
                className='text-center bg-[#87A922] rounded-b-full md:mx-20'>
                <h1 className='text-3xl md:text-6xl font-bold py-5'>
                    Add Your Visa <br /> info.
                </h1>
                <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                    Please fill out the form below to add a new visa entry. Include the country details, visa type, required documents, processing time, fees, and any additional information for accurate recordkeeping.
                </p>
            </div>

            <AddVisaPage></AddVisaPage>


            <Footer></Footer>
        </div>
    );
};

export default AddVisa;