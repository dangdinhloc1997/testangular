function hRouter($routeProvider) 
{
    $routeProvider
    .when("/", {
        templateUrl: "../components/main/main.htm"
    })
    .when("/products", {
        templateUrl: "../components/main/product_page.htm"
    })
    .when("/products/detail", {
        templateUrl: "../components/main/detail.htm"
    })
    .when("/registry", {
        templateUrl: "../components/main/registry.htm"
    })
    .when("/login", {
        templateUrl: "../components/main/login.htm"
    })
    .when("/cart", {
        templateUrl: "../components/main/cart.htm"
    })
}

export default hRouter