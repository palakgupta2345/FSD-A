import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
import DisplayMarks from './DisplayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App a1={'Palak Gupta'} a2={'palakgupta@gmail.com'} a3={'829309878'} />

    <DisplayMarks/>

    {/* <Marks  m1={85} m2={86} m3={84} />
    <App a1={'Charu Gupta'} a2={'charug@gmail.com'} a3={'989301371'} />
    <Marks  m1={87} m2={83} m3={89} /> */}
  </StrictMode>,
)
