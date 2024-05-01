import { Link } from "react-router-dom";
import img from "../assets/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
function Login() {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => console.log(res.user))
      .then((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {};
  const handleGithubSignIn = () => {};
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-center items-center py-5 px-5 lg:px-0">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="col-span-1 flex justify-center max-w-2xl p-2 lg:p-8"
          >
            <img className="" src={img} alt="" />
          </div>
          <div data-aos="fade-left" data-aos-duration="900" className="">
            <div className=" space-y-2">
              <h2 className="font-bold text-2xl lg:text-3xl ">
                Login to your Account
              </h2>
              <p>Welcome back select mathod to Login</p>
            </div>

            <form
              onSubmit={handleLogin}
              data-aos="fade-left"
              data-aos-duration="1000"
              className=" col-span-1  mt-2 "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your Password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] text-white">Login</button>
              </div>
              <div className="text-center pt-2">
                <p>
                  {" "}
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-[#F6891F] font-bold">
                    Create an account
                  </Link>
                </p>
              </div>
              <div className="divider py-6">Or</div>
              <div className=" mt-4 space-x-4 text-center ">
                <button onClick={handleGoogleSignIn} className="btn">
                  Google <img className="w-4" src="/assets/google.png" alt="" />
                </button>
                <button onClick={handleGithubSignIn} className="btn">
                  Github <img className="w-4" src="/assets/github.png" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
