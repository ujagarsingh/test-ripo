import React from "react";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from 'formik'
import * as Yup from 'yup'

const productFrmSchema = Yup.object().shape({
  name: Yup.string().required('Product Name Is Required'),
  description: Yup.string().required('Description Is Required'),
  category_id: Yup.string().required('Category Is Required'),
  purchases_price: Yup.number().required('Purchase Price Is Required'),
  selling_price: Yup.number().required('Selling Price Is Required')
    .min(Yup.ref('purchases_price'), 'Selling price must be greater than purchasing price')
})

const ProductFrm = ({
  btnText,
  onSubmitHandler,
  productData,
  categoryList = [],
}) => {
  return (
    <Formik
      initialValues={productData}
      validationSchema={productFrmSchema}
      onSubmit={(values) => {
        onSubmitHandler(values)
      }}
    >
      {(formik) => {
        const { handleSubmit, handleChange, handleBlur, values, errors } = formik;
        return (
          <form onSubmit={handleSubmit} className="addProduct_cover">
            <div className="addproduct_title_box">
              <div className="add_box">
                <Box className="addProductInputBox">
                  <label>
                    Product Name <span>*</span>{" "}
                  </label>
                  <TextField
                    name="name"
                    size="small"
                    error={errors.name}
                    helperText={errors.name}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}

                  />
                </Box>
                <Box className="addProductInputBox">
                  <label>
                    Description <span>*</span>{" "}
                  </label>
                  <TextField
                    size="small"
                    name="description"
                    error={errors.description}
                    helperText={errors.description}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  {/* {touched.description && errors.description && (
                    <span className="field_error">{errors.description}</span>
                  )} */}
                </Box>
                <Box className="addProductInputBox">
                  <label>
                    Purchase Price <span>*</span>{" "}
                  </label>
                  <TextField
                    size="small"
                    type="number"
                    name="purchases_price"
                    error={errors.purchases_price}
                    helperText={errors.purchases_price}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.purchases_price}
                  />
                </Box>
              </div>
              <div className="add_box">
                <Box className="addProductInputBox">
                  <label>
                    Selling Price <span>*</span>{" "}
                  </label>
                  <TextField
                    size="small"
                    type="number"
                    name="selling_price"
                    error={errors.selling_price}
                    helperText={errors.selling_price}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.selling_price}
                  />
                </Box>
                <Box className="addProductInputBox">
                  <label>
                    Quantity
                  </label>
                  <TextField
                    size="small"
                    name="quantity"
                    variant="outlined"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity}
                  />
                </Box>

                <Box className="addProductInputBox">
                  <label>
                    Category <span>*</span>
                  </label>

                  <Select
                    size="small"
                    sx={{ width: 210 }}
                    name="category_id"
                    error={errors.category_id}
                    helperText={errors.category_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category_id}
                  >


                    {categoryList.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </div>
            </div>
            <div className="addProduct_btn">
              <Button type="submit" variant="contained" color="success">
                {btnText}
              </Button>
            </div>
          </form>)
      }
      }
    </Formik >
  );
};

export default ProductFrm;
