"use client"
import AlertComponent from "@/components/Alert";
import MyDropzone from "@/components/Dropzone";
import FormControlComponent from "@/components/form-inputs/FormControlComponent";
import { Dispatch } from "@/store";
import { getProposalStatusChanged } from "@/store/selector/admin.selector";
import { getSubmitMsg } from "@/store/selector/proposal.selector";
import axiosService from "@/utils/axios.service";
import { Box, Button, Container, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router"
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
async function fetchProposalData(id: string) {
    try {
        const response = await axiosService.userAxios.get("/proposal/" + id);
        return response.data
    } catch (error) {
        console.log("Error in details api");
        console.log({ error });
        return null;
    }
}
const rejectionReasons = [
    {
        key: "project_title",
        val: "Project Title"
    },
    {
        key: "project_description",
        val: "Project Description"
    },
    {
        key: "objective",
        val: "Objective"
    },
    {
        key: "duration",
        val: "Duration"
    },
    {
        key: "budget",
        val: "Budget"
    },
    {
        key: "state",
        val: "State"
    },
    {
        key: "district",
        val: "District"
    },
    {
        key: "bank_name",
        val: "Bank Name"
    },
    {
        key: "ifsc_code",
        val: "Ifsc Code"
    },
    {
        key: "account_number",
        val: "Account Number"
    },
    {
        key: "income_source",
        val: "Income Source"
    },
    {
        key: "income",
        val: "Income"
    },
    {
        key: "land_size",
        val: "Land Size"
    },
    {
        key: "photo",
        val: "Photo"
    },
    {
        key: "address_proof",
        val: "Address Proof"
    },
    {
        key: "income_proof",
        val: "Income Proof"
    },
]
export default function ProposalDetails({ params }: { params: { id: string } }) {
    const [proposalDetails, setProposalDetails]: any = useState(null)
    const dispatch = useDispatch<Dispatch>();
    const formRef:any = useRef(null);
    const submitMsg = useSelector(getSubmitMsg);
    useEffect(() => {
        if (submitMsg.status) {
            formRef?.current?.reset();
        }
        scrollTo(0, 0)
    }, [submitMsg])
    useEffect(() => {
        fetchProposalData(params.id).then(async (data: any) => {
            setProposalDetails(data);
            console.log(data);
            
        })
    }, [params.id])

    function handleSubmit(ev:SyntheticEvent<HTMLFormElement>){
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget)
        let photo:any = formData.get("photo");
        let income_proof:any = formData.get("income_proof");
        let address_proof:any = formData.get("address_proof");

        if(!photo?.name){
            formData.delete("photo")
        }
        if(!income_proof?.name){
            formData.delete("income_proof")
        }
        if(!address_proof?.name){
            formData.delete("address_proof")
        }
        formData.append("id",params.id)
        dispatch.proposalStore.updateProposal(formData)
        
    }
    return proposalDetails && (
        <Container>
            <Typography variant="h5" gutterBottom>Update Proposal</Typography>
            {submitMsg.msg ? <AlertComponent text={submitMsg.msg} severity={submitMsg.status ? "success" : "error"} /> : ''}
                <Box onSubmit={handleSubmit} component="form" ref={formRef}>
                    <FormControlComponent
                        variant="standard"
                        id="project-title"
                        name="project_title"
                        label="Project Title"
                        defaultVal={proposalDetails.project_title}
                    />
                    <FormControlComponent
                        variant="standard"
                        id="project-description"
                        name="project_description"
                        label="Project Description"
                        defaultVal={proposalDetails.project_description}
                    />

                    <FormControlComponent
                        variant="standard"
                        id="objective"
                        name="objective"
                        label="Objective"
                        defaultVal={proposalDetails.objective}
                    />
                    <FormControlComponent
                        variant="standard"
                        id="duration"
                        type="number"
                        name="duration"
                        label="Duration"
                    defaultVal={proposalDetails.duration}
                    />

                    <FormControlComponent
                        variant="standard"
                        id="budget"
                        type="number"
                        name="budget"
                        label="budget"
                        defaultVal={proposalDetails.budget}
                    />

                    <FormControlComponent
                        variant="standard"
                        id="state"
                        name="state"
                        label="State"
                        defaultVal={proposalDetails.state}
                    />
                    <FormControlComponent
                        variant="standard"
                        id="district"
                        name="district"
                        label="District"
                        defaultVal={proposalDetails.district}
                    />

                    <FormControlComponent
                        variant="standard"
                        id="bank-name"
                        name="bank_name"
                        label="Bank Name"
                        defaultVal={proposalDetails.bank_name}
                        // defaultVal="Bank Name"
                    />

                    <FormControlComponent
                        variant="standard"
                        label="IFSC Code"
                        id="ifsc-code"
                        name="ifsc_code"
                        defaultVal={proposalDetails.ifsc_code}
                    />
                    <FormControlComponent variant="standard"
                        label="Account Number"
                        id="account-number"
                        name="account_number"
                        type="number"
                        defaultVal={proposalDetails.account_number}
                    />
                    <FormControlComponent variant="standard"
                        label="Income Source"
                        id="income-source"
                        name="income_source"
                        defaultVal={proposalDetails.income_source}
                    />
                    <FormControlComponent variant="standard"
                        label="Income per year in lakh"
                        id="income"
                        name="income"
                        type="number"
                        defaultVal={proposalDetails.income}
                    />
                    <FormControlComponent variant="standard"
                        label="Land Size (square foot)"
                        id="land-size"
                        name="land_size"
                        type="number"
                        defaultVal={proposalDetails.land_size}
                    />
                    
                    <MyDropzone heading="Upload Documents (leave empty if you don't want to change)"></MyDropzone>
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
           
        </Container>
    )
}
function RedDot({ niddle, haystack }: { niddle: string, haystack: [string] }) {
    return haystack.includes(niddle) ? <div className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold  bg-red-500  rounded-full -translate-y-[50%] top-[50%] -left-[3%]  dark:border-gray-900"></div> : ""
}