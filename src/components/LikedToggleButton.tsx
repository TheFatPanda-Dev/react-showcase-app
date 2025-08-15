import {Dispatch, SetStateAction, useState} from "react";
import {Pets} from "../types";
import {Heart, LoaderCircle} from "lucide-react";

export function LikedToggleButton({
	pet,
	liked,
	setLiked,
	refreshPets,
}: {
	pet: Pets;
	liked: Pets["id"][];
	setLiked: Dispatch<SetStateAction<Pets["id"][]>>;
	refreshPets: () => void;
}) {
	// Removed duplicate destructuring of pet, liked, and setLiked
	const [pending, setPending] = useState(false);

	const USER_ID = 1; // Placeholder user ID
	const handleToggle = async () => {
		setPending(true);
		const isLiked = pet.likedBy.includes(USER_ID);
		// Compute new likedBy array
		const newLikedBy = isLiked
			? pet.likedBy.filter((id) => id !== USER_ID)
			: [...pet.likedBy, USER_ID];
		// Compute new likes count
		const currentLikes = typeof pet.likes === "number" ? pet.likes : pet.likedBy.length;
		const newLikes = isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1;
		// Optimistically update UI
		setLiked((prevLiked) => {
			if (isLiked) {
				return prevLiked.filter((id) => id !== pet.id);
			} else {
				return [...prevLiked, pet.id];
			}
		});
		try {
			await fetch(`http://localhost:5555/pets/${pet.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					likedBy: newLikedBy,
					likes: newLikes
				}),
			});
			// Always refresh pets after like/dislike
			refreshPets();
		} catch (error) {
			console.error("Failed to update like status:", error);
			refreshPets();
		}
		setPending(false);
	};

	return (
		<button
			className="group flex items-center gap-2"
			onClick={handleToggle}
			disabled={pending}
		>
			{pending ? (
				<LoaderCircle className="animate-spin stroke-slate-300" />
			) : (
				<Heart
					className={
						liked.includes(pet.id)
							? "fill-pink-500 stroke-none"
							: "stroke-slate-200 group-hover:stroke-slate-300"
					}
				/>
			)}
			{/* Likes count and label */}
			<span className="pet-likes">
				{typeof pet.likes === "number" ? pet.likes : pet.likedBy.length}{" "}
				{(typeof pet.likes === "number" ? pet.likes : pet.likedBy.length) === 1
					? "like"
					: "likes"}
			</span>
		</button>
	);
}
