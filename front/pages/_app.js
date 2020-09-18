import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import reducer from '../reducers'
import rootSaga from '../sagas'
import LoginBar from '../component/loginBar'
import './app.scss'
import './layout.scss'
import './signature.scss'
import './brand.scss'
import './product.scss'
import './gift.scss'
import './collaborate.scss'
import './cs.scss'
import './login.scss'
import './sign_up.scss'
import './cs/create.scss'

const Demeter = ({Component}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : compose(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return(
        <Provider store={store}>
            <Head>
                <title>Demeter</title>
            </Head>
            <div className="wrap">
                <header>
                    <LoginBar/>
                    <div className="logo">
                        <h1><Link href="/"><a><img src="/img/logo.png" alt=""/></a></Link></h1>
                    </div>
                    <nav>
                        <ul className="clearfix">
                            <h2><Link href="/signature"><a><li>Signature</li></a></Link></h2>
                            <h2><Link href="/brand"><a><li>Brand</li></a></Link></h2>
                            <h2><Link href="/product"><a><li>Products</li></a></Link></h2>
                            <h2><Link href="/gift"><a><li>Gift/Edition</li></a></Link></h2>
                            <h2><Link href="/collaborate"><a><li>Collaborate</li></a></Link></h2>
                            <h2><Link href="/cs"><a><li>CS</li></a></Link></h2>
                        </ul>
                    </nav>
                </header>
                <div className="main">
                    <Component/>
                </div>
                <footer>
                    <Link href="/"><a><img src="/img/footer_logo.png" alt=""/></a></Link>
                    <img src="/img/footer_text.png" alt=""/>
                </footer>
            </div>
        </Provider>
    );
};

export default Demeter;