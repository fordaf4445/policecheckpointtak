import { View, Text, StyleSheet, ViewStyle, TouchableOpacity, } from 'react-native';
import React from 'react';
import { Overlay } from '@rneui/themed';
import Fonts from '../Accessories/Fonts';
import Colors from './Colors';

interface AlertProps {
    isVisible: boolean,
    textPrimary: string,
    textSecondary?: string,
    style?: ViewStyle,
    buttonsStyle: 'default' | 'cancel' | null;
    styleView?: React.ReactNode,
    onPressOK?: (() => void | undefined),
    onPressCancel?: (() => void | undefined),
}

export const AlertCon: React.FC<AlertProps> = (props) => {
    const dynamicStyle = {
        borderTopWidth: props.buttonsStyle == 'cancel' && 'default' ? (1) : (0),
        marginTop: props.buttonsStyle == 'cancel' && 'default' ? (10) : (0),
        paddingTop: props.buttonsStyle == 'cancel' && 'default' ? (5) : (0),
        
    }
    return (
        <View>
            <Overlay isVisible={props.isVisible} overlayStyle={[styles.AlertContainer, props.style]}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontFamily: Fonts.AlerttextPrimary, color: '#000', fontSize: 19 }}>{props.textPrimary}</Text>
                    {props.styleView}
                    <Text style={{ fontFamily: Fonts.AlerttextSecondary, color: '#000', fontSize: 15 }}>{props.textSecondary}</Text>
                </View>
                <View style={[styles.ButtonContainer, dynamicStyle]}>
                    {props.buttonsStyle == 'default' ?
                        (
                            <TouchableOpacity style={styles.buttonDefaultStyle} onPress={props.onPressOK}>
                                <Text style={{ fontFamily: Fonts.AlerttextPrimary, color: Colors.Blue_01, fontSize: 17 }}>ตกลง</Text>
                            </TouchableOpacity>
                        ) : (null)}
                    {props.buttonsStyle == 'cancel' ? (<View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={styles.buttonCancelStyle} onPress={props.onPressCancel}>
                            <Text style={{ fontFamily: Fonts.AlerttextPrimary, color: Colors.Blue_01, fontSize: 17 }}>ยกเลิก</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancelStyle} onPress={props.onPressOK}>
                            <Text style={{ fontFamily: Fonts.AlerttextPrimary, color: Colors.Blue_01, fontSize: 17 }}>ตกลง</Text>
                        </TouchableOpacity>
                    </View>) : (null)}
                </View>
            </Overlay>
        </View>

    )
}

const styles = StyleSheet.create({
    AlertContainer: {
        width: '75%',
        // height: '30%',
        borderRadius: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ButtonContainer: {
        borderColor: Colors.GrayBorder,
        width: '105%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDefaultStyle: {
        width: '90%',
        alignItems: 'center'
    },
    buttonCancelStyle: {
        borderRightWidth: 0.5,
        alignItems: 'center',
        width: '50%',
    },
})
