"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "../components/loader";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

}

function Page() {
  const [Loading,setLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false)
    };
    fetchProducts();
  }, []);
  if(Loading===true){
    return(<Loader/>)
  }
  return (
    <section className="p-6">
        <h1 className=" p-10 text-4xl text-center text-white font-black font-serif motion-safe:animate-bounce ">ClientSide Data-Fetching</h1>
      <div className="grid grid-cols-4 gap-6 sm:grid-cols-4 xsm:grid-cols-1 ">
        {products.map((product) => (
          <div key={product.id} className="shadow-lg p-4 rounded-2xl border-4 border-white bg-white/40 hover:border-black">
            <Image
              src={product.image}
              alt={product.title}
              width={120}
              height={120}
               className="mx-auto "
            />
            <h1 className="font-bold text-black text-center">
              {product.title.slice(0, 20)}...
            </h1>
            <p className="text-center text-slate-800">
              {product.category} 
            </p>
           
            <p className="text-sm ">{product.description.slice(0, 100)}...</p>
            <button className="mt-2 w-full bg-black text-white py-1 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
