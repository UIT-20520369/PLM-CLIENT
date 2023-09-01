const  getAllUsers = async () =>{
    let data= null;
    const response = await fetch(process.env.REACT_APP_API_URL+'/User');
    if(response.ok)
    {
        data= await response.json();
        return {users:data}
    }
   
}
export { getAllUsers}