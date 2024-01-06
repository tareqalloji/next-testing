import { Product, ProductDetails } from "@/data/Types";
import { ProductsInstance } from "@/Services/APIs/Products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Get = () => {
  return useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: async (): Promise<Product[]> =>
      await ProductsInstance.Get_Products().then((res) => res?.data.data),
    refetchOnWindowFocus: false,
  });
};

const GetByID = (id: number) => {
  return useQuery<ProductDetails>({
    queryKey: ["Product", id],
    queryFn: async (): Promise<ProductDetails> =>
      await ProductsInstance.Get_Products_By_Id(id).then(
        (res) => res?.data.data
      ),
  });
};

const GetByFilter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Product"],
    mutationFn: async (values: any) => {
      try {
        await ProductsInstance.Get_Products_By_Filter(values).then((res) => {
          if (res.data.data.length === 0) toast.warning("no results found");
          else queryClient.setQueryData(["Product"], res.data.data);
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
  });
};

const AddComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await ProductsInstance.Add_Comment(values).then(() => {
          queryClient.invalidateQueries({ queryKey: ["Product"] });
          toast.success("Comment added successfully.");
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
  });
};
const AddRate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await ProductsInstance.Add_Rate(values).then(() => {
          queryClient.invalidateQueries({ queryKey: ["Product"] });
          toast.success("Product rated successfully.");
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
  });
};

export { AddComment, AddRate, Get, GetByFilter, GetByID };
