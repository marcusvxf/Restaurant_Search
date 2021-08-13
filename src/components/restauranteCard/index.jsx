import React from 'react';
import { Restaurant ,RestaurantInfo,Title,Address,RestaurantPhoto} from './style';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';
import { useState } from 'react';
import { Skeleton } from '../../components';


const RestaurantCard = ({restaurant ,onClick}) => {
    const [imageLoader,setImageLoader]= useState(false);

    return(
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars 
                count= {5} 
                size={20} 
                isHalf 
                activecolor="#e7711c" 
                edit={false} 
                value={restaurant.rating} >

            </ReactStars>
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto 
            imageLoaded = {imageLoader}
            onLoad = {() => setImageLoader(true)}
            src= {restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } 
            alt="foto do restaurante"/>
            {!imageLoader && <Skeleton width='100px' height = "100px"/>}
    </Restaurant>
    )
};

export default RestaurantCard;