"use client"
import { Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, TextField, Typography, styled } from "@mui/material"
import withRedux from "../../../../components/withStore"
import { ReactEventHandler, SyntheticEvent, useEffect, useState } from "react"
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MyDropzone from "../../../../components/Dropzone";
import FormControlComponent from "../../../../components/form-inputs/FormControlComponent";
function CreateProposal() {
    const formData = new FormData();
    function handleSubmit(ev: SyntheticEvent<HTMLFormElement>) {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        console.log(formData.get("photo"));
    }
    return (
        <Container>
            <Typography variant="h5" gutterBottom>Create Proposal</Typography>
            <Box component="div" className="outline outline-[0.5px] p-4">
                <Box onSubmit={handleSubmit} component="form">
                    <FormControlComponent
                        variant="standard"
                        id="project-title"
                        name="project_title"
                        label="Project Title"
                    />
                    <FormControlComponent
                        variant="standard"
                        id="project-description"
                        name="project_description"
                        label="Project Description"
                    />

                    <FormControlComponent
                        variant="standard"
                        id="objective"
                        name="objective"
                        label="Objective"
                    />
                    <FormControlComponent
                        variant="standard"
                        id="duration"
                        type="number"
                        name="duration"
                        label="Duration"
                    />

                    <FormControlComponent
                        variant="standard"
                        id="duration"
                        type="number"
                        name="budget"
                        label="budget"
                    />

                    <FormControlComponent
                        variant="standard"
                        id="state"
                        name="state"
                        label="State"
                    />
                    <FormControlComponent
                        variant="standard"
                        id="district"
                        name="district"
                        label="District"
                    />

                    <FormControlComponent
                        variant="standard"
                        id="bank-name"
                        name="bank_name"
                        label="Bank Name"
                    />

                    <FormControlComponent
                        variant="standard"
                        label="IFSC Code"
                        id="ifsc-code"
                        name="ifsc_code"
                    />
                    <FormControlComponent variant="standard"
                        label="Account Number"
                        id="account-number"
                        name="account_number"
                        type="number"
                    />
                    <FormControlComponent variant="standard"
                        label="Income Source"
                        id="income-source"
                        name="income_source"
                    />
                    <FormControlComponent variant="standard"
                        label="Income per year in lakh"
                        id="income"
                        name="income"
                        type="number"
                    />
                    <FormControlComponent variant="standard"
                        label="Land Size (square foot)"
                        id="land-size"
                        name="land_size"
                        type="number"
                    />
                    <MyDropzone></MyDropzone>
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default withRedux(CreateProposal)