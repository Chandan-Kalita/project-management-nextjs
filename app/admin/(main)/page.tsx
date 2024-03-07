"use client"
import { Dispatch } from "@/store";
import { getProposalCounts } from "@/store/selector/admin.selector";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<Dispatch>();
  const proposalCounts = useSelector(getProposalCounts)
  useEffect(()=>{
    dispatch.adminStore.getProposalCounts();
  },[])
  
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {Object.keys(proposalCounts).map((val: string) => {
          return (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div" className=" capitalize">
                  {val.toLowerCase()} Proposals
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {proposalCounts[val as keyof typeof proposalCounts]}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={"#"}>
                  <Button className="pl-0 text-left" size="small">
                    View
                  </Button>
                </Link>
              </CardActions>
            </Card>
          )
        })}
      </div>
    </>
  );
}
