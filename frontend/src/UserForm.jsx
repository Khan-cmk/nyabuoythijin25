import { useState} form "react";
import { api} form" ../api";

export default function UserForm({ onSuccess}) {
    const [form, setForm] = useState({  name: "",email : "", age:"", city: ""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/users", form);
        setForm({ name : "", email:"",age:"",city:""});
        onSuccess();
    }; 
     
    return(
        <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e)  => setForm({{...form, name: e.target.value})}/>
        <input placeholder ="EMAIL"ON onChange={(e)}
        
        </form>
    )
}