import { useState } from "react";
import Tiles from "./Tiles";
import CreateTileModal from "./CreateTileModal";

export default function HomePage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    return <div className="bg-gray-800 flex flex-col min-h-screen">
        <CreateTileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <header className="text-white p-4 flex justify-center items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600" onClick={() => setIsModalOpen(true)}>
                Add new Tile
            </button>
        </header>
        <Tiles />
        <footer className="text-center text-sm text-gray-500 py-4">
            Copyright ©2026 PolishChowChow. All rights reserved.
        </footer>
    </div>
}