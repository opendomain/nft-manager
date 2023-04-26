function getAppFeatures({
  zipFilesystem,
  dialogDisplayed,
  entriesHeight,
  entriesDeltaHeight,
  selectedFolderInit,
  setPreviousHighlight,
  setToggleNavigationDirection,
  setSelectedFolder,
  setHighlightedIds,
  setClipboardData,
  setOptions,
  setHistory,
  setHistoryIndex,
  setAccentColor,
  setEntriesHeight,
  setEntriesDeltaHeight,
  setSelectedFolderInit,
  getEntriesElementHeight,
  setOptionsDialog,
  getOptions,
  getAppStyleElement,
  goIntoFolder,
  openPromptExtract,
  addFiles,
  importZipFile,
  refreshSelectedFolder,
  util,
  constants,
  messages
}) {
  function initApplication() {
    const options = getOptions();
    const { accentColor } = options;
    const styleElement = getAppStyleElement();
    util.setStyle(
      styleElement,
      constants.NO_ENTRIES_CUSTOM_PROPERTY_NAME,
      JSON.stringify(messages.NO_ENTRIES_LABEL)
    );
    util.setStyle(
      styleElement,
      constants.FOLDER_SEPARATOR_CUSTOM_PROPERTY_NAME,
      JSON.stringify(constants.FOLDER_SEPARATOR)
    );
    setAccentColor(accentColor);
    util.removeDocumentAttribute(constants.APP_LOADING_ATTRIBUTE_NAME);
  }

  function initSelectedFolder() {
    async function initSelectedFolder() {
      const locationSearch = util.getLocationSearch();
      if (locationSearch) {
        util.resetLocationSearch();
        if (locationSearch === constants.SHARED_FILES_PARAMETER) {
          const sharedFilesPath = constants.SHARED_FILES_RELATIVE_PATH;
          const response = await util.fetch(sharedFilesPath);
          const formData = await response.formData();
          addFiles(formData.getAll(constants.SHARED_FILES_FIELD_NAME));
        }
      }
    }

    if (!selectedFolderInit) {
      util.setLaunchQueueConsumer((launchParams) => {
        async function handleLaunchParams() {
          if (launchParams.files.length) {
            await Promise.all(
              launchParams.files.map(async (handle) =>
                importZipFile(await handle.getFile())
              )
            );
          }
        }

        handleLaunchParams();
      });
      setSelectedFolderInit(true);
    }
    initSelectedFolder();
  }

  function initZipFilesystem() {
    const { root } = zipFilesystem;
    setSelectedFolder(root);
    setHighlightedIds([]);
    setPreviousHighlight(null);
    setToggleNavigationDirection(0);
    setClipboardData(null);
    setHistory([root]);
    setHistoryIndex(0);
    refreshSelectedFolder(root);
  }

  function enter(entry) {
    if (entry.directory) {
      goIntoFolder(entry);
    } else {
      openPromptExtract(entry);
    }
  }

  function applyAccentColor(color) {
    const styleElement = getAppStyleElement();
    util.setStyle(
      styleElement,
      constants.ACCENT_COLOR_CUSTOM_PROPERTY_NAME,
      color
    );
    const options = getOptions();
    setOptions({ ...options, accentColor: color });
  }

  function moveBottomBar(deltaY) {
    setEntriesDeltaHeight(deltaY);
  }

  function saveEntriesHeight(height) {
    if (!dialogDisplayed) {
      const options = getOptions();
      if (entriesHeight || !options.entriesHeight) {
        options.entriesHeight = height;
        setOptions(options);
      }
    }
  }

  function updateEntriesHeight(height) {
    if (!dialogDisplayed) {
      const options = getOptions();
      if (!entriesHeight && options.entriesHeight) {
        height = options.entriesHeight;
      }
      setEntriesHeight(height);
    }
  }

  function updateEntriesHeightEnd() {
    const entriesElementHeight = getEntriesElementHeight();
    setEntriesHeight(
      Math.max(
        Math.min(entriesHeight + entriesDeltaHeight, entriesElementHeight),
        entriesElementHeight
      )
    );
    setEntriesDeltaHeight(0);
  }

  function openOptions() {
    setOptionsDialog(getOptions());
  }

  function closeOptions() {
    setOptionsDialog(null);
  }

  function resetOptions() {
    const options = { ...constants.DEFAULT_OPTIONS };
    options.maxWorkers = util.getDefaultMaxWorkers();
    setOptionsDialog(options);
  }

  return {
    initApplication,
    initZipFilesystem,
    initSelectedFolder,
    enter,
    openOptions,
    closeOptions,
    resetOptions,
    applyAccentColor,
    moveBottomBar,
    saveEntriesHeight,
    updateEntriesHeight,
    updateEntriesHeightEnd
  };
}

export default getAppFeatures;
