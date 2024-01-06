"use client";
import { AddRate as Add } from "@/Hooks/useProducts";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { HeartFilledIcon } from "./HeartFilledIcon";
import { RateIcon } from "./RateIcon";
export const AddRate = (props: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState(0);
  const rate = Add();
  return (
    <>
      <Button
        onPress={onOpen}
        className="text-sm font-normal text-default-600 bg-default-100"
        startContent={<RateIcon className="text-warning" />}
        variant="flat"
      >
        Rate this product
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Rate this product
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-center mx-auto">
                  <Rating
                    style={{ maxWidth: 250 }}
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  className="text-white"
                  isDisabled={value === 0}
                  isLoading={rate.isPending}
                  onClick={async () => {
                    rate.mutate({ product_id: props.id, rate: value });
                    setTimeout(() => {
                      onClose();
                    }, 1000);
                  }}
                >
                  Rate
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
