/**
 * @property id - Unique identifier for the user.
 */
type User = {
	id: number;
};

/**
 * @property id - Unique identifier for the pet.
 * @property name - Name of the pet.
 * @property trait - A notable trait or description of the pet.
 * @property imageUrl - URL to the pet's image.
 * @property likedBy - Array of user IDs who liked the pet.
 * @property likes - Total number of likes the pet has received.
 */
export type Pets = {
	id: number;
	name: string;
	trait: string;
	imageUrl: string;
	likedBy: User["id"][];
	likes: number;
};
