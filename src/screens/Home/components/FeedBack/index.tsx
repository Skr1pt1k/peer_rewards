import React from 'react';
import { Image, Text } from 'react-native';
import moment from 'moment';

import { View } from '../../../../components';
import { styles } from './styles';
import { IFeedback } from 'models';
import { users } from '../../../../mocks';

interface Props {
    feedback: IFeedback
}

const Feedback: React.FC<Props> = React.memo(({ feedback }) => {
    const senderInfo = users.find(user => user.id === feedback.senderId);
    const convertedDate = moment(feedback.createdAt).fromNow();
    const receiverInfo = users.find(user => user.id === feedback.receiverId);

    return (
        <View style={styles.container}>
            <View row>
                <Image source={{ uri: senderInfo?.avatar }} style={styles.avatar} />
                <View flex mLeft={10}>
                    <Text style={styles.message}>{feedback.message}</Text>
                    <View row centered mTop={8}>
                        <Text style={styles.rewardedMessage}>{receiverInfo?.username}</Text>
                        <Text style={styles.rewardedMessage}>{' '}Rewarded by{' '}</Text>
                        <Text style={styles.rewardedMessage}>{senderInfo?.username}</Text>
                    </View>
                    <Text style={[styles.rewardedMessage, { marginTop: 5 }]}>{convertedDate}</Text>
                </View>
            </View>
        </View>
    );
});

export default Feedback;