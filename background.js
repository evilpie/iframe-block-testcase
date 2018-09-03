"use strict";

function blockIframes(e) {
  if (e.type == "sub_frame") {
    return {cancel: true};
  }
}

browser.webRequest.onBeforeRequest.addListener(blockIframes, {urls: ["<all_urls>"]}, ["blocking"]);
