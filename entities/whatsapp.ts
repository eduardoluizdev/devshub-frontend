export interface WhatsAppSession {
  qr: string
  attempts: string
  connected: boolean
  status?: string
}

export interface WhatsAppSendMessage {
  ok: boolean
}
