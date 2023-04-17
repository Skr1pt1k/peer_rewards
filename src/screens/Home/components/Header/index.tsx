import React from 'react';
import { Image, Text } from 'react-native';
import { styles } from './styles';
import { View } from '../../../../components';

interface Props {
    avatar: string;
    username: string;
    currency: { given: number; received: number };
}

const Header: React.FC<Props> = React.memo(({ avatar, username, currency }) => {
    return (
        <View style={styles.container}>
            <View row centered>
                <Image source={{ uri: avatar }} style={styles.avatar} resizeMode='contain' />
                <View mLeft={10}>
                    <Text style={styles.username}>{username}</Text>
                    <View row centered mTop={5}>
                        <Text>Given{' '}</Text>
                        <Text style={styles.currency}>{currency.given}$</Text>
                        <Text>{' '}/{' '}Received{' '}</Text>
                        <Text style={styles.currency}>{currency.received}$</Text>
                    </View>
                </View>
            </View>
        </View>
    );
});

export default Header;