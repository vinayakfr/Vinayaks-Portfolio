import { IoPlayCircle } from "react-icons/io5";

interface MusicCardProps {
    image: string;
    link: string;
    color: string
}

const MusicCard = ({
    image,
    link,
    color
}: MusicCardProps) => {
    return (
        <div className="overscroll-x-contain w-full">
            <div className="flex gap-9 scroll-smooth">
                <img src={image} className="h-72 w-[500px] bg-zinc-800 rounded-2xl object-cover border-2 border-neutral-900"/>
                <a href={link} className="absolute"><IoPlayCircle size={70} color={color} className="translate-y-[215px] translate-x-[420px]"/></a>
            </div>
        </div>
    )
}

export default MusicCard;