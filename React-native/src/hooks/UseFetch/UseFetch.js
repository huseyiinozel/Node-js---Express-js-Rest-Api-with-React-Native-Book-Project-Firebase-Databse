import { useEffect,useState } from "react"
import axios from 'axios'

function useFetch(url) {

const [data,setdata] = useState([]);
const [loading,setloading] = useState(true);
const [error,seterror] = useState(null);

const fetchData = async () => {
    try {
   const {data: responsedata} = await axios.get(url);
    setdata(responsedata)

    setloading(false)
    console.log(responsedata)
    }
    catch (err) {
        setloading(false)
        seterror(err.message)

    }
}




return {error,loading,data,fetchData}


}

export default useFetch;