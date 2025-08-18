import PageWrapper from "./components/PageWrapper";
import Container from "./components/Container";
import Header from "./components/Header";
import About from "./components/About";
import "./App.css";
import {ListPets} from "./components/ListPets";
import {useState, useEffect} from "react";
import type {Pets} from "./types";

// Use Vite's import.meta.env for environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_PETS_ENDPOINT = import.meta.env.VITE_API_PETS_ENDPOINT;

function App() {
	const [pets, setPets] = useState<Pets[]>([]);
	const [liked, setLiked] = useState<Pets["id"][]>([]);

	const fetchPets = () => {
		fetch(`${API_BASE_URL}${API_PETS_ENDPOINT}`)
			.then((res) => res.json())
			.then((data) => setPets(data));
	};

	useEffect(() => {
		fetchPets();
	}, []);

	return (
		<PageWrapper>
			<Container>
				<Header />
				<About />
				<ListPets
					pets={pets}
					liked={liked}
					setLiked={setLiked}
					refreshPets={fetchPets}
				/>
			</Container>
		</PageWrapper>
	);
}

export default App;
