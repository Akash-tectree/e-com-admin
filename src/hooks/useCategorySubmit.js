import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import CategoryServices from "../services/CategoryServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useCategorySubmit = (id) => {
  const [imageUrl, setImageUrl] = useState("");
  const [children, setChildren] = useState([]);
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ categoryId, title, description, type }) => {
    // if (!imageUrl) {
    //   notifyError('Icon is required!');
    //   return;
    // }
    const categoryData = {
      categoryId: categoryId,
      // slug: slug,
      title: title,
      image: imageUrl,
      description: description,
    };

    if (id) {
      console.log(categoryData);
      CategoryServices.updateCategory(id, categoryData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      console.log("check", categoryData);
      // CategoryServices.addCategory(categoryData)
      //   .then((res) => {
      //     setIsUpdate(true);
      //     notifySuccess(res.message);
      //   })
      //   .catch((err) => notifyError(err.message));
      // closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("title");
      // setValue("slug");
      setValue("categoryId");
      setValue("priority");
      setValue("description");
      setImageUrl("");
      setChildren([]);
      clearErrors("title");
      // setValue("slug");
      clearErrors("categoryId");
      clearErrors("priority");
      clearErrors("description");
      return;
    }
    if (id) {
      CategoryServices.getCategoryById(id)
        .then((res) => {
          if (res) {
            setValue("description", res?.result?.description);
            // setValue("slug", res.slug);
            setChildren(res.children);
            setValue("title", res?.result?.title);
            setValue("categoryId", res?.result?.categoryId);
            setValue("priority", res?.result?.priority);
            setImageUrl(res?.result?.image);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    children,
    setChildren,
  };
};

export default useCategorySubmit;
