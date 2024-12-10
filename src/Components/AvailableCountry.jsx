import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import palne from "../assets/Plane.json"
import { JackInTheBox } from 'react-awesome-reveal';


const AvailableCountry = () => {
    return (
        <div className='ring-8 ring-green-800 mt-5'>

            <div className='flex items-center flex-col md:hidden'>
                <h1 className="text-4xl my-5 text-center font-bold ">Available Country </h1>
                <p className='font-serif italic px-20 text-xs text-center'>
                    Here are some of our available country you can visit. Click the button below to Get all the visa information.
                </p>

                <Link to={"/allVisa"}>
                    <button className="btn btn-outline btn-sm my-5">
                        View All
                    </button>
                </Link>
            </div>

            <div className='grid grid-cols-1 gap-6 mx-5 md:px-20 md:mx-auto my-4  md:my-20 md:grid-cols-3 lg:grid-cols-5 items-center justify-center'>


                {/* div of items--------------------------------------------- */}
                <div className='grid grid-cols-1 col-span-1 lg:col-span-3 items-center gap-5 md:grid-cols-2 lg:grid-cols-3'>

                    {/* -------------------------------top--------------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/fluency/48/saudi-arabia-circular.png" alt="saudi-arabia-circular" />
                            </div>
                            <h1 className="text-2xl font-black text-green-800 my-3">Saudi Arabia.</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Worker</p>
                                <p>✔  Best Al-hajj</p>
                                <p>✔  Best Umrah</p>
                            </div>
                        </div>
                    </JackInTheBox>

                    {/* ----------------------------------1------------------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/fluency/48/bangladesh-circular.png" alt="bangladesh-circular" />
                            </div>
                            <h1 className="text-2xl font-black my-3">Bangladesh</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Tourist spots</p>
                                <p>✔  Best Natural views</p>
                                <p>✔  Best Rural culture</p>
                            </div>
                        </div>
                    </JackInTheBox>
                    {/* -------------------------------2---------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/maldives-circular.png" alt="maldives-circular" />
                            </div>
                            <h1 className="text-2xl font-black my-3">Maldives</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Tourist spots</p>
                                <p>✔  Best Natural views</p>
                                <p>✔  Best Rural culture</p>
                            </div>
                        </div>
                    </JackInTheBox>
                    {/* -------------------------------3--------------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/nepal-circular.png" alt="nepal-circular" />
                            </div>
                            <h1 className="text-2xl font-black my-3">Nepal</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Tourist spots</p>
                                <p>✔  Best Natural views</p>
                                <p>✔  Best Rural culture</p>
                            </div>
                        </div>
                    </JackInTheBox>
                    {/* -------------------------------4--------------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/bhutan-circular.png" alt="bhutan-circular" />
                            </div>
                            <h1 className="text-2xl font-black my-3">Bhutan</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Tourist spots</p>
                                <p>✔  Best Natural views</p>
                                <p>✔  Best Rural culture</p>
                            </div>
                        </div>
                    </JackInTheBox>
                    {/* -------------------------------5--------------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/sri-lanka-circular.png" alt="sri-lanka-circular" />
                            </div>
                            <h1 className="text-2xl font-black my-3">Sri Lanka</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Tourist spots</p>
                                <p>✔  Best Natural views</p>
                                <p>✔  Best Rural culture</p>
                            </div>
                        </div>
                    </JackInTheBox>
                    {/* -------------------------------6--------------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/fluency/48/canada-circular.png" alt="canada-circular" />
                            </div>
                            <h1 className="text-2xl font-black my-3">Canada</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Tourist spots</p>
                                <p>✔  Best Natural views</p>
                                <p>✔  Best Rural culture</p>
                            </div>
                        </div>
                    </JackInTheBox>
                    {/* -------------------------------7--------------------------- */}
                    <JackInTheBox>
                        <div className="border m-2 p-2 rounded-lg bg-rose-50 hover:bg-blue-50">
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/fluency/48/usa-circular.png" alt="usa-circular" />
                            </div>
                            <h1 className="text-2xl font-black my-3">U.S.A.</h1>
                            <div className='text-lg font-serif italic'>
                                <p>✔  Best Tourist spots</p>
                                <p>✔  Best Natural views</p>
                                <p>✔  Best Rural culture</p>
                            </div>
                        </div>
                    </JackInTheBox>
                </div>



                <div className='col-span-1 lg:col-span-2 hidden md:block'>

                    <div className=' flex items-center flex-col'>
                        <h1 className="text-4xl my-5 text-center font-bold ">Available Country </h1>
                        <p className='font-serif italic px-20 text-xs text-center'>
                            Here are some of our available country you can visit. Click the button below to Get all the visa information.
                        </p>

                        <Link to={"/allVisa"}>
                            <button className="btn btn-outline btn-sm my-5">
                                View All
                            </button>
                        </Link>
                    </div>


                    <Lottie animationData={palne} loop={true} className='rounded-full'></Lottie>

                </div>



            </div>
        </div>
    );
};

export default AvailableCountry;