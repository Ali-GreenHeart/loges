import { Button } from '@mui/material'

const MiuButton = () => {
  return <>
  
    <Button className="chooseButton" sx={{
        backgroundColor:"#091242",
        color:"#FFB629",
        transition:"0.5s all",
        fontWeight:600,

       
      "&:hover":{
        
        backgroundColor:"#091242"
    }
}}>Choose Plan</Button>
</>
  
}

export default MiuButton