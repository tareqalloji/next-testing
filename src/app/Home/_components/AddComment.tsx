"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { AddComment as Add } from "@/Hooks/useProducts";
const AddComment = (props: any) => {
  const [value, setValue] = useState("");
  const add = Add();
  return (
    <Input
      placeholder="leave a comment..."
      classNames={{
        inputWrapper: ["pr-0"],
      }}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyDown={(e: any) => {
        if (e.keyCode === 13 && e.target.value != "") {
          add.mutate({ product_id: props.id, content: value });
          setValue("");
        }
      }}
      endContent={
        <Button
          className="bg-transparent"
          isLoading={add.isPending}
          isDisabled={value === ""}
          onClick={(e: any) => {
            add.mutate({ product_id: props.id, content: value });
            setValue("");
          }}
        >
          <IoMdSend
            className={`cursor-pointer text-2xl ${
              value === "" ? "text-default-400" : "text-blue-500"
            } pointer-events-none flex-shrink-0`}
          />
        </Button>
      }
    />
  );
};

export default AddComment;
