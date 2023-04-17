import { COLORS } from "../../../../colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    giveRewardText: {
        marginTop: 10,
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: '700'
    },
    textInput: {
        paddingHorizontal: 5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: COLORS.GREY,
        width: '100%',
        height: 40
    },
    placeholder: {
        fontWeight: '600',
        fontSize: 14
    },
    addBtn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: COLORS.BLACK
    },
    addBtnText: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: COLORS.WHITE
    },
    suggestedUser: {
        width: '100%',
        height: 30,
        borderWidth: 0.5,
        justifyContent: 'center',
        borderColor: COLORS.GREY,
    },
    suggestedUsersContainer: {}
})