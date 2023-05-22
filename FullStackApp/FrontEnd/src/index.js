import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Form, Input, Button, message, Card} from 'antd'
import axios from 'axios'

function App() {
  const [form] = Form.useForm()
  const [strength, setStrength] = useState(0)

  const checkPasswordStrength = (password) => {
    let strength = 0

    // Check password length
    if (password.length < 6) {
      strength = 6 - password.length
    } else if (password.length > 20) {
      strength = password.length - 20
    }

    // Check lowercase, uppercase, and digit
    const hasLowercase = /[a-z]/.test(password)
    const hasUppercase = /[A-Z]/.test(password)
    const hasDigit = /\d/.test(password)

    if (!hasLowercase) strength++
    if (!hasUppercase) strength++
    if (!hasDigit) strength++

    // Check for repeating characters
    for (let i = 2; i < password.length; i++) {
      if (
        password[i] === password[i - 1] &&
        password[i - 1] === password[i - 2]
      ) {
        strength++
        break
      }
    }

    return strength
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    form.setFieldsValue({password: value})
    const strength = checkPasswordStrength(value)
    setStrength(strength)
  }

  const handleSubmit = (values) => {
    // Handle form submission here
    const {password} = values
    axios
      .post('/api/savePassword', {password})
      .then((res) => {
        message.success('Password saved successfully!')
      })
      .catch((err) => {
        message.error(`Invalid password. ${err}`)
      })
  }

  return (
    <div>
      <Card
        title="Password Strength Checker"
        style={{
          width: '50%',
          margin: '25%',
          background: 'rgb(13, 63, 75)',
        }}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {required: true, message: 'Please enter your password'},
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject()
                  }
                  if (strength !== 0) {
                    return Promise.reject(
                      'Password must have at least 6 characters, including at least one lowercase letter, one uppercase letter, and one digit.',
                    )
                  }

                  return Promise.resolve()
                },
              }),
            ]}
          >
            <Input.Password onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
