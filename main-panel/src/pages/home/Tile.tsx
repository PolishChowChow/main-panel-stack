
import type { ITile } from "../../types/ITile"
import randomColor from "../../utils/randomColor"

type TileProps = {
    tile: ITile
} 

export default function Tile({ tile }: TileProps) {
    const color = randomColor()
    return <a href={tile.url} target="_blank" rel="noopener noreferrer">
        <div className={`grid place-content-center h-72  m-3 p-2 cursor-pointer shadow-md bg-${color}-800 text-gray-200 hover:text-gray-100 text-2xl font-bold hover:bg-${color}-900 border-2 border-transparent rounded-xl`}>{tile.title}</div>
    </a>    
}