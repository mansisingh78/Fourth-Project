import { BsFillPersonFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
function Plans() {
  return (
    <>
      <div className="py-[100px]">
        <div className=" max-w-[1240px] mx-auto grid grid-cols-3 gap-8   justify-center item text-center ">
          <div className="shadow-xl [h-300px]     hover:sc-105 duration-500 px-10">
            <BsFillPersonFill size={50} />
            <h1 className="mt-4 text-black font-bold text-[25px]">
              Web Development
            </h1>
            <h2 className="mt-2 mx-4 text-black font-bold text-[25px]">
              $ 149
            </h2>
            <p className="mt-3  ">
              Lorem ipsum dolor sit amet <br className="my-4" /> consectetur
              adipisicing elit. Quis eum ab <br /> deleniti sint dolore
              doloribus.
            </p>

            <button className="bg-green-500 text-white py-2 px-6 rounded mt-5   ">
              start trial
            </button>
          </div>
          <div className="shadow-xl h-[300px] hover:sc-105 duration-500 bg-gray-200">
            <FaUserFriends size={50} />
            <h1 className="mt-4 text-black font-bold text-[25px]">
              Digital Marketing
            </h1>
            <h2 className="mt-2 mx-4 text-black font-bold text-[25px]">
              $ 149
            </h2>
            <p className="mt-3  ">
              Lorem ipsum dolor sit amet <br className="my-4" /> consectetur
              adipisicing elit. Quis eum ab <br /> deleniti sint dolore
              doloribus.
            </p>

            <button className="bg-black text-sky-300 py-2 px-6 rounded mt-5   ">
              start trial
            </button>
          </div>
          <div className="shadow-xl [h-300px] hover:sc-105 duration-500">
            <IoPerson size={50} />
            <h1 className="mt-4 text-black font-bold text-[25px]">
              App Development
            </h1>
            <h2 className="mt-2 mx-4 text-black font-bold text-[25px]">
              $ 149
            </h2>
            <p className="mt-3  ">
              Lorem ipsum dolor sit amet <br className="my-4" /> consectetur
              adipisicing elit. Quis eum ab <br /> deleniti sint dolore
              doloribus.
            </p>

            <button className="bg-green-500 text-white py-2 px-6 rounded mt-5   ">
              start trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Plans;
