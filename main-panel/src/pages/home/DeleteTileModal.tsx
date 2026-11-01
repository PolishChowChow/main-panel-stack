import { useState, type SyntheticEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "../../components/Modal";
import type { ITile } from "../../types/ITile";
import { tilesService } from "../../services/tilesService";

interface DeleteTileModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    tile: ITile;
}

export default function DeleteTileModal({ isModalOpen, setIsModalOpen, tile }: DeleteTileModalProps) {
    const queryClient = useQueryClient();
    const [error, setError] = useState<string | null>(null);

    const { mutate, isPending } = useMutation({
        mutationFn: (tile: ITile) => tilesService.deleteTile(tile),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tiles"] });
                setIsModalOpen(false);
            },
            onError: () => setError("Failed to delete tile"),
    });

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(tile);
        setError(null);
    };

    const children = () => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2>Are you sure you want to delete this tile?</h2>
            <div className="flex gap-4">
                <button
                type="button"
                disabled={isPending}
                className="flex-1 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 disabled:opacity-50"
                onClick={() => setIsModalOpen(false)}
            >
                {isPending ? "Cancel..." : "Cancel"}
            </button>
            <button
                type="submit"
                disabled={isPending}
                className="flex-1 bg-red-500 text-white rounded-md p-2 hover:bg-red-600 disabled:opacity-50"
            >
                {isPending ? "Deleting..." : "Delete"}
            </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );

    return <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Delete Tile" children={children()} />;
}