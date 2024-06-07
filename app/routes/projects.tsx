import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center xl:text-8xl bg-gradient-to-tr from-zinc-800 to-zinc-800 via-rose-600 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="text-white flex flex-col gap-16 place-content-center place-items-center py-10">
        <div className="w-[70%] h-[35rem] rounded-xl outline bg-black flex flex-col place-content-start">
          <img
            src=""
            alt=""
            className="w-full h-[22.5rem] bg-zinc-800 rounded-xl"
          />
          <div className="px-5">
            <h1 className="text-center text-4xl font-bold py-2">MOZOFEST'23</h1>
            <p className="font-light text-justify lg:text-lg py-2">
              Mozofest is the flagship event of SRMKZILLA, the official Mozilla
              Campus Club at SRM University of Science and Technology, Chennai.
              This engaging event welcomes participants with all levels of
              coding skills. It features a variety of games designed to
              challenge minds and showcase coding proficiency.
            </p>
          </div>
        </div>
        <div className="w-[70%] h-[35rem] rounded-xl outline bg-black flex flex-col place-content-start">
          <img
            src=""
            alt=""
            className="w-full h-[22.5rem] bg-zinc-800 rounded-xl"
          />
          <div className="px-5">
            <h1 className="text-center text-4xl font-bold py-2">
              Unbranded Boutique
            </h1>
            <p className="font-light text-justify lg:text-lg py-2">
              Unbranded Boutique is a manufacturing brand that helps the upcoming skincare brands by manufacturing acne-serums for them and helping them establish their market. They are currently based in USA.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
