import style from 'styled-components'




export const Button = style.button<{primary?: boolean}>`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;    
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    ${(props) => props.primary ? `background-color: brown;` : `background-color: yellow;`}
    &:hover {
        background-color: #45a049;
    }

`