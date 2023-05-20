type TCategory = {
	id: string;
	cover: any;
	category: string;
	title: string;
	description: string;
};

const CATEGORY_NAME: string[] = [
	"Child Shoes Collection",
	"Women Shoes Collection",
	"Men Shoes Collection",
];
const randomId = ["2398452341", "24819314821", "2341242974"];

const DESCRIPTION =
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium minima excepturi voluptatibus distinctio! Maiores nulla fugiat at iste quo ullam!";

const CATEGORY = ["kids", "women", "men"];

const categoryImg = (index: number) => `/img/category/category_${index}.jpg`;
const featuredImg = (index: number) => `/img/featured/featured_${index}.png`;

export const shoesCategory: TCategory[] = [...Array(3)].map((_, index) => {
	const setIndex = index + 1;
	return {
		id: randomId[index],
		category: `${CATEGORY[index]}`,
		cover: categoryImg(setIndex),
		title: CATEGORY_NAME[index],
		description: DESCRIPTION,
	};
});

const PRODUCT_NAME = [
	"Nike air zoom pegasus 35",
	"Geography class chuck taylor all star",
	"Lite racer adapt 3.0 shoes",
	"Chuck taylor all star",
];
const PORDUCT_PRICE = [652, 736, 361, 298];
type TProduct = {
	id: string;
	cover: string;
	name: string;
	price: number;
	description: string;
	category: string;
};

const randomChar = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
];

export const featuredProuducts: TProduct[] = [...Array(4)].map((_, index) => {
	const setIndex = index + 1;
	return {
		id: randomChar[index],
		cover: featuredImg(setIndex),
		name: PRODUCT_NAME[index],
		price: PORDUCT_PRICE[index],
		description: DESCRIPTION,
		category: "featured",
	};
});
export const allProducts: TProduct[] = [...Array(24)].map((_, index) => {
	const setIndex = index + 1;
	return {
		id: randomChar[index],
		cover: featuredImg(setIndex),
		name: PRODUCT_NAME[index],
		price: PORDUCT_PRICE[index],
		description: DESCRIPTION,
		category: "featured",
	};
});

export const SIDEBAR_NAV_ITEM = [
	{
		icon: "⚡",
		title: "New In",
		link: "/",
	},
	{
		icon: "👚",
		title: "Clothing",
		link: "/category/clothing",
	},
	{
		icon: "👟",
		title: "Shoes",
		link: "/category/shoes",
	},
	{
		icon: "👜",
		title: "Accessoris",
		link: "/category/accessoris",
	},
	{
		icon: "🎁",
		title: "Gifts & Living",
		link: "/category/gifts-and-living",
	},
];
