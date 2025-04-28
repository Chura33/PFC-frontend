import Cookie,{ CookieGetOptions, CookieSetOptions } from 'universal-cookie'
import DOMPurify from 'dompurify'

interface StorageProps {
    key:string 
    value?:string
}

const cookies = new Cookie()
const date = new Date()
const expireTime = new Date(date.getTime() + 7 * 60 * 60 * 1000)
const maxAge = 7 * 60 * 60 
const defaultCookieOptions:CookieSetOptions = {
    maxAge,
    expires:expireTime,
    path:'/',
    sameSite:'strict'
}

export const storeCookie = ({key,value}: StorageProps):void => {
    if(key !== '' && value !== ''){
        cookies.set(key, DOMPurify.sanitize(JSON.stringify(value)), {
            ...defaultCookieOptions
        })
    }
}

export const getAuthToken = (): string | undefined => {
    const authToken = cookies.get('AUTH_TOKEN')
    return typeof authToken === 'string'
      ? DOMPurify.sanitize(authToken)
      : undefined
  }
  
  export const getStoredCookie = (key: string): string | undefined => {
    const cookie = cookies.get(key, {
      ...(defaultCookieOptions as CookieGetOptions),
    })
  
    return typeof cookie === 'string'
      ? JSON.parse(DOMPurify.sanitize(cookie))
      : undefined
  }
  
  export const deleteStorageCookie = ({ key }: StorageProps): void => {
    cookies.remove(key, {
      ...(defaultCookieOptions as CookieSetOptions),
    })
  }
  
  export const setLocalItem = ({ key, value }: StorageProps) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(
        key,
        DOMPurify.sanitize(JSON.stringify(value))
      )
    }
  }
  
  export const getLocalItem = <T>({ key }: StorageProps): T | null => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const item = window.sessionStorage.getItem(key)
      if (item !== null) {
        try {
          return JSON.parse(DOMPurify.sanitize(item))
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(`Error parsing local storage item: `, err)
        }
      }
    }
    return null
  }
  
  export const removeLocalItem = ({ key }: StorageProps): void => {
    sessionStorage.removeItem(key)
  }
  export const clearItem = (): void => {
    sessionStorage.clear()
  }