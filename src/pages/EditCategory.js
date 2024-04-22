import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import CategoryFrm from "../components/Frm/CategoryFrm";
import categoryServices from "../services/category.services";

export default function EditCategory() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await categoryServices.updateCategory(id, categoryData);
    navigate(`/categoryList`)
  };

  const getSingleCategory = useCallback(async () => {
    const data = await categoryServices.getCategory(id);
    setCategoryData(data);
  }, [id]);

  useEffect(() => {
    getSingleCategory();
  }, [getSingleCategory]);

  return (
    <AdminLayout
      title="Edit Product"
    >
      <CategoryFrm
        btnText="Update Category"
        onSubmitHandler={onSubmitHandler}
        categoryData={categoryData}
        onChangeHandler={onChangeHandler}
      />
    </AdminLayout>
  );
}