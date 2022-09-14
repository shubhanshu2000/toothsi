import bgImg from "./assets/thanksBg.webp";
import logoImg from "./assets/logo.svg";

const Checkout = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div className=" w-1/3 h-1/2 flex flex-col items-center">
          <div className="bg-[#99e2f1]  w-full mb-1 py-2">
            <img src={logoImg} alt="logo" className="mx-auto  object-contain" />
          </div>

          <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className="bg-contain bg-[#99e2f1] w-full bg-no-repeat h-full bg-center"
          >
            <p className="flex text-2xl text-center text-[#e03c31] justify-between  h-full">
              <span className="w-1/2  ">Thank</span>{" "}
              <span className="w-1/2 ">You</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
