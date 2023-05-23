import React from "react" 
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";

function reactIcon(){
    return (
        <div>
            <h3>This is just text</h3> 
            <span>
                <FaFacebookF className="fIcon"/>
            </span> 
            <span>
                <FaFacebookMessenger className="mIcon"/>  
            </span> 
        </div>
    )
}

export default reactIcon; 