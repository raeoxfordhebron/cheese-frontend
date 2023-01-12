const URL = "https://cheese-backend.onrender.com"

export const cheeseLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheeses= await response.json()
    return cheeses
}