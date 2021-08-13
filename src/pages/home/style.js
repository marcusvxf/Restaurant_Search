import styled from 'styled-components';
import slider from 'react-slick';


export const Wrapper = styled.div`
    display:flex;
    fle-direction:row;
`



export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width:360px;
    height: 100vh;
    overflow-y:auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justfy-content: center;
    background: #ffffff;
    padding:16px;
`;

export const Image = styled.img`
padding-left:80px;
padding-right:80px;
margin-bottom:16px;
`;

export const Map = styled.div`
    background-color:red;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color:${(props) => props.theme.colors.text};
    font-size:24px;
    font-weight:bold;
    font-height:29px;
    margin:16px 0;
`;


export const Carousel = styled(slider)`
    .slick-slide{
        margin-right:30px
    }
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family:${(props) =>props.theme.fonts.regular};
    color: ${(props) =>props.theme.fonts.regular};
    line-height:29px;
    font-size:24px;
    font-weight:bold;

`;


export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family:${(props) =>props.theme.fonts.regular};
    color: ${(props) =>props.theme.fonts.regular};
    margin-bottom: 10px;
    font-weight: normal;
    line-height:19px;
    font-size:16px;


`;