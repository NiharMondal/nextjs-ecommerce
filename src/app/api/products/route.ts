import { NextResponse } from "next/server";


export async function GET({params}:{params:{category:string}}) {

   const products = [
      {id:1, name: 'Nike shoes', category: 'shoes'},
      {id:2, name: 'Jacket', category: 'clothing'},
      {id:3, name: 'Men watch', category: 'accrssoris'},
   ]

   const res = products.find(p=>p.category === params.category)
   
   return NextResponse.json(res)
}