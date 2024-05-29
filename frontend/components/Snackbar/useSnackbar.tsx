import { useContext } from "react";
import { SnackbarContext } from ".";

export const useSnackbar = () => {
    const { openSnackbar, timeout } = useContext(SnackbarContext);
    return { openSnackbar, timeout };
};