"use client"

import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from "@mui/material"
import withRedux from "../../../../components/withStore"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "../../../../store"
import { getProposalCount, getProposals } from "../../../../store/selector/admin.selector"
import Link from "next/link"

function ApprovedProposals() {
    const dispatch = useDispatch<Dispatch>();
    const proposals = useSelector(getProposals);
    const proposalCount = useSelector(getProposalCount)
    useEffect(() => {
        console.log("ran");
        dispatch.adminStore.getProposals({ proposalStatus: "ACCEPTED" })
    }, [])
    console.log(proposals);
    return (
        <Container>
            <div className="flex justify-between">
                <Typography variant="h5" gutterBottom>Approved Proposals</Typography>
                <Typography variant="h6" gutterBottom>Total Proposals : {proposalCount}</Typography>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Project Title</TableCell>
                            <TableCell align="left">Objective</TableCell>
                            <TableCell align="right">Budget</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {proposals.map((row: any) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.project_title}</TableCell>
                                <TableCell align="left">{row.objective}</TableCell>
                                <TableCell align="right">{row.budget}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center"><Link className=" text-blue-600 hover:underline" href={`/admin/proposal-details/${row.id}`}>Actions</Link></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </Container>
    )
}

export default ApprovedProposals
