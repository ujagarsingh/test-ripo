import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const clientSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    address: Yup.string().required('Address is Required'),
    state: Yup.string().required('State is Required'),
    city: Yup.string().required('City is Required'),
    phone:Yup.string().matches(/^\d{10}$/, 'Please enter a valid Number').required('Phone is Required'),
})

const ClientFrm = ({
    btnText,
    onSubmitHandler,
    clientData,
}) => {
    return (
        <Formik
            initialValues={clientData}
            validationSchema={clientSchema}
            enableReinitialize={true}
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
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        error={errors.name}
                                        helperText={errors.name}
                                        // value={clientData?.name}
                                        // label="Product Name"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="addProductInputBox">
                                    <label>Address <span>*</span> </label>
                                    <TextField
                                        size="small"
                                        onChange={handleChange}
                                        name="address"
                                        onBlur={handleBlur}
                                        value={values.address}
                                        error={errors.address}
                                        helperText={errors.address}
                                        // value={clientData?.address}
                                        // label="Description"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="addProductInputBox">
                                    <label>State <span>*</span> </label>
                                    <TextField
                                        size="small"
                                        onChange={handleChange}
                                        name="state"
                                        onBlur={handleBlur}
                                        value={values.state}
                                        error={errors.state}
                                        helperText={errors.state}
                                        // value={clientData?.state}
                                        // label="Description"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="addProductInputBox">
                                    <label>City <span>*</span> </label>
                                    <TextField
                                        size="small"
                                        onChange={handleChange}
                                        name="city"
                                        onBlur={handleBlur}
                                        value={values.city}
                                        error={errors.city}
                                        helperText={errors.city}
                                        // value={clientData?.city}
                                        // label="Description"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="addProductInputBox">
                                    <label>Phone <span>*</span> </label>
                                    <TextField
                                        type='number'
                                        name="phone"
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        error={errors.phone}
                                        helperText={errors.phone}
                                        // value={clientData?.phone}
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

export default ClientFrm
