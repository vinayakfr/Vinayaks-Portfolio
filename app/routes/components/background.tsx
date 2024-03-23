export default function Background() {
    return (
        <div className="absolute h-unit-8xl w-unit-8xl border-2 rounded-none bg-rose-600 border-rose-600 opacity-80">
            <div className=" h-72 w-72  bg-gradient-to-tr from-rose-600 to-transparent translate-x-unit-7xl -translate-y-24"></div> 
            <div className=" h-unit-7xl w-unit-7xl rounded-full bg-gradient-to-t from-rose-500 to-transparent -translate-x-48 -translate-y-unit-7xl shadow-2xl"></div>
            <div className=" h-80 w-80 bg-gradient-to-b from-rose-600 to-rose-400 translate-x-96 -translate-y-unit-7xl shadow-2xl"></div>
            <div className=" h-unit-6xl w-unit-7xl rounded-l-full rounded-r-xl bg-gradient-to-tl from-rose-500 to-transparent -translate-x-64 -translate-y-unit-9xl shadow-2xl"></div>
      </div> 
    )
}