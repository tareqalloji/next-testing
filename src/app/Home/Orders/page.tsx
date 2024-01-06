"use client";
import { Delete, Get } from "@/Hooks/useOrders";
import SpinnerItem from "@/components/Spinner";
import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { AuthCheck } from "../AuthCheck";

const OrderPage = () => {
  const [selected, setSelected] = useState(undefined);
  const orders = Get();
  const deleteOrder = Delete();
  if (orders.isLoading) return <SpinnerItem />;
  return (
    <AuthCheck>
      {orders?.data && (
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Product ID</TableColumn>
            <TableColumn>Product Name</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody emptyContent="No Orders found.">
            {orders?.data?.map((order, index: any) => {
              return (
                <TableRow key={order.id}>
                  <TableCell>#{order.product_id}</TableCell>
                  <TableCell>
                    <User
                      name={order.product.title}
                      avatarProps={{
                        src: `${order.product.image}`,
                      }}
                      as={Link}
                      href={`/Home/${order.product.id}`}
                      className="hover:underline"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={order.status === "Done" ? "success" : "warning"}
                      className="text-white"
                    >
                      {order.status}
                    </Chip>{" "}
                  </TableCell>
                  <TableCell>
                    <Button
                      isIconOnly
                      color="danger"
                      aria-label="Like"
                      isLoading={index === selected}
                      onClick={() => {
                        setSelected(index);
                        deleteOrder.mutate(order.id);
                      }}
                    >
                      <BsTrashFill />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </AuthCheck>
  );
};

export default OrderPage;
