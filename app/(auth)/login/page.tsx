import { UserSignInForm } from '@/components/user-sign-in-form'

export default function Login() {
  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Gerencia seus clientes e serviços
          </p>

          <UserSignInForm />
        </div>
      </div>
    </div>
  )
}
