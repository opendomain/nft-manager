import "./styles/Base.css";
import "./styles/ListItem.css";
import "./styles/ButtonBar.css";
import "./styles/ZipManager.css";

import { useEffect, useState, useRef } from "react";

import * as util from "./helpers/util.js";
import * as constants from "./business/constants.js";
import * as messages from "./messages/en-US.js";

import { getUtil, createZipFileSystem } from "./helpers/helpers.js";
import { getUIState } from "./business/ui-state.js";
import { getEffects } from "./business/effects.js";
import {
  getEntriesNavigationHandlers,
  getFolderNavigationHandlers,
  getSelectedFolderHandlers,
  getHighlightedEntryHandlers,
  getActionHandlers,
  getZipFilesystemHandlers,
  getDownloadHandlers,
  getClipboardHandlers
} from "./business/handlers.js";
import { getKeyUpHandler } from "./business/keyboard-handlers.js";

import TopButtonBar from "./components/TopButtonBar.js";
import NavigationBar from "./components/NavigationBar.js";
import Entries from "./components/Entries.js";
import BottomButtonBar from "./components/BottomButtonBar.js";
import DownloadManager from "./components/DownloadManager.js";

function ZipManager() {
  const [zipFilesystem, setZipFilesystem] = useState(createZipFileSystem());
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [previousSelectedFolder, setPreviousSelectedFolder] = useState(null);
  const [entries, setEntries] = useState([]);
  const [highlightedEntry, setHighlightedEntry] = useState(null);
  const [downloads, setDownloads] = useState([]);
  const [downloadId, setDownloadId] = useState(0);
  const [clipboardData, setClipboardData] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const entriesHeight = useRef(0);
  const downloaderRef = useRef(null);
  const highlightedEntryRef = useRef(null);
  const addFilesButtonRef = useRef(null);
  const importZipButtonRef = useRef(null);

  const { downloadFile } = getUtil({
    downloadId,
    setDownloadId,
    setDownloads,
    downloaderRef,
    util,
    constants,
    messages
  });
  const {
    disabledExportZip,
    disabledReset,
    disabledHistoryBack,
    disabledHistoryForward,
    disabledCopyEntry,
    disabledCutEntry,
    disabledPasteEntry,
    disabledResetClipboardData,
    disabledRenameEntry,
    disabledDeleteEntry
  } = getUIState({
    entries,
    highlightedEntry,
    selectedFolder,
    clipboardData,
    historyIndex,
    history
  });
  const {
    updateSelectedFolder,
    updateZipFilesystem,
    updateHighlightedEntry,
    updateDefaultHighlightedEntry,
    registerKeyUpHandler
  } = getEffects({
    zipFilesystem,
    entries,
    highlightedEntry,
    selectedFolder,
    previousSelectedFolder,
    setEntries,
    setSelectedFolder,
    setPreviousSelectedFolder,
    setHighlightedEntry,
    setClipboardData,
    setHistory,
    setHistoryIndex,
    highlightedEntryElement: highlightedEntryRef && highlightedEntryRef.current,
    handleKeyUp,
    util,
    constants
  });
  const {
    highlightPreviousEntry,
    highlightNextEntry,
    highlightPreviousPageEntry,
    highlightNextPageEntry,
    highlightFirstEntry,
    highlightLastEntry,
    highlightEntry
  } = getEntriesNavigationHandlers({
    entries,
    highlightedEntry,
    entriesHeight,
    setHighlightedEntry
  });
  const { goIntoFolder, navigateHistoryBack, navigateHistoryForward } =
    getFolderNavigationHandlers({
      history,
      historyIndex,
      selectedFolder,
      setSelectedFolder,
      setPreviousSelectedFolder,
      setHistory,
      setHistoryIndex
    });
  const { deleteDownloadEntry } = getDownloadHandlers({
    setDownloads,
    constants
  });
  const { createFolder, addFiles, importZipFile, exportZipFile } =
    getSelectedFolderHandlers({
      selectedFolder,
      updateSelectedFolder,
      deleteDownloadEntry,
      downloadFile,
      util,
      constants,
      messages
    });
  const {
    copyEntry,
    cutEntry,
    pasteEntry,
    renameEntry,
    deleteEntry,
    downloadEntry
  } = getHighlightedEntryHandlers({
    zipFilesystem,
    history,
    historyIndex,
    highlightedEntry,
    selectedFolder,
    clipboardData,
    setHistory,
    setHistoryIndex,
    setClipboardData,
    setHighlightedEntry,
    updateSelectedFolder,
    deleteDownloadEntry,
    downloadFile,
    util,
    constants,
    messages
  });
  const { reset } = getZipFilesystemHandlers({
    createZipFileSystem,
    setZipFilesystem,
    util,
    messages
  });
  const { resetClipboardData } = getClipboardHandlers({
    setClipboardData
  });
  const { enterEntry } = getActionHandlers({
    highlightedEntry,
    goIntoFolder,
    downloadEntry
  });
  const keyUpHandler = getKeyUpHandler({
    highlightedEntry,
    selectedFolder,
    disabledCutEntry,
    disabledCopyEntry,
    disabledRenameEntry,
    disabledPasteEntry,
    disabledDeleteEntry,
    disabledHistoryBack,
    disabledHistoryForward,
    disabledExportZip,
    cutEntry,
    copyEntry,
    renameEntry,
    pasteEntry,
    deleteEntry,
    enterEntry,
    highlightNextEntry,
    highlightPreviousEntry,
    highlightPreviousPageEntry,
    highlightNextPageEntry,
    highlightFirstEntry,
    highlightLastEntry,
    createFolder,
    exportZipFile,
    navigateHistoryBack,
    navigateHistoryForward,
    addFilesButton: addFilesButtonRef.current,
    importZipButton: importZipButtonRef.current,
    constants
  });

  function handleKeyUp(event) {
    keyUpHandler.handleKeyUp(event);
  }

  useEffect(registerKeyUpHandler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updateSelectedFolder, [selectedFolder]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updateZipFilesystem, [zipFilesystem]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updateHighlightedEntry, [highlightedEntry]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updateDefaultHighlightedEntry, [
    entries,
    highlightedEntry,
    previousSelectedFolder,
    selectedFolder
  ]);

  return (
    <div className="application">
      <TopButtonBar
        disabledExportZipButton={disabledExportZip}
        disabledResetButton={disabledReset}
        onCreateFolder={createFolder}
        onAddFiles={addFiles}
        onImportZipFile={importZipFile}
        onExportZipFile={exportZipFile}
        onReset={reset}
        addFilesButtonRef={addFilesButtonRef}
        importZipButtonRef={importZipButtonRef}
        constants={constants}
        messages={messages}
      />
      <NavigationBar
        selectedFolder={selectedFolder}
        disabledHistoryBackButton={disabledHistoryBack}
        disabledHistoryForwardButton={disabledHistoryForward}
        onNavigateHistoryBack={navigateHistoryBack}
        onNavigateHistoryForward={navigateHistoryForward}
        onGoIntoFolder={goIntoFolder}
        constants={constants}
        messages={messages}
      />
      <Entries
        entries={entries}
        selectedFolder={selectedFolder}
        highlightedEntry={highlightedEntry}
        entriesHeight={entriesHeight}
        onGoIntoFolder={goIntoFolder}
        onDownloadHighlightedEntry={downloadEntry}
        onHighlightEntry={highlightEntry}
        onEnterEntry={enterEntry}
        highlightedEntryRef={highlightedEntryRef}
        constants={constants}
        messages={messages}
      />
      <BottomButtonBar
        disabledCopyEntryButton={disabledCopyEntry}
        disabledCutEntryButton={disabledCutEntry}
        disabledPasteEntryButton={disabledPasteEntry}
        disabledResetClipboardDataButton={disabledResetClipboardData}
        disabledRenameEntryButton={disabledRenameEntry}
        disabledDeleteEntryButton={disabledDeleteEntry}
        onCopyEntry={copyEntry}
        onCutEntry={cutEntry}
        onPasteEntry={pasteEntry}
        onResetClipboardData={resetClipboardData}
        onRenameEntry={renameEntry}
        onDeleteEntry={deleteEntry}
        constants={constants}
        messages={messages}
      />
      <DownloadManager
        downloads={downloads}
        onDeleteDownloadEntry={deleteDownloadEntry}
        downloaderRef={downloaderRef}
        constants={constants}
        messages={messages}
      />
    </div>
  );
}

export default ZipManager;
