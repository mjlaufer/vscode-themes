// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = (theme) => ({
    'editorWidget.background': theme.background2,
    'editorWidget.border': theme.background3,
    'editorSuggestWidget.background': theme.background2,
    'editorSuggestWidget.border': theme.background3,
    'editorSuggestWidget.foreground': theme.foreground,
    // "editorSuggestWidget.highlightForeground": "#FF0000",
    'editorSuggestWidget.selectedBackground': theme.background3,
    'editorHoverWidget.background': theme.background2,
    'editorHoverWidget.border': theme.background3,
    'debugExceptionWidget.background': theme.background2,
    'debugExceptionWidget.border': theme.background3,
    'editorMarkerNavigation.background': theme.background2,
    'editorMarkerNavigationError.background': theme.red,
    'editorMarkerNavigationWarning.background': theme.yellow,
});
