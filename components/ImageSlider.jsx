import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import tw from 'twrnc'

const ImageSlider = () => {

    const sliderImages = [
        require('../assets/images/gym1.webp'),
        require('../assets/images/gym2.webp'),
        require('../assets/images/gym3.webp'),
        require('../assets/images/gym4.webp'),
        require('../assets/images/gym5.webp'),
    ]

  return (
    <View style={tw`flex-1 items-center`}>
    <SliderBox images={sliderImages} dotColor='red' 
    inactiveDotColor='black'
    ImageComponentStyle={{borderRadius: 15, width: "93%", marginTop: 15}}
    autoplay circleLoop
    />
  </View>
  )
}

export default ImageSlider