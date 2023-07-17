import React, { useState } from "react";
import axios from "axios";


function usePost() {
  const url = "http://192.168.1.94:3000/change";
    const [datas,setDatas] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
 const post = async (data) => {
    try {
        console.log(data);
        const {data: responseData} = await axios.post(url,{id:data});

        setDatas(responseData)
        setLoading(true)
       
    }
    catch (err) {
        
        setError(err)
        setLoading(false)
        
    }


 }
   
    return {datas,post,error,loading}

}
      
export default usePost;
