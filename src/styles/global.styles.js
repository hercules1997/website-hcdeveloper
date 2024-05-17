import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
            
         font-family: "Source Code Pro", monospace;
  font-optical-sizing: auto;
  font-style: normal
     }

     body {
        -webkit-fon-smoothing: antialiased;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(28,38,73,1) 18%, rgba(48,64,124,1) 40%, rgba(48,64,124,1) 63%, rgba(28,38,73,1) 84%, rgba(0,0,0,1) 100%);
     }

     body, input, button, select {
        font: 1rem "Source Code Pro", monospace;
     }

     h1, h2, p, span, strong, button, label, input {
        line-height: 100%;
        outline: none;
     }

     #root {
        max-width: 1280px;
        margin: 0 auto;
     }

     button {
        cursor: pointer;
     }
       
`
