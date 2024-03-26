const PARENT_FOLDER_LABEL = "..";
const ROOT_FOLDER_LABEL = "<root>";
const ROOT_ZIP_FILENAME = "Download.zip";
const KEYS_SEPARATOR_LABEL = ", ";
const PARENT_FOLDER_TOOLTIP = "Übergeordneter Ordner";

const SHORTCUT_LABEL = "Verknüpfung: ";
const CTRL_KEY_LABEL = "⌘/ctrl-";
const ALT_KEY_LABEL = "alt-";
const SPACE_KEY_LABEL = "Leertaste";
const ARROW_LEFT_KEY_LABEL = "links";
const ARROW_RIGHT_KEY_LABEL = "rechts";
const SIZE_LABEL = "Größe:";
const UNCOMPRESSED_SIZE_LABEL = "Unkomprimierte Größe:";
const COMPRESSED_SIZE_LABEL = "Komprimierte Größe:";
const LAST_MOD_DATE_LABEL = "Letzte Änderung:";

const COPY_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "c";
const CUT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "x";
const PASTE_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "v";
const EXTRACT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "Enter";
const HIGHLIGHT_ALL_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "a";
const RENAME_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "r";
const DELETE_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ["Rücktaste", "Entf"].join(KEYS_SEPARATOR_LABEL);
const CREATE_FOLDER_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "d";
const ADD_FILES_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "f";
const IMPORT_ZIP_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "i";
const EXPORT_ZIP_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "e";
const BACK_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ALT_KEY_LABEL + ARROW_LEFT_KEY_LABEL;
const FORWARD_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ALT_KEY_LABEL + ARROW_RIGHT_KEY_LABEL;

const CREATE_FOLDER_BUTTON_LABEL = "Verzeichnis erstellen";
const ADD_FILES_BUTTON_LABEL = "Dateien hinzufügen";
const IMPORT_ZIP_BUTTON_LABEL = "Zip importieren";
const EXPORT_ZIP_BUTTON_LABEL = "Zip exportieren";
const RESET_BUTTON_LABEL = "Zurücksetzen";
const OPTIONS_BUTTON_LABEL = "Optionen";
const BACK_BUTTON_LABEL = "<";
const FORWARD_BUTTON_LABEL = ">";
const DOWNLOAD_BUTTON_LABEL = "↵";
const ENTER_FOLDER_BUTTON_LABEL = "↓";
const COPY_BUTTON_LABEL = "Kopieren";
const CUT_BUTTON_LABEL = "Ausschneiden";
const PASTE_BUTTON_LABEL = "Einfügen";
const RESET_CLIPBOARD_BUTTON_LABEL = "Zwischenablage zurücksetzen";
const EXTRACT_BUTTON_LABEL = "Extrahieren";
const OPEN_BUTTON_LABEL = "Offen"
const HIGHLIGHT_ALL_BUTTON_LABEL = "Alles auswählen";
const RENAME_BUTTON_LABEL = "Umbenennen";
const DELETE_BUTTON_LABEL = "Löschen";
const ABORT_DOWNLOAD_BUTTON_LABEL = "✕";
const DIALOG_RESET_BUTTON_LABEL = "Zurücksetzen";
const DIALOG_CANCEL_BUTTON_LABEL = "Abbrechen";
const DIALOG_OK_BUTTON_LABEL = "OK";
const ERROR_TITLE = "Fehler";

