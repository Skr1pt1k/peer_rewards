import React, { useCallback } from 'react';
import { View } from '../../../../components';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../colors';
import { styles } from './styles';

interface Props {
    currentTab: number;
    setCurrentTab: (arg: number) => void;
}

const Tabs: React.FC<Props> = React.memo(({ currentTab, setCurrentTab }) => {
    const handleTabPress = useCallback((tabIndex) => {
        setCurrentTab(tabIndex);
    }, [setCurrentTab]);

    const tabs = [
        { label: 'Feed', index: 0 },
        { label: 'My Rewards', index: 1 },
    ];

    const renderTab = ({ label, index }) => (
        <TouchableOpacity
            key={index}
            style={[
                styles.button,
                currentTab === index && { backgroundColor: COLORS.WHITE },
                index === 0 && { borderTopStartRadius: 20 },
                index === tabs.length - 1 && { borderTopEndRadius: 20 },
            ]}
            onPress={() => handleTabPress(index)}
        >
            <Text style={[
                styles.tabLabel,
                currentTab === index && { color: COLORS.GREY },
            ]}>{label}</Text>
        </TouchableOpacity>
    );

    return <View style={styles.container}>{tabs.map(renderTab)}</View>;
});

export default Tabs;