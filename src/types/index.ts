export type TProduct = {
  name: string;
  photo:string;
  description: string;
  price: number;
  regularPrice: number;
  inStock: number;
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
  features?: string[];
};
export type TProductResponse = TProduct & {id:string; rating:number; slug:string; createdAt:string; updatedAt:string;}
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



export type TServerResponse<T> = {
  success: boolean
  message: string;
  result:T
}