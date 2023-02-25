import "./styles/Entries.css";

import { useEffect, useRef } from "react";

let SHORTCUT_LABEL, SPACE_KEY_LABEL, PARENT_FOLDER_LABEL, TAB_KEY;

function Entries({
  entries,
  selectedFolder,
  highlightedEntry,
  entriesHeight,
  highlightedEntryRef,
  onSetHighlightedEntry,
  onActionEntry,
  constants
}) {
  ({ SHORTCUT_LABEL, SPACE_KEY_LABEL, PARENT_FOLDER_LABEL, TAB_KEY } =
    constants);
  const entriesRef = useRef(null);

  function getEntryClassName(entry) {
    const classes = [];
    if (entry.directory) {
      classes.push("directory");
    }
    if (entry === highlightedEntry) {
      classes.push("entry-highlighted");
    }
    return classes.join(" ");
  }

  function handleKeyDown(event) {
    if (event.key !== TAB_KEY) {
      event.preventDefault();
    }
  }

  function computeEntriesHeight() {
    if (highlightedEntryRef && highlightedEntryRef.current) {
      entriesHeight.current = Math.max(
        Math.floor(
          entriesRef.current.offsetHeight /
            highlightedEntryRef.current.offsetHeight
        ),
        1
      );
    }
  }

  useEffect(computeEntriesHeight);

  return (
    <ol className="entries" onKeyDown={handleKeyDown} ref={entriesRef}>
      {entries.map((entry) => {
        if (entry === highlightedEntry) {
          return (
            <li
              key={entry.id}
              ref={highlightedEntryRef}
              className={getEntryClassName(entry)}
              tabIndex={0}
            >
              <Entry
                entry={entry}
                selectedFolder={selectedFolder}
                onSelectEntry={onSetHighlightedEntry}
                onActionEntry={onActionEntry}
              />
            </li>
          );
        } else {
          return (
            <li key={entry.id} className={getEntryClassName(entry)}>
              <Entry
                entry={entry}
                selectedFolder={selectedFolder}
                onSelectEntry={onSetHighlightedEntry}
                onActionEntry={onActionEntry}
              />
            </li>
          );
        }
      })}
    </ol>
  );
}

function Entry({ entry, selectedFolder, onSelectEntry, onActionEntry }) {
  return (
    <>
      <EntryName
        entry={entry}
        selectedFolder={selectedFolder}
        onSelectEntry={onSelectEntry}
        onActionEntry={onActionEntry}
      />
      <EntryButton entry={entry} onActionEntry={onActionEntry} />
    </>
  );
}

function EntryName({ entry, selectedFolder, onSelectEntry, onActionEntry }) {
  const entryLabel =
    entry === selectedFolder.parent ? PARENT_FOLDER_LABEL : entry.name;

  function handleClick() {
    onSelectEntry(entry);
  }

  function handleDoubleClick() {
    onActionEntry(entry);
  }

  return (
    <span
      className="list-item-name entry-name"
      title={entryLabel}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {entryLabel}
    </span>
  );
}

function EntryButton({ entry, onActionEntry }) {
  function handleClick() {
    onActionEntry(entry);
  }

  return (
    <span
      className="list-item-button"
      onClick={handleClick}
      title={SHORTCUT_LABEL + SPACE_KEY_LABEL}
    >
      {entry.directory ? "↵" : "↓"}
    </span>
  );
}

export default Entries;