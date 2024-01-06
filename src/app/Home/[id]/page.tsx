"use client";
import { GetByID } from "@/Hooks/useProducts";
import SpinnerItem from "@/components/Spinner";
import ProductDetails from "../_components/ProductDetails";
import { AuthCheck } from "../AuthCheck";

interface props {
  params: { id: number };
}

const page = ({ params: { id } }: props) => {
  const product = GetByID(id);
  if (product.isLoading) return <SpinnerItem />;
  return (
    <AuthCheck>
      <div className="flex justify-center mx-auto w-full  md:w-1/2 mb-3">
        <ProductDetails product={product.data} />
      </div>
    </AuthCheck>
  );
};

export default page;
