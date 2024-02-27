import { useState } from 'react'

const useForm = (formState) => {
  const [user, setUser] = useState(formState)

  const onChangeInput = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  const onSubmitForm = async (e) => {
    // e.preventDefault()
    console.log('Submiting.....')
    await fetch('http://127.0.0.1:5000/register_waiting_list', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user)
    })

  }

  return {
    user,
    onChangeInput,
    onSubmitForm,
  }
}

export default useForm
