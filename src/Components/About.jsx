import person from "../assets/about_us/person.jpg";
import parts from "../assets/about_us/parts.jpg";
function About() {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="col-span-1 relative p-10">
          <img className="rounded-xl" src={person} alt="" />
          <img
            className="absolute w-[300px] rounded-xl border-8 border-white -right-12 top-1/2"
            src={parts}
            alt=""
          />
        </div>
        <div className="col-span-1 p-10 space-y-4">
          <h3 className="text-2xl text-orange-500">About us</h3>
          <h1 className="text-6xl font-semibold">
            We are qualified & of experience in this field
          </h1>
          <div className=" space-y-3">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.{" "}
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which dont look even slightly
              believable.{" "}
            </p>
          </div>
          <button className="btn border-none bg-orange-600 hover:bg-orange-500 text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
