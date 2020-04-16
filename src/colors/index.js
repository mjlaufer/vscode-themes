const baseColors = require('./base-colors');
const textColors = require('./text-colors');
const buttonControl = require('./button-control');
const dropdownControl = require('./dropdown-control');
const inputControl = require('./input-control');
const scrollBarControl = require('./scrollbar-control');
const badge = require('./badge');
const progressBar = require('./progress-bar');
const listsAndTrees = require('./lists-and-trees');
const activityBar = require('./activity-bar');
const sideBar = require('./sidebar');
const editorGroupsAndTabs = require('./editor-groups-and-tabs');
const editorColors = require('./editor-colors');
const diffEditorColors = require('./diff-editor-colors');
const editorWidgetColors = require('./editor-widget-colors');
const peekViewColors = require('./peek-view-colors');
const mergeConflicts = require('./merge-conflicts');
const panelColors = require('./panel-colors');
const statusBarColors = require('./status-bar-colors');
const titleBarColors = require('./title-bar-colors');
const notificationDialogColors = require('./notification-dialog-colors');
const extensions = require('./extensions');
const quickPicker = require('./quick-picker');
const integratedTerminalColors = require('./integrated-terminal');
const welcomePage = require('./welcome-page');
const gitColors = require('./git-colors');
const settingsEditor = require('./settings-editor');
const breadcrumbs = require('./breadcrumbs');
const snippets = require('./snippets');

module.exports = (colors) => ({
    ...baseColors(colors),
    ...textColors(colors),
    ...buttonControl(colors),
    ...dropdownControl(colors),
    ...inputControl(colors),
    ...scrollBarControl(colors),
    ...badge(colors),
    ...progressBar(colors),
    ...listsAndTrees(colors),
    ...activityBar(colors),
    ...sideBar(colors),
    ...editorGroupsAndTabs(colors),
    ...editorColors(colors),
    ...diffEditorColors(colors),
    ...editorWidgetColors(colors),
    ...peekViewColors(colors),
    ...mergeConflicts(colors),
    ...panelColors(colors),
    ...statusBarColors(colors),
    ...titleBarColors(colors),
    ...notificationDialogColors(colors),
    ...extensions(colors),
    ...quickPicker(colors),
    ...integratedTerminalColors(colors),
    ...welcomePage(colors),
    ...gitColors(colors),
    ...settingsEditor(colors),
    ...breadcrumbs(colors),
    ...snippets(colors),
});
