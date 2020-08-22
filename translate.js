"use strict"
const translationFiles = require('./utils/GetFiles')


class Translate {

    constructor(){
        this.defaultLang = "en"
    }


    setPath(path){
        this.translationPath = path
    }
    setDefaultLang(lang){
        this.defaultLang = lang
    }
    async getFiles(){
        if(this.translationPath == null){
            throw Error("Translation PATH dont defined.")
        }
        this.files = await translationFiles(this.translationPath)
        console.log(this.files)
    }
}

module.exports = Translate