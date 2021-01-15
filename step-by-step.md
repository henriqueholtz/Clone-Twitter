**This is step by step to create this project!**

npx create-react-app clone-twitter --template=typescript

create .pretierrc => (com as chaves)
{
"singleQuote": true,
"trailingComma": "es5"
}

create .editorconfig => (sem as chaves)
{
root = true

    [*]
    indent_style = space
    indent_size = 2
    charset = utf-8
    trim_trailing_whitespace = false
    insert_final_newline = false

}

remover: App.css - App.test.tsx - index.css - logo.svg - serviceworker - setup..
Fix imports, and yarn start... testing.... After:

**Added packages: **
yarn add styled-components styled-icons
yarn add react-sticky-box
yarn add -D @types/styled-components
