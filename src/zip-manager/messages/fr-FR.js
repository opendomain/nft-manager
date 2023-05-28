const PARENT_FOLDER_LABEL = "..";
const ROOT_FOLDER_LABEL = "<racine>";
const ROOT_ZIP_FILENAME = "Téléchargement.zip";
const KEYS_SEPARATOR_LABEL = ", ";
const PARENT_FOLDER_TOOLTIP = "Répertoire parent";

const SHORTCUT_LABEL = "Raccourci: ";
const CTRL_KEY_LABEL = "⌘/ctrl-";
const ALT_KEY_LABEL = "alt-";
const SPACE_KEY_LABEL = "espace";
const ARROW_LEFT_KEY_LABEL = "gauche";
const ARROW_RIGHT_KEY_LABEL = "droite";
const SIZE_LABEL = "Taille :";
const UNCOMPRESSED_SIZE_LABEL = "Taille non compressée :";
const COMPRESSED_SIZE_LABEL = "Taille compressée :";
const LAST_MOD_DATE_LABEL = "Date de dernière modification :";

const COPY_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "c";
const CUT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "x";
const PASTE_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "v";
const EXTRACT_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "Entrée";
const HIGHLIGHT_ALL_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "a";
const RENAME_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "r";
const DELETE_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ["retour arrière", "suppr"].join(KEYS_SEPARATOR_LABEL);
const CREATE_FOLDER_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "d";
const ADD_FILES_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "f";
const IMPORT_ZIP_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "i";
const EXPORT_ZIP_BUTTON_TOOLTIP = SHORTCUT_LABEL + CTRL_KEY_LABEL + "e";
const BACK_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ALT_KEY_LABEL + ARROW_LEFT_KEY_LABEL;
const FORWARD_BUTTON_TOOLTIP =
  SHORTCUT_LABEL + ALT_KEY_LABEL + ARROW_RIGHT_KEY_LABEL;

const CREATE_FOLDER_BUTTON_LABEL = "Créer répertoire";
const ADD_FILES_BUTTON_LABEL = "Ajouter fichiers";
const IMPORT_ZIP_BUTTON_LABEL = "Importer zip";
const EXPORT_ZIP_BUTTON_LABEL = "Exporter zip";
const RESET_BUTTON_LABEL = "Réinitialiser";
const OPTIONS_BUTTON_LABEL = "Options";
const BACK_BUTTON_LABEL = "<";
const FORWARD_BUTTON_LABEL = ">";
const DOWNLOAD_BUTTON_LABEL = "↵";
const ENTER_FOLDER_BUTTON_LABEL = "↓";
const COPY_BUTTON_LABEL = "Copier";
const CUT_BUTTON_LABEL = "Couper";
const PASTE_BUTTON_LABEL = "Coller";
const RESET_CLIPBOARD_BUTTON_LABEL = "Réinitialiser presse-papier";
const EXTRACT_BUTTON_LABEL = "Extraire";
const HIGHLIGHT_ALL_BUTTON_LABEL = "Selectionner tout";
const RENAME_BUTTON_LABEL = "Renommer";
const DELETE_BUTTON_LABEL = "Supprimer";
const ABORT_DOWNLOAD_BUTTON_LABEL = "✕";
const DIALOG_RESET_BUTTON_LABEL = "Réinitialiser";
const DIALOG_CANCEL_BUTTON_LABEL = "Annuler";
const DIALOG_OK_BUTTON_LABEL = "OK";
const ERROR_TITLE = "Erreur";

const EXPORT_ZIP_TITLE = "Exporter fichier zip";
const EXPORT_ZIP_FILENAME_LABEL = "Nom du fichier :";
const EXPORT_ZIP_PASSWORD_LABEL = "Mot de passe :";
const EXPORT_ZIP_DIALOG_BUTTON_LABEL = "Export";
const EXTRACT_TITLE = "Extraire fichier";
const EXTRACT_FILENAME_LABEL = "Nom du fichier :";
const EXTRACT_DIALOG_BUTTON_LABEL = "Extraire";
const RENAME_TITLE = "Renommer entrée";
const RENAME_FILENAME_LABEL = "Nouveau nom de l'entrée :";
const RENAME_DIALOG_BUTTON_LABEL = "Renommer";
const CREATE_FOLDER_TITLE = "Créer répertoire";
const CREATE_FOLDER_NAME_LABEL = "Nom du repertoire :";
const CREATE_FOLDER_DIALOG_BUTTON_LABEL = "Créer";
const RESET_TITLE = "Réinitialiser système de fichiers";
const RESET_MESSAGE =
  "Veuillez confirmer la réinitialisation du système de fichiers.";
