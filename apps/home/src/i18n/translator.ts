import type enData from './en/ui.json';
import type zhData from './zh/ui.json';

const translations: Record<string, 'en' | 'zh'> = {
  en: 'en',
  zh: 'zh',
};

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export function getPathnameFromLocale(locale: Locale, pathname: string): string {
  if (locale === 'en') {
    return pathname;
  }
  return `/${locale}${pathname}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'zh')) {
    return segments[0] as Locale;
  }
  return 'en';
}

export async function loadTranslation(locale: Locale) {
  try {
    const data = await import(`./${locale}/ui.json`);
    return data.default;
  } catch (error) {
    console.error(`Failed to load translation for locale: ${locale}`, error);
    const fallback = await import('./en/ui.json');
    return fallback.default;
  }
}

export type TranslationData = typeof enData;

export function t(data: TranslationData, key: string): string {
  const keys = key.split('.');
  let result: any = data;
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) return key;
  }
  return result as string;
}
