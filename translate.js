"use strict"
const translationFiles = require('./utils/GetFiles')


class Translate {

    constructor(){
        this.lang = {}
        this.separator = "."
    }


    setPath(path){
        // set the translation file path
        this.translationPath = path
    }


    getFiles(){
        if(this.translationPath == null){
            throw new Error("Translation PATH dont defined.")
        }
        this.files = translationFiles(this.translationPath)
    }

    init(){
        // Load the translations files
        this.getFiles()
        this.getTranslatables()

    }

    translate(lang, string="", defaultString=""){
        let parsed = string.split(this.separator)
        let temp = this.lang[lang]
        try {
            parsed.map((item) => {
                temp = temp[item]
            })
            if(temp)
                return temp
            else
                return defaultString
        } catch (error) {
            return defaultString
        }

    }


    getLanguageName(file){
        // Return the name of the language from the filename
        return (file.split("."))[0]
    }

    getTranslatables(){
        this.files.map(file =>
            this.lang[this.getLanguageName(file)] = translationFiles.readFile(`${this.translationPath}/${file}`)
            )
    }



}

module.exports = Translate