import { Slide, ToastContainer } from "react-toastify";
export default function ContainerToast() {
  return (
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
      theme="colored"
    />
  );
}
