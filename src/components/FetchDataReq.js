import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchDataReq() {
    const [post,setpost] = useState({})
    const [id,setId] = useState(1)
    const [reqBtnClick,setReqBtnClick] = useState(1)
    const handlePost = () => {
        setReqBtnClick(id);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${reqBtnClick}`)
        .then((response) => {
            console.log(response.data)
            setpost(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[reqBtnClick])
  return (
    <div className='PersonList'>
        <h3>Request by user...</h3>
        <input type="text"  onChange={(event) => setId(event.target.value)} /><br />
        <button onClick={handlePost}>Submit</button><br />
        {post.title}
    </div>
  )
}