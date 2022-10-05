export const depositMoney = (amount) => {
    return (dispatch)=>{
        dispatch({
            type:"deposit",
            payload: amount
        })
    }
}

export const Withdrawmoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })  
    }
}