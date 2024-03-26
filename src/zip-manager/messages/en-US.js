const PARENT_FOLDER_LABEL = "..";
const ROOT_FOLDER_LABEL = "<root>";
const ROOT_ZIP_FILENAME = "Download.zip";
const KEYS_SEPARATOR_LABEL = ", ";
const PARENT_FOLDER_TOOLTIP = "Parent directory";

const SHORTCUT_LABEL = "Shortcut: ";
const CTRL_KEY_LABEL = "⌘/ctrl-";
const ALT_KEY_LABEL = "alt-";
const SPACE_KEY_LABEL = "space";
const ARROW_LEFT_KEY_LABEL = "left";
const ARROW_RIGHT_KEY_LABEL = "right";
const SIZE_LABEL = "Size:";
const UNCOMPRESSED_SIZE_LABEL = "Uncompressed size:";
const COMPRESSED_SIZE_LABEL = "Compressed size:";
const LAST_MOD_DATE_LABEL = "Last mod. date:";

const COPY_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "c";
const CUT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "x";
const PASTE_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "v";
const EXTRACT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "Enter";
const HIGHLIGHT_ALL_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "a";
const RENAME_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "r";
const DELETE_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ["backspace", "delete"].join(KEYS_SEPARATOR_LABEL);
const CREATE_FOLDER_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "d";
const ADD_FILES_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "f";
const IMPORT_ZIP_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "i";
const EXPORT_ZIP_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "e";
const BACK_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ALT_KEY_LABEL + ARROW_LEFT_KEY_LABEL;
const FORWARD_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ALT_KEY_LABEL + ARROW_RIGHT_KEY_LABEL;

const CREATE_FOLDER_BUTTON_LABEL = "Create directory";
const ADD_FILES_BUTTON_LABEL = "Add files";
const IMPORT_ZIP_BUTTON_LABEL = "xNFT File";
const EXPORT_ZIP_BUTTON_LABEL = "Export zip";
const RESET_BUTTON_LABEL = "Reset";
const OPTIONS_BUTTON_LABEL = "Options";
const BACK_BUTTON_LABEL = "<";
const FORWARD_BUTTON_LABEL = ">";
const DOWNLOAD_BUTTON_LABEL = "↵";
const ENTER_FOLDER_BUTTON_LABEL = "↓";
const COPY_BUTTON_LABEL = "Copy";
const CUT_BUTTON_LABEL = "Cut";
const PASTE_BUTTON_LABEL = "Paste";
const RESET_CLIPBOARD_BUTTON_LABEL = "Reset clipboard";
const EXTRACT_BUTTON_LABEL = "Extract";
const OPEN_BUTTON_LABEL = "Open";
const HIGHLIGHT_ALL_BUTTON_LABEL = "Select all";
const RENAME_BUTTON_LABEL = "Rename";
const DELETE_BUTTON_LABEL = "Delete";
const ABORT_DOWNLOAD_BUTTON_LABEL = "✕";
const DIALOG_RESET_BUTTON_LABEL = "Reset";
const DIALOG_CANCEL_BUTTON_LABEL = "Cancel";
const DIALOG_OK_BUTTON_LABEL = "OK";
const ERROR_TITLE = "Error";

const EXPORT_ZIP_TITLE = "Export zip file";
const EXPORT_ZIP_FILENAME_LABEL = "Filename:";
const EXPORT_ZIP_PASSWORD_LABEL = "Password:";
const EXPORT_ZIP_DIALOG_BUTTON_LABEL = "Export";
const EXTRACT_TITLE = "Extract file";
const EXTRACT_FILENAME_LABEL = "Filename:";
const EXTRACT_DIALOG_BUTTON_LABEL = "Extract";
const RENAME_TITLE = "Rename entry";
const RENAME_FILENAME_LABEL = "New entry name:";
const RENAME_DIALOG_BUTTON_LABEL = "Rename";
const CREATE_FOLDER_TITLE = "Create directory";
const CREATE_FOLDER_NAME_LABEL = "Directory name:";
const CREATE_FOLDER_DIALOG_BUTTON_LABEL = "Create";
const RESET_TITLE = "Reset filesystem";
const RESET_MESSAGE = "Please confirm the reset of the filesystem.";
const RESET_DIALOG_BUTTON_LABEL = "Reset";
const DELETE_ENTRIES_TITLE = "Delete entries";
const DELETE_ENTRIES_MESSAGE =
  "Please confirm the deletion of the highlighted entries.";
