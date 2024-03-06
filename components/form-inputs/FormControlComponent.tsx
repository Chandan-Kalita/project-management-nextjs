import { FormControl, Input, InputLabel } from "@mui/material";

export default function FormControlComponent({ variant, id, name, type, label }: { label: string, variant: "standard" | "outlined" | "filled" | undefined, id: string, name: string, type?: string }) {
    return (
        <FormControl fullWidth sx={{ m: 1 }} variant={variant}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Input
                id={id}
                name={name}
                type={type}
            />
        </FormControl>
    )
}