import { useState, type SyntheticEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "../../components/Modal";
import type { ITile } from "../../types/ITile";
import { tilesService } from "../../services/tilesService";

interface CreateTileModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}

export default function CreateTileModal({ isModalOpen, setIsModalOpen }: CreateTileModalProps) {
    const queryClient = useQueryClient();
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<Omit<ITile, "id">>({ title: "", url: "" });

    const { mutate, isPending } = useMutation({
        mutationFn: (newTile: Omit<ITile, "id">) => tilesService.addTile(newTile),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tiles"] });
            setFormData({ title: "", url: "" });
            setIsModalOpen(false);
        },
        onError: () => setError("Failed to create tile"),
    });

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        mutate(formData);
    };

    const children = () => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Title"
                required
                className="border border-gray-300 rounded-md p-2"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <input
                type="url"
                placeholder="URL"
                required
                className="border border-gray-300 rounded-md p-2"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            />
            <button
                type="submit"
                disabled={isPending}
                className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 disabled:opacity-50"
            >
                {isPending ? "Creating..." : "Create"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );

    return <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create new Tile" children={children()} />;
}