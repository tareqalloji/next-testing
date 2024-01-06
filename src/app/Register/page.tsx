"use client";
import { Register } from "@/Hooks/useAuth";
import logo from "@/assets/favicon.png";
import { Button, Card, CardBody, Divider, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
export default function RegisterPage() {
  const register = Register();
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/@[^.]*\./, "Email must be valid"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    c_password: yup
      .string()
      .required("Password confirmation is required")
      .min(8, "Password confirmation must be at least 8 characters")
      .oneOf([yup.ref("password"), ""], "Password must be matched"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      c_password: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      register.mutate(values);
    },
  });

  return (
    <div className="min-w-screen min-h-screen px-8 flex justify-center items-center bg-gradient-to-tr from-[#F39B17] to-[#C12422] text-white shadow-lg">
      <Card
        isBlurred
        shadow="sm"
        className="border-none bg-background/60 dark:bg-default-100/50 w-full md:w-1/2"
      >
        <form onSubmit={formik.handleSubmit}>
          <CardBody className="p-4">
            <div className="flex justify-center my-4">
              <Image src={logo} priority alt="logo" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 my-5">
              <div>
                <Input
                  type="text"
                  placeholder="John something..."
                  label="Name"
                  onChange={formik.handleChange("name")}
                />
                <span>
                  {formik.touched.name && formik.errors.name ? (
                    <label className="label">
                      <span className="text-red-500 mr-auto">
                        {formik.touched.name && formik.errors.name}
                      </span>
                    </label>
                  ) : null}
                </span>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="example@gmail.com"
                  label="Email"
                  onChange={formik.handleChange("email")}
                />
                <span>
                  {formik.touched.email && formik.errors.email ? (
                    <label className="label">
                      <span className="text-red-500 mr-auto">
                        {formik.touched.email && formik.errors.email}
                      </span>
                    </label>
                  ) : null}
                </span>
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="**********"
                  label="Password"
                  onChange={formik.handleChange("password")}
                />
                <span>
                  {formik.touched.password && formik.errors.password ? (
                    <label className="label">
                      <span className="text-red-500 mr-auto">
                        {formik.touched.password && formik.errors.password}
                      </span>
                    </label>
                  ) : null}
                </span>
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="**********"
                  label="Password confirmation"
                  onChange={formik.handleChange("c_password")}
                />
                <span>
                  {formik.touched.c_password && formik.errors.c_password ? (
                    <label className="label">
                      <span className="text-red-500 mr-auto">
                        {formik.touched.c_password && formik.errors.c_password}
                      </span>
                    </label>
                  ) : null}
                </span>
              </div>
            </div>
            <Button
              disableRipple
              className="mt-2 relative1 overflow-hidden hover:-translate-y-1 shadow-xl bg-background/30 after:content-[''] after:absolute  after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="lg"
              type="submit"
              isLoading={register.isPending}
            >
              Register
            </Button>
            <Divider className="my-4" />
            <Button
              color="warning"
              className="text-white"
              size="lg"
              as={Link}
              href="/"
              type="button"
            >
              Login
            </Button>
          </CardBody>
        </form>
      </Card>
    </div>
  );
}
