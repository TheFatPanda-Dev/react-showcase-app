type User = {
	id: number,
};

export type Pets = {
	id: number,
	name: string,
	trait: string,
	imageUrl: string,
	likedBy: User["id"][],
	likes: number,
};
