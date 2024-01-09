'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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
import { Input } from '@/components/ui/input'
import { ServiceRenewalType } from '@/entities/service'

const seriveObjectSchema = z.object({
  name: z.string(),
  price: z.number(),
  renewal: z.nativeEnum(ServiceRenewalType),
  customerId: z.string(),
})

const createCustomerFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(11).max(11),
  sector: z.string(),
  services: z.array(seriveObjectSchema).optional(),
})

export type CustomerFormSchemaProps = z.infer<typeof createCustomerFormSchema>

type CustomerFormProps = {
  handleSubmit: (data: CustomerFormSchemaProps) => void
  defaultValues?: CustomerFormSchemaProps
  disabled?: boolean
}

const CustomerForm = ({
  handleSubmit,
  defaultValues,
  disabled,
}: CustomerFormProps) => {
  const form = useForm<CustomerFormSchemaProps>({
    resolver: zodResolver(createCustomerFormSchema),
    defaultValues: defaultValues
      ? {
          name: defaultValues.name,
          email: defaultValues.email,
          phone: defaultValues.phone,
          sector: defaultValues.sector,
          services: defaultValues.services,
        }
      : {},
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome"
                  value={value}
                  onChange={onChange}
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="E-mail"
                  value={value}
                  onChange={onChange}
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Telefone/WhatsApp</FormLabel>
              <FormControl>
                <Input
                  placeholder="+55 99 99999-9999"
                  value={value}
                  onChange={onChange}
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sector"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Setor</FormLabel>
              <FormControl>
                <Input
                  placeholder="Setor"
                  value={value}
                  onChange={onChange}
                  disabled={disabled}
                />
              </FormControl>
              {!disabled && (
                <FormDescription>
                  Descreva o setor que o cliente atua.
                </FormDescription>
              )}

              <FormMessage />
            </FormItem>
          )}
        />
        {!disabled && <Button type="submit">Salvar</Button>}
      </form>
    </Form>
  )
}

export { CustomerForm }
