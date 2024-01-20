import { WhatsAppSendMessage, WhatsAppSession } from '@/entities/whatsapp'
import { httpClient } from '@/lib/httpClient'
import { httpServer } from '@/lib/httpServer'

const session = async (
  requesType: 'client' | 'server'
): Promise<WhatsAppSession | undefined> => {
  let requestClient = null

  requesType == 'server'
    ? (requestClient = httpServer)
    : (requestClient = httpClient)

  const { data } = await requestClient.get('/whatsapp/session')

  return data
}

const initializer = async (requesType: 'client' | 'server') => {
  let requestClient = null

  requesType == 'server'
    ? (requestClient = httpServer)
    : (requestClient = httpClient)

  const { data } = await requestClient.post('/whatsapp/initializer')

  return data
}

const closeSession = async (requesType: 'client' | 'server') => {
  let requestClient = null

  requesType == 'server'
    ? (requestClient = httpServer)
    : (requestClient = httpClient)

  const { data } = await requestClient.post('/whatsapp/close-session')

  return data
}

const sendMessage = async ({
  requesType,
  phone,
  message,
}: {
  requesType: 'client' | 'server'
  phone: string
  message: string
}): Promise<WhatsAppSendMessage | undefined> => {
  let requestClient = null

  requesType == 'server'
    ? (requestClient = httpServer)
    : (requestClient = httpClient)

  const { data } = await requestClient.post('/whatsapp/send-message', {
    phone,
    message,
  })

  return data
}

const whatsAppResource = {
  session,
  sendMessage,
  initializer,
  closeSession,
}

export { whatsAppResource }
