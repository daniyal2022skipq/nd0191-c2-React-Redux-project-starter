import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider, useSelector } from "react-redux"
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import NewPoll from "../components/NewPoll"
import store from '../store'
import { _getQuestions } from '../_DATA';
test('fireEvent test', () => {
    const component=render(
        <BrowserRouter>
        <Provider store={store}>
            <Login/>
            </Provider>
            </BrowserRouter>
    )
    
    const name=component.getByPlaceholderText('Enter Username')
    const password=component.getByPlaceholderText('Enter password')
    fireEvent.change(name, {target: {value: 'sarahedo'}});
    fireEvent.change(password, {target: {value: 'password123'}});
    const btn=component.getByTestId('btn')
    fireEvent.click(btn)
    const nameError=component.getByTestId('nameError')
    const passError=component.getByTestId('passError')
    expect(nameError).not.toEqual('Incorrect Name')
    expect(passError).not.toEqual('Incorrect Password')
    
  })
  test('Incorrect Name', () => {
    const component=render(
        <BrowserRouter>
        <Provider store={store}>
            <Login/>
            </Provider>
            </BrowserRouter>
    )
    
    const name=component.getByPlaceholderText('Enter Username')
    const password=component.getByPlaceholderText('Enter password')
    fireEvent.change(name, {target: {value: 'sarahe'}});
    fireEvent.change(password, {target: {value: 'password123'}});
    const btn=component.getByTestId('btn')
    fireEvent.click(btn)
    const nameError=component.getByTestId('nameError')
  expect(nameError.innerHTML).toEqual('Incorrect Name')
 
  })
  test('Incorrect Password', () => {
    const component=render(
        <BrowserRouter>
        <Provider store={store}>
            <Login/>
            </Provider>
            </BrowserRouter>
    )
    
    const name=component.getByPlaceholderText('Enter Username')
    const password=component.getByPlaceholderText('Enter password')
    fireEvent.change(name, {target: {value: 'sarahedo'}});
    fireEvent.change(password, {target: {value: 'password'}});
    const btn=component.getByTestId('btn')
    fireEvent.click(btn)
    const passError=component.getByTestId('passError')
    expect(passError.innerHTML).toEqual('Incorrect Password')
  })
  test('New Poll', async() => {
    const component=render(
        <BrowserRouter>
        <Provider store={store}>
            <NewPoll/>
            </Provider>
            </BrowserRouter>
    )
    const question1=await _getQuestions()
    const option1=component.getByPlaceholderText('Write Option One')
    const option2=component.getByPlaceholderText('Write Option Two')
    fireEvent.change(option1, {target: {value: 'Wanna Play Football'}});
    fireEvent.change(option2, {target: {value: 'Wanna Play Baseball'}});
     const btn=component.getByText('Create Poll')
      fireEvent.click(btn)
     await act(()=>{
        _getQuestions().then(data=>
            expect(Object.keys(data).length).toEqual(Object.keys(question1).length+1)) 
        
     })
     
})