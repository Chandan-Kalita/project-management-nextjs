"use client"
import { Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, TextField, Typography, styled } from "@mui/material"
import withRedux from "../../../../components/withStore"
import { useEffect, useState } from "react"
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
function CreateProposal() {
    const [title, setTitle] = useState("");
    useEffect(() => {
        console.log(title);

    }, [title])
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Create Proposal</Typography>
            <Box component="div" className="outline outline-[0.5px] p-4">
                <Box component="form">
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Project Title</InputLabel>
                        <Input
                            id="standard-adornment-amount"

                            required={true}

                        />

                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Project Description</InputLabel>
                        <Input
                            id="standard-adornment-amount"

                            required={true}

                        />

                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Objectives</InputLabel>
                        <Input
                            id="standard-adornment-amount"

                            required={true}

                        />

                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Duration</InputLabel>
                        <Input
                            id="standard-adornment-amount"

                            required={true}
                            type="number"

                        />

                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Budget</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                            type="number"
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">State</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">District</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Bank Name</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">IFSC Code</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Account Number</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                            type="number"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Income Source</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Income per year in lakh</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                            type="number"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Land Size (square foot)</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            required={true}
                            type="number"
                        />
                    </FormControl>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload Photo
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default withRedux(CreateProposal)