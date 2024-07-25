// import { MdMenu } from "react-icons/md";
// import { MdClose } from "react-icons/md";

function Header() {
  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1248px] py-[10px] items-center  flex justify-between  mx-auto">
          <div className="text-3xl font-bold">Ws Cube</div>

          {/* <MdClose className="text-white text-2xl" />
          <MdMenu className="text-white text-2xl " /> */}

          <ul className=" hidden md:flex text-white gap-10">
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
