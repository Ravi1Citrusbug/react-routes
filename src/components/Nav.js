import { NavLink ,useNavigate } from "react-router-dom"

export const Nav=()=>{
    const navigate = useNavigate();
    return (
        <nav className="primary-nav">
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/about'>About</NavLink>
            {/* <button onClick = {()=>navigate('order-summary',{ replace:true })}>place order</button> */}
            <NavLink to = '/product'>product</NavLink>
        </nav>
    )
} 