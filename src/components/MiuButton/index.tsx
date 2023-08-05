import { Button } from '@mui/material'

interface IProps{
  title?:string,
}


const MiuButton = ({title}:IProps) => {
  return <>
  
    <Button className="chooseButton" sx={{
        backgroundColor:"#091242",
        color:"#FFB629",
        transition:"0.5s all",
        fontWeight:600,

       
      "&:hover":{
        
        backgroundColor:"#091242"
    }
}}>{title}</Button>
</>
  
}

export default MiuButton