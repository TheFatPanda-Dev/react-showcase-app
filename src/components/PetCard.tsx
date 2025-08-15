import {Dispatch, SetStateAction} from "react";
import {type Pets} from "../types";
import {LikedToggleButton} from "./LikedToggleButton";

type PetsCardProps = {
	pets: Pets;
	liked: Pets["id"][];
	setLiked: Dispatch<SetStateAction<Pets["id"][]>>;
};

export function PetCard({pets, liked, setLiked}: PetsCardProps) {
	return (
		<li
			key={pets.id}
			className="poverflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
		>
			<img
				src={pets.imageUrl}
				alt={pets.name}
				className="aspect-square object-cover"
			/>
			<div className="gap flex items-center justify-between p-4 text-sm">
				<div className="flex items-center gap-2">
					<p className="font-semibold">{pets.name}</p>
					<span className="text-slate-300">·</span>
					<p className="text-slate-500">{pets.trait}</p>
				</div>
                <LikedToggleButton
					pet={pets}
					liked={liked}
					setLiked={setLiked}
				/>
			</div>
		</li>
	);
}
