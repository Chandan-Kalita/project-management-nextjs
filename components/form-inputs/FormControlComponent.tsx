import { FormControl, FormHelperText, FormLabel, Input, InputLabel } from "@mui/material";

export default function FormControlComponent({ variant, id, name, type, label, defaultVal }: { defaultVal?: any, label: string, variant: "standard" | "outlined" | "filled" | undefined, id: string, name: string, type?: string }) {
    return (
        // <FormControl fullWidth sx={{ m: 1 }} variant={variant}>
        //     <InputLabel htmlFor={id}>{label}</InputLabel>
        //     <Input
        //         id={id}
        //         name={name}
        //         type={type}
        //     // value={defaultVal}
        //     />
        // </FormControl>
        <FormControl fullWidth className="!my-3">
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Input id={id} name={name} type={type} className="!mt-1" defaultValue={defaultVal} />
        </FormControl>
    )
}