import PageWrapper from "./components/PageWrapper";
import Container from "./components/Container";
import Header from "./components/Header";
import "./App.css";
import {ListPets} from "./components/ListPets";
import {useState} from "react";
import type {Pets} from "./types";

const initialPets: Pets[] = [
	{
		id: 1,
		name: "Buddy",
		trait: "Playful",
		imageUrl: "/src/assets/header-logo.jpg",
		likedBy: [],
	},
	{
		id: 2,
		name: "Mittens",
		trait: "Curious",
		imageUrl: "/src/assets/header-logo.jpg",
		likedBy: [],
	},
	// Add more pets as needed
];

function App() {
	const [pets] = useState<Pets[]>(initialPets);
	const [liked, setLiked] = useState<Pets["id"][]>([]);
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<PageWrapper>
			<Container>
				<Header />
				{/* Optionally add a search input here to update searchQuery */}
				<ListPets
					pets={pets}
					liked={liked}
					setLiked={setLiked}
					searchQuery={searchQuery}
				/>
			</Container>
		</PageWrapper>
	);
}

export default App;
