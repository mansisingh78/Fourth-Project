function NewsLetter() {
  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] mx-auto flex justify-between py-[50px]">
          <div>
            <h1 className="text-[30px] font-bold text-white">
              want to learn latest I.T skills?
            </h1>
            <span className="text-white">
              Sign Up to our newsletter and stay up to date.
            </span>
          </div>
          <div className=" ">
            <input
              type="text"
              className=" rounded p-3 mr-2 text-red-300"
              placeholder="Email"
            />
            <button className="bg-black text-white p-3 rounded">
              Get Started
            </button>
            <br />
            <p className="text-white">
              We Care about the protection of your data . Read our <br />
              <a href="" className="text-black">
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsLetter;
