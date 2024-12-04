import { Link } from 'react-router-dom';
import world from '../assets/travel.gif'
import many from '../assets/Many.gif'
import done from '../assets/dance.gif'


const BannerHome = () => {
    return (
        <div className=" ">

            {/* -----------------BannerHome--------------------- */}
            <div >
                <div className="carousel w-full ">

                    {/* --------------------slide-1------------------- */}

                    <div id="item1" className="carousel-item relative w-full">

                        <div className="md:flex items-center justify-between gap-5 w-full  bg-[#fcf7f2]   ">
                            {/* ------------------image------------------- */}
                            <div className='md:'>
                                <img src={world} className='mx-auto w-1/2 md:w-full mt-5' />
                            </div>

                            {/* ---------------text part 1 ------------------ */}
                            <div className='bg-[#87A922] md:h-full flex flex-col px-10 md:px-0 py-5 md:py-0 items-center md:items-start text-center md:text-left  justify-center gap-3 md:gap-10 md:rounded-s-full md:w-3/4'>
                                <h1 className="md:text-6xl text-2xl font-bold md:pl-36 md:pr-1">
                                    Visa Made Easy Dreams Made Possible
                                </h1>

                                <p className='md:pl-36 text-xs md:text-base font-serif italic'>
                                    Get your Visa easily with K-VISA. For trusted and and safe service you can contact with us. <br />
                                    We can ensure you the honesty.
                                </p>

                                <Link to={'/allVisa'} className='pb-4 md:px-36'>
                                    <button className='btn btn-sm md:btn-md btn-neutral btn-outline  rounded-2xl'>
                                        See our Visas
                                    </button>
                                </Link>
                            </div>



                        </div>

                        <div
                            className="absolute left-5 right-5 top-[420px] md:top-1/2 flex -translate-y-1/2 transform gap-2 md:justify-between">
                            <a href="#item3" className="btn btn-xs md:btn-sm btn-primary btn-circle">❮ </a>
                            <a href="#item2" className="btn btn-xs md:btn-sm btn-primary btn-circle"> ❯</a>
                        </div>


                    </div>

                    {/* --------------------slide-2------------------- */}

                    <div id="item2" className="carousel-item relative w-full">

                        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 w-full  bg-[#fdfdfd]   ">

                            {/* ---------------text part 1 ------------------ */}
                            <div 
                            className='bg-[#87A922] md:h-full flex flex-col px-10 md:px-0 py-5 md:py-0 items-center md:items-start text-center md:text-left  justify-center gap-3 md:gap-10 md:rounded-e-full md:w-3/4'>
                                <h1 className="md:text-6xl text-2xl font-bold md:px-10 ">
                                    Get the best kinds of your dream visa.
                                </h1>

                                <p className='md:pl-10 text-xs md:text-base font-serif italic'>
                                    Get your Visa easily with K-VISA. For trusted and and safe service you can contact with us. <br />
                                    We can ensure you the honesty.
                                </p>

                                <Link to={'/allVisa'} className='pb-4 md:px-10'>
                                    <button className='btn btn-sm md:btn-md btn-neutral btn-outline  rounded-2xl'>
                                        See our Visas
                                    </button>
                                </Link>
                            </div>

                            {/* ------------------image------------------- */}
                            <div className='w-full md:w-1/2'>
                                <img src={many} className='mx-auto w-1/2 md:w-full mt-5' />
                            </div>
                        </div>

                        {/* ------------------------------buttons-------------------- */}
                        <div
                            className="absolute left-5 right-5 top-[420px] md:top-1/2 flex -translate-y-1/2 transform gap-2 md:justify-between">
                            <a href="#item1" className="btn btn-xs md:btn-sm btn-primary btn-circle">❮ </a>
                            <a href="#item3" className="btn btn-xs md:btn-sm btn-primary btn-circle"> ❯</a>
                        </div>
                    </div>

                    {/* --------------------slide-3------------------- */}

                    <div id="item3" className="carousel-item relative w-full">

                        <div className="md:flex items-center justify-between gap-5 w-full">
                            {/* ------------------image------------------- */}
                            <div className='md:'>
                                <img src={done} className='mx-auto w-1/2 md:w-full mt-5' />
                            </div>

                            {/* ---------------text part 1 ------------------ */}
                            <div className='bg-[#87A922] md:h-full flex flex-col px-10 md:px-0 py-5 md:py-0 items-center md:items-start text-center md:text-left  justify-center gap-3 md:gap-10 md:rounded-s-full md:w-3/4'>
                                <h1 className="md:text-6xl text-2xl font-bold md:pl-36 md:pr-1">
                                    Fulfill your life with some sweet memory.
                                </h1>

                                <p className='md:pl-36 text-xs md:text-base font-serif italic'>
                                    Get your Visa easily with K-VISA. For trusted and and safe service you can contact with us. <br />
                                    We can ensure you the honesty.
                                </p>

                                <Link to={'/allVisa'} className='pb-4 md:px-36'>
                                    <button className='btn btn-sm md:btn-md btn-neutral btn-outline  rounded-2xl'>
                                        See our Visas
                                    </button>
                                </Link>
                            </div>



                        </div>

                        <div
                            className="absolute left-5 right-5 top-[420px] md:top-1/2 flex -translate-y-1/2 transform gap-2 md:justify-between">
                            <a href="#item2" className="btn btn-xs md:btn-sm btn-primary btn-circle">❮ </a>
                            <a href="#item1" className="btn btn-xs md:btn-sm btn-primary btn-circle"> ❯</a>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default BannerHome;