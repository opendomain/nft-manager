import { TextWriter } from "@zip.js/zip.js";

function getHighlightedEntriesFeatures({
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
}) {
  const {
    CUT_KEY,
    COPY_KEY,
    EXTRACT_KEY,
    RENAME_KEY,
    CUT_BUTTON_NAME,
    COPY_BUTTON_NAME,
    EXTRACT_BUTTON_NAME,
    RENAME_BUTTON_NAME,
    DELETE_KEYS,
    DELETE_BUTTON_NAME
  } = constants;

  function copy() {
    setClipboardData({
      entries: highlightedEntries.map((entry) => entry.clone(true))
    });
  }

  function cut() {
    setClipboardData({
      entries: highlightedEntries,
      cut: true
    });
  }



  function openPromptLink() {
    setDialogs({
      ...dialogs,
      link:"http://"
    });
  }




  function rename({ filename }) {
    try {
      if (filename !== highlightedEntry.name) {
        highlightedEntry.rename(filename);
        refreshSelectedFolder();
      }
    } catch (error) {
      openDisplayError(error.message);
    }
  }




  function closePromptRename() {
    setDialogs({
      ...dialogs,
      rename: null
    });
  }

  function closePromptLink() {
    setDialogs({
      ...dialogs,
      link: null
    });
  }

  function openConfirmDeleteEntries() {
    setDialogs({
      ...dialogs,
      deleteEntries: {}
    });
  }

  function deleteEntries() {
    highlightedEntries.forEach((entry) => zipFilesystem.remove(entry));
    if (entries.length) {
      const indexEntry = Math.max(
        ...entries
          .map((entry, index) => ({ entry, index }))
          .filter(({ entry }) => highlightedIds.includes(entry.id))
          .map(({ index }) => index)
      );
      let indexNextEntry = indexEntry;
      while (
        indexNextEntry < entries.length &&
        highlightedIds.includes(entries[indexNextEntry].id)
      ) {
        indexNextEntry++;
      }
      if (indexNextEntry === entries.length) {
        indexNextEntry = indexEntry;
        while (
          indexNextEntry >= 0 &&
          highlightedIds.includes(entries[indexNextEntry].id)
        ) {
          indexNextEntry--;
        }
      }
      if (entries[indexNextEntry]) {
        setNavigation({
          ...navigation,
          previousHighlight: entries[indexNextEntry]
        });
        setHighlightedIds([entries[indexNextEntry].id]);
      } else {
        setNavigation({
          ...navigation,
          previousHighlight: null
        });
        setHighlightedIds([]);
      }
    }
    updateHistoryData();
    refreshSelectedFolder();
  }

  function closeConfirmDeleteEntries() {
    setDialogs({
      ...dialogs,
      deleteEntries: null
    });
  }

  function openPromptExtract(entry = highlightedEntry) {
    const options = {
      entries: [entry],
      filename: entry.name
    };
    if (filesystemService.savePickersSupported()) {
      extract(options);
    } else {
      setDialogs({
        ...dialogs,
        extract: options
      });
    }
  }

  function extract({ entries = highlightedEntries, filename } = {}) {
    async function download() {
      try {
        const options = getOptions();
        filename = entries.length === 1 ? filename : null;
        await saveEntries(entries, filename, options);
      } catch (error) {
        openDisplayError(error.message);
      }
    }
    download();
  }

  function fileopen({ entries = highlightedEntries, filename } = {}) {
    async function openning() {
      try {
        const options = getOptions();
        filename = entries.length === 1 ? filename : null;
      } catch (error) {
        openDisplayError(error.message);
      }
    }
    openning();
  }


  function fileview({ entries = highlightedEntries, filename } = {}) {
    async function openning() {
      try {
        let list = await getAll()
        let selected_obj = list.filter(item => item.key == filename)
        setDialogs({
          ...dialogs,
          fileopen: {
            filename: selected_obj[0].key,
            file:selected_obj[0].value
          }
        });
       

      } catch (error) {
        openDisplayError(error.message);
      }
    }
    openning();
  }

  function filesave({ entries = highlightedEntries, entry } = {}) {
    async function openning() {
      try {
        let filename = entry.name
        let filecontent = entry.file
        let list = await getAll()
        let selected_obj = list.filter(item => item.key == filename)
        if (selected_obj.length) {
          openDisplayError('The current file name exists already!');
        } else {
          let saveFile = await addValue(filename, filecontent)
          let download = {id:null, name: filename, progressValue:100}
          setDownloads((downloads) => {
            let { nextId } = downloads;
            download.id = nextId;
            nextId = nextId + 1;
            return {
              nextId,
              queue: [download, ...downloads.queue]
            };
          });
        }      

      } catch (error) {
        openDisplayError(error.message);
      }
    }
    openning();
  }


  function closePromptExtract() {
    setDialogs({
      ...dialogs,
      extract: null
    });
  }

  function closePromptIframe() {
    setDialogs({
      ...dialogs,
      fileopen: null
    });
  }

  function closePromptSave() {
    setDialogs({
      ...dialogs,
      save: null
    });
  }

  function onHighlightedEntriesKeyUp(event) {
    if (!event.altKey && !modifierKeyPressed(event) && !event.shiftKey) {
      if (DELETE_KEYS.includes(event.key) && !disabledDelete) {
        setClickedButtonName(DELETE_BUTTON_NAME);
      }
    }
  }

  function onHighlightedEntriesKeyDown(event) {
    if (modifierKeyPressed(event)) {
      if (event.key === COPY_KEY && !disabledCopy) {
        setClickedButtonName(COPY_BUTTON_NAME);
        event.preventDefault();
      }
      if (event.key === CUT_KEY && !disabledCut) {
        setClickedButtonName(CUT_BUTTON_NAME);
        event.preventDefault();
      }
      if (event.key === EXTRACT_KEY && !disabledExtract) {
        setClickedButtonName(EXTRACT_BUTTON_NAME);
        event.preventDefault();
      }
      if (event.key === RENAME_KEY && !disabledRename) {
        setClickedButtonName(RENAME_BUTTON_NAME);
        event.preventDefault();
      }
    }
  }

  return {
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
  };
}

export default getHighlightedEntriesFeatures;
