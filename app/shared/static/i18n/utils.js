export function buildResources(data) {
  return data.reduce((acc, value) => {
    acc[value[0]] = {
      translation: value[1],
    };
    return acc;
  }, {});
}

export function translateElement(element, i18n_key) {
  $(element).html($.t(i18n_key));
  $(element).attr("data-i18n", i18n_key);
}

export function translateElementWithInterpolation(element, i18n_key, data) {
  $(element).html($.t(i18n_key, data));
  $(element).attr("data-i18n", i18n_key);
  $(element).attr("data-i18n-options", JSON.stringify(data));
}

export function getLang() {
  const userLanguage = $.i18n.language;

  if (["en", "pt"].includes(userLanguage)) {
    return userLanguage;
  }

  if (/^en-[a-zA-Z]+$/g.test(userLanguage)) {
    return "en";
  }

  return "pt";
}
