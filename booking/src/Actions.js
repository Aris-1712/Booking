import Axios from 'axios'



const location=(obj)=>{
    return{
        type:"GET_LOCATION",
        val:obj
    }
}
export const  getLocations=()=>{
    return(async(dispatch)=>{
        try{
            // console.log("here")

        let res=await Axios.get("http://localhost:3001/master/all")
        // console.log(res)
        dispatch(location(res.data))
    }
    catch(err){
        console.log(err)
    }
    })
}
const slots=(obj)=>{
    return({
        type:'GET_SLOTS',
        val:obj
    })
}
export const getSlots=()=>{
    return(async(dispatch)=>{
        let res=await Axios.get("http://localhost:3001/master/slot/all")
        if(res.status===200)
        {
            dispatch(slots(res.data))
        }
        else{
            console.log("Error fetching data")
        }

    })
}

const purpose=(obj)=>{
    return{
        type:"GET_PURPOSE",
        val:obj
    }
}
export const  getPurposes=()=>{
    return(async(dispatch)=>{
        try{
            // console.log("here")

        let res=await Axios.get("http://localhost:3001/master/purpose/all")
        // console.log(res)
        dispatch(purpose(res.data))
    }
    catch(err){
        console.log(err)
    }
    })
}