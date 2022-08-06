import styled from 'styled-components';

//--- сетка главного экрана
const style_root = styled.div`
`;
/*
const style_root = styled.div`
    
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-template-rows : 1fr 1fr 1fr;
    grid-gap : 20px;
    padding : 8px;
`;
*/

const style_sample_el0 = styled.div`
border-radius: 8px;
margin: 2px;
`;

const style_sample_el1 = styled.div`
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: linear-gradient(227deg,#E7F0FD 50%,rgb(255 255 255) 74.13%);
border: 2px solid #75BDFF;

border-radius: 8px;
`;


const style_title = styled.div`

left: 0%;
right: 0%;
top: 0%;
bottom: 86%;

font-family: 'Inter';
font-style: normal;
font-size: 16px;
font-weight: bold;
line-height: 15px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

color: #000000;
padding: 16px;

`;

const style_body = styled.div`
box-sizing: border-box;

left: 0%;
right: 0%;
top: 16%;
bottom: 26.4%;

border-width: 1px 0px;
border-style: solid;
border-color: #75BDFF;
padding: 16px;

white-space: pre;
`;
//-- white-space: pre; нужен для корректного перевода строк в тексте

const style_result = styled.div`

left: 0%;
right: 0%;
top: 73.6%;
bottom: 0%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

padding : 12px;
color: #000000;
padding: 16px;

white-space: pre;
`;
//-- white-space: pre; нужен для корректного перевода строк в тексте



export {
    style_root,
    style_sample_el0,
    style_sample_el1,
    style_title,
    style_body,
    style_result
};