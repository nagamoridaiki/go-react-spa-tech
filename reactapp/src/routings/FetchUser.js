import React, {useState, useEffect} from 'react'
import axios from 'axios';

const FetchUser = () => {
    const [data, setData] = useState([])
    const url = 'http://localhost:8080/users'

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
    },[])

    return (
        <div>
            <div className="alert alert-primary pb-0">
                {data.map(user => <div>{user.name}</div>)}
            </div>
        </div>
    )
};

export default FetchUser;