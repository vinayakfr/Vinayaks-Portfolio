import Navbar from "./components/navbar";
import Vinyl from "./components/vinyl";

export default function Music() {
    return (
        <div>
            <Navbar/>
            <div className="grid place-content-center place-items-center">
                <Vinyl/>
                <div className="absolute select-none">
                    <h1 className="text-8xl text-center">Music</h1>
                </div>
            </div>
            
        </div> 
    )
}