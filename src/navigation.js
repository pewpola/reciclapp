import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "./pages/login";
import CreateAccount from "./pages/create-account";
import Home from "./pages/home";
import ProductDetail from './pages/product-detail';
import AddProduct from "./pages/add-product";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="AddProduct" component={AddProduct}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;