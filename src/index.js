import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

import App from 'components/App/App';

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const App = require('components/App/App');
        renderWithHotReload(App);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <RootElement/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
