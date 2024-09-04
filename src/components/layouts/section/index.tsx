import style from 'styled-components'



export const Section = style.section<{bg: string}>`
    width: 100%;
    height: 100%;
    background-color: ${(p)=>p.bg ? p.bg : '#f5f5f5'};

`