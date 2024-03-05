import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map(() => {
          return (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  All Proposals
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  10
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
