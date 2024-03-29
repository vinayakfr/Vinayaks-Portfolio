import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MusicCard from "./components/songcard";
import Vinyl from "./components/vinyl";

export default function Music() {
    return (
        <div>
            <Navbar/>
            <div className="absolute grid place-content-center place-items-center py-10 -z-30">
                <div className="flex place-content-center place-items-center px-52 -z-30" ><Vinyl/></div> 
            </div> 
            <div className="pt-[500px] z-30">
                <div className="select-none pb-[510px]">
                    <h1 className="text-9xl text-center ">Music</h1>
                </div>
                <h1 className="text-7xl text-center text-white">My Journey</h1>
                <h1 className="text-5xl text-center text-white py-10 mx-10 leading-[55px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, modi placeat? Nemo ea beatae delectus aspernatur laudantium, velit ipsum perspiciatis! Similique neque perferendis aperiam ipsa. Quasi est expedita officiis cupiditate, ea exercitationem adipisci sit! Doloremque eos voluptas laboriosam quisquam pariatur cupiditate quibusdam, porro non provident sit et quae, id autem?</h1>
            </div>

            <div className="py-16">
                <h1 className="text-6xl text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            
            <div className="">
                <div className="flex px-16">
                    <MusicCard image={"/tangerine.png"} link={""} color={"White"}/>
                </div>
            </div>
            
           
            <Footer/>
        </div> 
    )
}