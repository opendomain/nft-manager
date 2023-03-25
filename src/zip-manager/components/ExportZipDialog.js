import { useEffect, useRef, useState } from "react";

function ExportZipDialog({
  open,
  filename,
  password,
  onExportZip,
  onClose,
  messages
}) {
  const dialogRef = useRef(null);
  const filenameInputRef = useRef(null);
  const filenameTextSelected = useRef(false);
  const [filenameValue, setFilenameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function handleChangeFilename(event) {
    setFilenameValue(event.target.value);
  }

  function handleChangePassword(event) {
    setPasswordValue(event.target.value);
  }

  function handleSubmit() {
    onExportZip({ filename: filenameValue, password: passwordValue });
  }

  function handleReset() {
    dialogRef.current.close();
  }

  function handleClose() {
    filenameTextSelected.current = false;
    onClose();
  }

  useEffect(() => {
    if (!dialogRef.current.open && open) {
      setFilenameValue(filename);
      setPasswordValue(password);
      dialogRef.current.showModal();
      if (filename) {
        filenameInputRef.current.select();
      }
    }
  }, [open, filename, password]);
  useEffect(() => {
    if (!filenameTextSelected.current && filenameValue) {
      filenameTextSelected.current = true;
      filenameInputRef.current.select();
    }
  }, [filenameValue]);
  return (
    <>
      <div className="dialog-backdrop" hidden={!open}></div>
      <dialog ref={dialogRef} onClose={handleClose}>
        <form method="dialog" onSubmit={handleSubmit} onReset={handleReset}>
          <div>{messages.EXPORT_ZIP_TITLE}</div>
          <p>
            <label>
              {messages.EXPORT_ZIP_FILENAME_LABEL}
              <input
                value={filenameValue}
                required
                onChange={handleChangeFilename}
                ref={filenameInputRef}
              ></input>
            </label>
            <label>
              {messages.EXPORT_ZIP_PASSWORD_LABEL}
              <input
                type="password"
                autoComplete="off"
                value={passwordValue}
                onChange={handleChangePassword}
              ></input>
            </label>
          </p>
          <div className="button-bar">
            <button type="reset">{messages.DIALOG_CANCEL_BUTTON_LABEL}</button>
            <button type="submit">
              {messages.EXPORT_ZIP_DIALOG_BUTTON_LABEL}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default ExportZipDialog;