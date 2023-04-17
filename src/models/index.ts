export interface IUser {
    id: string // some uid here
    username: string
    currency: {
        given: number
        received: number
    },
    avatar: string
}

export interface IFeedback {
    id: string
    receiverId: string
    senderId: string
    amount: number
    message: string
    createdAt: string
}