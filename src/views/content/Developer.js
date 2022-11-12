import { Typography } from "@mui/material";
import Devfolio from "components/DevfolioButton";

export default function Developer() {
    return(
        <>
        <div className="page-header">
            <Typography variant="h1" fontSize={"4rem"} sx={{textAlign: "center", mt:25}}>This is testing page</Typography>
            <Devfolio/>
        </div>
        </>
    );
}