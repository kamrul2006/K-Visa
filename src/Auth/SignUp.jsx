
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { auth } from '../Firebase/firebase.config'
import { sendEmailVerification } from "firebase/auth";
import { FaAnglesLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";
import { useTypewriter } from "react-simple-typewriter";
import visa from '../assets/visa.gif'


const SignUpSection = () => {
    const [text] = useTypewriter({
        words: ['K-Visas'],
        loop: true
    })


    useEffect(() => {
        document.title = "K-Visa || Sign Up"
    }, [])
    const navigate = useNavigate()
    //--------------------------Context use--------------------------
    const { CreateUserByMailPass, setUser, updatedProfile, GoogleLogin } = useContext(AuthContext)

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [show, setShow] = useState(false)

    const HandleSignUp = (e) => {
        e.preventDefault();
        // -------------------clearing error +success msg
        setError(null)
        setSuccess(null)

        const Email = e.target.email.value
        const Password = e.target.password.value
        const Name = e.target.name.value
        const Photo = e.target.photoUrl.value
        const Terms = e.target.terms.checked
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!Terms) {
            setError('Pleas accept all terms and conditions.')
            return
        }
        else if (Password.length < 6) {
            setError('Password should must be 6 character or more !!')
            return
        }
        else if (!passwordRegex.test(Password)) {
            setError('Password should contain a-z, A-Z, 0-9 and a special character.')
            return
        }


        CreateUserByMailPass(Email, Password)
            .then((userCredential) => {
                //         // ----------------------------Signed up 
                const user = userCredential.user;
                setUser(user)
                setSuccess('Sign Up Successful.')

                updatedProfile({ displayName: Name, photoURL: Photo })
                    .then(() => {

                        Swal.fire({
                            title: 'Successful',
                            text: 'Account created  Properly.',
                            icon: 'success',
                            confirmButtonText: "It's Great"
                        })

                        navigate('/')
                    }).catch(err => setError(err.massage))


                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        //  console.log('Email verification sent!')
                    })
            });


    }

    //------------------- HAndle google--------------
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                // console.log(res.user)
                setUser(res.user)
                navigate('/')
            })
            .catch(err => {
                // console.log(err);
                setUser(null)
            })
    }

    const ShowPassWord = (e) => {
        e.preventDefault();
        setShow(!show)
    }



    return (
        <div>
            <div className="bg-base-content w-full flex items-center justify-evenly mb-10 ">
                <div className='flex items-center px-5 w-1/2'>
                    <img src={visa} className="md:w-20 w-10 rounded-xl" />
                    <a className="md:text-3xl text-white text-xl font-serif font-semibold italic ">  <span>{text}</span></a>
                </div>

                <Link to={'/'} className=" mx-auto">
                    <button className="btn btn-sm md:btn-md btn-outline btn-success mx-10 my-4 md:px-5 md:text-xl "><FaAnglesLeft />  Go Back to Home</button>
                </Link>
            </div>


            <div className="flex items-center justify-center ">
                <div className=" p-8 max-w-md w-full my-5">
                    <h2 className="text-3xl font-bold text-black text-center mb-6">Sign up to <span className="text-green-700"> K-Visa </span></h2>

                    <form onSubmit={HandleSignUp} className="space-y-6">

                        <div className="relative">
                            <label className="my-3 text-sm mx-2">
                                Full Name:
                            </label>
                            <input
                                type="Text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                placeholder="First name + Last Name"
                                required
                            />
                        </div>

                        <div className="relative">
                            <label className="my-3 text-sm mx-2">
                                Photo Url:
                            </label>
                            <input
                                type="text"
                                id="photo"
                                name="photoUrl"
                                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                placeholder="Photo URL"
                                required
                            />
                        </div>

                        <div className="">
                            <label className="my-3 text-sm mx-2">
                                Email Address:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                placeholder="Email "
                                required
                            />
                        </div>

                        <div className="relative">
                            <label className="my-3 text-sm mx-2">
                                Password:
                            </label>
                            <input
                                type={show ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                placeholder="Password"
                                required
                            />
                            <button onClick={ShowPassWord} className="btn btn-ghost btn-xs absolute right-3 top-8 text-lg">
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox" name="terms" className="checkbox checkbox-warning" />
                                <span className=" text-black">Accept all terms and conditions</span>
                            </label>
                        </div>

                        {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}
                        {success && <p className="text-xs font-semibold text-green-500 text-center">{success}</p>}

                        <button type="submit" className="w-full btn btn-info text-black py-2 rounded-lg font-semibold">
                            Sign Up
                        </button>
                    </form>

                    <div className="divider divider-info mt-8">or</div>

                    <button onClick={HandleGoogleLogin} className="btn btn-sm rounded-full btn-neutral w-full mt-1">Log in With Google
                        <img src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo" className="w-5 shadow-lg" />
                    </button>

                    <p className="text-center text-black mt-2">
                        Already have an account?  <Link to={'/logIn'} className="text-blue-500 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default SignUpSection;

