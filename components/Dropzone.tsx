"use client"
import { IconButton, Snackbar, Typography } from '@mui/material'
import { MuiFileInput } from 'mui-file-input'
import React, { useCallback, useEffect, useState } from 'react'
import withRedux from './withStore'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '../store'
import { getToastInfo } from '../store/selector/common.selector'
import CloseIcon from '@mui/icons-material/Close';
export default withRedux(function MyDropzone() {
    const [photo, setPhoto] = React.useState(null)
    const [address_proof, setAddressProof] = useState(null)
    const [income_proof, setIncomeProof] = useState(null)
    const dispatch = useDispatch<Dispatch>();
    const toastInfo = useSelector(getToastInfo)
    const handleClose = () => {
        dispatch.commonStore.showToastEffect({ open: false, msg: "" })
    }
    const handleChange = (file: any, name: any) => {
        dispatch.commonStore.showToastEffect({ open: true, msg: "Invalid file type" })
        if (!["image/png", "image/jpeg", "application/pdf"].includes(file.type)) {
            return
        }
        console.log(file);

        switch (name) {
            case "photo":
                setPhoto(file)
                break;
            case "address_proof":
                setAddressProof(file)
                break;
            case "income_proof":
                setIncomeProof(file)
                break;

            default:
                break;
        }
    }

    return (

        <div className='p-2'>
            <Snackbar
                open={toastInfo.open}
                autoHideDuration={800}
                onClose={handleClose}
                message={toastInfo.msg}
                action={<IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>}
            />
            <Typography variant='h6' className='pb-5'>Upload documents</Typography>
            <div className='grid grid-cols-2 gap-y-3 gap-x-[100px]'>

                <div className="flex items-center justify-between">
                    <label htmlFor="">Photo</label>
                    <MuiFileInput inputProps={{ accept: '.png, .jpeg, .jpg, .pdf' }} name='photo' className=' max-w-[350px]' placeholder='Upload a document' value={photo} onChange={(ev => { handleChange(ev, "photo") })} />

                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="">Address Proof</label>
                    <MuiFileInput inputProps={{ accept: '.png, .jpeg, .jpg, .pdf' }} name='address_proof' className=' max-w-[350px]' placeholder='Upload a document' value={address_proof} onChange={(ev => { handleChange(ev, "address_proof") })} />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="">Income Proof</label>
                    <MuiFileInput inputProps={{ accept: '.png, .jpeg, .jpg, .pdf' }} name='income_proof' className=' max-w-[350px]' placeholder='Upload a document' value={income_proof} onChange={(ev => { handleChange(ev, "income_proof") })} />
                </div>
            </div>
        </div>
    )
})