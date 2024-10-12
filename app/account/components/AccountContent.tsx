"use client";

import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountContent=()=>
{
    const router=useRouter();
    const{isLoading,user}=useUser();
    const[loading,setLoading]=useState(false);
    useEffect(()=>
    {
        if(!isLoading && !user)
        {
            router.replace('/');
            setLoading(false);
        }
        setLoading(true);
    },[isLoading,user,router]);

   
    return(
        <div className="flex flex-col gap-y-4">
            <p> You are currently on theSubscription mode.</p> 

         <Button
         disabled={loading||isLoading}
         onClick={()=>{}}
         className="w-[300px]">
            Open Cutomer Portal
         </Button>
        </div>
    );
};
export default AccountContent;