import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Piotr-Filochowski">
                Piotr-Filochowski & Material-ui & Stackoverflow
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright