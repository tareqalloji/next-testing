"use client";
import { Order } from "@/data/Types";
import { OrdersInstance } from "@/Services/APIs/Orders";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Get = () => {
  return useQuery<Order[]>({
    queryKey: ["Orders"],
    queryFn: async (): Promise<Order[]> =>
      await OrdersInstance.Get_Orders().then((res) => res?.data.data),
    refetchOnWindowFocus: false,
  });
};
const Add = () => {
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await OrdersInstance.Add_order(values);
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
    onSuccess: async (res: any) => {
      toast.success("Product added successfully.");
    },
  });
};
const Delete = () => {
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await OrdersInstance.Delete_Order(values).then(async () => {
          await toast.success("Product deleted successfully.");
          await window.location.reload();
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
  });
};

export { Get, Add, Delete };
