import React from 'react'
import { useToast } from "react-native-toast-notifications";


export const useShowToast = () => {
    const toast = useToast();

    // "normal" || 'success' || 'warning' || 'danger' || 'custom'
    const showToast = async (type: string, msg: string) => {
        toast.show(msg, {
            type: type,
            placement: "bottom",
            duration: 1800,
            animationType: "slide-in",
          });
    }

    return {
        showToast
    }
}
