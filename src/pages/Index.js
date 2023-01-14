import {Form, Link, useLoaderData} from "react-router-dom"

function Index (props) {
    const cheeses = useLoaderData()

    return <div>
        <h2>Create a Cheese</h2>
        <Form action="/create" method="post">
            <input type="input" name="name" placeholder="Name of Cheese"/>
            <input type="input" name="countryOfOrigin" placeholder="Country of Origin"/>
            <input type="input" name="image"/>
            <input type="submit" value="Create Cheese"/>
        </Form>

        {cheeses.map(cheese => {
       return <div key={cheese._id} className="cheeses">
            <Link to={`/cheese/${cheese._id}`}>
                <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name}/>
            <h3>{cheese.countryOfOrigin}</h3>
        </div>
    })
}
</div>
}

export default Index