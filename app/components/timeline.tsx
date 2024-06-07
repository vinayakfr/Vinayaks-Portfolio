import { button } from "@nextui-org/react";

function Timeline() {
  return (
    <div>
      <h1 className="text-center text-5xl xl:text-6xl 2xl:text-9xl bg-gradient-to-tr from-zinc-950 via-rose-700 to-zinc-950 text-transparent bg-clip-text font-bold p-5 xl:p-10">
        Time-Line
      </h1>
      <div className="flex flex-row place-content-center place-items-center gap-4 xl:gap-14 px-4">
        <div className="lg:w-[40rem] 2xl:w-[57.5rem] text-white text-sm xl:text-2xl 2xl:text-4xl flex flex-col gap-12 2xl:gap-20">
          <p className="text-end">Start learning music at the age of 8 years</p>
          <p className="text-left">
            Transitioned from vocal to intruments in 5th grade on teacher's
            adivce ans started learning percussion intruments
          </p>
          <p className="text-end">
            Became the 2nd founding member of school orchestra
          </p>
          <p>
            Started learning Guitar in 9th Grade. Got serious with the
            instrument later.
          </p>
          <p className="text-end">
            Performed at multiple occasions at different venues, such as
            Cannught Place
          </p>
          <p className="text-start">
            Started spending more time on guitar during COVID.
          </p>
          <p className="text-end">
            Received "Merit" in Electric Guitar Grade 3 from Trinity
          </p>
          <p className="text-start">
            Participated in multiple guitar competitions and performed at
            multiple occasions.
          </p>
        </div>

        <div className="h-[57rem] md:h-[42rem] lg:h-[37.5rem] xl:h-[47.5rem] w-[0.65rem] 2xl:h-[67.5rem] 2xl:w-[1.2rem] rounded-full bg-gradient-to-b from-rose-600 to-rose-700 via-zinc-800"></div>

        <div className="lg:w-[40rem] 2xl:w-[57.5rem] text-white text-sm xl:text-2xl 2xl:text-4xl flex flex-col gap-12 2xl:gap-20">
          <p className="text-start pt-6">
            Learnt keyboard and was part of school choir
          </p>
          <p className="text-end">
            Congo was the first instrument and played it throughout the years
          </p>
          <p className="text-start">
            Participated in Orchestra competitions every year. Was placed in top
            three each year.
          </p>
          <p className="text-end">
            Head of the music committee in school's farewell. One of the
            humbling moments of my life.
          </p>
          <p className="text-start">
            Got "Distinction" in Guitar Grade 2 Exam from Trinity
          </p>
          <p className="text-end">
            Changed music school and started learning electric guitar.
          </p>
          <p>Became the member of Orchestra in new school </p>
          <p className="text-end">
            Was crowned as "The best guitarist the school has ever seen"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
