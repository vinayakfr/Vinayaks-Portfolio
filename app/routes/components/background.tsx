export default function Background() {
  return (
    <div className="absolute h-40 w-40 md:h-64 md:w-64 lg:h-[25rem] lg:w-[25rem] 2xl:h-[43rem] 2xl:w-[43rem] border-2 rounded-none bg-rose-600 border-rose-600 opacity-80 animate-pulse">
      {/* Main Square */}
      <div className="h-36 w-36 md:h-52 md:w-52 2xl:h-[35rem] 2xl:w-[35rem] translate-x-24 -translate-y-10 md:translate-x-40 md:-translate-y-12 lg:h-72 lg:w-72 bg-gradient-to-tr from-rose-600 to-transparent lg:translate-x-[15rem] lg:-translate-y-[10rem] 2xl:translate-x-[30rem] 2xl:-translate-y-[15rem]"></div>
      {/* Top-right Square */}
      <div className="h-36 w-36 md:h-60 md:w-60 lg:h-[22.5rem] lg:w-[22.5rem] 2xl:h-[43rem] 2xl:w-[43rem] -translate-x-24 -translate-y-48 md:-translate-x-40 md:-translate-y-72 lg:-translate-y-[27.5rem] lg:-translate-x-[12.5rem] rounded-full bg-gradient-to-t from-rose-500 to-transparent  2xl:-translate-x-[25rem] 2xl:-translate-y-[55rem] shadow-2xl"></div>
      {/* Circle */}
      <div className="h-28 w-28 md:h-44 md:w-44 lg:h-[17.5rem] lg:w-[17.5rem] 2xl:h-[32.5rem] 2xl:w-[32.5rem] -translate-y-44 translate-x-28 md:translate-x-40 md:-translate-y-[17rem] bg-gradient-to-b from-rose-600 to-rose-400 lg:translate-x-[17.5rem] lg:-translate-y-[25rem] 2xl:-translate-y-[52.5rem] 2xl:translate-x-[30rem] shadow-2xl"></div>
      {/* Bottom-right Square */}
      <div className="h-28 w-36 md:h-40 md:w-60 lg:h-[15rem] lg:w-[20rem] 2xl:h-[27.5rem] 2xl:w-[42.5rem] -translate-y-72 -translate-x-24 md:-translate-y-[27rem] md:-translate-x-40 lg:-translate-x-[12.5rem] lg:-translate-y-[37.5rem] 2xl:-translate-y-[81rem] rounded-l-full rounded-r-xl bg-gradient-to-tl from-rose-500 to-transparent shadow-2xl 2xl:-translate-x-[30rem]"></div>
      {/* Semi-circle */}
    </div>
  );
}
