import {Dispatch, SetStateAction, useState} from "react";
import {Pets} from "../types";
import {Heart, LoaderCircle} from "lucide-react";

export function LikedToggleButton({
	pet,
	liked,
	setLiked,
}: {
	pet: Pets;
	liked: Pets["id"][];
	setLiked: Dispatch<SetStateAction<Pets["id"][]>>;
}) {
	const [pending, setPending] = useState(false);

	const handleToggle = () => {
		setPending(true);
		setLiked((prevLiked) => {
			if (prevLiked.includes(pet.id)) {
				return prevLiked.filter((id) => id !== pet.id);
			} else {
				return [...prevLiked, pet.id];
			}
		});
		setTimeout(() => setPending(false), 300); // fake async
	};

	return (
		<button className="group" onClick={handleToggle} disabled={pending}>
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
		</button>
	);
}
