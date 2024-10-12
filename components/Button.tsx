import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
type ButtonProps= React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
className,
children,
disabled,
type="button",
...props
},ref)=>
{
    return(
        <button
        type={type}
        className={twMerge(`w-full rounded-full bg-green-500 border border-transparent px-3 py-3
        disabled:cursor-not-allowed disabled:opacity-50 text-black 
        font-bold hover:opacity-75 transition`,className)}
         
         disabled={disabled}
         ref= {ref}
         {...props}
         >
            {children}

        </button>
    )
})
//here we have created all the properties of the button to Button which normal html button have
//and we have also forwarded the all the props to the button
// without the use of interface creation and now it can be used as a normal html element 
Button.displayName="Button";
export default Button;