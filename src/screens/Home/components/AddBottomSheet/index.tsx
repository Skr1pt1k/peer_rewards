import React, { useEffect, useMemo, useState } from 'react';
import { Keyboard, Text } from 'react-native';

import { View } from '../../../../components';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetTextInput, TouchableOpacity } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { styles } from './styles';
import { IUser } from 'models';
import { users } from '../../../../mocks';

interface Props {
    bottomSheetRef: React.RefObject<BottomSheetModalMethods>
    handleGive: (props) => void;
}

const AddBottomSheet: React.FC<Props> = React.memo(({ bottomSheetRef, handleGive }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [suggestedUsers, setSuggestedUsers] = useState<IUser[]>([]);
    const snapPoints = useMemo(() => ['70%', '70%'], []);

    useEffect(() => {
        if (parseInt(amount) > 0 || amount !== '') {
            setError('')
        }
    }, [amount])

    useEffect(() => {
        const user = users.find(user => user.username === selectedUser);

        if (!user) {
            setError('User not selected')
        }
        else {
            setError('')
        }
    }, [selectedUser])

    const renderBackdrop = (props) => <BottomSheetBackdrop
        {...props}
        enableTouchThrough
        pressBehavior='close'
    />

    const onPress = () => {
        Keyboard.dismiss();
    }

    const handleValidate = () => {
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount < 1 || amount.startsWith('0')) {
            setError('Amount should be a number greater than or equal to 1');
        } else if (!selectedUser) {
            setError('User not selected');
        }
        else {
            handleGive({ amount: parsedAmount, message, selectedUser });
        }
    }

    const handleUserInput = (input) => {
        setSelectedUser(input)
        if (!input) {
            setSuggestedUsers([]);
        }
        else {
            const filteredUsers = users.filter((user) => user.username.toLowerCase().startsWith(input.toLowerCase()) && user.id !== users[0].id);
            setSuggestedUsers(filteredUsers);
        }
    }

    const handleUserSelect = (user) => {
        setSelectedUser(user.username);
        setSuggestedUsers([]);
    }

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            keyboardBlurBehavior='restore'
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            onDismiss={() => setSuggestedUsers([])}
        >
            <TouchableOpacity style={{ flex: 1, paddingHorizontal: 20 }} onPress={onPress} activeOpacity={1}>
                <Text style={styles.giveRewardText}>Give reward</Text>
                <Text style={styles.placeholder}>To</Text>
                <BottomSheetTextInput style={styles.textInput} onChangeText={handleUserInput} value={selectedUser} />
                {suggestedUsers.length > 0 &&
                    <View style={styles.suggestedUsersContainer}>
                        {suggestedUsers.map((user) => (
                            <TouchableOpacity key={user.id} onPress={() => handleUserSelect(user)} style={styles.suggestedUser}>
                                <Text>{user.username}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                }
                <View mTop={20}>
                    <Text style={styles.placeholder}>Amount</Text>
                    <BottomSheetTextInput
                        style={styles.textInput}
                        keyboardType="number-pad"
                        onChangeText={setAmount}
                        value={amount}
                    />
                </View>
                <View mTop={20}>
                    <Text style={styles.placeholder}>Message</Text>
                    <BottomSheetTextInput
                        style={[styles.textInput, { height: 150 }]}
                        multiline
                        onChangeText={setMessage}
                        value={message}
                    />
                </View>
                {error &&
                    <View mTop={5}>
                        <Text style={{ color: 'red' }}>{error}</Text>
                    </View>
                }
                <TouchableOpacity style={styles.addBtn} onPress={handleValidate}>
                    <Text style={styles.addBtnText}>Give</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </BottomSheetModal>
    );
});

export default AddBottomSheet;