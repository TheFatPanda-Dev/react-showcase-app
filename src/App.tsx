import PageWrapper from "./components/PageWrapper";
import Container from "./components/Container";
import Header from "./components/Header";
import "./App.css";
import {ListPets} from "./components/ListPets";
import {useState, useEffect} from "react";
import type {Pets} from "./types";

function App() {
	const [pets, setPets] = useState<Pets[]>([]);
	const [liked, setLiked] = useState<Pets["id"][]>([]);
	//TODO: Implement search functionality

	const fetchPets = () => {
		fetch("http://localhost:5555/pets")
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
				<ListPets
					pets={pets}
					liked={liked}
					setLiked={setLiked}
					refreshPets={fetchPets}
				/>
				/* Optionally add a upload form here */
			</Container>
		</PageWrapper>
	);
}

export default App;