const DELETE_ENTRIES_DIALOG_BUTTON_LABEL = "Delete";
const ZIP_FILE_DESCRIPTION_LABEL = "Zip file";
const IMPORT_PASSWORD_TITLE = "Enter password";
const IMPORT_PASSWORD_LABEL = "Password:";
const OPTIONS_DIALOG_BUTTON_LABEL = "Save";
const OPTIONS_TITLE = "Options";
const OPTIONS_ZOOM_FACTOR_LABEL = "Zoom factor (%):";
const OPTIONS_HIDE_NAVIGATION_BAR_LABEL = "Hide navigation bar:";
const OPTIONS_HIDE_DOWNLOAD_MANAGER_LABEL = "Hide downloads panel:";
const OPTIONS_HIDE_INFOBAR_LABEL = "Hide bottom bar:";
const OPTIONS_SELECT_SKIN_LABEL = "Theme:";
const OPTIONS_DEFAULT_SKIN_LABEL = "Default";
const OPTIONS_DOS_SKIN_LABEL = "DOS";
const OPTIONS_EXPORT_ZIP_PASSWORD_LABEL = "Prompt for password:";
const OPTIONS_DEFAULT_PASSWORD_LABEL = "Default password:";
const OPTIONS_KEEP_ORDER_LABEL = "Keep entries order:";
const OPTIONS_CHECK_SIGNATURE_LABEL = "Check data signature:";
const OPTIONS_BUFFERED_WRITE_LABEL = "Use multiple cores:";
const OPTIONS_MAX_WORKERS_LABEL = "Number of cores:";
const OPTIONS_CHUNK_SIZE_LABEL = "Chunk size (kB):";
const CHOOSE_ACTION_DIALOG_ADD_FILE_BUTTON_LABEL = "Add file";
const CHOOSE_ACTION_TITLE = "Choose action";
const CHOOSE_ACTION_LABEL =
  "A zip file has been selected, please choose the proper action.";
const NO_ENTRIES_LABEL = "Drag and drop xNFTs here";
const INFO_LABEL = [
  "Source code on ",
  " GitHub ",
  " Made with ",
  "♡",
  " in ",
  "Rennes"
];
const CITY_URL = "https://en.wikipedia.org/wiki/Rennes";
const HIGHLIGHTED_ENTRIES_LABEL = "Highlighted entries commands";
const DOWNLOADS_LABEL = "Downloads panel";
const ENTRIES_LABEL = "Directory entries";
const FOLDERS_LABEL = "Navigation history";
const SELECTED_FOLDER_LABEL = "Selected directory commands";
const GO_INTO_FOLDER_LABEL = "Go into folder";
const GO_BACK_LABEL = "Go back";
const GO_FORWARD_LABEL = "Go forward";
const ACCENT_COLOR_LABEL = "Accent color";
const PLAYING_MUSIC_ICON = "▶";
const PAUSED_MUSIC_ICON = "II";

