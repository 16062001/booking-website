import { Accordion, AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

//import Typography from '@mui/material/Typography';
import Steper from "./Steper";
import Date  from "./Date";
import Time  from "./Time";
import Accordions from "./Accordions";
import "bootstrap/dist/css/bootstrap.css";
import StaticDatePickerLandscape from "./Date";
import Login from "./Login";
import Booking from "./Booking";
import Footer from "./Footer";
const Index=()=>{
    return(
        <div class="bod">
        <Steper></Steper>
        <Accordions></Accordions>
       <Booking></Booking>
       <Footer></Footer>


        </div>
    );
    
};
export default Index;
