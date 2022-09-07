import hCtrl from "./controller.js"
import hRouter from "./router.js"

var app = angular.module('h-app', ["ngRoute"])

app.controller('h-ctrl', hCtrl)
app.config(hRouter)

app.controller("detailController", function($scope,$routeParams) {
    $scope.detailItem = $scope.products = $scope.data.products.filter( item => item.title == $routeParams.name);
    console.log($scope.detailItem)
}) 

var postdb = {
    name: 'loc',
    age: 12
}

$('#click').click(function postdb() {
    console.log(1)
    fetch('../../LAST-ANGULARJS/data.json', {
        method: 'POST',
        body: JSON.stringify(postdb),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(Response => Response)
    .then(data => data.text())
})