import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useAdmin = user =>{
    const [Admin,setAdmin]=useState(false)
    const [adminLoading , setAdminLoading] = useState(true)
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:4000/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    if(res.status === 403){
                        toast.error('Failed to Make an admin');
                    }
                    return res.json()})
                .then(data => {
                    setAdmin(data.Admin)
                    setAdminLoading(false)
                    
    
                })
        }

    },[user])
    return{Admin,setAdmin,setAdminLoading,adminLoading};
}
export default useAdmin;