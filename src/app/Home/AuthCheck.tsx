import { useRouter } from "next/navigation";
// import { useRouter } from "";

export const AuthCheck = (props: any) => {
  const router = useRouter();
  const user = sessionStorage.getItem("token"); // you need to implement this. In this example, undefined means things are still loading, null means user is not signed in, anything truthy means they're signed in

  if (typeof window !== "undefined" && user === null) router.push("/");

  if (!user) return router.push("/"); // a loading component that prevents the page from rendering

  return props.children;
};
