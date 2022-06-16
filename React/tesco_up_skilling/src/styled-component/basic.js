import React from "react";
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
    height: 60px;
    width: 100px;
    padding: 5px;
    background-color: green;
    color: white;
`

const Input = styled.input.attrs(props => ({
    type: props.type,
  }))
  `
    width: 300px;
    height: 35px;
    padding: 5px;
`;

const BasicStyledComponent = (props) => {
    const Container = styled.div`
        background-color: ${(props) => props.theme.color.button};
        color: white;
        border: 1px solid black;
        width: 100px;
        height: 100px;
        &:hover {
            background-color: black;
            color: red;
        }
        `;
    const DangerButton = styled(Button)`
        background-color: red;

    `
    const ThemeButton = styled(Button)`
        background-color: ${({theme}) => theme.button};
    `
    console.log(props);
    return(
        <>
            <ThemeProvider theme={{color: {button:'yellow'}}}>
                <Container bg="blue">
                    <h1>Hiii</h1>
                </Container>
            </ThemeProvider>
            <Button>Success</Button>
            <DangerButton>Danger</DangerButton>
            <Input type="text" />
            <Input type="password" />        
            <ThemeButton>Theme Button</ThemeButton> 
        </>
    )
}

export default BasicStyledComponent