import { useParams } from "react-router-dom"

const URL = "https://cheese-backend.onrender.com"

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheeses= await response.json()
    return cheeses
}

export const cheeseLoader = async () => {
    const response = await fetch(URL + "/cheese/" + params.id)
    const cheese = await response.json()
    return cheese
}