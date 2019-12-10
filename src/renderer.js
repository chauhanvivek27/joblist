import React from 'react'
import { renderToString } from 'react-dom/server';
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom';
import {  renderRoutes } from 'react-router-config';
import routes from './routes';

export default function render(initialState, req) {
    const store = configureStore(initialState);
    let context = {};
    let pageContent = renderToString(
        <Provider store={store}> 
         <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
        </Provider>
    );

    const preloadedState = store.getState()

    return {pageContent, preloadedState};

};
