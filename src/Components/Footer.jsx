import { Link } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import visaIco from "../assets/visa.gif"
import { useTypewriter } from "react-simple-typewriter";

const Footer = () => {
    const [text] = useTypewriter({
        words: ['K-Visas'],
        loop: true
    })

    // const { user, } = useContext(AuthContext)
    return (
        <div>
            <footer className="  bg-[#F7F6BB] md:py-10  text-black rounded px-10">

                <div className="md:flex flex-col md:flex-row items-center justify-center md:justify-between">
                    <div>
                        <div className="flex items-center">
                            <img src={visaIco} alt="" className="w-20"/>
                            <a className="md:text-3xl text-xl font-serif font-semibold italic ">  <span>{text}</span></a>
                        </div>

                        <div className=" md:flex gap-4 text-center">
                            <Link className="hover:underline" to={'/'}><p>Home</p></Link>
                            <Link className="hover:underline" to={'/allVisa'}><p>All Visa</p></Link>
                            <Link className="hover:underline" to={'/addVisa'}><p>Add visa</p></Link>
                            <Link className="hover:underline" to={'/myAdded'}><p>My Added Visa</p></Link>
                            {/* {user && <Link to={'/dashboard'}><p>My Profile</p></Link>} */}
                        </div>

                        <div >
                            <div className="flex items-center gap-5 text-xl md:text-3xl mt-7">
                                <a href="https://www.facebook.com/">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.youtube.com/">
                                    <FaYoutube />
                                </a>
                                <a href="https://x.com/home?lang=en">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                        <div className="mt-8 space-y-4 text-gray-700">
                            <h3 className="text-2xl font-semibold text-yellow-950 mt-2">Get in touch:</h3>
                            <p className="flex items-center space-x-2">
                                <FiPhone />
                                <span>+88 01533 333 333</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FiMail />
                                <span>info@gmail.com</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <HiLocationMarker />
                                <span>72, Wall Street, King Road, Dhaka</span>
                            </p>
                        </div>
                    </div>

                    <div className='w-1/2'>
                        <h3 className="text-2xl font-bold text-gray-700">Connect with Us</h3>
                        <form className="mt-6 space-y-4">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                        </form>
                        <button
                            // type="submit"
                            className="btn btn-success btn-sm md:btn-md btn-outline hover:font-semibold rounded-full my-2"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </footer>
            <div className="mx-auto text-center bg-green-700 text-white py-2">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-serif font-bold text-center">K-Visa</span></p>
            </div>
        </div>
    );
};

export default Footer;