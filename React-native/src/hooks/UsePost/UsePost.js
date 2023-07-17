import React, { useState } from "react";
import axios from "axios";


function usePost() {
  const url = "http://192.168.1.94:3000/create";
    const [datas,setDatas] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
 const post = async ({data,status}) => {
    try {
        const {data: responseData} = await axios.post(url,{data,status});
        
        setLoading(true)
        
        setDatas(responseData.documentId)
    }
    catch (err) {
        
        setError(err)
        setLoading(false)
        
    }


 }
   
    return {datas,post,error,loading}

}
      
export default usePost;
