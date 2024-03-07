import { Alert } from "@mui/material";

export default function AlertComponent({ text, severity }: { text: string, severity: any }) {
    return <div className=" py-5"><Alert severity={severity}>{text}</Alert></div>
}