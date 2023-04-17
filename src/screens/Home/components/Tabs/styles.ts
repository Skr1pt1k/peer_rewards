import { StyleSheet } from "react-native";

import { COLORS } from "../../../../colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
    },
    button: {
        backgroundColor: COLORS.TAB_INACTIVE,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    tabLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.BLACK
    }
})