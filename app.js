'use strict';

angular.module('myApp', ['ui.bootstrap', 'angularSlideables'])

.factory('ChurchData', function ($http) {
    return {
        getData: function (callback) {
            $http.get('church.json').then(callback);
        }
    }
})

.controller('MainCtrl', function ($scope, $http, ChurchData) {
    ChurchData.getData(function(data) {
        console.log(data);
        $scope.churches = data.data;
        console.log($scope.churches);
    });
    $scope.myLoc = L.latLng(42.9269, -85.59);

    $scope.mymap = L.map('leafletmap', {
        center: [[42.9269,-85.5]],
        scrollWheelZoom: false,
        inertia: true,
        zoomControl: false,
        inertiaDeclaration: 2000
    });

    $scope.mymap.setView([42.9269,-85.6], 12);
    
    var layer = new L.StamenTileLayer("terrain").addTo($scope.mymap);
    /*
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/b\
                            y-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18
    }).addTo($scope.mymap);
      */
    
    /*$scope.mymap.locate({setView: true, maxZoom: 15});
          
    $scope.mymap.on('locationfound', onLocationFound);
          
    function onLocationFound(e) {    
        L.marker(e.latlng).addTo($scope.mymap);
    }*/
    //L.marker([42.9269,-85.5891], {icon:maroonIcon}).addTo($scope.mymap).bindPopup("Calvin College");
})

.directive('addtomap', function() {
    return function (scope, element, attrs) {
        scope.icon = L.marker([+attrs.lat, +attrs.lng]).addTo(scope.mymap).bindPopup('<h4>' + attrs.churchname + ' <a href="#' + attrs.id + '"><i class="fa fa-info-circle"></i></a></h4><br>' + attrs.churchaddr);
    }
});
