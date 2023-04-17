import { useEffect, useRef, useState } from "react"
import { feedbacks, users } from "../../mocks"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IFeedback, IUser } from "models";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import uuid from 'react-native-uuid';

import moment from "moment";

export const useHome = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [currentUser, setCurrentUser] = useState<IUser>(users[0]);
    const [currentTab, setCurrentTab] = useState(0);
    const [fdBacks, setfdBacks] = useState<IFeedback[]>([]);
    const [feedbacksCurrentUser, setFeedbacksCurrentUser] = useState<IFeedback[]>([]);
    const { top: topInset, bottom: bottomInset } = useSafeAreaInsets();

    useEffect(() => {
        const currentUserFeedbacks = feedbacks.filter(feedback => feedback.receiverId === currentUser.id)
        setfdBacks(feedbacks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
        setFeedbacksCurrentUser(currentUserFeedbacks)
    }, [feedbacks]);

    const handleOpenModal = () => {
        bottomSheetRef.current?.present()
    }

    const handleGive = (props) => {
        const { selectedUser, amount, message } = props;

        const user = users.find(user => user.username === selectedUser);

        //@ts-ignore
        setfdBacks(prevState => [{
            id: uuid.v4(),
            receiverId: user?.id,
            senderId: currentUser.id,
            message,
            amount,
            createdAt: moment.now()
        }, ...prevState]);

        const newGivenAmount = currentUser.currency.given + amount;
        setCurrentUser(prevUser => ({
            ...prevUser,
            currency: { ...prevUser.currency, given: newGivenAmount }
        }));

        bottomSheetRef.current?.dismiss();
    }

    return {
        bottomSheetRef,
        fdBacks,
        setfdBacks,
        currentUser,
        currentTab,
        setCurrentTab,
        topInset,
        bottomInset,
        feedbacksCurrentUser,
        handleOpenModal,
        handleGive
    }
}