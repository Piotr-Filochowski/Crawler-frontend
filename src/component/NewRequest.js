import React, {useState} from 'react'
import StickyFooter from "./StickyFooter";
import NavTabs from "./NavBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import picture from "../web-crawlers2.jpg";
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(' + picture + ')',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '50%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function NewRequest(props) {

    const classes = useStyles()

    const [formula, setFormula] = useState(
        {
            topic: "",
            url1: "",
            url2: "",
            url3: "",
            url4: "",
            comment: ""
        }
    );

    let handleChange = (e) => {
        setFormula({
            ...formula,
            [e.target.id]: e.target.value
        })
    }

    let handleSubmit = (e) => {
        axios.get('localhost:8080/as', formula).then(res => {
            console.log(res)
        })
    }


    return (
        <div className="container">
            <NavTabs/>
            <h1>New request!</h1>
            <form className={classes.form} noValidate onSubmit={handleSubmit} style={{margin: '20px'}}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="topic"
                    label="Topic"
                    name="topic"
                    autoFocus
                    fullWidth="true"
                    onChange={handleChange}
                />
                <br></br>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    name="url"
                    label="url"
                    type="text"
                    id="url1"
                    fullWidth="true"
                    onChange={handleChange}
                />
                <br></br>
                <TextField
                    variant="outlined"
                    margin="normal"
                    name="url"
                    label="url"
                    type="text"
                    id="url2"
                    fullWidth="true"
                    onChange={handleChange}
                />
                <br></br>
                <TextField
                    variant="outlined"
                    margin="normal"
                    name="url"
                    label="url"
                    type="text"
                    id="url3"
                    fullWidth="true"
                    onChange={handleChange}
                />
                <br></br>
                <TextField
                    variant="outlined"
                    margin="normal"
                    name="url"
                    label="url"
                    type="text"
                    id="url4"
                    fullWidth="true"
                    onChange={handleChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    name="comment"
                    label="comment"
                    type="text"
                    id="comment"
                    multiline="true"
                    rows="3"
                    fullWidth="true"
                    onChange={handleChange}
                />
                <br></br>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>

            </form>
            <StickyFooter/>
        </div>
    )
}

export default NewRequest