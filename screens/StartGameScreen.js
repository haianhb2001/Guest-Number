import { TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() { 
    return (
        <View>
            <TextInput />
            <PrimaryButton>RESET</PrimaryButton>
            <PrimaryButton>CONFIRM</PrimaryButton>
        </View>
    );

}

export default StartGameScreen;