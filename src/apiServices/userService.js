import axios from "axios"

const API_URL = "https://bookmybestclass.com/api/"


export const UserServices = ()=>{

    function batchDetails(){
        return  axios.get(API_URL + "batch/list")
    }
}