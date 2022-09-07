function hCtrl($scope, $http) {
    // Design
    $scope.categoryClick = categoryId => $scope.products = $scope.data.products.filter(product => product.categoryId == categoryId);
    $scope.goToDetail = product => $scope.product = product;
    $scope.goToSellProduct = () => $scope.products = $scope.data.products.filter(product => product.status == 'For Sell');
    $scope.goToFreeProduct = () => $scope.products = $scope.data.products.filter(product => product.status == 'Donate');
    $scope.changeImg = (imgUrl) => $('.detail-img img').attr('src', imgUrl);

    // Validate
    $scope.checkValid = (comfirmPass, pass) => {
        $('input.ng-invalid').addClass('input-invalid');
        if (comfirmPass == pass) {
            console.log('comfirm')
        } else {
            $('#comfirmPass').addClass('input-comfirm-invalid')
        }

        if ($('input.ng-invalid').length == 0) {
            if (comfirmPass == pass) {
                return 1
            } else {
                $('#comfirmPass').addClass('input-comfirm-invalid');
                return 0
            }
        } else return 0;
    }
    $scope.resetComfirmPass = () => $('#comfirmPass').removeClass('input-comfirm-invalid');

    // Registry
    $scope.onSubmit = (fullname, email, phone, pass, comfirmPass) => {
        if ($scope.checkValid(comfirmPass, pass)) {
            $scope.newUserData = { fullname, email, phone, pass };
            $scope.users = (JSON.parse(localStorage.getItem('users'))) || [];
            if ($scope.users.filter((el) => el.email == $scope.newUserData.email).length == 0) {
                $scope.users.push($scope.newUserData);
                localStorage.setItem('users', JSON.stringify($scope.users));
                alert('Chúc mừng bạn đăng kí thành công');
            } else {
                alert('Email đã tồn tại. vui lòng nhập email khác');
            }
        }
    }

    //Login
    $scope.loginSubmit = (email, pass) => {
        $scope.users = JSON.parse(localStorage.getItem('users'));
        if ($scope.users.filter(user => user.email == email && user.pass == pass) == 0) {
            alert('Email hoặc mật khẩu không đúng');
        } else {
            $scope.login = true;
            console.log($scope.login)
            window.location.href = "#/!"
        }
        if ($scope.data.carts.filter((cart) => cart.userId == email) == 0) {

        }

    }
    // Cart 
    $scope.addToCart = (item) => {
        $scope.cartItem = (JSON.parse(sessionStorage.getItem('cartItem'))) || [];
        $scope.cartItem.push(item)
        sessionStorage.setItem('cartItem',JSON.stringify($scope.cartItem))
        console.log($scope.cartItem)
    }
    $scope.clearCartItem = (item) => {
        $scope.cartItem.indexOf(item)
        $scope.cartItem.splice($scope.cartItem.indexOf(item),1)
        sessionStorage.setItem('cartItem',JSON.stringify($scope.cartItem))
    }
    console.log($scope.cartItem)
    // API
    $http.get('../data.json')
        .then(Response => $scope.data = angular.fromJson(Response.data));

}


export default hCtrl 