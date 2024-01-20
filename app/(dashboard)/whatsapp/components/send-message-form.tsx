'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { Customer } from '@/entities/customer'
import { whatsAppResource } from '@/resources/whatsapp'

type SendMessageFormProps = {
  customers: Customer[]
}

type SendMessageFormSchemaProps = z.infer<typeof sendFormSchema>

const sendFormSchema = z.object({
  message: z.string(),
  customerPhone: z.string(),
})

const SendMessageForm = ({ customers }: SendMessageFormProps) => {
  const form = useForm<SendMessageFormSchemaProps>({
    resolver: zodResolver(sendFormSchema),
    defaultValues: {
      message: '',
      customerPhone: '',
    },
  })

  const handleSubmit = async (data: SendMessageFormSchemaProps) => {
    const response = await whatsAppResource.sendMessage({
      requesType: 'client',
      phone: `55${data.customerPhone}`,
      message: data.message,
    })

    if (!response?.ok) {
      return toast({
        title: 'Erro ao enviar mensagem',
        description: 'Tente novamente mais tarde',
      })
    }

    toast({
      title: 'Mensagem enviada com sucesso',
      description: 'A mensagem foi enviada com sucesso',
    })

    form.resetField('message')
    form.resetField('customerPhone')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="customerPhone"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Cliente</FormLabel>
              <Select onValueChange={onChange} value={value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um cliente" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {customers?.map((customer, index) => (
                    <SelectItem
                      key={`customer--phone--${customer.id!}--${index}`}
                      value={customer.phone}
                    >
                      {customer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  onChange={onChange}
                  value={value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}

export { SendMessageForm }
