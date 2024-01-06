"use client";
import { GetByFilter } from "@/Hooks/useProducts";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useFormik } from "formik";
import { BiFilter } from "react-icons/bi";
import * as yup from "yup";

const FilterForm = (props: any) => {
  const search: any = GetByFilter();
  const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    rate: yup.number().required("Rate is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      rate: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      search.mutate(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-2 md:gap-4 xl:gap-4">
        <div className="col-span-2">
          <div>
            <Input
              type="text"
              label="Search about titles"
              value={formik.values.title}
              onChange={formik.handleChange("title")}
            />
            <span>
              {formik.touched.title && formik.errors.title ? (
                <label className="label">
                  <span className="text-red-500 mr-auto">
                    {`${formik.touched.title}` && `${formik.errors.title}`}
                  </span>
                </label>
              ) : null}
            </span>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <Select
              label="Select rate"
              value={formik.values.rate}
              onChange={formik.handleChange("rate")}
              items={props.rating}
            >
              {props.rating.map((value: any) => {
                return (
                  <SelectItem key={`${value}`} value={`${value}`}>
                    {`${value}`}
                  </SelectItem>
                );
              })}
            </Select>
            <span>
              {formik.touched.rate && formik.errors.rate ? (
                <label className="label">
                  <span className="text-red-500 mr-auto">
                    {`${formik.touched.rate}` && `${formik.errors.rate}`}
                  </span>
                </label>
              ) : null}
            </span>
          </div>
        </div>
        <div className="flex m-auto">
          <Button
            fullWidth
            type="submit"
            className=""
            isLoading={search.isPending}
          >
            Filter
            <BiFilter className="text-2xl" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
