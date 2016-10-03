angular.module('myApp', [])
    .controller('SignUpController', function ($scope) {
        $scope.userdata = {};
        $scope.submitForm = function(){
            console.log($scope.userdata);
            if ($scope.signUpForm.$invalid) {
                alert('提交失败');
            } else {
                alert('提交成功');
            }
        }
    })
    .directive('compair', function(){
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compair'
        };
        o.require = 'ngModel';
        o.link = function (sco, ele, att, con) {
            con.$validators.compair = function(v){
                return v == sco.orgText;
            }
            sco.$watch('orgText', function () {
                con.$validate();
            })
        }
        return o;
    })