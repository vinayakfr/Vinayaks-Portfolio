import { button } from '@nextui-org/react';
import Popup from 'reactjs-popup';

function Timeline() {
  return (
    <div className="flex flex-col place-content-center place-items-center">
      <h1 className="text-5xl xl:text-6xl bg-gradient-to-tr from-zinc-950 via-rose-700 to-zinc-950 text-transparent bg-clip-text font-bold text-center p-5 xl:p-10">
        Time-Line
      </h1>
      <div className="flex place-content-center place-items-center gap-5 md:w-[90%] ">
        <div className="flex flex-col gap-10 text-white w-[80%] md:w-80 xl:h-[45rem] xl:w-[35rem] m-4">
          <p className="text-end">Start learning music at the age of 8 years</p>
          <p>
            Transitioned from vocal to intruments in 5th grade on teacher's
            adivce ans started learning percussion intruments
          </p>
          <p className="text-end">Became the 2nd founding member of school orchestra</p>
          <p>Started learning Guitar in 9th Grade. Got serious with the instrument later.</p>
          <p className="text-end">
            Performed at multiple occasions at different venues, such as
            Cannught Place
          </p>
          <p ></p>
        </div>
        <div className="h-[50rem] w-[0.65rem] rounded-full bg-gradient-to-b from-rose-600 to-rose-700 via-zinc-800"></div>
        <div className="flex flex-col gap-12 text-white w-[80%] md:w-80 xl:h-[45rem] xl:w-[35rem]">
          <p className="text-end">Learnt keyboard and was part of school choir</p>
          <p>
            Congo was the first instrument and played it throughout the years
          </p>
          <p className="text-end">
            Participated in Orchestra competitions every year. Was placed in top
            three each year.
          </p>
          <p>
            Head of the music committee in school's farewell. One of the
            humbling moments of my life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
