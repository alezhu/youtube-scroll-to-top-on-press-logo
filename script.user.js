// ==UserScript==
// @name         YouTube scroll to top on home button
// @namespace    http://tampermonkey.net/
// @version      2025-10-28
// @description  Scroll page to top when press in YouTube logo!
// @author       alezhu
// @match        https://www.youtube.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let elLogo = document.getElementById("logo");
  elLogo &&
    elLogo.addEventListener &&
    elLogo.addEventListener("click", function () {
      console.log("Go to TOP!!!");
      window.scrollTo(0, 0);
    });
})();
