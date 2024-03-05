"use client"
import withRedux from "@/components/withStore";
import { Dispatch } from "@/store";
import { getLoadingIndicatorStatus } from "@/store/selector/common.selector";
import { Button } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const s = useSelector(getLoadingIndicatorStatus)
  const dispatch = useDispatch<Dispatch>()
  function handleClick(){
    dispatch.commonStore.setShowLoadingIndicator(!s)
  }
  return (
    <>
    {s ? "true" :"false"}
    <h1>From Admin applications</h1>
    <Button onClick={handleClick}>CLick to toggle</Button>
    <Link href={`/admin`}>app</Link>
    </>
  );
}

export default withRedux(Home)