interface ExperienceProps {
    heading: string;
    time: string;
    text: string;
  }

const Experience = ({heading, time, text}: ExperienceProps) => {
    return (
        <div className="">
            <div className="flex gap-12">
                <div className="h-72 w-72 xl:h-[35rem] xl:w-[40rem] bg-zinc-800 rounded-2xl flex flex-col justify-between place-content-center place-items-center p-3">
                    <h1 className="text-3xl text-center font-semibold">{heading}</h1>
                    <p className="text-xl font-light">{time}</p>
                    <p className="text-center text-wrap">{text}</p>
                </div>
                {/* <div className="h-[35rem] w-[40rem] bg-blue-400 rounded-2xl"></div> */}
            </div>
        </div>
    )
}

export default Experience;