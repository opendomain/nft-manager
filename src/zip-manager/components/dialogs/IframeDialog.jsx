import DialogForIFrame from "./DialogForIFrame.jsx";

import { useEffect, useRef, useState } from "react";

import { TextWriter } from "@zip.js/zip.js";

function IframeDialog({ data, onOpen, onClose, messages }) {
  const filenameInputRef = useRef(null);
  const filenameTextSelected = useRef(false);
  const [filename, setFilename] = useState("");
  const [htmlcontent, setHtmlContent] = useState("");
  const [initialContent, setInitialContent] = useState("")

  function onOpen1() {
    setHtmlContent(initialContent)
    setFilename(data.filename);
  }

  function handleClose() {
    setFilename("");
    setHtmlContent("")
    filenameTextSelected.current = false;
    onClose();
  }

  async function getHtmlContent() {    
    const zipFileEntry = data.file
    const writer = new TextWriter();
    const text = await zipFileEntry.data?.getData(writer)
    setInitialContent(zipFileEntry)
    setHtmlContent(zipFileEntry);
  }

  useEffect(() => {
    if (filename) {
      getHtmlContent()
    }
  }, [filename]);

  return (
    <DialogForIFrame
      className="html-container"
      data={data}
      cancelLabel={'X'}
      
      onOpen={onOpen1}
      onClose={handleClose}
    >
       <iframe srcDoc={htmlcontent.toString('utf-8')} sandbox="allow-scripts" title="" id="iFrameXnft" ></iframe>
    </DialogForIFrame>
  );
}

export default IframeDialog;
