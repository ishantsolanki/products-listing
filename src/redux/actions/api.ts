type modes = "cors" | "navigate" | "no-cors" | "same-origin" | undefined

export const signup = (formData: { username: string, password: string }) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    mode: 'cors' as modes
  }
  return fetch('http://localhost:3001/signup', options)
}
