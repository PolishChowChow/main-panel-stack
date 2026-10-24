import { useQuery } from "@tanstack/react-query";
import { tilesService } from "../../services/tilesService";
import Tile from "./Tile";
import type { ITile } from "../../types/ITile";

export default function Tiles(){
    const { data, isLoading, isError } = useQuery<ITile[]>({
        queryKey: ['tiles'],
        queryFn: async () => {
            const response = await tilesService.getTiles();
            return response || [];
        }
    });
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error</div>
    const tilesList = data?.map((tile) => {
        return <>
            <Tile key={tile.id} tile={tile} />
        </>
    });
    return <div className="bg-gray-900 flex-1 px-10 py-5 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] w-full">{tilesList}</div>
}