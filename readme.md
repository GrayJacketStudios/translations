# json-translation
[![npm](https://img.shields.io/npm/v/json-translation)](https://www.npmjs.com/package/json-translation)
[![GitHub issues](https://img.shields.io/github/issues/GrayJacketStudios/translations)](https://github.com/GrayJacketStudios/translations/issues)
[![GitHub license](https://img.shields.io/github/license/GrayJacketStudios/translations)](https://github.com/GrayJacketStudios/translations/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/GrayJacketStudios/translations)](https://github.com/GrayJacketStudios/translations/stargazers)


Tool to make translations "offline" from json documents, dont having to wait for an API call or async function.
Can be used with NodeJS without problem.

## Instalation
To install it just run:
`npm i json-translation -s`

## How to use it
First, you need to create a new Translation object.
```js
const Translator = require("json-translation")
const ts = new Translator()
```
Then, specify where the json translation files are, like this:
`ts.translationPath = "./data/"`
or like this:
`ts.setPath("./data")`

**After** declaring the path, you load them to memory with `ts.init()`, so all the calls are as fast as they can.

Then, you can ask for the translation text like this:
`ts.translate(<lang>, <string>[, <fallbackString>])`
You need to have the json files with the desired <lang> names where you specify the translationPath.

The json structure can be like this:
```json
{
    "header_section": {
        "title": "My awesome page",
        "subtitle": "Hello world"
    },
    "footer_section": {
        "example": "you can put more text right here!"
    },
    "my_email": "personal@email.com"
}
```
Considering that the file name is `en.json` you can access it information like this:
```js
ts.translate("en", "header_section.title")
```
and will output `My awesome page`.
You can change the `dot` separator to any other one with:
`ts.separator = "/"`
and access the information like this:
`ts.translate("en", "header_section/title")`

## Full example
**index.js**
```js
    var Translator = require("json-translation")
    let ts = new Translator()

    ts.setPath("./data")
    ts.init()
    ts.separator = ";"
    console.log(ts.translate("es", "example_section;translation_2"))
    console.log(ts.translate("en", "example_section;translation_2"))
```
**data/es.json**
```json
{
    "example_section": {
        "translation_1": "Texto de prueba",
        "translation_2": "Esté es un texto de prueba para mostrar la funcionalidad del paquete."
    }
}
```

**data/en.json**
```json
{
    "example_section": {
        "translation_1": "Testing text",
        "translation_2": "This is a testing text to show the functionality of the package."
    }
}
```
