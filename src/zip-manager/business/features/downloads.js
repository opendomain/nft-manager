function getDownloadsFeatures({ setDownloads,del, downloadService }) {
  function abortDownload(deletedDownload) {
    removeDownload(deletedDownload);
    downloadService.abortDownload(deletedDownload.controller);
  }

  async function removeDownload(deletedDownload) {
    let deleteFile = await del(deletedDownload.name)
    setDownloads((downloads) => ({
      ...downloads,
      queue: downloads.queue.filter(
        (download) => download.id !== deletedDownload.id
      )
    }));
    
  }

  return {
    removeDownload,
    abortDownload
  };
}

export default getDownloadsFeatures;
