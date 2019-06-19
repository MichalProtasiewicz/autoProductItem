import styled from 'styled-components'

export const AlertS = styled.div`
/* Positioning */
margin-left: 20px;
margin-top: 20px;
/* Display & Box Model */
height: 100px;
width: 370px;
padding: 0.1em;
/* Color */
background: white;
/* Text */
font-family: 'Roboto', sans-serif;
font-size: 0.875rem;
font-weight: 400;
line-height: 1.43;
letter-spacing: 0.01071em;
/* Other */
`;

export const Cross = styled.a`
 display:inline-block;
 text-decoration:none;
 color:black;
 font-size: 1em;
 font-weight: bold;
 float: right;
`;

export const Icon = styled.div`
 display:inline-block;
 margin:0.1em;
 padding:0em 0.3em;
 border-radius:0.2em;
 text-decoration:none;
 color:white;
 text-align:center;
 background: black;
 font-size: 2em;
 font-weight: bold;
 position: absolute;
`;

export const Statement = styled.div`
  font-size: 0.9em;
  color: black;
  line-height: 1.3;
  margin-top: 0.4em;
  margin-left: 4em;
`;

export const Car = styled.div`
  font-size: 1em;
  color: black;
  line-height: 1.3;
  font-weight: bold;
  margin-left: 3.6em;
`;

export const Change = styled.a`
 display:inline-block;
 padding:0.2em 0.5em;
 background: grey;
 border-radius:0.2em;
 color:white;
 text-align:center;
 font-size: 1em;
 text-decoration:none;
 float: right;
`;
