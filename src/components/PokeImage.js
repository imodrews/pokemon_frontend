import React, { useState, useEffect } from "react"

const PokeImage = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/pokemon/${id}")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log("nope sorry"))
    }, [])

    return(
        <h1>Hello PkeImage</h1>
    )
}

export default PokeImage;

