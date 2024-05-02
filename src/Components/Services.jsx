import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-xl mx-auto text-center space-y-3 mb-12">
        <h3 className="text-2xl text-orange-500">Services</h3>
        <h1 className="text-4xl font-bold">Our Services Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-3">
        {services.map((item, index) => (
          <div key={index} className="">
            <div className="card h-full bg-base-100 border-2">
              <figure className="px-6 pt-6">
                <img src={item?.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className=" items-center py-6 px-6 space-y-4">
                <h2 className="card-title">{item?.title}</h2>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-orange-600 font-medium ">
                    Price : {item?.price}
                  </p>
                  <Link to={`/checkout/${item?._id}`} className="btn rounded-full bg-orange-600 text-white hover:bg-orange-500">
                  <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
