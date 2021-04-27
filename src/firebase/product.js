import {firestore} from './config';

export const handleAddProduct = async (product) => {
    await firestore.collection('products').doc().set(product)
}

export const handleFetchProducts = async () => {
    const snapshot = await firestore.collection('products').orderBy('createdDate').get()
    const data = snapshot.docs.map(doc => {
        return (
            { 
                ...doc.data(), 
                documentID: doc.id,
            }
        )
    });
    return data
}

export const handleFilterProducts = async (category) => {
    // const data = await firestore.collection("products").where("productCategory", "==", category).get()
    // console.log(data)
    // const filteredData = data.map((doc) => { return {...doc.data(), id: doc.id}} )
    
    const data = await handleFetchProducts()
    const filteredData = data.filter(item => item.productCategory === category)
    return filteredData
}

export const handleDeleteProduct = async (productId) => {
    await firestore.collection('products').doc(productId).delete()
}

export const handleFetchProduct = async (productId) => {
    const data = await firestore.collection('products').doc(productId).get()
    return data.data()
}