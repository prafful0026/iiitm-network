
import axios from "axios"

const uploadPic=async(media)=>{
    try {
        
        const form = new FormData()
        form.append('file',media)
        form.append('upload_preset',"frandzone")
        form.append('cloud_name',"prafful026")
        const res=await axios.post(process.env.REACT_APP_CLOUDINARY_URL,form)
        // console.log(res)
        return res.data.url
    } catch (error) {
        console.log(error)
        return 
    }
}

export default uploadPic