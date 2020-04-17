module.exports = (theme) => [
    {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
            foreground: theme.magenta,
        },
    },
    {
        name: 'Variable, Object-Literal Key, JSON Key, Built-In Constant, CSS Unit',
        scope:
            'variable, meta.object-literal.key, source.json meta.structure.dictionary.json support.type.property-name.json, support.constant, keyword.other.unit',
        settings: {
            foreground: theme.foreground,
        },
    },
    {
        name: 'Braces, Punctuation, Misc',
        scope:
            'meta.brace, punctuation, punctuation.definition.tag, punctuation.definition.tag.html, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.section.embedded, constant.other.color, keyword.other.template, keyword.other.substitution',
        settings: {
            foreground: theme.foreground,
        },
    },
    {
        name: 'Keyword',
        scope: 'keyword',
        settings: {
            foreground: theme.cyan,
        },
    },
    {
        name: 'Operator',
        scope: 'keyword.operator',
        settings: {
            foreground: theme.cyan,
        },
    },
    {
        name: 'Template Literal Nesting Templates',
        scope: 'punctuation.definition.template-expression',
        settings: {
            foreground: theme.cyan,
        },
    },
    {
        name: 'Storage',
        scope: 'storage.type, storage.modifier',
        settings: {
            foreground: theme.red,
        },
    },
    {
        name: 'Language methods, Sub-methods',
        scope: 'variable.language',
        settings: {
            foreground: theme.red,
        },
    },
    {
        name: 'String',
        scope: 'string',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Regex',
        scope: 'string.regexp',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Number, Constant, Escape Characters',
        scope: 'constant.numeric, constant.language, constant.character, constant.character.escape',
        settings: {
            foreground: theme.orange,
        },
    },
    {
        name: 'Function, Special Method, Block Level',
        scope:
            'entity.name.function, meta.function-call, variable.function, support.function, keyword.other.special-method, meta.block-level',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        name: 'Class, Inherited Class, Built-In Class',
        scope:
            'entity.name.class, entity.name.type.class, entity.other.inherited-class, new.expr entity.name.type, support.class.builtin',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Type',
        scope: 'entity.name.type, support.type',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'HTML/JSX Tag',
        scope: 'entity.name.tag, meta.tag.sgml',
        settings: {
            foreground: theme.red,
        },
    },
    {
        name: 'JSX Component Tag',
        scope: 'support.class.component',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'HTML/JSX Attributes',
        scope: 'entity.other.attribute-name',
        settings: {
            foreground: theme.cyan,
        },
    },
    {
        name: 'JSX Children',
        scope: 'meta.jsx.children',
        settings: {
            foreground: theme.cyan,
        },
    },
    {
        name: 'Other Variable, String Link',
        scope: 'support.other.variable, string.other.link',
        settings: {
            foreground: theme.orange,
        },
    },
    {
        name: 'Symbols',
        scope: 'constant.other.symbol, constant.other.key, markup.heading',
        settings: {
            foreground: theme.orange,
        },
    },
    {
        name: 'Markup Heading',
        scope: 'markup.heading',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Inserted',
        scope: 'markup.inserted, markup.inserted.git_gutter',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Changed',
        scope: 'markup.changed, markup.changed.git_gutter',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        name: 'Deleted',
        scope: 'markup.deleted, markup.deleted.git_gutter',
        settings: {
            foreground: theme.red,
        },
    },
    {
        name: 'URL',
        scope: '*url*, *link*, *uri*',
        settings: {
            fontStyle: 'underline',
        },
    },
    {
        name: 'Search Results Nums',
        scope: 'constant.numeric.line-number.find-in-files - match',
        settings: {
            foreground: theme.orange,
        },
    },
    {
        name: 'Search Results Lines',
        scope: 'entity.name.filename.find-in-files',
        settings: {
            foreground: theme.green,
        },
    },
    {
        scope: 'token.info-token',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        scope: 'token.warn-token',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        scope: 'token.error-token',
        settings: {
            foreground: theme.orange,
        },
    },
    {
        scope: 'token.debug-token',
        settings: {
            foreground: theme.magenta,
        },
    },
];
