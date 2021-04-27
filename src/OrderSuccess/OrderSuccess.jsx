import React from 'react';
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
 
const OrderSuccess = () => {
    let history = useHistory()
    const goHome = () => {
        history.push('/Home')
    }
    return (
        <div className='container my-5 py-5 text-center'>
            <div className='my-5 py-5'>
                <p className='h4 mb-4'>Order has been sent successfully!</p>
                <Button onClick={goHome} color="info" type="button">Back to Home</Button>
            </div>
        </div>
    )
}
 
export default OrderSuccess