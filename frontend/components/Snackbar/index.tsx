'use client'

import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { createPortal } from "react-dom"
import { SnackBarStyled } from "./style";
import { useMounted } from "@/hooks/useMounted";

export const DEFAULT_DURATION = 3000;
export type VARIANT = "SUCCESS" | "ERROR";

type SnackbarProps = {
    message: string;
    timeout?: number;
    variant?: VARIANT;
}

type SnackBarContextReturn = {    
    timeout: number;
    openSnackbar: ({message, timeout}: SnackbarProps) => void;
};


export const SnackbarContext = createContext({} as SnackBarContextReturn);

export const Snackbar = ({children}: PropsWithChildren) => {
    const mounted = useMounted();
    const [opened, setIsOpened] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
    const [timeout, setInnerTimeout] = useState<number>(0);
    const [variant, setVariant] = useState<VARIANT>("SUCCESS");
    const [message, setMessage] = useState('') 
    if (!mounted) return null   
    
    const openSnackbar = ({message, timeout, variant = "SUCCESS"}:SnackbarProps) => {        
        if(!opened){            
            setIsOpened(true);
            setMessage(message);
            setVariant(variant);
            const time = timeout ?? DEFAULT_DURATION;
            setInnerTimeout(time);
            handleTimeout(time);
        }
    };

    const handleTimeout = (timeout: number) => {
        const timeoutId = setTimeout(() => {
            setIsOpened(false);
        }, timeout);
        setTimeoutId(timeoutId);
    }

    function handleClose() {
        clearTimeout(timeoutId);
    }

    

    return (        
        <SnackbarContext.Provider value={{
            openSnackbar,
            timeout
        }}>
        {children}
        {createPortal(
            opened && (
            <SnackBarStyled $variant={variant} $animationTime={timeout / 1000}>
                <span>{message}</span>
            </SnackBarStyled>),
            document.body
        )}
        </SnackbarContext.Provider>        
    )
}