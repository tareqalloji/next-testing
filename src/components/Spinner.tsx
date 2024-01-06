import { Spinner } from "@nextui-org/spinner";

const SpinnerItem = () => {
  return (
    <div className="flex fixed w-full h-full top-0 left-0 justify-center items-center overflow-hidden z-[100] bg-white">
      <Spinner size="lg" className="fixed flex justify-center items-center" />
    </div>
  );
};

export default SpinnerItem;
