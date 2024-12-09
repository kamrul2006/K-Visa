import React from 'react';

const TypeHome = () => {
    return (
        <div className='md:flex items-center gap-14 md:my-20 md:mx-20'>

            {/* --------------------type 1----------------- */}
            <div className='flex flex-col gap-3 items-center border border-gray-300 rounded-xl px-4 mx-7 my-5 md:my-0 md:mx-0 py-10 md:px-10 md:py-20 shadow-lg bg-green-50 hover:bg-green-100'>
                <div className='bg-lime-500 rounded-full w-20 h-20 p-2'>
                    <img src="https://img.icons8.com/ios/50/FFFFFF/world.png" alt="world" className='w-full h-full mx-auto' />
                </div>
                <div className='flex flex-col gap-1 md:gap-5 md:mt-3'>
                    <h1 className="text-xl  font-bold text-green-800 my-3">Food and Wine Tours</h1>

                    <p className='text-gray-400 text-justify'>
                        Get the best food and best palace for stay. Enjoy your every day visit peacefully and safely. Get the best guides also. We ensure the best services for you.
                    </p>
                </div>
            </div>

            {/* --------------------type 2----------------- */}
            <div className='flex flex-col gap-3 items-center border border-gray-300 rounded-xl px-4 mx-7 my-5 md:my-0 md:mx-0 py-10 md:px-10 md:py-20 shadow-lg bg-green-50 hover:bg-green-100'>
                <div className='bg-lime-500 rounded-full w-20 h-20 p-2 ring-4 ring-lime-500'>
                    <img src="https://img.icons8.com/external-goofy-solid-kerismaker/96/FFFFFF/external-VIsa-airport-goofy-solid-kerismaker.png" alt="world" className='w-full h-full mx-auto' />
                </div>
                <div className='flex flex-col gap-1 md:gap-5 md:mt-3'>
                    <h1 className="text-xl  font-bold text-green-800 my-3">Travel Opportunities</h1>

                    <p className='text-gray-400 text-justify'>
                        Get the best food and best palace for stay. Enjoy your every day visit peacefully and safely. Get the best guides also. We ensure the best services for you.
                    </p>
                </div>
            </div>

            {/* --------------------type 3----------------- */}
            <div className='flex flex-col gap-3 items-center border border-gray-300 rounded-xl px-4 mx-7 my-5 md:my-0 md:mx-0 py-10 md:px-10 md:py-20 fshadow-lg bg-green-50 hover:bg-green-100'>
                <div className='bg-lime-500 rounded-full w-20 h-20 p-2'>
                    <img src="https://img.icons8.com/ios/50/FFFFFF/boy-on-the-rocket.png" alt="world" className='w-full h-full mx-auto' />
                </div>
                <div className='flex flex-col gap-1 md:gap-5 md:mt-3'>
                    <h1 className="text-xl  font-bold text-green-800 my-3">Solo Travel Planning</h1>

                    <p className='text-gray-400 text-justify'>
                        Get the best food and best palace for stay. Enjoy your every day visit peacefully and safely. Get the best guides also. We ensure the best services for you.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default TypeHome;