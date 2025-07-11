import { createI18n } from 'vue-i18n'
import en from '@/locales/english.json'
import km from '@/locales/khmer.json'

type MessageSchema = typeof en // assuming all translations follow same shape

const i18n = createI18n<[MessageSchema], 'en' | 'km'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    km,
  },
})

export default i18n
