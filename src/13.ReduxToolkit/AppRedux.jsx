import React from 'react'
import Amount from './Ui/Amount'
import { store } from "./Redux/app/Store/"
import { Provider } from 'react-redux'
import Name from './Ui/Name/Name'

export default function AppRedux() {
  return (
    <>
    <Provider store = {store}>

      {/* <Amount/> */}
      <Name/>
    </Provider>
    </>
  )
}