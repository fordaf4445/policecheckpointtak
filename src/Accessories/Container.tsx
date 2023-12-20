import { View, ViewStyle , } from "react-native";
import { stylesEx } from '../Accessories/Styles';


interface ContainerProps {
    children?: React.ReactNode;
    backgroundColor?: string;
    style?: ViewStyle;
};

export const Container = ({ children, backgroundColor, style }: ContainerProps) => {
    return (
        <View style={[stylesEx.container, { backgroundColor }, style]}>
            {children}
        </View>
    )
};