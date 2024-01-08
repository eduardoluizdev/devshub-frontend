import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { customerResource } from '@/resources/customers'

type RemoreCustomerModalProps = {
  customerId: string
}

const RemoreCustomerModal = ({ customerId }: RemoreCustomerModalProps) => {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const { mutateAsync } = useMutation({
    mutationFn: customerResource.remove,
  })

  const handleRemove = async () => {
    const response = await mutateAsync(customerId)

    if (response?.error) {
      toast({
        title: 'Erro ao remover cliente',
        description: response.message,
      })
      return
    }

    queryClient.invalidateQueries({ queryKey: ['customers'] })

    toast({
      title: 'Cliente removido com sucesso',
      description: `O cliente foi removido com sucesso`,
    })

    setOpen(false)
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="w-full">
          Deletar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certaza dessa ação?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
            conta e remova seus dados de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive" onClick={handleRemove}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { RemoreCustomerModal }
