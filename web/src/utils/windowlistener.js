import { useEffect } from "react"
import useStore from "../state/store"


const WindowListener = ({children}) => {
    const { setState } = useStore()

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key == 'Escape') {
                setState({ type: 'hideUI' })
            }
        })
    }, []);

    useEffect(() => {
        window.addEventListener('message', (event) => {
            const { value } = event.data.data;
            const type = event.data.type
            setState({ type: type, value: value })
        })
    }, [])
    return children;
}


export default WindowListener;