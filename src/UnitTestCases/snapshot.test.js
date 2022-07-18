import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Login from '../components/Login'
import {render} from '@testing-library/react';
import store from '../store'
import Polls from '../components/Polls';
test('snapshot test', () => {
    const component=render(
        <BrowserRouter>
        <Provider store={store}>
            <Polls/>
            </Provider>
            </BrowserRouter>
    )
    expect(component).toMatchSnapshot()
  })