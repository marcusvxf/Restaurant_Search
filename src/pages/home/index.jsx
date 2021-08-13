import React,{ useState } from 'react';
import {Container,Search,Image,Wrapper,CarouselTitle,Carousel,ModalTitle,ModalContent} from './style';
import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {Card, RestaurantCard,Modal,Map,Loader,Skeleton} from "../../components";
import { useSelector } from 'react-redux';

import restaurante from '../../assets/restaurante-fake.png' ;
import logo from '../../assets/logo.svg';




const Home = () =>  {

    const Settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight:true
    };



    const [inputValue,setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId,setPlaceId] = useState(null);
    const [modalOpened,setModalOpened] = useState(false);
    const { restaurants,restaurantSelected} = useSelector((state) => state.restaurants);
    
    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue)
        }

    }

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true)
    }


    return(
        <Wrapper>
            <Container>
                <Search><Image src ={logo} alt = "logo restaurante"  />
                    <TextField
                    label='Pesquisar'
                    outlined
                    onTrailingIconSelect={() => this.setState({value: ''})}
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    ><Input
                    onKeyPress={handleKeyPress}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    {restaurants.length > 0  ? (
                        <>
                            <CarouselTitle>Na sua Area</CarouselTitle>
                            <Carousel {...Settings}>
                                {restaurants.map((restaurant) =>( 
                                <Card key = {restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl(): restaurante} title ={restaurant.name}>
                                    
                                </Card>))}
                            </Carousel>
                        
                        </>
                    ): (<Loader></Loader>)}


                </Search>
                {restaurants.map((restaurant)=> (
                <RestaurantCard onClick={()=>handleOpenModal(restaurant.place_id)} restaurant = {restaurant}></RestaurantCard>))}
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose= {()=> setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? "Aberto agora": 'Fechado nesse momento'}</ModalContent>
                    </>
                ): (
                <>
                    <Skeleton width ="10px" height='10px'></Skeleton>
                    <Skeleton width ="10px" height='10px'></Skeleton>
                    <Skeleton width ="10px" height='10px'></Skeleton>
                    <Skeleton width ="10px" height='10px'></Skeleton>
                
                </>)}

            </Modal>
        </Wrapper>
)};

export default Home;