import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import MyButton from "./CustomButton"
import MyLoader from "./Loader"

export const PageLayout = (props) => {
    return (
        <>
            <NavBar />
            <br />
            <Typography variant="h5">
                <center>Welcome to the Microsoft Authentication Library For React Quickstart</center>
            </Typography>
            <br />
            {props.children}
           <MyButton />
           <MyLoader />
        </>
    );
};