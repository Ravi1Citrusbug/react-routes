import { NavLink ,useNavigate } from "react-router-dom"

export const Nav=()=>{
    const navigate = useNavigate();
    return (
        <nav>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/about'>About</NavLink>
            <button onClick = {()=>navigate('order-summary')}>place order</button>
        </nav>
    )
} 