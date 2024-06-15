import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';



const App = () => {

    const router = useRouter()

  return (
    <View style={tw`flex-1 flex justify-end`}>
        <Image style={tw`h-full w-full absolute`} source={require('../assets/images/bg.jpg')} />
    
    <LinearGradient 
    colors={['transparent', '#18181b']}
    style={{width: wp(100),
            height: hp(70),
            display: 'flex',
            justifyContent: 'flex-end',
            paddingBottom: '12',
        }}
    start={{x: 0.5, y: 0}}
    end={{x: 0.5, y: 0.8}}
    className='gap-y-8'>
        <Animated.View entering={FadeInDown.delay(100).springify()} style={tw`flex items-center`} >
            <Text style={{
                fontSize: hp(5),
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: '0.025rem'
                }}
                >
                Best <Text className='text-rose-500'>
                    Workouts</Text>
            </Text>
            <Text style={{
                fontSize: hp(5),
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: '0.025rem'
                }}
                >
                For you
            </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()} className='pb-12'>
            <TouchableOpacity style={{
                height: hp(7),
                width: wp(80),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 'auto',
                borderRadius: '999px',
                border: '2px solid white',
            }}
            className="bg-rose-500"
            onPress={() => router.push('home')}
            >
                <Text style={{
                    fontSize: hp(3),
                    color: 'white',
                    fontWeight: 'bold',
                    letterSpacing: '0.1rem'
                    }}>
                    Get Started 
                </Text>
            </TouchableOpacity>
        </Animated.View>
    </LinearGradient>
    </View>
  )
}

export default App