import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen  from '../screens/SignInScreen';
import SignUpScreen  from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import CommunityScreen from '../screens/Community/CommunityScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>			
			{/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
			<Stack.Navigator>
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
				<Stack.Screen name="NewPassword" component={NewPasswordScreen} />
				<Stack.Screen name="Communities" component={CommunityScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;