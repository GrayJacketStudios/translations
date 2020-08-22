"use strict";

var main = require('app-root-path')
const translationFiles = require('./utils/GetFiles')


class Translate {

    constructor(){
        this.translationPathJson = `${main}/data`
        this.files = null
    }

    path(path){
        this.translationPathJson = path
    }

    async getFiles(){
        this.files = await translationFiles(this.translationPathJson)
        console.log(this.files)
    }
}

module.exports = Translate
