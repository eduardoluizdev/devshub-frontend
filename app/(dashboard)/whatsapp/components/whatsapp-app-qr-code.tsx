'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

import { WhatsAppSession } from '@/entities/whatsapp'
import { whatsAppResource } from '@/resources/whatsapp'

const WhatsappAppQrCode = ({
  session,
}: {
  session: WhatsAppSession | undefined
}) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['customers'],
    queryFn: () => whatsAppResource.session('client'),
    initialData: session,
  })

  const handleInitializer = async () => {
    await whatsAppResource.initializer('client')
  }

  const handleClose = async () => {
    await whatsAppResource.closeSession('client')
  }

  return (
    <div>
      <p>Status: {data?.connected ? 'conectado' : 'desconectado'}</p>
      {!data?.connected && (
        <>
          {!data?.connected && <p>Tentativas: {data?.attempts}</p>}
          {data?.qr && !data?.connected && (
            <Image src={data?.qr} alt="qrcode" width={200} height={200} />
          )}
        </>
      )}

      {data?.status && <p>Status: {data?.status}</p>}
    </div>
  )
}

export { WhatsappAppQrCode }
