import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-bold text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] bg-gradient-to-tr from-zinc-800 to-zinc-800 via-rose-600 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="text-white flex flex-col gap-16 place-content-center place-items-center py-10">
        <div className="h-[35rem] w-[70%] md:h-[40rem] 2xl:h-[50rem] 2xl:w-[50%] rounded-xl outline bg-black flex flex-col place-content-start">
          <img
            src="Mozofest.png"
            alt=""
            className="w-full h-[20rem] md:h-[31rem] bg-zinc-800 rounded-xl object-fit"
          />
          <div className="px-5">
            <h1 className="text-center text-2xl md:text-4xl 2xl:text-6xl font-bold py-2 2xl:py-6">
              MOZOFEST'23
            </h1>
            <p className="font-light text-justify lg:text-lg 2xl:text-3xl py-2 2xl:py-3">
              Mozofest is the flagship event of SRMKZILLA, the official Mozilla
              Campus Club at SRM University of Science and Technology, Chennai.
              This engaging event welcomes participants with all levels of
              coding skills. It features a variety of games designed to
              challenge minds and showcase coding proficiency.
            </p>
          </div>
        </div>
        <div className="h-[35rem] w-[70%] md:h-[40rem] 2xl:h-[50rem] 2xl:w-[50%] rounded-xl outline bg-black flex flex-col place-content-start">
          <img
            src="Unbranded.png"
            alt=""
            className="w-full h-[20rem] md:h-[30rem] bg-zinc-800 rounded-xl object-cover"
          />
          <div className="px-5">
            <h1 className="text-center text-2xl md:text-4xl 2xl:text-6xl font-bold py-2 2xl:py-6">
              Unbranded Boutique
            </h1>
            <p className="font-light text-justify lg:text-lg 2xl:text-3xl py-2 2xl:py-3">
              Unbranded Boutique is a manufacturing brand that helps the
              upcoming skincare brands by manufacturing acne-serums for them and
              helping them establish their market. They are currently based in
              USA.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
