import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import AddToCart from "./AddToCart";
import CommentsCard from "./CommentsCard";
import { AddRate } from "./AddRate";

const ProductDetails = (props: any) => {
  return (
    <>
      {props.product && (
        <Card className="p-4" key={"props.product.id"}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{props.product.title}</h4>
            <small className="text-small text-default-500">
              {props.product.description}
            </small>
          </CardHeader>
          <CardBody>
            <Image
              alt={props.product.image}
              className="object-cover rounded-xl flex justify-center w-full"
              src={props.product.image}
            />
            <div className="flex justify-between align-middle mt-4">
              <div className="flex align-middle">
                <p className="font-semibold text-default-500 text-small flex items-center">
                  {Math.round(props.product.rate)}⭐
                </p>
                <p className=" text-default-500 text-small flex items-center">
                  Rate
                </p>
              </div>
              <div className="justify-end flex gap-2">
                <AddRate id={props.product.id} />
                <AddToCart id={props.product.id} />
              </div>
            </div>
          </CardBody>
          <Divider className="my-2" />
          <CardFooter>
            <CommentsCard
              id={props.product.id}
              comments={props.product?.comments}
            />
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ProductDetails;
