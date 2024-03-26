import Dialog from "./Dialog.jsx";

import { useEffect, useRef, useState } from "react";
import { TextWriter } from "@zip.js/zip.js";

function SaveDialog({ data, onOpen, onClose, messages }) {
  const filenameInputRef = useRef(null);
  const filenameTextSelected = useRef(false);
  const [filename, setFilename] = useState("");

  function handleChangeFilename(event) {
    setFilename(event.target.value);
  }

  function onOpenq() {
    setFilename(data.filename);
  }

  async function handleSubmit() {
    const zipFileEntry = data.file
    const writer = new TextWriter();
    const text = await zipFileEntry.data?.getData(writer)
    let entry = {name:filename, file:zipFileEntry}
    onOpen({entry})
  }

  function handleClose() {
    setFilename("");
    filenameTextSelected.current = false;
    onClose();
  }

  useEffect(() => {
    if (!filenameTextSelected.current && filename) {
      filenameTextSelected.current = true;
      filenameInputRef.current.select();
    }
  }, [filename]);
  return (
    <Dialog
      data={data}
      title={'File Name'}
      cancelLabel={messages.DIALOG_CANCEL_BUTTON_LABEL}
      submitLabel={'Save'}
      onOpen={onOpenq}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label>
        {'File Name'}
        <input
          spellCheck="false"
          type="text"
          value={filename}
          required
          onChange={handleChangeFilename}
          ref={filenameInputRef}
        />
      </label>
    </Dialog>
  );
}

export default SaveDialog;
