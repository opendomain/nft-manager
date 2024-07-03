import { useEffect, useRef } from "react";

function DialogForIFrame({
  className,
  data,
  title,
  resetLabel,
  cancelLabel,
  submitLabel,
  children,
  onOpen,
  onSubmit,
  onReset,
  onClose
}) {
  const dialogRef = useRef(null);

  function handleReset(event) {
    event.preventDefault();
    dialogRef.current.close();
  }

  useEffect(() => {
    if (!dialogRef.current.open && data) {
      if (onOpen) {
        onOpen();
      }
      dialogRef.current.showModal();
    }
  }, [data]);

  return (
    <dialog className={className} ref={dialogRef} onClose={onClose}>
      <div className="button-bar">
        {cancelLabel && <button type="reset" onClick={handleReset} >{cancelLabel}</button>}
      </div>
      <div>{children}</div>
    </dialog>
  );
}

export default DialogForIFrame;
