export default function Background() {
  return (
    <div className="absolute h-40 w-40 md:h-56 md:w-56 lg:h-unit-8xl lg:w-unit-8xl 2xl:h-[43rem] 2xl:w-[43rem] border-2 rounded-none bg-rose-600 border-rose-600 opacity-80 animate-pulse scale-85">
      {/* Main Square */}
      <div className="h-36 w-36 md:h-40 md:w-40 2xl:h-[35rem] 2xl:w-[35rem] translate-x-24 -translate-y-10 md:translate-x-40 md:-translate-y-20 lg:h-72 lg:w-72 bg-gradient-to-tr from-rose-600 to-transparent lg:translate-x-unit-7xl lg:-translate-y-24 2xl:translate-x-[30rem] 2xl:-translate-y-[15rem]"></div>
      {/* Top-right Square */}
      <div className="h-36 w-36 md:h-52 md:w-52 2xl:h-[43rem] 2xl:w-[43rem] -translate-x-24 -translate-y-48 md:-translate-x-32 md:-translate-y-64 lg:h-unit-7xl lg:w-unit-7xl rounded-full bg-gradient-to-t from-rose-500 to-transparent lg:-translate-x-48 lg:-translate-y-unit-7xl 2xl:-translate-x-[25rem] 2xl:-translate-y-[55rem] shadow-2xl"></div>
      {/* Circle */}
      <div className="h-28 w-28 md:h-36 md:w-36 2xl:h-[32.5rem] 2xl:w-[32.5rem] -translate-y-44 translate-x-28 md:translate-x-36 md:-translate-y-56 lg:h-80 lg:w-80 bg-gradient-to-b from-rose-600 to-rose-400 lg:translate-x-96 lg:-translate-y-unit-7xl 2xl:-translate-y-[52.5rem] 2xl:translate-x-[30rem] shadow-2xl"></div>
      {/* Bottom-right Square */}
      <div className="h-28 w-36 md:h-40 md:w-52 2xl:h-[27.5rem] 2xl:w-[42.5rem] -translate-y-72 -translate-x-24 md:-translate-y-[22rem] md:-translate-x-40 lg:h-unit-6xl lg:w-unit-7xl rounded-l-full rounded-r-xl bg-gradient-to-tl from-rose-500 to-transparent lg:-translate-x-64 lg:-translate-y-unit-9xl 2xl:-translate-y-[82.5rem] shadow-2xl 2xl:-translate-x-[30rem]"></div>
      {/* Semi-circle */}
    </div>
  );
}