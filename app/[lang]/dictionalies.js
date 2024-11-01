import 'server-only'; // Указывает, что этот код должен выполняться только на сервере

const dictionaries = {
  en: () => import('../../dictionalies/en.json').then((module) => module.default),
  ru: () => import('../../dictionalies/ru.json').then((module) => module.default),
};

export async function getDictionary(lang) {
  return dictionaries[lang]();
}