import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import ReactTagInput from "@pathofdev/react-tag-input";
import { Select } from "@windmill/react-ui";
import Error from "../form/Error";
import Title from "../form/Title";
import InputArea from "../form/InputArea";
import LabelArea from "../form/LabelArea";
import SelectOption from "../form/SelectOption";
import DrawerButton from "../form/DrawerButton";
import Uploader from "../image-uploader/Uploader";
import useCategorySubmit from "../../hooks/useCategorySubmit";

const CategoryDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    children,
    setChildren,
  } = useCategorySubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ">
        {id ? (
          <Title
            title="Update Category"
            description="Updated your Product category and necessary information from here"
          />
        ) : (
          <Title
            title="Add Category"
            description=" Add your Product category and necessary information from here"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category Image" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 items-center md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category ID" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required={true}
                  label="Category ID"
                  name="categoryId"
                  type="text"
                  placeholder="ID"
                />
                <Error errorName={errors.categoryId} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 items-center md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category Name" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required={true}
                  label="Category title"
                  name="title"
                  type="text"
                  placeholder="Category title"
                />
                <Error errorName={errors.title} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 items-center md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Description" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required={false}
                  label="Category description"
                  name="description"
                  type="text"
                  placeholder="Description"
                />
                {/* <Error errorName={errors.description} /> */}
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 items-center md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Priority" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name={"type"}
                  defaultValue ={"priority"}
                  // {...register(`${name}`, {
                  //   required: `${label} is required!`,
                  // })}
                >
                  <option value="" defaultValue hidden>
                    Select type
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </Select>
                <Error errorName={errors.parent} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Category" />
        </form>
      </Scrollbars>
    </>
  );
};

export default CategoryDrawer;
