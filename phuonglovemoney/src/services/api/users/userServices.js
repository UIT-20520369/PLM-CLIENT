const  getAllUsers = async () =>{
    let data= null;
    const response = await fetch("https://localhost:7260/User");
    if(response.ok)
    {
        data= await response.json();
        return {users:data}
    }
   
}
export { getAllUsers}