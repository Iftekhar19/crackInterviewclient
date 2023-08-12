import axios from "axios";

export default  checkToken = async (cookie) => {
    
      
    let { data } = await axios.post("http://localhost:5000/api/checkuser", {
      
    },{
      headers:{
        Authorization:`Bearer ${cookie}`,
        "Content-Type":"application/json",
        "Allow-Access-Control-Origin":"*"
      }
    });
    return data;
    
};