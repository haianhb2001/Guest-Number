import { Text, StyleSheet } from 'react-native';

function GameOverScreen() {
    return (
        <Text style={styles.screen}>Game is over!</Text>
    );
} 

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        textAlignVertical: "center",
        fontSize: 30,
        fontWeight: 'bold',
    },
});