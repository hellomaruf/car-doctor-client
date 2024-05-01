import { Link } from "react-router-dom";
import img from "../assets/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";

function Register() {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .then((error) => console.log(error));
  };
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
                Sign up your Account
              </h2>
              <p>Welcome back select mathod to Login</p>
            </div>

            <form
              onSubmit={handleRegister}
              data-aos="fade-left"
              data-aos-duration="1000"
              className=" col-span-1  mt-2 "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn bg-[#FF3811] text-white">Sign Up</button>
              </div>
              <div className="text-center pt-2">
                <p>
                  {" "}
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#F6891F] font-bold">
                    Please login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
