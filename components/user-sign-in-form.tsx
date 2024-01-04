'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useToast } from './ui/use-toast'

export const signInSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, {
    message: 'Senha deve ter no mínimo 8 caracteres',
  }),
})

export type SignInSchema = z.infer<typeof signInSchema>

export function UserSignInForm() {
  const router = useRouter()
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const handleSignIn = async (data: SignInSchema) => {
    const response = await signIn<'credentials'>('credentials', {
      ...data,
      redirect: false,
    })

    if (response?.error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao acessar painel',
        description: response.error,
      })

      return
    }

    toast({
      title: 'Acesso autorizado',
      description: 'Redirecionando...',
    })
    router.push('/')
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className="text-sm text-red-400 block text-left px-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Sua senha</Label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          disabled={isSubmitting}
        />
        {errors.password && (
          <span className="text-sm text-red-400 block text-left px-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <Button disabled={isSubmitting} className="w-full" type="submit">
        Acessar painel
      </Button>
    </form>
  )
}
