import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import App from './App'

test('renders the App component', () => {
  render(<App />)
  // Check if the component renders without any error
  expect(screen.getByText('Password Strength Checker')).toBeInTheDocument()
})

test('displays an error message for invalid password', async () => {
  render(<App />)

  // Fill in an invalid password
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'weak'},
  })

  // Submit the form
  fireEvent.click(screen.getByText('Submit'))

  // Wait for the error message to appear
  await waitFor(() => {
    expect(
      screen.getByText(/Password must have at least 6 characters/i),
    ).toBeInTheDocument()
  })
})

test('displays a success message for valid password', async () => {
  render(<App />)

  // Fill in a valid password
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'Strong123'},
  })

  // Submit the form
  fireEvent.click(screen.getByText('Submit'))
  await waitFor(() => {
    expect(screen.getByText('Password saved successfully!')).toBeInTheDocument()
  })
})

test('displays an error message when the password is too short', async () => {
  render(<App />)

  // Fill in a password that is too short
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'abc'},
  })

  // Submit the form
  fireEvent.click(screen.getByText('Submit'))

  // Wait for the error message to appear
  await waitFor(() => {
    expect(
      screen.getByText(/Password must have at least 6 characters/i),
    ).toBeInTheDocument()
  })
})

test('displays an error message when the password is too long', async () => {
  render(<App />)

  // Fill in a password that is too long
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: '123456789012345678901'},
  })

  // Submit the form
  fireEvent.click(screen.getByText('Submit'))

  // Wait for the error message to appear
  await waitFor(() => {
    expect(
      screen.getByText(/Password must have at most 20 characters/i),
    ).toBeInTheDocument()
  })
})

test('displays an error message when the password does not have a lowercase letter', async () => {
  render(<App />)

  // Fill in a password without a lowercase letter
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'PASSWORD123'},
  })

  // Submit the form
  fireEvent.click(screen.getByText('Submit'))

  // Wait for the error message to appear
  await waitFor(() => {
    expect(
      screen.getByText(/Password must have at least one lowercase letter/i),
    ).toBeInTheDocument()
  })
})

test('displays an error message when the password does not have an uppercase letter', async () => {
  render(<App />)

  // Fill in a password without an uppercase letter
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'password123'},
  })

  // Submit the form
  fireEvent.click(screen.getByText('Submit'))

  // Wait for the error message to appear
  await waitFor(() => {
    expect(
      screen.getByText(/Password must have at least one uppercase letter/i),
    ).toBeInTheDocument()
  })
})

test('displays an error message when the password does not have a digit', async () => {
  render(<App />)

  // Fill in a password without a digit
  fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'Password'},
  })

  // Submit the form
  fireEvent.click(screen.getByText('Submit'))

  // Wait for the error message to appear
  await waitFor(() => {
    expect(
      screen.getByText(/Password must have at least one digit/i),
    ).toBeInTheDocument()
  })
})
