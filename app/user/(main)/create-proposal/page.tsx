"use client"
import { Alert, Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, TextField, Typography, styled } from "@mui/material"
import withRedux from "../../../../components/withStore"
import { ReactEventHandler, SyntheticEvent, useEffect, useRef, useState } from "react"
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MyDropzone from "../../../../components/Dropzone";
import FormControlComponent from "../../../../components/form-inputs/FormControlComponent";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../../../store";
import { getSubmitMsg } from "../../../../store/selector/proposal.selector";
import { useRouter } from "next/navigation";
import AlertComponent from "../../../../components/Alert";
function CreateProposal() {
    const formData = new FormData();
    const submitMsg = useSelector(getSubmitMsg);
    const router = useRouter();
    useEffect(() => {
        if (submitMsg.status) {
            formRef?.current?.reset();
        }
        scrollTo(0, 0)
    }, [submitMsg])
    const dispatch = useDispatch<Dispatch>();
    const formRef: any = useRef(null);
    function handleSubmit(ev: SyntheticEvent<HTMLFormElement>) {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        dispatch.proposalStore.submitProposal(formData);
    }
    return (
        <Container>
            <Typography variant="h5" gutterBottom>Create Proposal</Typography>

            {submitMsg.msg ? <AlertComponent text={submitMsg.msg} severity={submitMsg.status ? "success" : "error"} /> : ''}

            <Box component="div" className="outline outline-[0.5px] p-4">
                <Box onSubmit={handleSubmit} component="form" ref={formRef}>
                    <FormControlComponent
                        variant="standard"
                        id="project-title"
                        name="project_title"
                        label="Project Title"
                    // defaultVal={"Project Title"}
                    />
                    <FormControlComponent
                        variant="standard"
                        id="project-description"
                        name="project_description"
                        label="Project Description"
                    // defaultVal="Project Description"
                    />

                    <FormControlComponent
                        variant="standard"
                        id="objective"
                        name="objective"
                        label="Objective"
                    // defaultVal="Objective"
                    />
                    <FormControlComponent
                        variant="standard"
                        id="duration"
                        type="number"
                        name="duration"
                        label="Duration"
                    // defaultVal={2}
                    />

                    <FormControlComponent
                        variant="standard"
                        id="duration"
                        type="number"
                        name="budget"
                        label="budget"
                    // defaultVal={3}
                    />

                    <FormControlComponent
                        variant="standard"
                        id="state"
                        name="state"
                        label="State"
                    // defaultVal={"Assam"}
                    />
                    <FormControlComponent
                        variant="standard"
                        id="district"
                        name="district"
                        label="District"
                    // defaultVal="District"
                    />

                    <FormControlComponent
                        variant="standard"
                        id="bank-name"
                        name="bank_name"
                        label="Bank Name"
                    // defaultVal="Bank Name"
                    />

                    <FormControlComponent
                        variant="standard"
                        label="IFSC Code"
                        id="ifsc-code"
                        name="ifsc_code"
                    // defaultVal="ifsc_code"
                    />
                    <FormControlComponent variant="standard"
                        label="Account Number"
                        id="account-number"
                        name="account_number"
                        type="number"
                    // defaultVal={123456}
                    />
                    <FormControlComponent variant="standard"
                        label="Income Source"
                        id="income-source"
                        name="income_source"
                    // defaultVal="income_source"
                    />
                    <FormControlComponent variant="standard"
                        label="Income per year in lakh"
                        id="income"
                        name="income"
                        type="number"
                    // defaultVal={123}
                    />
                    <FormControlComponent variant="standard"
                        label="Land Size (square foot)"
                        id="land-size"
                        name="land_size"
                        type="number"
                    // defaultVal={12}
                    />
                    <MyDropzone></MyDropzone>
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default withRedux(CreateProposal)