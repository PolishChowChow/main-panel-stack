
import type { ITile } from "../../types/ITile"
import randomColor from "../../utils/randomColor"
import TrashCan from "./TrashCanSvg"

type TileProps = {
    tile: ITile,
    onDelete: () => void
} 

export default function Tile({ tile, onDelete }: TileProps) {

    const color = randomColor()
    return <a href={tile.url} target="_blank" rel="noopener noreferrer">
        <div className={`flex flex-col align-middle justify-center h-72  m-3 p-2 cursor-pointer shadow-md bg-${color}-800 text-gray-200 hover:text-gray-100 text-2xl font-bold hover:bg-${color}-900 border-2 border-transparent rounded-xl`}>
            <div className="flex-1 grid place-content-center pt-10">{tile.title}</div>
            <div className={`relative top-0 right-0 flex justify-end`}>
                <button className={`rounded-2xl p-3 hover:cursor-pointer hover:bg-${color}-700`} onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onDelete()
                }}>
                    <TrashCan size={30} />
                </button>
            </div>
        </div>

    </a>    
}