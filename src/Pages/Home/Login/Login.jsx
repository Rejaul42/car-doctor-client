import img from "../../../assets/images/login/login.svg"
import { FiFacebook } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="my-8">
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <div className="">

                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-12">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">Login</button>
                            </div>
                            <p className="text-center my-4">Or Sign In with</p>
                            <div className=" flex justify-center gap-4">
                                <button className="btn btn-circle text-2xl text-blue-500"><FiFacebook></FiFacebook></button>
                                <button className="btn btn-circle text-2xl text-blue-500"><BiLogoLinkedin></BiLogoLinkedin></button>
                                <button className="btn btn-circle text-2xl"><FcGoogle></FcGoogle></button>
                            </div>
                            <p className="text-center mt-4">New in here? <span className="text-[#FF3811] font-semibold"><Link to="/signup">Sign Up</Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;