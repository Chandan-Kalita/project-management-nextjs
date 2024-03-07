"use client"
import { Dispatch } from "@/store";
import { getProposalStatusChanged } from "@/store/selector/admin.selector";
import axiosService from "@/utils/axios.service";
import { Box, Button, Container, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router"
import { SyntheticEvent, useEffect, useState } from "react";
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
    useEffect(() => {
        fetchProposalData(params.id).then((data: any) => {
            setProposalDetails(data);
            console.log(data);

        })
    }, [params.id])

    return proposalDetails && (
        <Container>
            <Typography variant="h6">{proposalDetails.id}</Typography>
            <hr className="my-5" />
            <Typography className="relative" variant="h5">
                Project Title : {proposalDetails.project_title}
            <RedDot niddle="project_title" haystack={proposalDetails.rejectionReason} />

                </Typography>
            <hr className="my-5" />
            <div className="relative">
            Project Description : {proposalDetails.project_description}
            <RedDot niddle="project_description" haystack={proposalDetails.rejectionReason} />

            </div>
            <hr className="my-5" />
            <div className="relative">Objective:{proposalDetails.objective}
                <RedDot niddle="objective" haystack={proposalDetails.rejectionReason} />
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-3 gap-5">
                <div className="relative">Duration: {proposalDetails.duration} Year
                    <RedDot niddle="duration" haystack={proposalDetails.rejectionReason} />
                </div>
                <div className="relative">Budget: {proposalDetails.budget} Cr
                    <RedDot niddle="budget" haystack={proposalDetails.rejectionReason} />
                </div>
                <div className="relative">State: {proposalDetails.state}
                    <RedDot niddle="state" haystack={proposalDetails.rejectionReason} />
                </div>
                <div className="relative">District: {proposalDetails.district}
                    <RedDot niddle="district" haystack={proposalDetails.rejectionReason} />
                </div>
                <div className="relative">Ifsc Code: {proposalDetails.ifsc_code}
                <RedDot niddle="ifsc_code" haystack={proposalDetails.rejectionReason} />
                
                </div>
                <div className="relative">Account Number: {proposalDetails.account_number}
                <RedDot niddle="account_number" haystack={proposalDetails.rejectionReason} />
                </div>
                <div className="relative">Income Source: {proposalDetails.income_source}
                <RedDot niddle="income_source" haystack={proposalDetails.rejectionReason} />
                
                </div>
                <div className="relative">Income: {proposalDetails.income} Lpa
                <RedDot niddle="income" haystack={proposalDetails.rejectionReason} />
                
                </div>
                <div className="relative">Land Size: {proposalDetails.land_size} sq ft
                <RedDot niddle="land_size" haystack={proposalDetails.rejectionReason} />
                
                </div>
                <div className="relative"><Link className=" text-blue-600 hover:underline" target="_blank" href={proposalDetails.photo_path}>Photo</Link>
                <RedDot niddle="photo" haystack={proposalDetails.rejectionReason} />
                
                </div>
                <div className="relative"><Link className=" text-blue-600 hover:underline" target="_blank" href={proposalDetails.address_proof_path}>Address Proof</Link>
                <RedDot niddle="address_proof" haystack={proposalDetails.rejectionReason} />
                
                </div>
                <div className="relative"><Link className=" text-blue-600 hover:underline" target="_blank" href={proposalDetails.income_proof_path}>Income Proof</Link>
                <RedDot niddle="income_proof" haystack={proposalDetails.rejectionReason} />
                
                </div>

            </div>
            <hr className="my-5" />

            <div className="flex items-center">
                Status : <Typography className="!ml-2" variant="h6">{proposalDetails.status}</Typography>
            </div>
            {
                proposalDetails.status == "REJECTED"
                    ?
                    <div>
                        Rejection Comment : <span>{proposalDetails.adminComment}</span>
                    </div>
                    :
                    ""
            }
        </Container>
    )
}
function RedDot({ niddle, haystack }: { niddle: string, haystack: [string] }) {
    return haystack.includes(niddle) ? <div className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold  bg-red-500  rounded-full -translate-y-[50%] top-[50%] -left-[3%]  dark:border-gray-900"></div> : ""
}