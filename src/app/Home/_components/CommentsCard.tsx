import { Comments } from "@/data/Types";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import AddComment from "./AddComment";
import moment from "moment";
const CommentsCard = (props: any) => {
  return (
    <Card className="shadow-none w-full">
      <CardBody className="h-[400px] overflow-y-auto bg-slate-50">
        {props.comments.map((item: Comments) => {
          return (
            <div key={item.id} className="p-4">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-medium font-bold leading-none text-default-600">
                  {item.user.name}{" "}
                  <span className="text-tiny font-medium text-default-400">
                    {moment(item.user.created_at).fromNow()}
                  </span>
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  {item.user.email}
                </h5>
              </div>
              <p>{item.content}</p>
            </div>
          );
        })}
      </CardBody>
      <CardFooter className="px-0">
        <AddComment id={props.id} />
      </CardFooter>
    </Card>
  );
};

export default CommentsCard;
