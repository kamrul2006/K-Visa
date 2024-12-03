import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    // const { user, } = useContext(AuthContext)
    return (
        <div>
            <footer className="flex flex-col items-center justify-center gap-10 bg-[#F7F6BB] md:py-16  text-black rounded px-10">
                <div className=" md:flex gap-4 text-center">
                    <Link className="hover:underline" to={'/'}><p>Home</p></Link>
                    <Link className="hover:underline" to={'/allVisa'}><p>All Visa</p></Link>
                    <Link className="hover:underline" to={'/addVisa'}><p>Add visa</p></Link>
                    <Link className="hover:underline" to={'/myAdded'}><p>My Added Visa</p></Link>
                    {/* {user && <Link to={'/dashboard'}><p>My Profile</p></Link>} */}
                </div>
                <div >
                    <div className="grid grid-flow-col text-xl md:text-3xl gap-4">
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
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-serif font-bold">K-Visa</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;