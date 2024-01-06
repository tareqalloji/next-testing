"use client";
import logo from "@/assets/favicon.png";
import { Button, Card, CardBody, Divider, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { Login } from "@/Hooks/useAuth";
export default function page() {
  const login = Login();
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .matches(/@[^.]*\./, "Email must be valid"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      login.mutate(values);
    },
  });

  return (
    <div className="min-w-screen min-h-screen px-8 flex justify-center items-center bg-gradient-to-tr from-[#F39B17] to-[#C12422] text-white shadow-lg">
      <Card
        isBlurred
        shadow="sm"
        className="border-none bg-background/60 dark:bg-default-100/50 w-96"
      >
        <form onSubmit={formik.handleSubmit}>
          <CardBody className="p-4">
            <div className="flex justify-center my-4">
              <Image src={logo} priority alt="logo" />
            </div>
            <div className="grid grid-cols-1 gap-4 my-5">
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
            <Button
              disableRipple
              className="mt-2 relative1 overflow-hidden hover:-translate-y-1 shadow-xl bg-background/30 after:content-[''] after:absolute  after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="lg"
              type="submit"
              isLoading={login.isPending}
            >
              Login
            </Button>
            <Divider className="my-4" />
            <Button
              color="warning"
              className="text-white"
              size="lg"
              as={Link}
              href="/Register"
              type="button"
            >
              Register Now
            </Button>
          </CardBody>
        </form>
      </Card>
    </div>
  );
}
