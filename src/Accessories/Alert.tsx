import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react';
import { Overlay } from '@rneui/themed';
import Fonts from '../Accessories/Fonts';


interface AlertButton {
    text?: string | undefined;
    onPress?: ((value?: string) => void) | undefined;
    isPreferred?: boolean | undefined;
    style?: 'default' | 'cancel' | 'destructive' | undefined;
}

interface AlertProps {
    children?: React.ReactNode;
    isVisible: boolean,
    textPrimary: string,
    textSecondary?: string,
    style?: ViewStyle,
    buttonsStyle?: 'default' | 'cancel' ;
}

export const Alert = ({ children, isVisible, textPrimary, textSecondary, style ,buttonsStyle}: AlertProps) => {
    const Default = 'default';
    return (
        <View>
            <Overlay isVisible={isVisible} overlayStyle={[styles.AlertContainer, style]}>
                {children}
                <Text style={{ fontFamily: Fonts.AlerttextPrimary, color: '#000', fontSize: 17 }}>{textPrimary}</Text>
                <Text style={{ fontFamily: Fonts.AlerttextSecondary, color: '#000', fontSize: 13 }}>{textSecondary}</Text>
                {buttonsStyle =='default'?(
                    <View>
                        <Text>
                            ตกลง
                        </Text>
                    </View>
                ):(
                    null
                )}
            </Overlay>
        </View>

    )
}

const styles = StyleSheet.create({
    AlertContainer: {
        width: '75%',
        // height: '30%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})