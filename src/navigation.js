import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "./pages/login";
import CreateAccount from "./pages/create-account";
import Home from "./pages/home";
import ProductDetail from './pages/product-detail';
import AddProduct from "./pages/add-product";
import MeusMoveis from "./pages/meus-moveis";
import RecyclingServices from "./pages/servico-reciclagem";
import SuccessScreen from "./pages/sucesso-ao-solicitar";
import EditProduct from "./pages/edit-product";
import AddSuccess from "./pages/sucesso-ao-adicionar";
import EditSuccess from "./pages/sucesso-ao-editar";
import ProfileScreen from "./pages/perfil";
import EditarLocalizacaoScreen from "./pages/edit-local";
import EditarMeiosDeContatoScreen from "./pages/edit-contact";
import EditContactSuccess from "./pages/sucesso-ao-editar-contato";
import EditLocalSuccess from "./pages/sucesso-ao-editar-local";
import CallSupportSuccess from "./pages/sucesso-no-suporte";
import CallSupportScreen from "./pages/call-support";

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
        <Stack.Screen name="MeusMoveis" component={MeusMoveis}/>
        <Stack.Screen name="RecyclingServices" component={RecyclingServices}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
        <Stack.Screen name="EditProduct" component={EditProduct}/>
        <Stack.Screen name="AddSuccess" component={AddSuccess}/>
        <Stack.Screen name="EditSuccess" component={EditSuccess}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="EditarLocalizacaoScreen" component={EditarLocalizacaoScreen}/>
        <Stack.Screen name="EditarMeiosDeContatoScreen" component={EditarMeiosDeContatoScreen}/>
        <Stack.Screen name="EditContactSuccess" component={EditContactSuccess}/>
        <Stack.Screen name="EditLocalSuccess" component={EditLocalSuccess}/>
        <Stack.Screen name="CallSupportSuccess" component={CallSupportSuccess}/>
        <Stack.Screen name="CallSupportScreen" component={CallSupportScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;