import React from 'react'
import { Link } from 'react-router-dom'

export const SignupLink = () => {
  return (
    <div>
      Don't have an account? <Link className="text-teal-500 hover:underline" to="/signup">Sign Up</Link>
    </div>
  )
}

export default SignupLink
