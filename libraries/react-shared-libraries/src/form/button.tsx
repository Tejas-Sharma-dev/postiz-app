import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import {clsx} from "clsx";

export const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {secondary?: boolean}> = (props) => {
    return (
        <button {...props} type={props.type || 'button'} className={clsx(`${props.secondary ? 'bg-sixth' : 'bg-forth'} px-[24px] h-[40px] cursor-pointer items-center justify-center flex`, props?.className)} />
    )
}