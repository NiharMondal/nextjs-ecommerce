export type TProduct = {

  name: string;
  description: string;
  price: string;
  regularPrice: string;
  inStock: string;
  brand: string;
  processor_type: string;
  processor_model: string;
  generation: string;
  display: string;
  display_size: string;
  display_type: string;
  ram: string;
  ram_type: string;
  hdd: string;
  ssd: string;
  graphics: string;
  operating_system: string;
//   features?: string[];
};

export type TOldProduct = {

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