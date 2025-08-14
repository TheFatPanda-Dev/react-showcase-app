import {PetCard} from "./PetCard";
import {Dispatch, SetStateAction} from "react";
import {Pets} from "../types";

export function ListPets({
	searchQuery,
	pets,
	liked,
	setLiked,
}: {
	searchQuery: string;
	pets: Pets[];
	liked: Pets["id"][];
	setLiked: Dispatch<SetStateAction<Pets["id"][]>>;
}) {
	return (
		<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{pets
				.filter((pet) =>
					pet.trait.toLowerCase().includes(searchQuery.toLowerCase())
				)
				.map((pet) => (
					<PetCard key={pet.id} pets={pet} liked={liked} setLiked={setLiked} />
				))}
		</ul>
	);
}
