import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "./pages/login"

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="login"
                component={Login}
            />
        </Tab.Navigator>
    )
}