import PageWrapper from "./components/PageWrapper";
import Container from "./components/Container";
import Header from "./components/Header";
import "./App.css";
import {ListPets} from "./components/ListPets";
import {useState} from "react";
import type {Pets} from "./types";
import {petsList} from "./data/pets";

function App() {
	const [pets] = useState<Pets[]>(petsList);
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
