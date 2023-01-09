import i18next from "i18next";
import jqueryI18next from "jquery-i18next";
import languageDetector from "i18next-browser-languagedetector";

import { getLang, translateElement } from "./utils.js";
import { i18nextOptions } from "./options.js";

$(function () {
  i18next.use(languageDetector).init(i18nextOptions, onI18nextLoad);
  createButtonsClickListeners();
});

function toggleDisplay(display) {
  return display === "none" ? "block" : "none";
}

$("#open-pop-up-language").on("click", () => {
  const popUpLanguage = $("#pop-up-language");
  const display = toggleDisplay(popUpLanguage.css("display"));
  popUpLanguage.css("display", display);
});

function createButtonsClickListeners() {
  $(".change-language-button").on("click", function () {
    const locale = $(this).data("locale");
    i18next.changeLanguage(locale, onChangeLanguage);
  });
}

function onI18nextLoad(err, t) {
  // if (err) return console.error(err);

  jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  $("body").localize();
  $("head title").localize();

  hideCurrentLanguageButton();

  $("#current-language").text(getLang().toUpperCase());
}

function onChangeLanguage(err) {
  // if (err) return console.error(err);
  document.location.reload();

}

function hideCurrentLanguageButton() {
  $(".change-language-button").each(function () {
    if ($(this).data("locale") === getLang()) {
      $(this).css("display", "none");
    }
  });
}
