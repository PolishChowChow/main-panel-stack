import { useState } from "react";
import Tiles from "./Tiles";
import CreateTileModal from "./CreateTileModal";
import DeleteTileModal from "./DeleteTileModal";
import type { ITile } from "../../types/ITile";

export default function HomePage(){
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [deleteModalObject, setDeleteModalObject] = useState({
        isOpen: false,
        tile: {} as ITile
    });

    const onDelete = (tile: ITile) => {
        setDeleteModalObject({...deleteModalObject, isOpen: true, tile});
    }

    return <div className="bg-gray-800 flex flex-col min-h-screen">
        <CreateTileModal isModalOpen={isCreateModalOpen} setIsModalOpen={setIsCreateModalOpen} />
        <DeleteTileModal isModalOpen={deleteModalObject.isOpen} setIsModalOpen={() => setDeleteModalObject({...deleteModalObject, isOpen: false})} tile={deleteModalObject.tile} />
        <header className="text-white p-4 flex justify-center items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600" onClick={() => setIsCreateModalOpen(true)}>
                Add new Tile
            </button>
        </header>
        <Tiles onDelete={onDelete} />
        <footer className="text-center text-sm text-gray-500 py-4">
            Copyright ©2026 PolishChowChow. All rights reserved.
        </footer>
    </div>
}