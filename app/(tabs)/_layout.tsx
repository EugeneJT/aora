import { Tabs } from 'expo-router'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { icons } from '../../constants'

interface TabIconProps {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused} ? 'font-psemibold' : 'font-pregular' text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout