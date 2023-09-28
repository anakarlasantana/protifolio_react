import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './translate/en.json';
import pt_BrJson from './translate/pt_Br.json';
import esJson from './translate/es.json';


i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: enJson,
        pt: pt_BrJson,
        es: esJson,
    }
})

export default i18n;