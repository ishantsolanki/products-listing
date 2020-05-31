import { signupUser, checkUser } from './userActions'
import * as api from './api';

test('signupUser calls the signup api', () => {
  const mockedSignupUser = jest.spyOn(api, 'signupApi')
  signupUser({userEmail: 'mockUserEmail', password: 'mockpassword' })(jest.fn())

  expect(mockedSignupUser).toHaveBeenCalledWith({userEmail: 'mockUserEmail', password: 'mockpassword' })
})

test('checkUser calls the signup api', () => {
  const mockedCheckUser = jest.spyOn(api, 'checkUserCredentialsApi')
  checkUser({userEmail: 'mockUserEmail', password: 'mockpassword' })(jest.fn())

  expect(mockedCheckUser).toHaveBeenCalledWith({userEmail: 'mockUserEmail', password: 'mockpassword' })
})
