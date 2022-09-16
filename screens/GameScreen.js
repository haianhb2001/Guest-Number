import { View, Text, StyleSheet } from 'react-native';

function GameScreen() { 
    return (
        <View style={styles.screen}>
            <Text>Opponent's </Text>
            {/* GUESS */}
            <View>
                <Text>Higher or lower?</Text>
                {/* +- */}
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});
