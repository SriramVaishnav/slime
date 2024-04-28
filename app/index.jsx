import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {

  const {loading, isLogged} = useGlobalContext();

  if(!loading && isLogged)
    return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="flex flex-row">
            <Image source={images.logoSmall} className="w-[90px] h-[50px]" resizeMode='contain' />
            <Text className="text-white text-2xl font-psemibold my-auto ml-[-15px]">Slime.</Text>
          </View>
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px] mt-6" resizeMode='contain' />

          <View className="relative mt-6">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Content with{' '}
              <Text className="text-secondary-200">Slime</Text>
            </Text>
            <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode='contain' />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets curiosity: embark on a journey of limitless exploration</Text>

          <CustomButton title="Get Started" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style="light" />
    </SafeAreaView>
  );
}
