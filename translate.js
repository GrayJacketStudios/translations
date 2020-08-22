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
    async getFiles(){
        if(this.translationPath == null){
            throw Error("Translation PATH dont defined.")
        }
        this.files = await translationFiles(this.translationPath)
    }

    async init(){
        // Load the translations files
        await this.getFiles()
        await this.getTranslatables()

    }



    getLanguageName(file){
        // Return the name of the language from the filename
        return (file.split("."))[0]
    }
    //#region Assign translations to languages
    async assignFileToDict(item){
        this.lang[this.getLanguageName(item)] = (await translationFiles.readFile(`${this.translationPath}/${item}`))
        return Promise.resolve(this.lang)
    }

    async asyncGetLang(file){
        return this.assignFileToDict(file)
    }

    async getTranslatables(){
        return Promise.all(this.files.map(file => this.asyncGetLang(file)))
    }
    //#endregion


}

module.exports = Translate