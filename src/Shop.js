import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {
  const balance = useSelector(state =>state.balance)
  const dispatch = useDispatch();
  const {Withdrawmoney,depositMoney} = bindActionCreators(actionCreators,dispatch)

  return (
    <div>
      <h2>Deposit/Withdrawmoney</h2>
      {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.Withdrawmoney(100))}}>-</button>
      Update Balance
      <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      <button className='btn btn-primary mx-2' onClick={()=>{Withdrawmoney(100)}}>-</button>
      Update Balance ({balance})
      <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop