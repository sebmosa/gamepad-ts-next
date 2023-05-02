import { apiUrl } from '@/api/index'
import { userIdContext, usernameContext } from '@/context/context'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './SignIn.module.css'
export interface ISignIn {
  setUser: (token: string, id: string) => void
  setIsOpen: (open: boolean) => void
}

export const SignIn = ({ setUser, setIsOpen }: ISignIn) => {
  const { userIdCtx } = useContext(userIdContext)
  const { setUserIdCtx } = useContext(userIdContext)
  const { setUsernameCtx } = useContext(usernameContext)
  const [invalidUser, setInvalidUser] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  interface FormValues {
    email: string
    password: string
  }

  const postSignIn: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.msg === 'Invalid user') {
        setInvalidUser(true)
      }
      if (result.token) {
        setUserIdCtx(result._id)
        setUser(result.token, result._id)
      }

      if (result) {
        setUsernameCtx(result.account.username)
        setIsOpen(false)
      }

      reset(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={handleSubmit((data) => postSignIn(data))}>
        <input
          type="email"
          placeholder="Email address"
          autoComplete="off"
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value:
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
              message: 'Email is not valid.',
            },
          })}
          className={styles.modal__input}
        />
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          {...register('password', { required: true })}
          className={styles.modal__input}
        />
        {errors.password?.type === 'required' && (
          <p className="errorMsg">Password is required.</p>
        )}
        {invalidUser && (
          <p className="errorMsg">
            This account does not exist, please try another account or create a
            new one by clicking on the Sign Up link below.
          </p>
        )}
        <button type="submit" className={styles.submit}>
          Sign In
        </button>
      </form>
      <button className={styles.cancel} onClick={() => setIsOpen(false)}>
        Cancel
      </button>
    </div>
  )
}
