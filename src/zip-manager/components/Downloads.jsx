import "./styles/Downloads.css";

function Downloads({
  hidden,
  downloads,
  onAbortDownload,
  onDownload,
  i18n,
  constants,
  messages
}) {
  if (hidden) {
    return;
  } else {
    return (
      <div
        className="downloads scrollable"
        aria-label={messages.DOWNLOADS_LABEL}
        role="navigation"
      >
        <ol>
          {downloads.queue.map((download) => (
            <li key={download.id}>
              <DownloadEntry
                download={download}
                onAbortDownload={onAbortDownload}
                onDownload={onDownload}
                i18n={i18n}
                constants={constants}
                messages={messages}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

function DownloadEntry({
  download,
  onAbortDownload,
  onDownload,
  i18n,
  constants,
  messages
}) {
  return (
    <>
      <DownloadEntryInfo
        download={download}
        onAbortDownload={onAbortDownload}
        onDownload={onDownload}
        constants={constants}
        messages={messages}
      />
      <DownloadEntryProgress download={download} i18n={i18n} />
    </>
  );
}

function DownloadEntryInfo({ download, onAbortDownload,onDownload, constants, messages }) {

  return (
    <div className="download-entry">
      <span className="list-item-name download-entry-name">
        {download.name}
      </span>
      <FileViewEntryButton
        download={download}
        onDownload={onDownload}
        constants={constants}
        messages={messages}
      />
      <DeleteDownloadEntryButton
        download={download}
        onAbortDownload={onAbortDownload}
        constants={constants}
        messages={messages}
      />
    </div>
  );
}

function FileViewEntryButton({
  download,
  onDownload,
  constants,
  messages
}) {
  function handleClick() {
    let filename = download.name
    onDownload({filename})
  }

  function handleKeyUp(event) {
    if (event.key === constants.ENTER_KEY) {
      handleClick();
    }
  }

  return (
    <span
      className="list-item-button download-entry-abort-button file-open-btn"
      role="button"
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      tabIndex={0}
    >
      {'OPEN'}
    </span>
  );
}
function DeleteDownloadEntryButton({
  download,
  onAbortDownload,
  constants,
  messages
}) {
  function handleClick() {
    onAbortDownload(download);
  }

  function handleKeyUp(event) {
    if (event.key === constants.ENTER_KEY) {
      handleClick();
    }
  }

  return (
    <span
      className="list-item-button download-entry-abort-button file-delete-btn"
      role="button"
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      tabIndex={0}
    >
      {'REMOVE'}
    </span>
  );
}

function DownloadEntryProgress({ download, i18n }) {
  return (
    <progress
      value={
        download.progressValue && Math.floor(download.progressValue / 1000)
      }
      max={download.progressMax && Math.floor(download.progressMax / 1000)}
      title={
        download.progressValue &&
        i18n.formatPercentValue(
          (100 * download.progressValue) / download.progressMax
        )
      }
    />
  );
}

export default Downloads;