export {
  ROOT_ZIP_FILENAME,
  SHORTCUT_LABEL,
  CTRL_KEY_LABEL,
  SPACE_KEY_LABEL,
  ARROW_LEFT_KEY_LABEL,
  ARROW_RIGHT_KEY_LABEL,
  PARENT_FOLDER_TOOLTIP,
  CREATE_FOLDER_BUTTON_TOOLTIP,
  ADD_FILES_BUTTON_TOOLTIP,
  IMPORT_ZIP_BUTTON_TOOLTIP,
  EXPORT_ZIP_BUTTON_TOOLTIP,
  BACK_BUTTON_TOOLTIP,
  FORWARD_BUTTON_TOOLTIP,
  COPY_BUTTON_TOOLTIP,
  CUT_BUTTON_TOOLTIP,
  PASTE_BUTTON_TOOLTIP,
  EXTRACT_BUTTON_TOOLTIP,
  HIGHLIGHT_ALL_BUTTON_TOOLTIP,
  RENAME_BUTTON_TOOLTIP,
  DELETE_BUTTON_TOOLTIP,
  ROOT_FOLDER_LABEL,
  PARENT_FOLDER_LABEL,
  COPY_BUTTON_LABEL,
  CUT_BUTTON_LABEL,
  PASTE_BUTTON_LABEL,
  RESET_CLIPBOARD_BUTTON_LABEL,
  EXTRACT_BUTTON_LABEL,
  OPEN_BUTTON_LABEL,
  HIGHLIGHT_ALL_BUTTON_LABEL,
  RENAME_BUTTON_LABEL,
  DELETE_BUTTON_LABEL,
  ABORT_DOWNLOAD_BUTTON_LABEL,
  DOWNLOAD_BUTTON_LABEL,
  ENTER_FOLDER_BUTTON_LABEL,
  BACK_BUTTON_LABEL,
  FORWARD_BUTTON_LABEL,
  CREATE_FOLDER_BUTTON_LABEL,
  ADD_FILES_BUTTON_LABEL,
  IMPORT_ZIP_BUTTON_LABEL,
  EXPORT_ZIP_BUTTON_LABEL,
  RESET_BUTTON_LABEL,
  OPTIONS_BUTTON_LABEL,
  KEYS_SEPARATOR_LABEL,
  ZIP_FILE_DESCRIPTION_LABEL,
  SIZE_LABEL,
  UNCOMPRESSED_SIZE_LABEL,
  COMPRESSED_SIZE_LABEL,
  LAST_MOD_DATE_LABEL,
  EXPORT_ZIP_TITLE,
  EXPORT_ZIP_FILENAME_LABEL,
  EXPORT_ZIP_PASSWORD_LABEL,
  DIALOG_OK_BUTTON_LABEL,
  DIALOG_CANCEL_BUTTON_LABEL,
  EXTRACT_TITLE,
  EXTRACT_FILENAME_LABEL,
  RENAME_TITLE,
  RENAME_FILENAME_LABEL,
  EXPORT_ZIP_DIALOG_BUTTON_LABEL,
  RENAME_DIALOG_BUTTON_LABEL,
  EXTRACT_DIALOG_BUTTON_LABEL,
  CREATE_FOLDER_TITLE,
  CREATE_FOLDER_NAME_LABEL,
  CREATE_FOLDER_DIALOG_BUTTON_LABEL,
  RESET_TITLE,
  RESET_MESSAGE,
  RESET_DIALOG_BUTTON_LABEL,
  DELETE_ENTRIES_TITLE,
  DELETE_ENTRIES_MESSAGE,
  DELETE_ENTRIES_DIALOG_BUTTON_LABEL,
  ERROR_TITLE,
  IMPORT_PASSWORD_TITLE,
  IMPORT_PASSWORD_LABEL,
  DIALOG_RESET_BUTTON_LABEL,
  OPTIONS_TITLE,
  OPTIONS_DIALOG_BUTTON_LABEL,
  OPTIONS_ZOOM_FACTOR_LABEL,
  OPTIONS_HIDE_NAVIGATION_BAR_LABEL,
  OPTIONS_HIDE_DOWNLOAD_MANAGER_LABEL,
  OPTIONS_HIDE_INFOBAR_LABEL,
  OPTIONS_DEFAULT_SKIN_LABEL,
  OPTIONS_DOS_SKIN_LABEL,
  OPTIONS_SELECT_SKIN_LABEL,
  OPTIONS_EXPORT_ZIP_PASSWORD_LABEL,
  OPTIONS_DEFAULT_PASSWORD_LABEL,
  OPTIONS_KEEP_ORDER_LABEL,
  OPTIONS_CHECK_SIGNATURE_LABEL,
  OPTIONS_BUFFERED_WRITE_LABEL,
  OPTIONS_MAX_WORKERS_LABEL,
  OPTIONS_CHUNK_SIZE_LABEL,
  CHOOSE_ACTION_DIALOG_ADD_FILE_BUTTON_LABEL,
  CHOOSE_ACTION_TITLE,
  CHOOSE_ACTION_LABEL,
  NO_ENTRIES_LABEL,
  INFO_LABEL,
  CITY_URL,
  HIGHLIGHTED_ENTRIES_LABEL,
  DOWNLOADS_LABEL,
  ENTRIES_LABEL,
  FOLDERS_LABEL,
  SELECTED_FOLDER_LABEL,
  GO_INTO_FOLDER_LABEL,
  GO_BACK_LABEL,
  GO_FORWARD_LABEL,
  ACCENT_COLOR_LABEL,
  PLAYING_MUSIC_ICON,
  PAUSED_MUSIC_ICON
};
