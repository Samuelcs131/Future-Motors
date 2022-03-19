import styled from "styled-components"

const CardCarImage = styled.div` 
    height: 120px; 
    width: 200px;
    background: ${props => `url(${props.image})`} no-repeat;
    background-size: contain;
    object-fit: cover;
    background-position: center;
`

export { CardCarImage };