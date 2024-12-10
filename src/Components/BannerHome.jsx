import { Link } from 'react-router-dom';
import biman from '../assets/PPas.json'
import Ban3 from '../assets/t-bg.json'
import many from '../assets/Many.gif'
import Lottie from 'lottie-react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'





const BannerHome = () => {
    const [text] = useTypewriter({
        words: [' Visa Made Easy', ' Dreams Made Possible'],
        loop: true
    })
    const [texti] = useTypewriter({
        words: ['      Get the best kinds of ', ' your dream visa'],
        loop: true
    })
    const [textii] = useTypewriter({
        words: ['Fulfill your life with ', ' some sweet memory.'],
        loop: true
    })




    return (
        <div className=" ">

            {/* -----------------BannerHome--------------------- */}
            <div >
                <div className="carousel w-full ">

                    {/* --------------------slide-1------------------- */}

                    <div id="item1" className="carousel-item relative w-full">

                        <div className="md:flex items-center justify-between gap-5 w-full ">
                            {/* ------------------image------------------- */}
                            <div className='md:w-1/2 flex flex-col items-center justify-center'>
                                {/* <img src={world} className='mx-auto w-1/2 md:w-full mt-5' /> */}
                                <Lottie animationData={biman} ></Lottie>
                            </div>

                            {/* ---------------text part 1 ------------------ */}
                            <div className='bg-[#87A922] md:h-full flex flex-col px-10 md:px-0 py-5 md:py-0 items-center md:items-start text-center md:text-left  justify-center gap-3 md:gap-10 md:rounded-s-full md:w-3/4'>
                                <h1 className="md:text-6xl text-2xl font-bold md:pl-36 md:pr-1">
                                    <span>{text}</span>
                                    <Cursor cursorColor='red' />
                                </h1>

                                <p className='md:pl-36 text-xs md:text-base font-serif italic'>


                                    Get your Visa easily with K-VISA. For trusted and and safe service you can contact with us. <br />
                                    We can ensure you the honesty.
                                </p>

                                <Link to={'/allVisa'} className='  md:px-36'>
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
                                    <span>{texti}</span>
                                    <Cursor cursorColor='red' />
                                </h1>

                                <p className='md:pl-10 text-xs md:text-base font-serif italic'>
                                    Get your Visa easily with K-VISA. For trusted and and safe service you can contact with us. <br />
                                    We can ensure you the honesty.
                                </p>

                                <Link to={'/allVisa'} className='  md:px-10'>
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
                                {/* <img src={done} className='mx-auto w-1/2 md:w-full mt-5' /> */}
                                <Lottie animationData={Ban3} loop={true}></Lottie>
                            </div>

                            {/* ---------------text part 1 ------------------ */}
                            <div className='bg-[#87A922] md:h-full flex flex-col px-10 md:px-0 py-5 md:py-0 items-center md:items-start text-center md:text-left  justify-center gap-3 md:gap-10 md:rounded-s-full md:w-3/4'>
                                <h1 className="md:text-6xl text-2xl font-bold md:pl-36 md:pr-1">
                                    <span>{textii}</span>
                                    <Cursor cursorColor='green' />
                                </h1>

                                <p className='md:pl-36 text-xs md:text-base font-serif italic'>
                                    Get your Visa easily with K-VISA. For trusted and and safe service you can contact with us. <br />
                                    We can ensure you the honesty.
                                </p>

                                <Link to={'/allVisa'} className='  md:px-36'>
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