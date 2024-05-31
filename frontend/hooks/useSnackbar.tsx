import { useContext } from "react";
import { SnackbarContext } from "../components/Snackbar";

export const useSnackbar = () => {
    const { openSnackbar, timeout } = useContext(SnackbarContext);
    return { openSnackbar, timeout };
};