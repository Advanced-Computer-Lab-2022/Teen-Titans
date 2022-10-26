import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/search/')
    })

    return (
        <div></div>
    )
}

export default DataFetching