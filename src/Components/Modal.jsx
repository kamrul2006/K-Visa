import React from "react";

export const Modal = ({ onSubmit, onCancel, closeModal, children, modal }) => {

  const visaTypes = ["Tourist visa ", "Student visa ", "Official visa", "Free visa", "Medical visa"];


  //--------------------------handle update -----------------
  const HandleUpdateVisa = async (e) => {
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
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod: formData.get("applicationMethod "),
      addedBy: user.email
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
        // console.log(data)
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Successful',
            text: 'Visa Updated Properly.',
            icon: 'success',
            confirmButtonText: "It's Great"
          })
        }
      })
  }



  return (
    <div
      className="top-0 left-0 fixed w-full h-full flex items-center justify-center bg-[#0541058a] "
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="rounded  p-2 bg-white w-[30em]">

        {/* <div className="mb-3">{children}</div> */}
        <div className="mb-3 h-[530px] px-4 py-2">

          <div className='bg-green-600 rounded-full py-1 mb-5'>
            <h2 className='text-xl md:text-2xl font-bold my-2 text-center text-white '>Update visa information.</h2>
          </div>

          <form onSubmit={HandleUpdateVisa}>
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
              <button
                type="submit"
                className="btn btn-sm btn-success"
                onClick={() => onSubmit("Submit button was clicked")}
              >
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-sm  btn-error"
                onClick={() => onCancel("Cancel button was clicked")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};
