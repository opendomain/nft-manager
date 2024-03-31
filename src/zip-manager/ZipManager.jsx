import "./styles/index.css";

import { useEffect, useState, useRef } from "react";
import { Offline, Online } from "react-detect-offline";

import {
  filesystemService,
  downloadService,
  i18nService,
  storageService,
  zipService,
  shareTargetService,
  fileHandlersService,
  stylesheetService,
  environmentService,
  keyboardService,
  themeService,
  documentService,
  windowService,
  musicService
} from "./services/index.js";
import {
  constants,
  features,
  getUIState,
  getEventHandlers
} from "./business/index.js";
import {
  TopButtonBar,
  NavigationBar,
  Entries,
  BottomButtonBar,
  Downloads,
  InfoBar,
  ExportZipDialog,
  ExtractDialog,
  IframeDialog,
  SaveDialog,
  RenameDialog,
  OpenLinkDialog,
  CreateFolderDialog,
  ResetDialog,
  DeleteEntriesDialog,
  ErrorMessageDialog,
  ImportPasswordDialog,
  OptionsDialog,
  ChooseActionDialog,
  InstallPWA
} from "./components/index.jsx";
import { getMessages } from "./messages/index.js";
import { getHooks } from "./hooks/hooks.js";
import { TextWriter } from "@zip.js/zip.js";

const {
  getCommonFeatures,
  getEntriesFeatures,
  getFoldersFeatures,
  getSelectedFolderFeatures,
  getHighlightedEntriesFeatures,
  getFilesystemFeatures,
  getDownloadsFeatures,
  indexDbAsync,
  getClipboardFeatures,
  getOptionsFeatures,
  getAppFeatures,
  getMiscFeatures,

} = features;
const messages = getMessages({ i18nService });
const apiFilesystem = zipService.createZipFileSystem();
const { root } = apiFilesystem;
const rootZipFilename = messages.ROOT_ZIP_FILENAME;

