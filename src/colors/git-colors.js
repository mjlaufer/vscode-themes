// Git Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors

module.exports = (theme) => ({
    'gitDecoration.modifiedResourceForeground': theme.blue,
    'gitDecoration.deletedResourceForeground': theme.red,
    'gitDecoration.untrackedResourceForeground': theme.green,
    'gitDecoration.ignoredResourceForeground': theme.foreground2,
    'gitDecoration.conflictingResourceForeground': theme.red,
});
