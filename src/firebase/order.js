import {firestore} from './config';
 
export const handlePlaceOrder = async (shippingInfo, userId, cart) => {
    const { recipientName, line1, line2, city, prescription } = shippingInfo
    await firestore.collection('orders').doc().set({
        userId,
        date: new Date().toLocaleString(),
        shipping: {
            recipientName,
            line1,
            line2,
            city,
            prescription
        },
        cart: [...cart]
    })
}
 
export const handleFetchOrders = async () => {
    const snapshot = await firestore.collection('orders').get()
    const data = snapshot.docs.map(doc => {
        return (
            { 
                ...doc.data(), 
                orderID: doc.id,
            }
        )
    });
    console.log(data)
    return data
}
 
export const handleFetchUserOrders = async (userId) => {
    const data = await handleFetchOrders()
    const filteredOrders = data.filter(item => item.userId === userId)
    return filteredOrders
}