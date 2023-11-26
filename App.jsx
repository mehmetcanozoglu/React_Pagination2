import { useEffect, useState } from "react";
import Users from "./components/users";
import Pagination from "./components/pagination";

function App() {

  const [users,setUsers] = useState([]);
  const [loading,setLoading] =useState(false);
  const [page,setPage] =useState(1);
  const [TotalPage, setTotalPage] = useState(5)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
      const data = await res.json()
      setLoading(false);
      setUsers(data.results)
    };
    fetchUsers();
  },[]);

  let handclick = num => {
    setPage(num)
  }

  return (
    <div>
      <h1>Pagination App</h1>
      <h5>Page : {page}</h5>
      {loading ? <p>Loading...</p> : <>
      <Users users={users} page={page}/>
      <Pagination TotalPage={TotalPage} handclick={handclick}/>
      </>}

    </div>
    
  ) 
}

export default App;