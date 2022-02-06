import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // CSS RESET
    *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
        all: unset;
        display: revert;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    a { cursor: revert; }
    ol, ul, menu { list-style: none; }
    img { max-width: 100%; }
    table { border-collapse: collapse;}
    textarea { white-space: revert; }
    :where([hidden]){ display:none; }
    :where([contenteditable]){
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        -webkit-line-break: after-white-space;
    }
    :where([draggable="true"]) { -webkit-user-drag: element; }

    // STYLING STARTS HERE
    body {
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyle;