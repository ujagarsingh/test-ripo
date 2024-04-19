import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup'

const categorySchema = Yup.object().shape({
    name: Yup.string().required('Category Name Is Required'),
    description: Yup.string().required('Category Description Is Required'),
})


const CategoryFrm = ({
    btnText,
    onSubmitHandler,
    categoryData,
}) => {
    return (
        <Formik
            initialValues={categoryData}
            validationSchema={categorySchema}
            onSubmit={(values) => {
                onSubmitHandler(values)
            }}
        >



            {(formik) => {
                const { handleSubmit, handleChange, handleBlur, values, errors } = formik;
                return (
                    <form onSubmit={handleSubmit} className="addProduct_cover">
                        <div className='addproduct_title_box'>
                            <div className="add_box">
                                <Box className="addProductInputBox">
                                    <label>Name <span>*</span> </label>
                                    <TextField
                                        name="name"
                                        size="small"
                                        error={errors.name}
                                        helperText={errors.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        // value={categoryData?.name}
                                        // label="Product Name"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="addProductInputBox">
                                    <label>Description <span>*</span> </label>
                                    <TextField
                                        name="description"
                                        size="small"
                                        error={errors.description}
                                        helperText={errors.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        // value={categoryData?.description}
                                        // label="Description"
                                        variant="outlined"
                                    />
                                </Box>

                            </div>
                        </div>
                        <div className="addProduct_btn">
                            <Button type="submit" variant="contained" color="success">
                                {btnText}
                            </Button>
                        </div>
                    </form>
                )
            }}
        </Formik>
    )
}

export default CategoryFrm
