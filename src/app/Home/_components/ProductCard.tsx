import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import AddToCart from "./AddToCart";

const ProductCard = (props: any) => {
  return (
    <Card className="p-4" key={props.product.id}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <a
          className="font-bold text-large hover:underline hover:cursor-pointer"
          href={`/Home/${props.product.id}`}
        >
          {props.product.title}
        </a>
        <small className="text-small text-default-500">
          {props.product.description}
        </small>
      </CardHeader>
      <CardBody>
        <Image
          alt="Card background"
          className="object-cover rounded-xl flex justify-center"
          src={props.product.image}
          width={350}
          height={200}
        />
      </CardBody>
      <CardFooter className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-500 text-small">
              {Math.round(props.product.rate)}⭐
            </p>
            <p className=" text-default-500 text-small">Rate</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-500 text-small">
              {props.product.comments}
            </p>
            <p className="text-default-500 text-small">Comments</p>
          </div>
        </div>
        <div className="flex justify-end">
          <AddToCart id={props.product.id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
