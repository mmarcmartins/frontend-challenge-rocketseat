import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    background-color: #FFF;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 5px;
    min-height: 211px;
    box-sizing: border-box;
    align-items: stretch;
    .info {
        padding: 30px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }    
    .info_header {
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
    .info_header__action {
        border:none;
        background-color: transparent;
        padding: 5px;
        box-sizing: border-box;
        border-radius:5px;
        transition: box-shadow .2s ease-in-out;
        &:hover{
            cursor: pointer;            
            box-shadow: inset 0px 0px 15px 8px rgba(0,0,0,0.1);
        }
    }
    .info_description {
        margin-top: 12px;
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 25px;
    }
    .info_header__title{
        margin: 0;
        font-weight: normal;
        font-size: 20px;
    }
    .card_image {
        border-radius: 5px 0 0 5px;
        height: auto;
    }    
    .info_footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
    }
    .info_footer__price {
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
    }
    .info_footer__counter{
        display: flex;
        align-items: center;
        justify-content:center;
    }
    .info_footer__counter___input{
        background-color: #F3F5F6;
        border-radius:5px;
        
        border: 1px solid #A8A8B3;
        color: #000;
        width: 40px;
        height: 40px;
        text-align: center;
    }
    .invisible_button{
        border: none;
        background-color: transparent;
        &:hover {
            cursor: pointer;
        }
    }
`;