import {PetCard} from "./PetCard";
import {Dispatch, SetStateAction} from "react";
import {Pets} from "../types";

type ListPetsProps = {
	pets: Pets[];
	liked: Pets["id"][];
	setLiked: Dispatch<SetStateAction<Pets["id"][]>>;
	refreshPets: () => void;
};

export function ListPets({pets, liked, setLiked, refreshPets}: ListPetsProps) {
	return (
		<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{pets.map((pet) => (
				<PetCard
					key={pet.id}
					pets={pet}
					liked={liked}
					setLiked={setLiked}
					refreshPets={refreshPets}
				/>
			))}
		</ul>
	);
}
