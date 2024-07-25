import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <>
      <div className="bg-[#2699fb] w-full py-[100px]">
        <div className="max-w-[1240px]  my-[100px] mx-auto text-center font-bold">
          <div className="text-3xl mb-4px ">Learn with us</div>
          <h2 className="text-white text-[40px] p-[24px]">Grow with us.</h2>
          <div className="text-[30px] text-white">
            Learn
            <ReactTyped
              className="pl-3"
              strings={[
                "Web Development",
                "Digital Marketing",
                "Ethical Hacking",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          </div>
          <button className="bg-black text-white p-3 rounded">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
export default Banner;
