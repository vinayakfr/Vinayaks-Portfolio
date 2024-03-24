import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Contact() {
    return (
        <div className="text-white">
            <Navbar/>
            <h1 className="text-6xl text-center">Contact</h1>
            <div className="flex justify-between mx-80 py-36">
                <div>
                    <div className="h-56 w-[600px] rounded-2xl bg-zinc-800 flex justify-between py-5"></div>
                    <div className="h-[357px] w-[600px] rounded-2xl bg-zinc-800 flex justify-between my-5"></div>
                </div>
                <div className="h-[600px] w-[450px] bg-zinc-800 rounded-2xl">
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}