const EXPORT_ZIP_TITLE = "Zip-Datei exportieren";
const EXPORT_ZIP_FILENAME_LABEL = "Dateiname:";
const EXPORT_ZIP_PASSWORD_LABEL = "Passwort:";
const EXPORT_ZIP_DIALOG_BUTTON_LABEL = "Exportieren";
const EXTRACT_TITLE = "Datei extrahieren";
const EXTRACT_FILENAME_LABEL = "Dateiname:";
const EXTRACT_DIALOG_BUTTON_LABEL = "Extrahieren";
const RENAME_TITLE = "Eintrag umbenennen";
const RENAME_FILENAME_LABEL = "Neuer Eintragsname:";
const RENAME_DIALOG_BUTTON_LABEL = "Umbenennen";
const CREATE_FOLDER_TITLE = "Verzeichnis erstellen";
const CREATE_FOLDER_NAME_LABEL = "Verzeichnisname:";
const CREATE_FOLDER_DIALOG_BUTTON_LABEL = "Erstellen";
const RESET_TITLE = "Dateisystem zurücksetzen";
const RESET_MESSAGE = "Bitte bestätigen Sie das Zurücksetzen des Dateisystems.";
const RESET_DIALOG_BUTTON_LABEL = "Zurücksetzen";
const DELETE_ENTRIES_TITLE = "Einträge löschen";
const DELETE_ENTRIES_MESSAGE =
  "Bitte bestätigen Sie das Löschen der markierten Einträge.";
const DELETE_ENTRIES_DIALOG_BUTTON_LABEL = "Löschen";
const ZIP_FILE_DESCRIPTION_LABEL = "Zip-Datei";
const IMPORT_PASSWORD_TITLE = "Passwort eingeben";
const IMPORT_PASSWORD_LABEL = "Passwort:";
const OPTIONS_DIALOG_BUTTON_LABEL = "Speichern";
const OPTIONS_TITLE = "Optionen";
const OPTIONS_ZOOM_FACTOR_LABEL = "Zoomfaktor (%):";
const OPTIONS_HIDE_NAVIGATION_BAR_LABEL = "Navigationsleiste ausblenden:";
const OPTIONS_HIDE_DOWNLOAD_MANAGER_LABEL = "Download-Manager ausblenden:";
const OPTIONS_HIDE_INFOBAR_LABEL = "Untere Leiste ausblenden:";
const OPTIONS_SELECT_SKIN_LABEL = "Thema:";
const OPTIONS_DEFAULT_SKIN_LABEL = "Standard";
const OPTIONS_DOS_SKIN_LABEL = "DOS";
const OPTIONS_EXPORT_ZIP_PASSWORD_LABEL = "Nach Passwort fragen:";
const OPTIONS_DEFAULT_PASSWORD_LABEL = "Standardpasswort:";
const OPTIONS_KEEP_ORDER_LABEL = "Einträge sortieren:";
const OPTIONS_CHECK_SIGNATURE_LABEL = "Daten-Signatur prüfen:";
const OPTIONS_BUFFERED_WRITE_LABEL = "Mehrere Kerne verwenden:";
const OPTIONS_MAX_WORKERS_LABEL = "Anzahl der Kerne:";
const OPTIONS_CHUNK_SIZE_LABEL = "Chunk-Größe (kB):";
const CHOOSE_ACTION_DIALOG_ADD_FILE_BUTTON_LABEL = "Datei hinzufügen";
const CHOOSE_ACTION_TITLE = "Aktion auswählen";
const CHOOSE_ACTION_LABEL =
  "Eine Zip-Datei wurde ausgewählt. Bitte wählen Sie die entsprechende Aktion.";
const NO_ENTRIES_LABEL = "Dateien und Verzeichnisse hierher ziehen";
const INFO_LABEL = [
  "Quellcode auf ",
  " GitHub ",
  " Mit ",
  "♡",
  " gemacht in ",
  "Rennes"
];
const CITY_URL = "https://de.wikipedia.org/wiki/Rennes";
const HIGHLIGHTED_ENTRIES_LABEL = "Befehle für markierte Einträge";
const DOWNLOADS_LABEL = "Download-Manager";
const ENTRIES_LABEL = "Verzeichniseinträge";
const FOLDERS_LABEL = "Navigationsverlauf";
const SELECTED_FOLDER_LABEL = "Befehle für ausgewähltes Verzeichnis";
const GO_INTO_FOLDER_LABEL = "In Verzeichnis wechseln";
const GO_BACK_LABEL = "Zurück";
const GO_FORWARD_LABEL = "Vorwärts";
const ACCENT_COLOR_LABEL = "Akzentfarbe";
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
