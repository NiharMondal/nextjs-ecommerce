"use server";
const baseApi = "http://localhost:7000/api/v1"
export const getCategory = async()=>{
   const response = await fetch(`${baseApi}/category`);

   const categories = await response.json();
   return categories;
}