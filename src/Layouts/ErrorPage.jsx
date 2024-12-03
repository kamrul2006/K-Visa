import { Link } from 'react-router-dom';
import errorE from '../assets/p404.gif'
const ErrorPage = () => {
    return (
        <div className='md:h-screen flex flex-col-reverse md:flex-row items-center md:gap-5'>

            {/* ------------404 text------------------- */}
            <div className=' bg-orange-300 py-10 px-7 rounded-2xl md:px-20 md:py-36 flex flex-col items-center justify-center gap-5 md:rounded-e-full'>

                <h1 className="md:text-6xl text-2xl font-bold font-mono">Page not found !</h1>

                <p className='text-center text-xs md:text-base font-serif italic'>
                    Oops! The page you're looking for doesn't seem to exist.
                    <br />
                    The page has been moved or deleted.You might have typed the URL incorrectly.
                </p>

                <Link to={'/'} className='text-center mx-auto pb-4'>
                    <button className='btn btn-sm md:btn-md btn-neutral btn-outline text-center mx-auto '>
                        Go back Home
                    </button>
                </Link>
            </div>


            {/* -------------------404 gif------------------ */}
            <div>
                <img src={errorE} className="mx-auto w-1/3 md:w-full" />
            </div>

        </div>
    );
};

export default ErrorPage;