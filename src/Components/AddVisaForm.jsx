import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddVisaPage = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const [selectedLabels, setSelectedLabels] = useState([]);

    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        const labelText = e.target.nextSibling.textContent.trim(); // Get label text

        // Update the selectedLabels array
        if (checked) {
            setSelectedLabels((prev) => [...prev, labelText]);
        } else {
            setSelectedLabels((prev) =>
                prev.filter((text) => text !== labelText)
            );
        }
    };

    // console.log(selectedLabels)

    const HandleAddVisa = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const description = e.target.description.value
        const ageRestriction = e.target.ageRestriction.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value

        // console.log(description)

        const VisaData = {
            countryImage: formData.get("countryImage "),
            countryName: formData.get("countryName "),
            visaType: formData.get("visaType "),
            processingTime: formData.get("processingTime "),
            requiredDocuments: selectedLabels,
            description,
            ageRestriction,
            fee,
            validity,
            applicationMethod: formData.get("applicationMethod "),
            addedBy: user.email
        };


        // console.log(VisaData)

        //------------------sending data to server----------------------
        fetch('http://localhost:5000/visas', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(VisaData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'Visa Added Properly.',
                        icon: 'success',
                        confirmButtonText: "It's Great"
                    })
                    e.target.reset()
                }

            })
    }


    const visaTypes = ["Tourist visa ", "Student visa ", "Official visa", "Free visa", "Medical visa"];

    const requiredDocumentsOptions = ["Valid passport", "Visa application form", "Recent passport-sized photograph", "Medical report", "Covid-19 Vaccination Card"];


    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">

            <div className="bg-white shadow-md  rounded-lg p-6 w-full ">

                <form onSubmit={HandleAddVisa} >

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Country Image (URL) </label>
                        <input type="text "
                            name="countryImage "
                            placeholder="Enter image URL "
                            className="mt-1 block w-full border border-gray-300 rounded-md  shadow-md    p-2 " required />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Country Name </label> <input type="text " name="countryName " placeholder="Enter country name " className="mt-1 block w-full border border-gray-300 rounded-md  shadow-md 
                        focus:shadow-2xl
                          p-2 " required />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Visa Type </label>
                        <select name="visaType " className="mt-1 block w-full border border-gray-300 rounded-md  shadow-md   p-2 " required>
                            <option value=" ">Select a visa type</option> {visaTypes.map((type, index) => (<option key={index} value={type}>{type}</option>))} </select>
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Processing Time </label> <input type="text " name="processingTime " placeholder="e.g., 5-7 business days " className="mt-1 block w-full border border-gray-300 rounded-md  shadow-md   p-2 " required />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Required Documents </label>

                        <div className="md:flex flex-wrap gap-2 mt-2 ">
                            {requiredDocumentsOptions.map((doc, index) => (
                                <label key={index}
                                    className="flex items-center ">
                                    <input
                                        type="checkbox"
                                        name="requiredDocuments "
                                        // value={"abc", "asd","aaa"}
                                        onChange={handleCheckboxChange}
                                        className="mr-2 " />
                                    {doc}
                                </label>))}
                        </div>

                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Description </label>

                        <textarea
                            className="mt-1 w-full border border-gray-300 shadow-md p-2 rounded-md"
                            name="description"
                            placeholder="Enter description " />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Age Restriction </label>
                        <input type="number"
                            name="ageRestriction"
                            placeholder="Enter minimum age"
                            id="hh" required
                            className="mt-1 w-full shadow-md p-2 border border-gray-300" />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Fee (in USD) </label>
                        <input type="number" name="fee" placeholder="Enter visa fee" id="hh" required className="mt-1 w-full shadow-md p-2 border border-gray-300" />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Validity (e.g., 6 months, 1 year) </label>
                        <input type="text" name="validity" placeholder="Enter validity period" id="hh" required className="mt-1 w-full shadow-md p-2 border border-gray-300" />

                    </div>

                    <div className="mb-4 ">
                        <label className="block text-sm font-medium text-gray-700 "> Application Method </label>
                        <input type="text " name="applicationMethod " placeholder="Enter application method " className="mt-1 block w-full border border-gray-300 rounded-md  shadow-md   p-2 " required />
                    </div>

                    <div>
                        <button type="submit " className="w-full bg-[#87A922] hover:bg-[#2d8386] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#87A922] focus:ring-offset-2 "> Add Visa </button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddVisaPage;