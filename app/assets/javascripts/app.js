var sitStay = angular.module('SitStayApp',[]);

sitStay.controller("PostingsController", ["$scope", "$http", function( $scope, $http ){

  $scope.postings = [];
  $scope.image_url;


  $http.get('/api/postings/').then(function(response){
    $scope.postings = response.data.postings;
    console.log($scope.postings);
  });

  $scope.savePosting = function() {
    var newPosting = {
      posting: {
        name: $scope.name,
        email: $scope.email,
        pet_type: $scope.pet_type,
        comments: $scope.comments,
        street_address: $scope.street_address,
        city: $scope.city,
        state: $scope.state,
        zipcode: $scope.zipcode,
        start_date: $scope.start_date,
        end_date: $scope.end_date,
        is_stay_post: $scope.is_stay_post
      }
    }
    // console.log(newPosting);


    $http.post('/api/postings/', newPosting).then(function(response) {
      $http.get('/api/postings/').then(function(res){
        $scope.postings = res.data.postings;
        });
    });
  };

  $scope.removePosting = function(posting) {
    $http.delete('/api/postings/' +  posting.id).then(function(response) {
      $http.get('/api/postings/').then(function(res){
        $scope.postings = res.data.postings;
        // console.log($scope.postings);
        });
    });

  }




}])