const RESET_DIALOG_BUTTON_LABEL = "Réinitialiser";
const DELETE_ENTRIES_TITLE = "Supprimer les entrées";
const DELETE_ENTRIES_MESSAGE =
  "Veuillez confirmer la suppression des entrées en surbrillance.";
const DELETE_ENTRIES_DIALOG_BUTTON_LABEL = "Supprimer";
const ZIP_FILE_DESCRIPTION_LABEL = "Zipper fichier";
const IMPORT_PASSWORD_TITLE = "Entrer le mot de passse";
const IMPORT_PASSWORD_LABEL = "Mot de passe :";
const OPTIONS_DIALOG_BUTTON_LABEL = "Sauver";
const OPTIONS_TITLE = "Options";
const OPTIONS_ZOOM_FACTOR_LABEL = "Facteur de zoom (%) :";
const OPTIONS_HIDE_NAVIGATION_BAR_LABEL = "Cacher la barre de navigation :";
const OPTIONS_HIDE_DOWNLOAD_MANAGER_LABEL =
  "Cacher le panneau de téléchargements :";
const OPTIONS_HIDE_INFOBAR_LABEL = "Cacher la barre du bas :";
const OPTIONS_SELECT_SKIN_LABEL = "Thème:";
const OPTIONS_DEFAULT_SKIN_LABEL = "Défaut";
const OPTIONS_DOS_SKIN_LABEL = "DOS";
const OPTIONS_EXPORT_ZIP_PASSWORD_LABEL = "Demander un mot de passe :";
const OPTIONS_DEFAULT_PASSWORD_LABEL = "Mot de passe par défaut :";
const OPTIONS_KEEP_ORDER_LABEL = "Préserver l'ordre des entrées :";
const OPTIONS_CHECK_SIGNATURE_LABEL = "Vérifier la signature des données :";
const OPTIONS_BUFFERED_WRITE_LABEL = "Utiliser plusieurs cœurs :";
const OPTIONS_MAX_WORKERS_LABEL = "Nombre de cœurs :";
const OPTIONS_CHUNK_SIZE_LABEL = "Taille des paquets (ko) :";
const CHOOSE_ACTION_DIALOG_ADD_FILE_BUTTON_LABEL = "Ajouter fichier";
const CHOOSE_ACTION_TITLE = "Choisir l'action";
const CHOOSE_ACTION_LABEL =
  "Un fichier zip a été selectionné, veuillez choisir l'action appropriée.";
const NO_ENTRIES_LABEL =
  "Glissez et déposez des fichiers et des répertoires ici";
const INFO_LABEL = [
  "Code source sur ",
  "GitHub",
  " ",
  " Fait avec ",
  "♡",
  " à ",
  "Rennes"
];
const HIGHLIGHTED_ENTRIES_LABEL = "Commandes des entrées en surbrillance";
const DOWNLOADS_LABEL = "Panneau de téléchargements";
const ENTRIES_LABEL = "Entrées du répertoire";
const FOLDERS_LABEL = "Historique de navigation";
const SELECTED_FOLDER_LABEL = "Commandes du répertoire selectionné";
const GO_INTO_FOLDER_LABEL = "Naviguer dans le répertoire";
const GO_BACK_LABEL = "Naviguer en arrière";
const GO_FORWARD_LABEL = "Naviguer en avant";
const ACCENT_COLOR_LABEL = "Couleur d'accentuation";
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
  OPTIONS_SELECT_SKIN_LABEL,
  OPTIONS_DEFAULT_SKIN_LABEL,
  OPTIONS_DOS_SKIN_LABEL,
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
