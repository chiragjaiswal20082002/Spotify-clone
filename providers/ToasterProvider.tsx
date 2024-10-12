"use client";
import {Toaster} from "react-hot-toast";
const ToasterProvider=()=>
{
    return(
        <Toaster
        toastOptions={{
            style:{
                background:'#833',
                color:'#fff'
            }
        }}
        />
    )
}
export default ToasterProvider;