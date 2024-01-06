import { Button } from "@nextui-org/react";
import { HeartFilledIcon } from "./HeartFilledIcon";
import { Add } from "@/Hooks/useOrders";

const AddToCart = (props: any) => {
  const add = Add();
  return (
    <Button
      className="text-sm font-normal text-default-600 bg-default-100"
      startContent={<HeartFilledIcon className="text-danger" />}
      variant="flat"
      isLoading={add.isPending}
      onClick={() => {
        add.mutate({ product_id: props.id });
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
