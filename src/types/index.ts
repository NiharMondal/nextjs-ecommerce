export type TProduct = {
  [key: string]: any
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
export type TProductResponse = TProduct & {
  id:string; 
  rating:number; 
  slug:string;
  reviews?: TReviewsResponse[]
  createdAt:string; 
  updatedAt:string;
}

export type TReviews = {
  rating: number;
  message: string;
  userId: string;
  productId:string;
}
export type TReviewsResponse = {
  
  id: string;
  product?: {
    name:string;
  
  }
  user?: {
    name:string;
    avatar: string;
  }
  createdAt: string;
  updatedAt:string;
} & TReviews

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


type MetaData = {
  totalPages: number;
  page:number;
}
export type TServerResponse<T> = {
  success: boolean
  message: string;
  meta?: MetaData;
  result:T
}

export type TCreateHotOffer = {
	discount: number;
	productId: string;
	endDate: string;
};


export type THotOfferResponse = {
    discount:number;
    endDate: string;
    price:number;
    id:string;
    product: TProductResponse;
}
export type TFeaturedProductResponse = {
    id:string;
    productId: string;
    product: TProductResponse;
}
export type CartProductType = {
	id: string;
	name: string;
	photo: string;
	price: number;
	productQuantity: any;
};
export type TUserRegistration = {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

export type TUserRegistrationResponse = {
  id: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  
}

export type TLoginResponse = {
  avatar: string;
  authToken:string;
}

export type TUserResponse = {
  id:string;
  name:string;
  email:string;
  avatar:string;
  phone:string;
}

export type TChangePassword = {
	oldPassword: string;
	newPassword: string;
	confirmPass: string;
};

export type TAddress = {
  
  street:string;
  postCode:string;
  city:string;
  country:string;
}

export type TOrderProduct = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}


export type TOrderRequest = {
  userId: string,
	totalPrice: number,		
  items: TOrderProduct[],
}


export type TOrderResponse = {
  id: string;
  userId:string;
  totalPrice: number;
  createdAt: string;
  updateAt: string;

}
