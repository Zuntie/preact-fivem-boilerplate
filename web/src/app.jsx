import { render } from 'preact';
import { useEffect } from 'preact/hooks';

import Homepage from '.';
import WindowListener from './utils/windowlistener';
import useStore from './state/store';

import './style.css';


export function App() {
	const { visible } = useStore()

  useEffect(() => {
    if (visible == true) {
      document.body.style.display = 'flex'
    } else {
      document.body.style.display = 'none'
    }
  }, [visible])

  return (
      <WindowListener>
        {visible == true ? <Homepage /> : void (0)}
      </WindowListener>
  )
}


render(<App />, document.getElementById('app'));