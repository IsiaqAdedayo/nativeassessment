import 'bootstrap/dist/css/bootstrap.css'
import App from 'next/app'
import React from 'react'
import { Provider } from "react-redux"
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store'

import '../styles/globals.css'

// const MyApp = ({ Component, pageProps}) => (
//   <Component {...pageProps} />
// )

// export default wrapper.withRedux(MyApp);



class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);