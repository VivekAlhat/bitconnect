import Peep1 from "../Assets/peep-10.svg";
import Peep2 from "../Assets/peep-11.svg";
import Peep3 from "../Assets/peep-17.svg";
import Peep4 from "../Assets/peep-31.svg";
import Peep5 from "../Assets/peep-43.svg";

const Peep = () => {
  return (
    <div className="hidden mt-10 sm:flex items-center justify-between px-16 py-5 w-full">
      <div className="flex flex-col items-center">
        <img src={Peep1} alt="Peep1" className="h-72 w-auto md:h-60 xl:h-72" />
        <p className="text-xl font-semibold mt-3">UX Designer</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Peep2} alt="Peep2" className="h-72 w-auto md:h-60 xl:h-72" />
        <p className="text-xl font-semibold mt-3">Digital Marketing</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Peep3} alt="Peep3" className="h-72 w-auto md:h-60 xl:h-72" />
        <p className="text-xl font-semibold mt-3">Product Designer</p>
      </div>
      <div className="flex flex-col items-center md:hidden xl:flex">
        <img src={Peep4} alt="Peep4" className="h-72 w-auto" />
        <p className="text-xl font-semibold mt-3">Illustrator</p>
      </div>
      <div className="flex flex-col items-center md:hidden xl:flex">
        <img src={Peep5} alt="Peep5" className="h-72 w-auto" />
        <p className="text-xl font-semibold mt-3">SEO Specialist</p>
      </div>
    </div>
  );
};

export default Peep;
