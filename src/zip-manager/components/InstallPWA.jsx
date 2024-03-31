import React, { useEffect, useState } from "react";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {

    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
      return (
        <div>xNFT Manager</div>
      );
  }

  return (
    <button
      className="link-button"
      id="setup_button"
      aria-label="Install xNFT Manager"
      title="Install xNFT Manager"
      onClick={onClick}
    >
      Install xNFT Manager
    </button>
  );
};

export default InstallPWA;