import React, {useState, useEffect } from 'react'
import NavBar from "./NavBar";
import StickyFooter from "./StickyFooter";
import axios from 'axios'
import RequestCard from './RequestCard'

function History(props) {

    const [data, setData] = useState()

    let cardsWithdata = "aaa";

    useEffect(() => {
        const fetchData = async () => {
            axios.get('http://localhost:8080/scrap', {
                params: {
                    username: props.login.login
                }
            }).then(res => {
                setData(
                res.data.scrappingRequestList.map((temp) => {
                    return (
                        <RequestCard data={temp}/>
                    )
                }))
            }).catch(error => {
                console.log(error)
            })
        }
        fetchData()
    }, []);

    console.log(cardsWithdata)
    return (
        <div>
            <NavBar/>
            <h1>History!</h1>
            {data}
            <StickyFooter/>
        </div>
    )

}

export default History