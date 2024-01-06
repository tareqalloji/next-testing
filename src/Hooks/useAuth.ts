import { APIInstance } from "@/Services/APIs/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Login = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await APIInstance.Login(values).then(async (res) => {
          sessionStorage.setItem("token", res.data.data.token);
          toast.success("Hello there!");
          await router.push("/Home");
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
  });
};
const Register = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await APIInstance.Register(values).then(async (res) => {
          sessionStorage.setItem("token", res.data.data.token);
          toast.success("Welcome to our shop, Enjoy!!");
          await router.push("/Home");
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
  });
};

export { Login, Register };
