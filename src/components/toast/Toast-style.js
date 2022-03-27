import styled, {css} from 'styled-components'

export const ToastContainer = styled.div`
    text-align:left;
    padding: 20px 35px 20px 20px;
    background-color:#fff;
    border-radius:4px;
    max-width: 500px; 
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    position: absolute;
    top: 105px;
    left: 30px;
    overflow: hidden;
    transform: translateX(calc(-120% + 30px));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
    
    ${props => props.showToast === true && css`
        transform: translateX(0%);
    `} 
    
    `
    /* ${ props => props.showToast === true && (css` transform: translateX(0%);`)} */

export const ProgressToast = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #fff;

    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        height: 4px;
        width: 100%;
        background-color: ${props=>props.color};
        animation: progress 5s linear forwards; 
    }

    @keyframes progress {
        100%{
            right: 100%;
        }
    }
`

export const IconToast = styled.span`
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.color};
    color: #fff; 
    border-radius: 50%;
`