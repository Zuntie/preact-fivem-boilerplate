import SendNuiCallback from '../utils/sendnuicallback.js';
import { create } from 'zustand'


const useStore = create((set) => ({
    value: "",
    buttonValue: "",

    resetState: () => set({ value: "", buttonValue: false }),

    setState: (payload) => {
        if (payload.type == 'showUI') {
            set({ visible: true, value: payload.value })
        }

        if (payload.type == 'hideUI') {
            SendNuiCallback('close', {}, res => {
                set({ visible: false })
            })
        }
    },
    setButtonValue: (value) => {
        set({ buttonValue: value })
    }
}))


export default useStore;