import Vue from "vue";
// i18n
import VueI18n from "vue-i18n";

import { getLang } from "@/utils/locale";
import setting from "@/config/setting";
import messages from "@/locales/index";

Vue.use(VueI18n);

const options = {
  locale: getLang() || setting.locale,
  fallbackLocale: "vn ",
  messages,
};

const i18n = new VueI18n(options);

export default i18n;
