import "./styles/TopButtonBar.css";

import { Offline, Online } from "react-detect-offline";

import {
  AddFilesButton,
  CreateFolderButton,
  ImportZipButton,
  OpenLinkButton,
  ExportZipButton,
  OpenFileButton,
  SaveFileButton,
  ExtractEntryButton,
  ResetButton,
  OptionsButton
} from "./Buttons.jsx";

function TopButtonBar({
  disabledExportZipButton,
  disabledExtractButton,
  disabledResetButton,
  clickedButtonName,
  onCreateFolder,
  onImportZipFile,
  onLink,
  onExportZip,
  onOpen,
  onSave,
  onExtract,
  onReset,
  onOpenOptions,
  onShowImportZipFilePicker,
  onShowAddFilesPicker,
  onClickedButton,
  constants,
  messages
}) {
  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      event.preventDefault();
      console.log("-handleDrop--",event.dataTransfer.files )
      onImportZipFile(event.dataTransfer.files[0]);
    }
  }

  return (
    <div
      className="button-bar button-bar-top"
      role="toolbar"
      aria-label={messages.SELECTED_FOLDER_LABEL}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
{/*
      <div className="button-group">
        <AddFilesButton
          clickedButtonName={clickedButtonName}
          onShowAddFilesPicker={onShowAddFilesPicker}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
        <CreateFolderButton
          clickedButtonName={clickedButtonName}
          onCreateFolder={onCreateFolder}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
      </div>
*/}
      <div className="button-group">
        <Online>
          <OpenLinkButton 
            disabled={false}
            clickedButtonName={clickedButtonName}
            onLink={onLink}
            onClickedButton={onClickedButton}
            constants={constants}
            messages={messages}
          />
        </Online>
        <ImportZipButton
          clickedButtonName={clickedButtonName}
          onShowImportZipFilePicker={onShowImportZipFilePicker}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
{/*
        <ExportZipButton
          disabled={disabledExportZipButton}
          clickedButtonName={clickedButtonName}
          onExportZip={onExportZip}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
*/}
      </div>
      <div className="button-group">
        <OpenFileButton 
          disabled={disabledExtractButton}
          clickedButtonName={clickedButtonName}
          onOpen={onOpen}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
        <SaveFileButton 
          disabled={disabledExtractButton}
          clickedButtonName={clickedButtonName}
          onSave={onSave}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
        <ExtractEntryButton
          disabled={disabledExtractButton}
          clickedButtonName={clickedButtonName}
          onExtract={onExtract}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
      </div>
{/*
      <div className="button-group">
        <ResetButton
          disabled={disabledResetButton}
          onReset={onReset}
          messages={messages}
        />
        <OptionsButton onOpenOptions={onOpenOptions} messages={messages} />
      </div>
*/}
    </div>
  );
}

export default TopButtonBar;
