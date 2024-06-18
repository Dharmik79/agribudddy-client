import React from "react";
import { useFormik } from "formik";
import { postResponse } from "../../services/API/CommonAPI";

const admin = JSON.parse(localStorage.getItem("login"));

const CreateProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      category: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let data = {
        name: values.name,
        description: values.description,
        spec: values.description,
        price: values.price,
        uid: admin?.admin?._id,
      };
      await postResponse("product/addProduct", data);

      window.location.href = "Products";
      formik.resetForm();
    },
  });

  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-1 pt-15 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create a Product</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Fill in the details to create a new product.</p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={formik.handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label htmlFor="name" className="leading-loose">Product Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Name"
                    className="input p-1 rounded-md border-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="price" className="leading-loose">Price</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700 font-bold">$</span>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Price"
                      className="input pl-18 p-1 rounded-md border-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="description" className="leading-loose">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Product description"
                    rows="3"
                    className="input p-1 rounded-md  border-1"
                  ></textarea>
                </div>
                <div className="pt-4 items-center">
                  <button type="submit" className="btn-create bg-blue-300 flex justify-center items-center w-full text-white px-4 py-1 rounded-md focus:outline-none">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductForm;
