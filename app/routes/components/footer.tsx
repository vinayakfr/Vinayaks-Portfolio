export default function Footer() {
    return (
        <div className="w-full h-56 bg-zinc-800 text-white">
            <div className="flex justify-between mx-10 py-7">
                <div className="text-2xl leading-9">
                    SRM Institute of Science and Technology, <br/>
                    Kattankulathur, Chennai <br/>
                    603203
                </div>
                <div className="flex flex-col">
                    <h1 className="bold text-2xl">Socials</h1>
                    <div className="flex flex-row gap-5 text-xl py-2">
                        <a href="">GitHub</a>
                        <a href="">LinkedIn</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-xl text-center py-3 opacity-60">Crafted with ❤️ on the platter of Remix and Tailwind CSS</p>
            </div>
        </div>
    )
}