import axios from "axios"

const upload = async(file)=>{
    const data = new FormData()
    data.append("file", file)
    data.append('upload_preset', 'FiverrClone')
    try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dlxezww6n/image/upload', data)
        console.log(response);
        const {url} = response.data
        return url
    } catch (error) {
        console.log(error);
    }
}

export default upload