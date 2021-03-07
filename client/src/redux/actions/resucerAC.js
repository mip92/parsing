import axios from "axios";

export const getH= (h1,h2,h3,h4) => {
    return {
        type: "GET_H",
        h1,
        h2,
        h3,
        h4
    }
}

export const sendLinkThunk = (url) =>async(dispatch)=> {
    const data = await axios.post("http://localhost:5000/api/search/find",{url})
    dispatch(getH(data.data.h1,data.data.h2,data.data.h3,data.data.h4))
    console.log(data.data.message)
}
export const asdasdasd = (job_text) =>async(dispatch)=> {
    const data = await axios.post("https://advego.com/text/seo/", {job_text})
    console.log(data.data.message)
}
