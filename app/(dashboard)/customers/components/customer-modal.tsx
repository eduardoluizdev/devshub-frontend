'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { toast } from '@/components/ui/use-toast'
import { Customer } from '@/entities/customer'
import { customerResource } from '@/resources/customers'

import { CustomerForm, CustomerFormSchemaProps } from './customer-form'

type CustomerModalProps = {
  customer: Customer
  type?: 'view' | 'edit'
}

const CustomerModal = ({ customer, type }: CustomerModalProps) => {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)

  const handleEdit = async (data: CustomerFormSchemaProps) => {
    const reponse = await customerResource.update(customer.id!, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      sector: data.sector,
      services: data.services,
    })

    if (reponse?.error) {
      toast({
        title: 'Erro ao atualizar cliente',
        description: reponse.message,
      })
      return
    }

    queryClient.invalidateQueries({ queryKey: ['customers'] })

    toast({
      title: 'Cliente atualizado com sucesso',
      description: `O cliente ${customer.name} foi atualizado com sucesso`,
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full">
          {type === 'view' ? 'Visualizar' : 'Editar'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'view' ? 'Visualizar' : 'Editar'} Cliente
          </DialogTitle>
          <DialogDescription>
            {type === 'view'
              ? 'Informações do seu cliente.'
              : 'Faça alterações do seu cliente aqui. Clique em salvar quando terminar.'}
          </DialogDescription>
        </DialogHeader>
        <div>
          <CustomerForm
            handleSubmit={handleEdit}
            defaultValues={customer}
            disabled={type === 'view' ? true : false}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { CustomerModal }
