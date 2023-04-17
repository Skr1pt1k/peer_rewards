import React from 'react';
import { FlatList, Image, TouchableOpacity } from "react-native"

import { HomeProps } from './Home';
import Header from './components/Header';
import { useHome } from './useHome';
import { COLORS } from '../../colors';
import Tabs from './components/Tabs';
import { View } from '../../components';
import Feedback from './components/FeedBack';

import { styles } from './styles'
import AddBottomSheet from './components/AddBottomSheet';

const Home: React.FC<HomeProps> = () => {
    const {
        currentUser,
        currentTab,
        setCurrentTab,
        fdBacks,
        topInset,
        bottomInset,
        feedbacksCurrentUser,
        handleOpenModal,
        bottomSheetRef,
        handleGive
    } = useHome();

    return (
        <View style={{ flex: 1, paddingTop: topInset }}>
            <AddBottomSheet bottomSheetRef={bottomSheetRef} handleGive={handleGive} />
            <Header
                username={currentUser.username}
                avatar={currentUser.avatar}
                currency={currentUser.currency}
            />
            <View mTop={30}>
                <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </View>
            <FlatList
                keyExtractor={(item) => item.id}
                bounces={false}
                style={{ backgroundColor: COLORS.WHITE }}
                contentContainerStyle={{ backgroundColor: COLORS.WHITE, paddingHorizontal: 20, paddingBottom: bottomInset }}
                data={currentTab === 0 ? fdBacks : feedbacksCurrentUser}
                renderItem={({ item }) => <View mTop={20} ><Feedback feedback={item} /></View>}
            />
            <TouchableOpacity style={styles.addBtn} onPress={handleOpenModal}>
                <Image source={require('../../images/plus.png')} resizeMode='contain' style={styles.addImage} />
            </TouchableOpacity>
        </View>
    )
}
export default Home;
