import React, { createContext, useContext, useMemo, useState } from 'react';
import { Language, translate } from '../api/translate';

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (id: string, vars?: Record<string, any>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children, defaultLang }: { children: React.ReactNode; defaultLang?: Language }) {
  const stored = localStorage.getItem('app.storage.lang') as Language | null;
  const initialLang: Language =
    stored ?? (defaultLang ?? ((navigator.language?.toLowerCase() || '').startsWith('zh') ? 'zhcn' : 'enus'));
  const [lang, setLangState] = useState<Language>(initialLang);

  const setLang = (next: Language) => {
    localStorage.setItem('app.storage.lang', next);
    setLangState(next);
  };

  const t = (id: string, vars?: Record<string, any>) => {
    const base = translate(id, lang);
    return vars ? base.replace(/\{(\w+)\}/g, (_m, k) => String(vars[k] ?? `{${k}}`)) : base;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}