import React from "react";

export default function Profile({ imageUrl, description, person }) {
   
    return (
        <div className="border w-2 col-2" onMouseOver={function (e) {
            alert("Mouse over div: " + e.currentTarget.innerText);
            console.dir(e.currentTarget);
        }
        }>
            <h4>Profile</h4>
            <img className="img-fluid" src={imageUrl} width="100" />
            <p className="text-primary text-center p-2">{description}</p>
            {person && <p>{person.endsWith("a") ? "Mrs." : "Mr."} {person}</p>}
        </div>
    )
}