import styled from 'styled-components';


export const Restaurant = styled.div`
    display:flex;
    justify-content:space-between;
    cursos:pointer;
    margin-top:5px;
    padding:16px;
    background-color:#ffffff;
    border-left:5px solid transparent;
    :hover{
        border-left-color:${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.background};
    }
`;

export const RestaurantInfo = styled.div`
    display:flex;
    flex-direction: column;

`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-weight:bold;
    font-height: 29px;
    font-size:24px;
    margin-bottom:10px;
`;

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-height: 19px;
    font-size:16px;
    margin-bottom:10px;
    margin-top:10px;
`;


export const RestaurantPhoto = styled.img`
    display ${(props) => props.imageLoaded ? "block" : "none"};
    width:100px;
    height:100px;
    object-fit:cover;
    border-radius:6px;
`;