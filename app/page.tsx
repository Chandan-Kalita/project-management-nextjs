import Link from "next/link";

export default function Landing(){
    return (
        <>
        <h1>Project management</h1>
        <Link className=" text-blue-600 hover:underline block" href={"/user/login"}>User panel</Link>
        <Link className=" text-blue-600 hover:underline block" href={"/admin/login"}>Admin panel</Link>
        </>
    )
}