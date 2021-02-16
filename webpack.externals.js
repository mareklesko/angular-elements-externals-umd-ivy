const webpack = require('webpack');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "entry": "./src/entry.js",
   
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/common/http": "ng.common.http",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
        "@angular/compiler": "ng.compiler",
        "@angular/elements": "ng.elements",
        "@angular/router": "ng.router",
        "@angular/forms": "ng.forms"
    }
}