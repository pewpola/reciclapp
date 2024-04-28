import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    <View style={styles.telaDeLogin}>
        <View>
            <Image
                source={require('./assets/logo.png')}
                style={{ width: 50, height: 50 }}
            />
        </View>
        <View style={styles.hrAbaixoLogo}>
        </View>
        <StatusBar style="auto" />
    </View>
}

const styles = StyleSheet.create({
    telaDeLogin: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 0,
        width: 744,
    },
    hrAbaixoLogo: {
        backgroundColor: '#74DA0E',
        marginBottom: 30,
        width: 744,
        height: 5,
    },
});