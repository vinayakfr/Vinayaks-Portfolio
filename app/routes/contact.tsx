import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Contact() {
    return (
        <div className="text-white">
            <Navbar/>
            <h1 className="text-6xl text-center">Contact</h1>
            <p className="text-4xl text-center py-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos est beatae architecto distinctio delectus iure excepturi doloremque? Nemo, amet!</p>
            <div className="flex justify-between mx-80 py-16">
                <div>
                    <div className="h-56 w-[600px] rounded-2xl bg-zinc-800 flex justify-between py-5">

                    </div>
                    <div className="h-[357px] w-[600px] rounded-2xl bg-zinc-800 flex justify-between my-5">
                        <div className="flex flex-col gap-8 my-10 mx-6">
                            <input type="text" className="h-[110px] w-[550px] rounded-2xl bg-black ring ring-danger px-5 text-xl" placeholder="Full Name"/>
                            <input type="text" className="h-[110px] w-[550px] rounded-2xl bg-black ring ring-danger px-5 text-xl" placeholder="Email Address"/>
                            <button className="h-14 w-24 rounded-2xl bg-white text-rose-500 hover:bg-rose-500 hover:text-white transform duration-500 mx-56 border-2 border-rose-500">Send</button>
                        </div>
                        
                    </div>
                </div>
                <div className="h-[600px] w-[450px] bg-zinc-800 rounded-2xl">
                </div>
            </div>
            <Footer/>
        </div>
    )
}