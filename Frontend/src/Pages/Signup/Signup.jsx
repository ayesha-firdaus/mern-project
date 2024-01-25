import React, { useState } from 'react'
import styles from"./Signup.module.css"
import Button from '../../Utils/Button/Button';
import Message from '../../Utils/Message/Message';
import {useNavigate} from "react-router-dom";
export default function Signup() {
  const [formData,setformData]=useState({name:'',email:'',password:'',passwordConfirm:'',photo:null})
  const [loading,setloading]=useState(false);
  const [error,seterror]=useState(false);
  const [message,setmessage]=useState("");
  const Navigate=useNavigate();
  const handleChange = function (e) {
    if (e.target.id === 'photo') {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          // Create a temporary image element
          const img = new Image();
          img.src = reader.result;
  
          img.onload = () => {
            // Create a canvas element to resize the image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
  
            // Set the desired width and height (you can adjust these values)
            const maxWidth = 300;
            const maxHeight = 300;
  
            let newWidth = img.width;
            let newHeight = img.height;
  
            // Resize the image while maintaining aspect ratio
            if (img.width > maxWidth) {
              newWidth = maxWidth;
              newHeight = (img.height * maxWidth) / img.width;
            }
  
            if (img.height > maxHeight) {
              newHeight = maxHeight;
              newWidth = (img.width * maxHeight) / img.height;
            }
  
            canvas.width = newWidth;
            canvas.height = newHeight;
  
            // Draw the resized image onto the canvas
            ctx.drawImage(img, 0, 0, newWidth, newHeight);
  
            // Get the data URL of the resized image
            const resizedDataURL = canvas.toDataURL('image/jpeg'); // You can change the format if needed
  
            // Set the selected image preview with the resized URL
            setformData({ ...formData, photo: resizedDataURL });
          };
        };
  
        reader.readAsDataURL(file);
      }
    }
  
    const value = e.target.value;
    const name = e.target.id;
  
    setformData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  console.log(message)
const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    setloading(true);
  const res=await fetch("/api/auth/signup",{
    method:"POST",
    headers:{
      'Content-Type':"application/json",
    },
    body:JSON.stringify(formData)
  });
  const data=await res.json();
  console.log(data)
  if(data.status==="fail"||data.status==="error")
  {
    seterror(true);
    setloading(false);
    setmessage(data.message)

    return;
  }

setmessage(data.message)
setloading(false);
seterror(false);
Navigate('/login')
}
catch(err)
{
seterror(err)
setloading(false);

}


}
console.log(formData)
  return (
    <div className={styles.signup}>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor='name'>Enter Your Name</label>
        <input type="text" id='name'  onChange={handleChange} value={formData.name}  />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email'>Enter Your Email</label>
        <input type="email" id="email"  onChange={handleChange} value={formData.email} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='password'>Enter Your Password</label>
        <input type="password"  id="password"  onChange={handleChange} value={formData.password}/>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='passwordConfirm'>Enter Your Password Confirm</label>
        <input type="password" id='passwordConfirm' onChange={handleChange} value={formData.passwordConfirm} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='photo'>Upload an image</label>
        <input type="file"  accept='image/*' onChange={handleChange}  id='photo' />
      </div>
      <div  className={styles.btn}  ><Button message={"Submit"} loading={loading} loadingmessage='submitting' /></div>
      
    
    </form>
    {!loading&&error&&message.length>0&&<Message message={message} type={"error"} />}
    {!loading&&!error&&message.length>0&&<Message message={message} type={"success"} />}
    
    </div>
  )
}
