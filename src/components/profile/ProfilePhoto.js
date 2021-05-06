import React from 'react'
import P from './1617667623395.jpg'
function ProfilePhoto() {
    const sys = {
        width :"60%",
        height:"30%"
    }
    return (
        <div>
            <img src={P} style={sys} alt ='aymen tlijani'  />
            
        </div>
    )
}

export default ProfilePhoto;