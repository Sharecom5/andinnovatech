import crypto from 'crypto';

// Generates: EVT-A3F9K2-20251215
export function generatePassId(): string {
  const random = crypto.randomBytes(3).toString('hex').toUpperCase()
  const date   = new Date().toISOString().slice(0,10).replace(/-/g,'')
  return `EVT-${random}-${date}`
}

// Generates 6-digit OTP
export function generateOTP(): string {
  return crypto.randomInt(100000, 999999).toString()
}

// OTP expiry — 10 minutes from now
export function otpExpiry(): Date {
  return new Date(Date.now() + 10 * 60 * 1000)
}
