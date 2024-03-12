import { Outlet,useSearchParams } from "react-router-dom"

export function Users() {
    const[useParams,setSearchParams] = useSearchParams()
    const showActiveUsers = useParams.get('filter')==='active'
    console.log(showActiveUsers)

  return (
  <>
    <div>
       <h1>user1</h1>
       <h1>user2</h1>
       <h1>user3</h1> 
    </div>
    <Outlet />
    <div>
        <button onClick={()=>setSearchParams({filter : 'active'})}>active user</button>
        <button  onClick={()=>setSearchParams({})}>reset filter</button>
    </div>
    
    <div>
        {

            showActiveUsers ? <h2>showActiveusers</h2> : <h2>showing all users</h2>
        }
       
    </div>
  </>
  )
}


