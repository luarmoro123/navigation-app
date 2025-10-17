import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerStyle: { backgroundColor: '#1976D2' },
                headerTintColor: '#fff',
                drawerActiveTintColor: '#1976D2',
            }}
        >
            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'Usuarios',
                    title: 'Usuarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'Horarios',
                    title: 'Horarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
}