export const vueI18n = {}
export const vueI18nLoader = false
export const locales = [
  {code: 'es', file: 'es-ES.js', iso: 'en-ES', name: 'Español'},
  {code: 'en', file: 'en-US.js', iso: 'en-US', name: 'English'},
]
export const defaultLocale = 'en'
export const routesNameSeparator = '___'
export const defaultLocaleRouteNameSuffix = 'default'
export const strategy = 'prefix_except_default'
export const lazy = true
export const langDir = 'i18n/'
export const rootRedirect = null
export const detectBrowserLanguage = {
  useCookie: true,
  cookieCrossOrigin: false,
  cookieDomain: null,
  cookieKey: 'i18n_redirected',
  cookieSecure: false,
  alwaysRedirect: false,
  fallbackLocale: '',
  onlyOnNoPrefix: false,
  onlyOnRoot: false,
}
export const differentDomains = false
export const seo = false
export const baseUrl = ''
export const vuex = {
  moduleName: 'i18n',
  syncLocale: false,
  syncMessages: false,
  syncRouteParams: true,
}
export const parsePages = false
export const pages = {}
export const beforeLanguageSwitch = () => null
export const onLanguageSwitched = () => null
export const IS_UNIVERSAL_MODE = false
export const MODULE_NAME = 'nuxt-i18n'
export const LOCALE_CODE_KEY = 'code'
export const LOCALE_ISO_KEY = 'iso'
export const LOCALE_DOMAIN_KEY = 'domain'
export const LOCALE_FILE_KEY = 'file'
export const STRATEGIES = {
  PREFIX: 'prefix',
  PREFIX_EXCEPT_DEFAULT: 'prefix_except_default',
  PREFIX_AND_DEFAULT: 'prefix_and_default',
  NO_PREFIX: 'no_prefix',
}
export const COMPONENT_OPTIONS_KEY = 'nuxtI18n'
export const localeCodes = ['es', 'en']
export const trailingSlash = true
