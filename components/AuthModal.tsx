"use client";


import {useSupabaseClient,useSessionContext}from "@supabase/auth-helpers-react";
import {useRouter}  from "next/navigation";
import Modal from "./Modal"; 
import {Auth} from "@supabase/auth-ui-react";
import{ThemeSupa} from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal"
import {useEffect} from "react";

const AuthModal=()=>
{
    const  supabaseClient=useSupabaseClient();
     const router=useRouter();
     const {session}=useSessionContext();
     const {onClose,isOpen}=useAuthModal();

     
     const onChange=(open:boolean)=>
     {
       if(!open)
       {
        onClose();
       }
     }
     useEffect(()=>
        {
            if(session)
            {
                router.refresh();
                onClose();
            }
        },[session,router,onClose]
    )

    return(

        <Modal 
        title="welcome back"
        description="login to your account"
        isOpen={isOpen}
        onChange={onChange}
        >
        <Auth
        theme="dark"
        magicLink
        providers={["github","google"]}
        supabaseClient={supabaseClient}
        appearance={{
            theme:ThemeSupa,
            variables:{
                default:{
                 colors:{
                    brand:'#404040',
                     dividerBackground: 'rgb(234 88 12)',
                    brandAccent:'#22c55e'
                 }
                }
            }
        }}
         />
        </Modal>
    );
}
export default AuthModal;