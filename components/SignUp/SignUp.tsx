import { userIdContext, usernameContext } from '@/context/context'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './SignUp.module.css'
export interface ISignUp {
  setUser: (token: string, id: string) => void
  setIsOpen: (open: boolean) => void
}

export const SignUp = ({ setUser, setIsOpen }: ISignUp) => {
  const { setUserIdCtx } = useContext(userIdContext)
  const { setUsernameCtx } = useContext(usernameContext)
  const [userExist, setUserExist] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  interface FormValues {
    username: string
    email: string
    password: string
    passwordConfirmation: string
    avatar: string
  }

  const postSignUp: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('username', data.username)
    formData.append('password', data.password)
    formData.append('avatar', data.avatar)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/signup`,
        {
          method: 'POST',
          body: formData,
        }
      )

      const result = await response.json()

      console.log('result signUp:', result)

      if (result.msg === 'Account existing') {
        setUserExist(true)
      }

      if (result.token) {
        setUserIdCtx(result._id)
        setUser(result.token, result._id)
      }

      if (result.email) {
        try {
          const loginSignUp = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify(data),
            }
          )

          const loginResult = await loginSignUp.json()

          if (loginResult) {
            setUsernameCtx(result.account.username)
            setIsOpen(false)
          }
        } catch (error) {
          console.error(`no login from ${data.username} account`, error)
        }
      }

      reset(data)
      console.log('Success:', result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={handleSubmit((data) => postSignUp(data))}>
        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          {...register('username', {
            required: 'Username is required.',
            maxLength: 80,
          })}
          className={styles.modal__input}
        />
        {errors.username && (
          <p className="errorMsg">{errors.username.message}</p>
        )}
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
        <div>
          <input
            type="password"
            autoComplete="off"
            {...register('password', { required: true })}
            placeholder="Password"
            className={styles.modal__input}
          />
          <input
            type="password"
            autoComplete="off"
            {...register('passwordConfirmation', {
              required: true,
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues()
                  return password === value || 'Passwords do not match.'
                },
              },
            })}
            placeholder="Confirm password!"
            className={styles.modal__input}
          />
          {errors.password?.type === 'required' && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.passwordConfirmation?.type === 'required' && (
            <p className="errorMsg">Passwords do not match.</p>
          )}
        </div>
        {/* <div>
          <input
            type="file"
            {...register('avatar')}
            placeholder="Add a photo..."
            className={styles.modal__input}
          />
        </div> */}
        {userExist && (
          <p className="errorMsg">
            This account already exists, please choose another email address.
          </p>
        )}
        <button type="submit" className={styles.submit}>
          Sign Up
        </button>
      </form>
      <button className={styles.cancel} onClick={() => setIsOpen(false)}>
        Cancel
      </button>
    </div>
  )
}
