import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white flex space-y-5 pt-4`} edges={['top']}>

      {/* punchline and avatar */}
      <View style={tw`flex-row justify-between items-center mx-5`}>
        <View className="space-y-2">
          <Text
          style={{
            fontSize: hp(4.5),
            fontWeight: 'bold',
            letterSpacing: "0.05em",
            textTransform: 'uppercase'
          }}
          className='text-neutral-700'
          >
            Ready To
          </Text>
          <Text
          style={{
            fontSize: hp(4.5),
            fontWeight: 'bold',
            letterSpacing: "0.05em",
            textTransform: 'uppercase'
          }}
          className='text-rose-500'
          >
            Workout
          </Text>
        </View>

        <View style={tw`flex justify-center items-center gap-y-2`}>
          <Image 
          source={require('../assets/images/avatar.webp')}
          style={{height: hp(6), width: hp(6)}}
          className='rounded-full'
          />
          <View 
          style={{
            height: hp(5.5),
            width: hp(5.5),
            borderRadius: '999px',
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            border: "3px solid lightgray"
          }}
          className='bg-neutral-200'>
            <Ionicons name='notifications' size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* image slider */}
      <View>
        <Text>slider</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home