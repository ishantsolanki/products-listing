import React from 'react'
import { Link } from 'react-router-dom'

export const LoginLink = () => (
  <div>
    Already have an account? <Link className="text-teal-500 hover:underline" to="/login">Log in</Link>
  </div>
)

export default LoginLink
