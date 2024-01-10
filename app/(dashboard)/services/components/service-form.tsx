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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Customer } from '@/entities/customer'
import { ServiceRenewalType } from '@/entities/service'

const createServiceFormSchema = z.object({
  name: z.string(),
  price: z.string(),
  renewal: z.nativeEnum(ServiceRenewalType),
  customerId: z.string().nullable(),
})

export type ServiceFormSchemaProps = z.infer<typeof createServiceFormSchema>

type CustomerFormProps = {
  handleSubmit: (data: ServiceFormSchemaProps) => void
  defaultValues?: ServiceFormSchemaProps
  disabled?: boolean
  customers: Customer[]
}

const ServiceForm = ({
  handleSubmit,
  defaultValues,
  disabled,
  customers,
}: CustomerFormProps) => {
  console.log(defaultValues)
  const form = useForm<ServiceFormSchemaProps>({
    resolver: zodResolver(createServiceFormSchema),
    defaultValues: defaultValues
      ? {
          name: defaultValues.name,
          price: defaultValues.price,
          renewal: defaultValues.renewal,
          customerId: defaultValues.customerId
            ? defaultValues.customerId
            : null,
        }
      : {},
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="customerId"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Cliente</FormLabel>
              <Select
                onValueChange={onChange}
                defaultValue=""
                value={value ? value : ''}
                disabled={disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um cliente" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {customers?.map((customer) => (
                    <SelectItem key={customer.id} value={customer.id!}>
                      {customer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Selecione o cliente que será vinculado ao serviço
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="price"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input
                  placeholder="Preço"
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
          name="renewal"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Período de renovação</FormLabel>
              <Select
                onValueChange={onChange}
                value={value ? value : ''}
                defaultValue=""
                disabled={disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um período de renovação" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['MONTHLY', 'YEARLY'].map((renewal) => (
                    <SelectItem key={renewal} value={renewal}>
                      {renewal}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        {!disabled && <Button type="submit">Salvar</Button>}
      </form>
    </Form>
  )
}

export { ServiceForm }
