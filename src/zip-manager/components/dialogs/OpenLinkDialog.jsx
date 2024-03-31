import Dialog from "./Dialog.jsx";

import { useState } from "react";

function OpenLinkDialog({ data, onLink, onClose, messages }) {
  const [fileurl, setFileurl] = useState("");

  function handleChangeFilename(event) {
    setFileurl(event.target.value);
  }

  function onOpen() {
    setFileurl(data);
  }

  function handleSubmit() {
    onLink({ fileurl });
  }

  function handleClose() {
    setFileurl("");
    onClose();
  }
  
  return (
    <Dialog
      data={data}
      title={'Please put url of xNFT'}
      cancelLabel={messages.DIALOG_CANCEL_BUTTON_LABEL}
      submitLabel={'Download'}
      onOpen={onOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label>
        <a href="https://pardontrump.com/images/PardonTrump.NFT" target="_blank">{'Example'}</a>
        <input
          type="text"
          value={fileurl}
          required
          onChange={handleChangeFilename}
        />
      </label>
    </Dialog>
  );
}

export default OpenLinkDialog;
