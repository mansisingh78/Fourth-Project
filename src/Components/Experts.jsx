import laptop from "../assets/image/laptop.jpeg";

function Experts() {
  return (
    <>
      <div className="max-w-[1000px] mx-auto p-5   my-10  grid grid-cols-2">
        <div className=" col-span-1 w-[80%] text-center ">
          <img src={laptop} alt="" className="inline" />
        </div>
        <div className=" col-span-1 flex flex-col justify-center ">
          <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
          <p className="my-2 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium iusto vitae cum, dolores deleniti impedit eveniet
            dignissimos, ut eius odio cupiditate eos praesentium. Reprehenderit
            nulla nobis aperiam illo eaque vel.
          </p>
          <button className="bg-black w-[30%] text-white p-3 rounded ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
export default Experts;
