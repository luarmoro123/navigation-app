import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustonDrawer from '@/components/shared/CustonDrawer';

export default function Layout() {
    return (
        <Drawer
            drawerContent={

                CustonDrawer

            }
            screenOptions={{
                //headerShown: false,
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveBackgroundColor: '#C4E3FF',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    headerShown: false,
                    drawerLabel: 'Home',
                    title: 'Inicio',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color}></Ionicons>
                    )
                }}
            />
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'Usuarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color}></Ionicons>
                    )
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color}></Ionicons>
                    )
                }}
            />
        </Drawer>
    );
}