import { useLocation,useParams} from 'react-router-dom'

 export const LocationDisplay = () => {
  const location=useLocation();
    console.log("hi")
   return <div data-testid="location-display" id="path" >{location.pathname}</div>
  
    
    
  }

  export const add=()=>{
    console.log("hi")
    console.log("heelo")
  }

  export const Child=()=>{
    console.log("chid....")
    let {id}=useParams()
    return(
      <div>
        <h1>My Name is Arun</h1>
        <h2>ID: {id}  </h2>
      </div>
    )
    
  }



