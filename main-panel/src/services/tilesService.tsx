import axios, { type AxiosResponse } from "axios";
import type { ITile } from "../types/ITile";

export class tilesService {

    static url: string =`${import.meta.env.VITE_BACKEND_URL}/tiles`;

    static async getTiles():Promise<ITile[]> {
        const response = await axios.get(tilesService.url)
        return response.data;
    }
    static async addTile(tile: Omit<ITile, "id">): Promise<AxiosResponse> {
        const response = await axios.post(tilesService.url, tile)
        return response;
    }
    static async updateTile(tile: ITile): Promise<AxiosResponse> {
        const response = await axios.put(tilesService.url + `/${tile.id}`, tile)
        return response;
    }
    static async deleteTile(tile: ITile): Promise<AxiosResponse> {
        const response = await axios.delete(tilesService.url + `/${tile.id}`)
        return response;
    }

}