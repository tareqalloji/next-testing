"use client";
import { Get } from "@/Hooks/useProducts";
import SpinnerItem from "@/components/Spinner";
import { useEffect, useState } from "react";
import { AuthCheck } from "./AuthCheck";
import FilterForm from "./_components/FilterForm";
import ProductCard from "./_components/ProductCard";

const page = () => {
  const [rating, setRating]: any = useState([]);
  const product = Get();
  const NewRating: any = [];
  useEffect(() => {
    product.data?.forEach((product: any) => NewRating.push(product.rate));
    setRating(NewRating);
  }, [product.data]);

  if (product.isLoading) return <SpinnerItem />;

  return (
    <>
      <AuthCheck>
        <FilterForm rating={rating} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {product.data?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </AuthCheck>
    </>
  );
};

export default page;
