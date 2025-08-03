export function setCookie(
  name: string,
  value: string,
  options: Partial<{
    path: string
    secure: boolean
    sameSite: 'strict' | 'lax' | 'none'
    maxAgeSeconds: number // 👈 new
  }> = {}
) {
  const maxAge = options.maxAgeSeconds ?? 60 * 60 * 24 * 7 // default: 7 days
  const expires = new Date(Date.now() + maxAge * 1000).toUTCString()

  const cookie = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `expires=${expires}`,
    `path=${options.path || '/'}`,
    options.sameSite ? `SameSite=${options.sameSite}` : '',
    options.secure ? 'Secure' : '',
  ]
    .filter(Boolean)
    .join('; ')

  document.cookie = cookie
}


export function getCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp('(^| )' + name + '=([^;]+)')
  )
  return match ? decodeURIComponent(match[2]) : null
}

export function hasCookie(name: string): boolean {
  return getCookie(name) !== null
}

export function deleteCookie(name: string, path = '/') {
  document.cookie = `${encodeURIComponent(name)}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
