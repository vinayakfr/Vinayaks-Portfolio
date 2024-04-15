import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Devcard() {
  return (
    <div>
      <Tilt className="py-14 flex place-content-center place-items-center">
        <div className="h-[30rem] md:w-[730px] md:h-[350px] xl:h-[25rem] xl:w-[50rem] rounded bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 font-serif shadow-3xl flex flex-col justify-between">
          <p className="text-end md:text-xl mt-3 px-4 select-none ">Developer</p>
          <div className="flex flex-col place-content-center place-items-center select-none">
            <h1 className="text-2xl md:text-3xl">Vinayak Srivastava</h1>
            <p className="italic opacity-50 px-4 md:text-lg">
              With Great Powers comes Great Responsibilty
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-2 md:pb-4">
            <p className="text-sm md:text-lg">
              <a className="text-lg md:text-xl">Email: </a>vinayak.sri@yahoo.com
            </p>
            <ul className="flex flex-row place-content-end gap-2">
              <li>
                <a href="https://www.instagram.com/idkvinayak/">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vinayaksrivsatava/">
                  <FaLinkedinIn size={20} />
                </a>
              </li>
              <li>
                <a href="https://github.com/vinayakfr">
                  <FaGithub size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Devcard;
