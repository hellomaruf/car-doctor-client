import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";

function Checkout() {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlebooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const date = e.target.date.value;
    const order = {
      name,
      email,
      date,
      price,
      service: loadedData?._id,
    };
    console.log(order);
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="max-w-7xl mx-auto my-20">
      <form
        onSubmit={handlebooking}
        data-aos="fade-left"
        data-aos-duration="1000"
        className=" col-span-1 mt-2 "
      >
        <div className="flex gap-7">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter service name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              name="date"
              type="date"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Due Price</span>
            </label>
            <input
              name="price"
              defaultValue={"$" + loadedData?.price}
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] text-white">Login</button>
        </div>
        <div className="text-center pt-2"></div>
      </form>
    </div>
  );
}

export default Checkout;
