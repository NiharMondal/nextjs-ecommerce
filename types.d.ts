export type TProduct = {

	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	[vlaue: string]: any;
};

export interface IUserInfo {
	username: string;
	email: string;
	password: string;
}
