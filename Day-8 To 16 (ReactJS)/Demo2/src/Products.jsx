import {Link,Outlet} from 'react-router-dom'

function Products() {

    return (
        <>
        
            <h1>Products</h1>

            <nav>

                <Link to="phone">Phone</Link> |
                <Link to="laptop">Laptop</Link>

            </nav>
            <Outlet />
        </>
    )

}

export default Products