import "./styles/BottomButtonBar.css";

import { useRef } from "react";
import { Offline, Online } from "react-detect-offline";

import {
  CopyEntryButton,
  CutEntryButton,
  PasteEntryButton,
  ResetClipboardDataButton,
  ExtractEntryButton,
  OpenFileButton,
  SaveFileButton,
  OpenLinkButton,
  HighlightAllButton,
  RenameEntryButton,
  DeleteEntriesButton
} from "./Buttons.jsx";

function BottomButtonBar({
  disabledCopyButton,
  disabledCutButton,
  disabledPasteButton,
  disabledResetClipboardDataButton,
  disabledExtractButton,
  disabledHighlightAllButton,
  disabledRenameButton,
  disabledDeleteButton,
  clickedButtonName,
  onCopy,
  onCut,
  onPaste,
  onResetClipboardData,
  onExtract,
  onOpen,
  onSave,
  onLink,
  onHighlightAll,
  onRename,
  onRemove,
  onMove,
  onUpdateElementHeight,
  onClickedButton,
  constants,
  messages
}) {
  const previousTouchClientY = useRef(0);

  function handleTouchMove(event) {
    const { clientY } = event.changedTouches[0];
    if (previousTouchClientY.current) {
      const deltaY = clientY - previousTouchClientY.current;
      onMove(deltaY);
    } else {
      previousTouchClientY.current = clientY;
    }
  }

  function handleTouchEnd() {
    previousTouchClientY.current = 0;
    onUpdateElementHeight();
  }

  return (
    <div
      className="button-bar button-bar-bottom"
      role="toolbar"
      aria-label={messages.HIGHLIGHTED_ENTRIES_LABEL}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="button-group">
        <HighlightAllButton
          disabled={disabledHighlightAllButton}
          clickedButtonName={clickedButtonName}
          onHighlightAll={onHighlightAll}
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
        <OpenFileButton 
          disabled={disabledExtractButton}
          clickedButtonName={clickedButtonName}
          onOpen={onOpen}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
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

        <SaveFileButton 
          disabled={disabledExtractButton}
          clickedButtonName={clickedButtonName}
          onSave={onSave}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
        
        {/* <RenameEntryButton
          disabled={disabledRenameButton}
          clickedButtonName={clickedButtonName}
          onRename={onRename}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        /> */}
        <DeleteEntriesButton
          disabled={disabledDeleteButton}
          clickedButtonName={clickedButtonName}
          onRemove={onRemove}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
      </div>
      <div className="button-group">
        <CopyEntryButton
          disabled={disabledCopyButton}
          clickedButtonName={clickedButtonName}
          onCopy={onCopy}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
        <CutEntryButton
          disabled={disabledCutButton}
          clickedButtonName={clickedButtonName}
          onCut={onCut}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
        <PasteEntryButton
          disabled={disabledPasteButton}
          clickedButtonName={clickedButtonName}
          onPaste={onPaste}
          onClickedButton={onClickedButton}
          constants={constants}
          messages={messages}
        />
        <ResetClipboardDataButton
          disabled={disabledResetClipboardDataButton}
          onResetClipboardData={onResetClipboardData}
          messages={messages}
        />
      </div>
    </div>
  );
}

export default BottomButtonBar;
