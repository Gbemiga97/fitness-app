import { View, Text } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { sliderImages } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const ImageSlider = () => {
  return (
    <Carousel
    data={sliderImages}
    loop={true}
    autoplay={true}
    renderItem={ItemCard}
    hasParallaxImages={true}
    sliderWidth={wp(100)}
    firstItem={1}
    autoplayInterval={4000}
    itemWidth={wp(100)-70}
    slideStyle={{display: "flex", alignItems: "center"}}
    />
  )
}

const ItemCard = () => {

}

export default ImageSlider