import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Footer from "../Components/Footer";
import visa from '../assets/visa.gif'
import { useTypewriter } from "react-simple-typewriter";



const LoginPage = () => {

  const [text] = useTypewriter({
    words: ['K-Visas'],
    loop: true
  })


  useEffect(() => {
    document.title = "K-Visa || Log in"
  }, [])

  const emailRef = useRef();

  const location = useLocation()
  // console.info(location)

  const [error, setError] = useState(null)

  const [show, setShow] = useState(false)
  const ShowPassWord = (e) => {
    e.preventDefault();
    setShow(!show)
  }


  const navigate = useNavigate()

  //---------- Context use----------------------

  const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext)

  const HandleLogin = (e) => {
    e.preventDefault();
    const Email = e.target.email.value
    const Password = e.target.password.value

    //-------------------------login with email and password--------------------
    LoginUser(Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        navigate(location.state ? location.state : '/')
      })
      .catch((error) => {
        // console.log(error)
        if (error) { setError('Password or Email is invalid..!') }
      });
  }

  //------------------- HAndle google--------------
  const HandleGoogleLogin = () => {
    GoogleLogin()
      .then((res) => {
        // console.log(res.user)
        setUser(res.user)
        navigate(location.state ? location.state : '/')
      })
      .catch(err => {
        // console.log(err);
        setUser(null)
      })
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

      <div className="min-h-screen flex items-center justify-center ">
        <div className="p-8 rounded-lg  max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Welcome Back</h2>

          <form onSubmit={HandleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label className="text-sm my-1">
                Email Address
              </label>

              <input
                type="email"
                ref={emailRef}
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                placeholder="Enter Your Email. "
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="my-1 text-sm">
                Password
              </label>

              <input
                type={show ? "text" : "password"}
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                placeholder="Enter Password. "
                required
              />

              {/* --------------------------Forgot password section---------------------- */}

              <label className=" text-sm"><Link className="text-indigo-500 font-semibold hover:underline">Forgot password?</Link>
              </label>

              <button onClick={ShowPassWord} className="btn btn-ghost btn-xs absolute right-3 top-8 text-lg">
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-1 bg-purple-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300"
            >
              Log In
            </button>
          </form>

          <div className="divider divider-info mt-8">or</div>

          <button onClick={HandleGoogleLogin} className="btn btn-sm rounded-full btn-warning w-full mt-1 mb-5">Log in With Google
            <img src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo" className="w-5 shadow-lg border rounded-full" />
          </button>

          {/* Footer Text */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account? <Link to='/signUp' className="text-indigo-500 font-semibold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
