"use strict"
const translationFiles = require('./utils/GetFiles')


class Translate {

    constructor(){
        this.defaultLang = "en"
        this.lang = {}
    }


    setPath(path){
        // set the translation file path
        this.translationPath = path
    }


    setDefaultLang(lang){
        // set the default language
        this.defaultLang = lang
    }
    getFiles(){
        if(this.translationPath == null){
            throw Error("Translation PATH dont defined.")
        }
        this.files = translationFiles(this.translationPath)
    }

    init(){
        // Load the translations files
        this.getFiles()
        this.getTranslatables()

    }

    translate(lang=this.defaultLang, string="", defaultString=""){
        return this.lang
    }


    getLanguageName(file){
        // Return the name of the language from the filename
        return (file.split("."))[0]
    }

    getTranslatables(){
        this.files.map(file =>
            this.lang[this.getLanguageName(file)] = (translationFiles.readFile(`${this.translationPath}/${file}`))
            )
    }
    //#endregion


}

module.exports = Translate