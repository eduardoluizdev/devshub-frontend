'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
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
import { Service } from '@/entities/service'
import { customerResource } from '@/resources/customers'
import { serviceResource } from '@/resources/services'

import { ServiceForm, ServiceFormSchemaProps } from './service-form'

type ServiceModalProps = {
  service: Service
  type?: 'view' | 'edit'
}

const ServiceModal = ({ service, type }: ServiceModalProps) => {
  console.log({ service })
  const serviceWithCustomer = {
    name: service.name,
    price: String(service.price),
    renewal: service.renewal,
    customerId: service.customer ? service.customer.id : null,
  }
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)

  const { data, isSuccess } = useQuery({
    queryKey: ['customers'],
    queryFn: () => customerResource.getAll('client'),
  })

  const handleEdit = async (data: ServiceFormSchemaProps) => {
    console.log(data)
    const reponse = await serviceResource.update(service.id!, {
      name: data.name,
      price: Number(data.price),
      renewal: data.renewal,
      customerId: data.customerId ? data.customerId : undefined,
    })

    if (reponse?.error) {
      toast({
        title: 'Erro ao atualizar o serviço',
        description: reponse.message,
      })
      return
    }

    queryClient.invalidateQueries({ queryKey: ['services'] })

    toast({
      title: 'Serviço atualizado com sucesso',
      description: `O serviço ${service.name} foi atualizado com sucesso`,
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
          <ServiceForm
            handleSubmit={handleEdit}
            defaultValues={serviceWithCustomer}
            disabled={type === 'view' ? true : false}
            customers={isSuccess ? data.customers : []}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { ServiceModal }
