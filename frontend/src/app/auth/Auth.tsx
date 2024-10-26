'use client'

import { Button } from "@/components/button/Button"
import { BaseInput } from "@/components/form/inputs/base-input/BaseInput"
import Heading from "@/components/heading/Heading"
import { ROUTES } from "@/config/routes.config"
import { authService } from "@/services/auth.service"
import { TypeAuthForm } from "@/types/user.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { GoFlame } from "react-icons/go"
import { PiScanSmileyBold } from "react-icons/pi"
import { RiBearSmileLine } from "react-icons/ri"
import { toast } from "sonner"
import styles from "./Auth.module.scss"

const Auth = () => {
    const {register, handleSubmit, reset, control} = useForm<TypeAuthForm>({
        mode: 'onChange',
    })

    const [isLoginForm, setIsLoginForm] = useState(false)
    const {push} = useRouter()
    const queryClient = useQueryClient()

    const {mutate: authMutate, isPending} = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: TypeAuthForm) => authService.main(isLoginForm ? 'login' : 'registration', data),
        onSuccess: () => {
            toast.success('Successfully!')
            reset()
            push(ROUTES.DASHBOARD)
            queryClient.invalidateQueries({ queryKey: ['get-profile']})
        },
        onError: (error: AxiosError<{message: string[]}>) => {
            if (error.response?.status == 404) {
                toast.error("email or password incorrect")
                return
            }
            
            toast.error(<ul>{error?.response?.data?.message?.map(m => <li>- {m}</li>)}</ul>)
        }
    })

    const onSubmit: SubmitHandler<TypeAuthForm> = data => {
        authMutate(data)
    }

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Heading>
            Authentication :<PiScanSmileyBold />:
        </Heading>
        <BaseInput placeholder="Email" {...register('email')} />
        <BaseInput placeholder="Password" type='password' {...register('password')} />
        <div className={styles.form__buttons}>
            <Button onClick={() => setIsLoginForm(true)} disabled={isPending} isLoading={isPending && isLoginForm}>
                <RiBearSmileLine />
                Login
            </Button>
            <Button variant="accent" onClick={() => setIsLoginForm(false)} disabled={isPending} isLoading={isPending && !isLoginForm}>
                <GoFlame />
                Registration
            </Button>
        </div>
      </form>
    </div>
  )
}

export default Auth
