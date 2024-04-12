import ProductService from "../services/product.services";
import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import CategoryFrm from "../components/Frm/CategoryFrm";
import categoryServices from "../services/category.services";
import {useNavigate} from "react-router-dom"


const initialData = {
    name: "",
    description: "",
};


const AddCategory = () => {

let navigate = useNavigate()
    const [categoryData, setAddCategory] = useState(initialData);

    const onChangeHandler = (e) => {
        setAddCategory({ ...categoryData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const res = await categoryServices.addCategory({
            ...categoryData,
            timeStamp: serverTimestamp(),
        });
        navigate("/categoryList")
        setAddCategory(initialData);
    };

    return (
        <AdminLayout
            title="Add New Product"
        >
            <CategoryFrm
                btnText="Create Category"
                onSubmitHandler={onSubmitHandler}
                categoryData={categoryData}
                onChangeHandler={onChangeHandler}
            />
        </AdminLayout>
    )
}

export default AddCategory
