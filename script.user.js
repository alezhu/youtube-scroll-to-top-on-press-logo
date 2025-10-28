// ==UserScript==
// @name         YouTube scroll to top on home button
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Scroll page to top when press on YouTube logo!
// @author       alezhu
// @match        https://www.youtube.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @homepageURL    https://github.com/alezhu/youtube-scroll-to-top-on-press-logo
// @updateURL      https://github.com/alezhu/youtube-scroll-to-top-on-press-logo/raw/refs/heads/main/script.user.js
// @downloadURL    https://github.com/alezhu/youtube-scroll-to-top-on-press-logo/raw/refs/heads/main/script.user.js
// @supportURL     https://github.com/alezhu/youtube-scroll-to-top-on-press-logo/issues
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
