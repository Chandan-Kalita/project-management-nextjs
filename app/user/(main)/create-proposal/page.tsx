"use client"
import { Box, Container, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material"
import withRedux from "../../../../components/withStore"
import { useEffect, useState } from "react"

function CreateProposal() {
    const [title, setTitle] = useState("");
    useEffect(() => {
        console.log(title);

    }, [title])
    return (
        <Container>
            <Typography variant="h5" gutterBottom>Create Proposal</Typography>
            <Box component="div" className="outline outline-[0.5px] p-4">
                <Box component="form">
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={title}
                            onChange={(ev) => { setTitle(ev.target.value) }}
                        />
                    </FormControl>
                </Box>
            </Box>
        </Container>
    )
}

export default withRedux(CreateProposal)