import { Form, useLoaderData } from "react-router-dom"

function Show (props) {
    const cheese = useLoaderData()
    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <h2>{cheese.countryOfOrigin}</h2>
            <img src={cheese.image} alt={cheese.name}/>

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method="post">
                <input type="input" name="name" defaultValue={cheese.name}/>
                <input type="input" name="countryOfOrigin" defaultValue={cheese.countryOfOrigin}/>
                <input type="input" name="image" placeholder="Image of Cheese"/>
                <input type="submit" value={`Update ${cheese.name}`}/>
            </Form>
        </div>
        
    )
}

export default Show