import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";

function Exrecise() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex">
          <span>
            <img className="w-80" src={img1} alt="img1" />
          </span>
          <span>
            <img className="w-80" src={img2} alt="img1" />
          </span>
          <span>
            <img className="w-80" src={img3} alt="img1" />
          </span>
          <span>
            <img src="" alt="" />
          </span>
          <span>
            <img src="" alt="" />
          </span>
        </div>
        <div className="content-center justify-items-center space-y-3  ">
          <div className="justify-items-center mb-8 text-white">
            <h1 className="font-bold text-2xl"> WE HELP YOU MAKE</h1>
            <h1 className="font-bold text-2xl">MODERN INTERIOR DESIGN</h1>
          </div>
          <p className="capitalize w-[18rem] hover:translate-y-2  bg-slate-500 text-white p-5">
            Modern Interior Design Emphisize Simplicity, Clean, And a natiral
            Color platelate. It focus On Functionality And minmalism, Often
            Incorpratin natural materials And open space to create a fresh and
            inviting atmposphere
          </p>
        </div>
      </div>
      <div className="mt-28 grid lg:grid-cols-4 sm:grid-cols-2 gap-10 ">
        <div className=" content-center justify-items-center space-y-3 p-3 hover:bg-slate-400 rounded-xl">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">minmalism</h1>
          <p className=" text-lg font-thin ">
            Focus on simplicity and decluttered space ,using essential elements
            to create a Clean look.
          </p>
        </div>
        <div className=" content-center justify-items-center space-y-3 p-3 hover:bg-slate-400 rounded-xl ">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">
            neutral color palette
          </h1>
          <p className=" text-lg font-thin ">
            utlitizes muted tones such as white ,gray,and beiges,often accented
            with bold color for contrast.
          </p>
        </div>
        <div className=" content-center justify-items-center space-y-3 p-3 hover:bg-slate-400 rounded-xl">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">functional furniture</h1>
          <p className=" text-lg font-thin ">
            incorporates multi-purpose and streamlined furniture that enhances
            usability without sacrificing style
          </p>
        </div>
        <div className=" content-center justify-items-center space-y-3 p-3 hover:bg-slate-400 rounded-xl">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">natural materials</h1>
          <p className=" text-lg font-thin">
            emphasizes the use of wood, stone, and metal, bringing an organic
            feel into modern spaces while promoting sustainability
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exrecise;
