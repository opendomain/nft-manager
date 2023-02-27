/* global window, URL, AbortController */

const ABORT_ERROR_NAME = "AbortError";
const CANCELLED_DOWNLOAD_MESSAGE = "download cancelled";
const KEYUP_EVENT_NAME = "keyup";

function downloadBlob(blob, downloaderElement, download) {
  const href = URL.createObjectURL(blob);
  Object.assign(downloaderElement, { href, download });
  dispatchClick(downloaderElement);
  URL.revokeObjectURL(href);
}

function alert(message) {
  return window.alert(message);
}

function confirm(message) {
  return window.confirm(message);
}

function prompt(message, defaultValue) {
  return window.prompt(message, defaultValue);
}

function addKeyListener(listener) {
  window.addEventListener(KEYUP_EVENT_NAME, listener);
}

function removeKeyListener(listener) {
  window.removeEventListener(KEYUP_EVENT_NAME, listener);
}

function setFocus(element) {
  element.focus();
}

function dispatchClick(element) {
  element.click();
}

function createController() {
  return new AbortController();
}

function abortDownload(controller) {
  controller.abort(new Error(CANCELLED_DOWNLOAD_MESSAGE));
}

function downloadAborted(error) {
  const message = error.message || error;
  return (
    message === CANCELLED_DOWNLOAD_MESSAGE || error.name === ABORT_ERROR_NAME
  );
}

export {
  downloadBlob,
  createController,
  abortDownload,
  downloadAborted,
  alert,
  confirm,
  prompt,
  setFocus,
  dispatchClick,
  addKeyListener,
  removeKeyListener
};
