import { COLORS } from "../../../../colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    message: {
        fontWeight: '600',
        flexWrap: 'wrap'
    },
    rewardedMessage: {
        fontWeight: '600',
        color: COLORS.GREY,
        fontSize: 12,
        flexWrap: 'wrap',
    },
})