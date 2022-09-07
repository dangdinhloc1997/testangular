import hCtrl from "./controller.js"
import hRouter from "./router.js"

var app = angular.module('h-app', ["ngRoute"])

app.controller('h-ctrl', hCtrl)
app.config(hRouter)

