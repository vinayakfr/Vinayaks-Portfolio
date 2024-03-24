export default function Navbar() {
    return (
        <div className="flex w-full item-center justify-between py-10 px-10">
            <div>
                <img src="avatar.png" alt="" className="h-12 w-12 rounded-full ring ring-rose-500 object-cover"/>
            </div>
            <div className="text-3xl flex gap-5 text-white">
                <a href="/" className="hover:text-rose-500 transform duration-700">Home</a>
                <a href="/projects" className="hover:text-rose-500 transform duration-700">Projects</a>
                <a href="/music" className="hover:text-rose-500 transform duration-700">Music</a>
                <a href="/contact" className="hover:text-rose-500 transform duration-700">Contact</a>
            </div>
        </div>
    )
}