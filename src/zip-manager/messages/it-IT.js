const PARENT_FOLDER_LABEL = "..";
const ROOT_FOLDER_LABEL = "<radice>";
const ROOT_ZIP_FILENAME = "Download.zip";
const KEYS_SEPARATOR_LABEL = ", ";
const PARENT_FOLDER_TOOLTIP = "Cartella padre";

const SHORTCUT_LABEL = "Scorciatoia: ";
const CTRL_KEY_LABEL = "⌘/ctrl-";
const ALT_KEY_LABEL = "alt-";
const SPACE_KEY_LABEL = "spazio";
const ARROW_LEFT_KEY_LABEL = "sinistra";
const ARROW_RIGHT_KEY_LABEL = "destra";
const SIZE_LABEL = "Dimensioni:";
const UNCOMPRESSED_SIZE_LABEL = "Dimensioni non compressa:";
const COMPRESSED_SIZE_LABEL = "Dimensioni compressa:";
const LAST_MOD_DATE_LABEL = "Data ultima modifica:";

const COPY_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "c";
const CUT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "x";
const PASTE_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "v";
const EXTRACT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "Invio";
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

const CREATE_FOLDER_BUTTON_LABEL = "Crea cartella";
const ADD_FILES_BUTTON_LABEL = "Aggiungi file";
const IMPORT_ZIP_BUTTON_LABEL = "Importa zip";
const EXPORT_ZIP_BUTTON_LABEL = "Esporta zip";
const RESET_BUTTON_LABEL = "Resetta";
const OPTIONS_BUTTON_LABEL = "Opzioni";
const BACK_BUTTON_LABEL = "<";
const FORWARD_BUTTON_LABEL = ">";
const DOWNLOAD_BUTTON_LABEL = "↵";
const ENTER_FOLDER_BUTTON_LABEL = "↓";
const COPY_BUTTON_LABEL = "Copia";
const CUT_BUTTON_LABEL = "Taglia";
const PASTE_BUTTON_LABEL = "Incolla";
const RESET_CLIPBOARD_BUTTON_LABEL = "Resetta clipboard";
const EXTRACT_BUTTON_LABEL = "Estrai";
const OPEN_BUTTON_LABEL = "Aprire"
const HIGHLIGHT_ALL_BUTTON_LABEL = "Seleziona tutto";
const RENAME_BUTTON_LABEL = "Rinomina";
const DELETE_BUTTON_LABEL = "Elimina";
const ABORT_DOWNLOAD_BUTTON_LABEL = "✕";
const DIALOG_RESET_BUTTON_LABEL = "Resetta";
const DIALOG_CANCEL_BUTTON_LABEL = "Annulla";
const DIALOG_OK_BUTTON_LABEL = "OK";
const ERROR_TITLE = "Errore";

const EXPORT_ZIP_TITLE = "Esporta file zip";
const EXPORT_ZIP_FILENAME_LABEL = "Nome file:";
const EXPORT_ZIP_PASSWORD_LABEL = "Password:";
const EXPORT_ZIP_DIALOG_BUTTON_LABEL = "Esporta";
const EXTRACT_TITLE = "Estrai file";
const EXTRACT_FILENAME_LABEL = "Nome file:";
const EXTRACT_DIALOG_BUTTON_LABEL = "Estrai";
const RENAME_TITLE = "Rinomina voce";
const RENAME_FILENAME_LABEL = "Nuovo nome voce:";
const RENAME_DIALOG_BUTTON_LABEL = "Rinomina";
const CREATE_FOLDER_TITLE = "Crea cartella";
const CREATE_FOLDER_NAME_LABEL = "Nome cartella:";
const CREATE_FOLDER_DIALOG_BUTTON_LABEL = "Crea";
const RESET_TITLE = "Resetta file system";
const RESET_MESSAGE = "Confermi il reset del file system?";
const RESET_DIALOG_BUTTON_LABEL = "Resetta";
const DELETE_ENTRIES_TITLE = "Elimina voci";
const DELETE_ENTRIES_MESSAGE =
  "Confermi l'eliminazione delle voci evidenziate?";
const DELETE_ENTRIES_DIALOG_BUTTON_LABEL = "Elimina";
const ZIP_FILE_DESCRIPTION_LABEL = "File zip";
const IMPORT_PASSWORD_TITLE = "Inserisci password";
const IMPORT_PASSWORD_LABEL = "Password:";
const OPTIONS_DIALOG_BUTTON_LABEL = "Salva";
const OPTIONS_TITLE = "Opzioni";
const OPTIONS_ZOOM_FACTOR_LABEL = "Fattore di zoom (%):";
const OPTIONS_HIDE_NAVIGATION_BAR_LABEL = "Nascondi barra di navigazione:";
const OPTIONS_HIDE_DOWNLOAD_MANAGER_LABEL = "Nascondi pannello download:";
const OPTIONS_HIDE_INFOBAR_LABEL = "Nascondi barra inferiore:";
const OPTIONS_SELECT_SKIN_LABEL = "Tema:";
const OPTIONS_DEFAULT_SKIN_LABEL = "Predefinito";
const OPTIONS_DOS_SKIN_LABEL = "DOS";
const OPTIONS_EXPORT_ZIP_PASSWORD_LABEL = "Richiedi password:";
const OPTIONS_DEFAULT_PASSWORD_LABEL = "Password predefinita:";
const OPTIONS_KEEP_ORDER_LABEL = "Mantieni ordine voci:";
const OPTIONS_CHECK_SIGNATURE_LABEL = "Verifica firma dati:";
const OPTIONS_BUFFERED_WRITE_LABEL = "Usa multi-core:";
const OPTIONS_MAX_WORKERS_LABEL = "Numero core:";
const OPTIONS_CHUNK_SIZE_LABEL = "Dimensione frammento (kB):";
const CHOOSE_ACTION_DIALOG_ADD_FILE_BUTTON_LABEL = "Aggiungi file";
const CHOOSE_ACTION_TITLE = "Scegli azione";
const CHOOSE_ACTION_LABEL =
  "È stato selezionato un file zip, scegli l'azione appropriata.";
const NO_ENTRIES_LABEL = "Trascina qui file e cartelle";
const INFO_LABEL = [
  "Codice sorgente su ",
  " GitHub ",
  " Creato con ",
  "♡",
  " a ",
  "Rennes"
];
const CITY_URL = "https://it.wikipedia.org/wiki/Rennes";
const HIGHLIGHTED_ENTRIES_LABEL = "Comandi voci evidenziate";
const DOWNLOADS_LABEL = "Pannello download";
const ENTRIES_LABEL = "Voci directory";
const FOLDERS_LABEL = "Cronologia navigazione";
const SELECTED_FOLDER_LABEL = "Comandi cartella selezionata";
const GO_INTO_FOLDER_LABEL = "Entra nella cartella";
const GO_BACK_LABEL = "Indietro";
const GO_FORWARD_LABEL = "Avanti";
const ACCENT_COLOR_LABEL = "Colore accentuazione";
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
