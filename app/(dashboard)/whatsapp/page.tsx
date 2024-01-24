import Image from 'next/image'

import { PageHeader } from '@/components/page-header'
import { customerResource } from '@/resources/customers'
import { whatsAppResource } from '@/resources/whatsapp'

import { SendMessageForm } from './components/send-message-form'
import { WhatsappAppQrCode } from './components/whatsapp-app-qr-code'

export default async function WhatsApp() {
  const initialWhatsApp = await whatsAppResource.session('server')
  const initialCustomer = await customerResource.getAll('server')

  console.log(initialCustomer)

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="WhatsApp"
        subtitle="Crie e gerencie suas mensagens e campanhas"
      />

      <WhatsappAppQrCode session={initialWhatsApp} />

      {initialWhatsApp?.connected && (
        <div className="w-full max-w-96 bg-muted-foreground/20 p-4 rounded">
          <SendMessageForm customers={initialCustomer.customers} />
        </div>
      )}
    </div>
  )
}