function ZipManager() {
  const [zipFilesystem, setZipFilesystem] = useState(apiFilesystem);
  const [selectedFolder, setSelectedFolder] = useState(root);
  const [entries, setEntries] = useState([]);
  const [entriesElementHeight, setEntriesElementHeight] = useState(0);
  const [entriesDeltaHeight, setEntriesDeltaHeight] = useState(0);
  const [highlightedIds, setHighlightedIds] = useState([]);
  const [importedEntry, setImportedEntry] = useState([])
  const [navigation, setNavigation] = useState({
    previousHighlight: null,
    direction: 0
  });
  const [downloads, setDownloads] = useState({ queue: [], nextId: 0 });
  const [clipboardData, setClipboardData] = useState(null);
  const [history, setHistory] = useState({
    path: [root],
    index: 0
  });
  const [dialogs, setDialogs] = useState({});
  const [clickedButtonName, setClickedButtonName] = useState(null);
  const [theme, setTheme] = useState({});
  const [musicData, setMusicData] = useState({
    frequencyData: []
  });

  const highlightedEntryElementRef = useRef(null);
  const entriesElementRef = useRef(null);
  const entriesHeightRef = useRef(1);
  const playerActiveRef = useRef(false);

  const entriesElement = entriesElementRef.current;
  const musicPlayerActive = playerActiveRef.current;

  const getHighlightedEntryElement = () => highlightedEntryElementRef.current;
  const resetHighlightedEntryElement = () =>
    (highlightedEntryElementRef.current = null);
  const getEntriesHeight = () => entriesHeightRef.current;
  const setEntriesHeight = (height) => (entriesHeightRef.current = height);
  const setPlayerActive = (active) => (playerActiveRef.current = active);
  const _dbName = "zipDb";
  const _dbStore = "zipStore";

  const { getAll, getValue, addValue, update, del, clear, testDBAccess } = indexDbAsync(
    _dbName, _dbStore
  )

  const { abortDownload, removeDownload } = getDownloadsFeatures({
    setDownloads,
    del,
    downloadService
  });

  useEffect(() => {
    window.addEventListener("DirectImport", handleImportedEntry)
    return () => {
      window.removeEventListener("DirectImport", handleImportedEntry)
    }
  }, [importedEntry]);

  const handleImportedEntry = async () => {
    if (importedEntry.length) {
      const writer = new TextWriter();
      const text = await importedEntry[0].data?.getData(writer)
      setDialogs({
        ...dialogs,
        fileopen: {
          filename: importedEntry[0].name,
          file: text
        }
      });
    }
  }


  const {
    modifierKeyPressed,
    saveZipFile,
    saveEntries,
    openDisplayError,
    closeDisplayError
  } = getCommonFeatures({
    dialogs,
    setDownloads,
    setDialogs,
    removeDownload,
    downloadService,
    filesystemService,
    environmentService
  });

  const {
    initOptionsFeatures,
    setOptions,
    getOptions,
    openOptions,
    closeOptions,
    resetOptions
  } = getOptionsFeatures({
    dialogs,
    setDialogs,
    setTheme,
    zipService,
    storageService,
    stylesheetService,
    environmentService,
    themeService,
    constants
  });

  const {
    disabledExportZip,
    disabledReset,
    disabledNavigation,
    disabledBack,
    disabledForward,
    disabledCopy,
    disabledCut,
    disabledPaste,
    disabledResetClipboardData,
    disabledHighlightAll,
    disabledExtract,
    disabledRename,
    disabledDelete,
    disabledEnterEntry,
    dialogDisplayed,
    hiddenNavigationBar,
    hiddenDownloadManager,
    hiddenInfobar,
    hiddenExportPassword,
    highlightedEntry,
    highlightedEntries,
    selectedFolderEntries,
    ancestorFolders
  } = getUIState({
    entries,
    highlightedIds,
    selectedFolder,
    clipboardData,
    history,
    getOptions,
    dialogs,
    filesystemService
  });

  const {
    highlight,
    highlightEntries,
    highlightAll,
    toggle,
    toggleRange,
    resizeEntries,
    updateEntriesHeight,
    updateEntriesElementHeight,
    updateEntriesElementHeightEnd,
    updateHighlightedEntries,
    registerResizeEntriesHandler,
    onEntriesKeyUp,
    onEntriesKeyDown
  } = getEntriesFeatures({
    disabledNavigation,
    disabledHighlightAll,
    entries,
    selectedFolderEntries,
    highlightedIds,
    navigation,
    dialogDisplayed,
    entriesElementHeight,
    entriesDeltaHeight,
    entriesElement,
    setHighlightedIds,
    resetHighlightedEntryElement,
    setNavigation,
    setOptions,
    setEntriesHeight,
    setEntriesElementHeight,
    setEntriesDeltaHeight,
    setClickedButtonName,
    getEntriesHeight,
    getHighlightedEntryElement,
    getOptions,
    modifierKeyPressed,
    documentService,
    windowService,
    constants
  });

  const {
    goIntoFolder,
    navigateBack,
    navigateForward,
    refreshSelectedFolder,
    updateHistoryData,
    onFoldersKeyUp
  } = getFoldersFeatures({
    disabledBack,
    disabledForward,
    history,
    highlightedEntry,
    highlightedEntries,
    selectedFolder,
    setSelectedFolder,
    setEntries,
    setHistory,
    setHighlightedIds,
    setClickedButtonName,
    modifierKeyPressed,
    constants
  });

  const { openConfirmReset, reset, closeConfirmReset } = getFilesystemFeatures({
    dialogs,
    setZipFilesystem,
    setDialogs,
    zipService
  });

  const {
    initSelectedFolderFeatures,
    openPromptCreateFolder,
    createFolder,
    closePromptCreateFolder,
    addFiles,
    dropFiles,
    linkopen,
    closeChooseAction,
    importZipFile,
    openPromptExportZip,
    openPromptIframe,
    openPromptSave,
    openPromptRename,
    exportZip,
    paste,
    closePromptExportZip,
    closePromptImportPassword,
    showAddFilesPicker,
    showImportZipFilePicker,
    onSelectedFolderKeyDown
  } = getSelectedFolderFeatures({
    disabledPaste,
    disabledExportZip,
    zipFilesystem,
    selectedFolder,
    rootZipFilename,
    clipboardData,
    dialogs,
    setHighlightedIds,
    setClipboardData,
    setDialogs,
    setClickedButtonName,
    refreshSelectedFolder,
    highlightEntries,
    saveZipFile,
    getOptions,
    openDisplayError,
    reset,
    setEntries,
    importedEntry,
    setImportedEntry,
    filesystemService,
    fileHandlersService,
    shareTargetService,
    modifierKeyPressed,
    constants
  });

  const {
    copy,
    cut,
    openPromptLink,
    rename,
    closePromptRename,
    closePromptLink,
    openConfirmDeleteEntries,
    deleteEntries,
    closeConfirmDeleteEntries,
    openPromptExtract,
    extract,
    fileopen,
    fileview,
    filesave,
    closePromptExtract,
    closePromptIframe,
    closePromptSave,
    onHighlightedEntriesKeyUp,
    onHighlightedEntriesKeyDown
  } = getHighlightedEntriesFeatures({
    disabledCopy,
    disabledCut,
    disabledExtract,
    disabledRename,
    disabledDelete,
    zipFilesystem,
    entries,
    highlightedIds,
    highlightedEntry,
    highlightedEntries,
    navigation,
    dialogs,
    setClipboardData,
    setHighlightedIds,
    setNavigation,
    setDialogs,
    importedEntry,
    getAll,
    setClickedButtonName,
    refreshSelectedFolder,
    updateHistoryData,
    setDownloads,
    addValue,
    saveEntries,
    getOptions,
    openDisplayError,
    filesystemService,
    modifierKeyPressed,
    constants
  });



  const { resetClipboardData } = getClipboardFeatures({
    setClipboardData
  });

  const {
    playMusic,
    stopMusic,
    updateAccentColor,
    updateSkin,
    initMiscFeatures
  } = getMiscFeatures({
    theme,
    setOptions,
    setTheme,
    setMusicData,
    setPlayerActive,
    getOptions,
    stylesheetService,
    themeService,
    musicService,
    constants
  });

  const {
    enterEntry,
    initAppFeatures,
    updateZipFilesystem,
    resetClickedButtonName,
    getAppClassName,
    onAppKeyUp
  } = getAppFeatures({
    disabledEnterEntry,
    zipFilesystem,
    highlightedEntry,
    selectedFolder,
    hiddenInfobar,
    hiddenDownloadManager,
    setNavigation,
    setSelectedFolder,
    setHighlightedIds,
    setHistory,
    setClickedButtonName,
    goIntoFolder,
    openPromptExtract,
    refreshSelectedFolder,
    modifierKeyPressed,
    stylesheetService,
    documentService,
    i18nService,
    constants,
    messages
  });

  const { useKeyUp, useKeyDown, usePageUnload } = getHooks({
    keyboardService,
    windowService
  });

  const { handleKeyUp, handleKeyDown, handlePageUnload } = getEventHandlers({
    entries,
    downloads,
    dialogDisplayed,
    onEntriesKeyUp,
    onFoldersKeyUp,
    onHighlightedEntriesKeyUp,
    onAppKeyUp,
    onEntriesKeyDown,
    onHighlightedEntriesKeyDown,
    onSelectedFolderKeyDown
  });

  const getDownloadall = async () => {
    let list = await getAll()
    if (list.length) {
      setDownloads({ queue: [], nextId: 0 })
      list.map((item) => {
        let download = { id: null, name: item.key, progressValue: 100 }
        setDownloads((downloads) => {
          let { nextId } = downloads;
          download.id = nextId;
          nextId = nextId + 1;
          return {
            nextId,
            queue: [download, ...downloads.queue]
          };
        });
      })
    }
  }

  const appClassName = getAppClassName();

  useKeyUp(handleKeyUp);
  useKeyDown(handleKeyDown);
  usePageUnload(handlePageUnload);

  useEffect(updateZipFilesystem, [zipFilesystem]);
  useEffect(updateHighlightedEntries, [highlightedIds]);
  useEffect(updateAccentColor, [theme.accentColor]);
  useEffect(updateSkin, [theme.skin]);
  useEffect(() => {
    initSelectedFolderFeatures();
    initMiscFeatures();
    initOptionsFeatures();
    initAppFeatures();
    testDBAccess();
    getDownloadall()
  }, []);

  return (
    <div className={appClassName}>
      <main role="application">
        <div className="container">
          <span className="centered">
          <Online>
              <InstallPWA />
          </Online>
          <Offline>xNFT Manager OFFLINE</Offline>
          </span>
        </div>
        <TopButtonBar
          disabledExportZipButton={disabledExportZip}
          disabledExtractButton={disabledExtract}
          disabledResetButton={disabledReset}
          clickedButtonName={clickedButtonName}
          onCreateFolder={openPromptCreateFolder}
          onAddFiles={addFiles}
          onImportZipFile={importZipFile}
          onLink={openPromptLink}
          onExportZip={openPromptExportZip}
          onOpen={openPromptIframe}
          onSave={openPromptSave}
          onExtract={extract}
          onReset={openConfirmReset}
          onOpenOptions={openOptions}
          onShowImportZipFilePicker={showImportZipFilePicker}
          onShowAddFilesPicker={showAddFilesPicker}
          onClickedButton={resetClickedButtonName}
          constants={constants}
          messages={messages}
        />
        <NavigationBar
          selectedFolder={selectedFolder}
          ancestorFolders={ancestorFolders}
          disabledBackButton={disabledBack}
          disabledForwardButton={disabledForward}
          clickedButtonName={clickedButtonName}
          hidden={hiddenNavigationBar}
          onNavigateBack={navigateBack}
          onNavigateForward={navigateForward}
          onGoIntoFolder={goIntoFolder}
          onClickedButton={resetClickedButtonName}
          constants={constants}
          messages={messages}
        />
        <Downloads
          downloads={downloads}
          hidden={hiddenDownloadManager}
          onAbortDownload={removeDownload}
          onDownload={fileview}
          i18n={i18nService}
          constants={constants}
          messages={messages}
        />
{/* 
        <Entries
          entries={entries}
          selectedFolder={selectedFolder}
          highlightedIds={highlightedIds}
          entriesElementHeight={entriesElementHeight}
          deltaEntriesHeight={entriesDeltaHeight}
          hiddenDownloadManager={hiddenDownloadManager}
          onDropFiles={dropFiles}
          onHighlight={highlight}
          onToggle={toggle}
          onToggleRange={toggleRange}
          onEnter={enterEntry}
          onUpdateEntriesHeight={updateEntriesHeight}
          onUpdateEntriesElementHeight={updateEntriesElementHeight}
          onRegisterResizeEntriesHandler={registerResizeEntriesHandler}
          entriesElementRef={entriesElementRef}
          highlightedEntryElementRef={highlightedEntryElementRef}
          i18n={i18nService}
          constants={constants}
          messages={messages}
        />
*/}
{/*
          <BottomButtonBar
            disabledCopyButton={disabledCopy}
            disabledCutButton={disabledCut}
            disabledPasteButton={disabledPaste}
            disabledResetClipboardDataButton={disabledResetClipboardData}
            disabledExtractButton={disabledExtract}
            disabledHighlightAllButton={disabledHighlightAll}
            disabledRenameButton={disabledRename}
            disabledDeleteButton={disabledDelete}
            clickedButtonName={clickedButtonName}
            onCopy={copy}
            onCut={cut}
            onPaste={paste}
            onResetClipboardData={resetClipboardData}
            onOpen={openPromptIframe}
            onSave={openPromptSave}
            onLink={openPromptLink}
            onExtract={extract}
            onHighlightAll={highlightAll}
            onRename={openPromptRename}
            onRemove={openConfirmDeleteEntries}
            onMove={resizeEntries}
            onUpdateElementHeight={updateEntriesElementHeightEnd}
            onClickedButton={resetClickedButtonName}
            constants={constants}
            messages={messages}
          />
  */}
      </main>
      <InfoBar
        hidden={hiddenInfobar}
        theme={theme}
        musicData={musicData}
        playMusic={playMusic}
        stopMusic={stopMusic}
        onSetTheme={setTheme}
        musicPlayerActive={musicPlayerActive}
        constants={constants}
        messages={messages}
      />
      <CreateFolderDialog
        data={dialogs.createFolder}
        onCreateFolder={createFolder}
        onClose={closePromptCreateFolder}
        messages={messages}
      />
      <ExportZipDialog
        data={dialogs.exportZip}
        hiddenPassword={hiddenExportPassword}
        onExportZip={exportZip}
        onClose={closePromptExportZip}
        messages={messages}
      />
      <ExtractDialog
        data={dialogs.extract}
        onExtract={extract}
        onClose={closePromptExtract}
        messages={messages}
      />
      <IframeDialog
        data={dialogs.fileopen}
        onOpen={fileopen}
        onClose={closePromptIframe}
        messages={messages}
      />
      <SaveDialog
        data={dialogs.save}
        onOpen={filesave}
        onClose={closePromptSave}
        messages={messages}
      />
      <RenameDialog
        data={dialogs.rename}
        onRename={rename}
        onClose={closePromptRename}
        messages={messages}
      />
      <OpenLinkDialog
        data={dialogs.link}
        onLink={linkopen}
        onClose={closePromptLink}
        messages={messages}
      />
      <ResetDialog
        data={dialogs.reset}
        onReset={reset}
        onClose={closeConfirmReset}
        messages={messages}
      />
      <DeleteEntriesDialog
        data={dialogs.deleteEntries}
        onDeleteEntries={deleteEntries}
        onClose={closeConfirmDeleteEntries}
        messages={messages}
      />
      <ErrorMessageDialog
        data={dialogs.displayError}
        onClose={closeDisplayError}
        messages={messages}
      />
      <ImportPasswordDialog
        data={dialogs.enterImportPassword}
        onClose={closePromptImportPassword}
        messages={messages}
      />
      <OptionsDialog
        data={dialogs.options}
        onSetOptions={setOptions}
        onResetOptions={resetOptions}
        onClose={closeOptions}
        messages={messages}
      />
      <ChooseActionDialog
        data={dialogs.chooseAction}
        onImportZipFile={importZipFile}
        onAddFiles={addFiles}
        onClose={closeChooseAction}
        messages={messages}
      />
    </div>
  );
}

export default ZipManager;
