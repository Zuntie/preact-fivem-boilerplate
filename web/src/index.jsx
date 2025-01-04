import { useState, useEffect } from 'preact/hooks';
import useStore from './state/store';
import SendNuiCallback from './utils/sendnuicallback';


export default function Homepage() {
    const { value, buttonValue, setButtonValue, resetState } = useStore();
    const [whoami, setWhoami] = useState('?')

    useEffect(() => {
        SendNuiCallback('whoami', {}, (cb) => {
            setWhoami(cb)
        })
    }, [])

    return (
        <div className='nui-wrapper w-screen h-screen flex justify-center items-center'>
            <div id="nui-content" className='w-1/2 h-1/2 bg-red-400'>
                <p><strong>Value:</strong> {value}</p>
                <p><strong>ButtonValue:</strong> {buttonValue}</p>
                <p><strong>Who am i: </strong> {whoami}</p>
                <button type="button" className='bg-slate-500 p-2 border-2 mt-2 text-white font-semibold rounded-lg' onClick={() => setButtonValue('Button Value')}>Change Value</button>
                <button type="button" className='bg-slate-500 p-2 border-2 ml-3 text-white font-semibold rounded-lg' onClick={() => resetState()}>Reset</button>
            </div>
        </div>
    )
}