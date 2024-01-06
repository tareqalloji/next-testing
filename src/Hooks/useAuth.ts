import { APIInstance } from "@/Services/APIs/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Login = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await APIInstance.Login(values).then((res) => {
          sessionStorage.setItem("token", res.data.data.token);
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
    onSuccess: async (res: any) => {
      toast.success("Hello there!");
      return await router.push("/Home");
    },
  });
};
const Register = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: any) => {
      try {
        await APIInstance.Register(values).then((res) => {
          sessionStorage.setItem("token", res.data.data.token);
        });
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
    onSuccess: async (res: any) => {
      toast.success("Welcome to our shop, Enjoy!!");
      return await router.push("/Home");
    },
  });
};

export { Login, Register };
