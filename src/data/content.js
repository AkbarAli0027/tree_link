export const LANGUAGES = [
  { code: 'uz', label: "O'zbek tili", flag: '/patterns/uz.svg' },
  { code: 'ru', label: 'Русский', flag: '/patterns/ru.svg' },
  { code: 'en', label: 'English', flag: '/patterns/eng.svg' },
]

export const TRANSLATIONS = {
  uz: {
    title: 'Buyurtma bering',
    subtitle: 'Qulay usulni tanlang',
    socialLabel: "Ijtimoiy tarmoqlarimizga obuna bo'ling:",
    socialLabelShort: 'Ijtimoiy tarmoqlar:',
    viewAll: "Barchasini ko'rish",
    back: 'Orqaga',
    socialsTitle: 'Ijtimoiy tarmoqlar',
    socialsSubtitle: 'Rasmiy sahifalarimizga obuna bo‘ling',
    footer: '© EVOS Uzbekistan · zakaz.evos.uz',
    options: {
      telegram: { title: 'Telegram Bot orqali', subtitle: '@evosdeliverybot' },
      ios: { title: 'iOS – App Store', subtitle: 'MOBIL ILOVA ORQALI' },
      android: { title: 'Android – Google Play', subtitle: 'MOBIL ILOVA ORQALI' },
      call: { title: "Qo'ng'iroq orqali", subtitle: '+998 (71) 203-12-12' },
      career: { title: 'Ish qidiryapsizmi?', subtitle: "EVOS'DA ISHLASH" },
    },
  },
  ru: {
    title: 'Сделать заказ:',
    subtitle: 'Выберите способ',
    socialLabel: 'Подпишитесь на наши социальные сети:',
    socialLabelShort: 'Социальные сети:',
    viewAll: 'Посмотреть все',
    back: 'Назад',
    socialsTitle: 'Мы в соцсетях',
    socialsSubtitle: 'Подпишитесь на наши страницы',
    footer: '© EVOS Uzbekistan · zakaz.evos.uz',
    options: {
      telegram: { title: 'Через Telegram Bot ', subtitle: '@evosdeliverybot' },
      ios: { title: 'iOS – App Store', subtitle: 'В приложении Evos' },
      android: { title: 'Android – Google Play', subtitle: 'В приложении Evos' },
      call: { title: 'По телефону', subtitle: '+998 (71) 203-12-12' },
      career: { title: 'Ищите работу?', subtitle: 'РАБОТА В EVOS' },
    },
  },
  en: {
    title: 'Place your order:',
    subtitle: 'Choose a method',
    socialLabel: 'Follow us:',
    socialLabelShort: 'Follow us:',
    viewAll: 'View all',
    back: 'Back',
    socialsTitle: 'We are on social media',
    socialsSubtitle: 'Follow our pages',
    footer: '© EVOS Uzbekistan · zakaz.evos.uz',
    options: {
      telegram: { title: 'Telegram Bot', subtitle: '@evosdeliverybot' },
      ios: { title: 'iOS – App Store', subtitle: 'MOBILE APP' },
      android: { title: 'Android – Google Play', subtitle: 'MOBILE APP' },
      call: { title: 'Call Center', subtitle: '+998 (71) 203-12-12' },
      career: { title: 'Looking for a job?', subtitle: 'WORK AT EVOS' },
    },
  },
}

export const ORDER_OPTIONS = [
  { id: 'telegram', icon: '/patterns/telegram2.svg', href: 'https://t.me/evosdeliverybot' },
  { id: 'ios', icon: '/patterns/ios.svg', href: 'https://apps.apple.com/uz/app/evos-uz/id1595897228' },
  { id: 'android', icon: '/patterns/playmarket.svg', href: 'https://play.google.com/store/apps/details?id=uz.makfood.service.evos' },
  { id: 'call', icon: '/patterns/tell.svg', href: 'tel:+998712031212', divideAfter: true },
  { id: 'career', icon: '/patterns/hands.svg', href: 'https://www.instagram.com/hr_evos_uz/' },
]

export const SOCIALS = [
  { id: 'telegram', label: 'Telegram', subtitle: '@evosuz', icon: '/patterns/telegram.svg', href: 'https://t.me/evos' },
  { id: 'instagram', label: 'Instagram', subtitle: '@evosuz.uz', icon: '/patterns/instagram.svg', href: 'https://instagram.com/evos' },
  { id: 'facebook', label: 'Facebook', subtitle: 'EVOS Uzbekistan', icon: '/patterns/facebook.svg', href: 'https://facebook.com/evos' },
  { id: 'threads', label: 'Threads', subtitle: '@evosuz.uz', icon: '/patterns/threds.svg', href: 'https://www.threads.com' },
  { id: 'youtube', label: 'YouTube', subtitle: 'EVOS Uzbekistan', icon: '/patterns/yutube.svg', href: 'https://youtube.com/@evos' },
  { id: 'linkedin', label: 'LinkedIn', subtitle: 'EVOS', icon: '/patterns/LinkedIn.svg', href: 'https://uz.linkedin.com/company/evos-hr' },
  { id: 'evos', label: 'evos', subtitle: 'EVOS', icon: '/patterns/web.svg', href: 'https://evos.uz/' },
]
