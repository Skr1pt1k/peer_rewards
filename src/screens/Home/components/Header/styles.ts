import { COLORS } from "../../../../colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.HEADER,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36
    },
    username: {
        color: COLORS.BLACK,
        fontSize: 20,
        fontWeight: '700'
    },
    currency: {
        fontWeight: '600'
    }
})