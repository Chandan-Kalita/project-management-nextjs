import type { Metadata } from "next";
import "@/app/globals.css";
import AdminDrawer from "@/components/navbars/admin";
import AdminLayout from "@/components/navbars/admin";
import { Container } from "@mui/material";

export const metadata: Metadata = {
    title: "Admin App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
}
