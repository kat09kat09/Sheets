angular.module('myApp') //get the myApp module

//add the homeCtrl to the myApp module
.controller('homeCtrl', ['$scope', 'TestData','$state','$filter',
  function ($scope, TestData, $state, $filter) { 

    //Get the client data from the TestData factory
    $scope.clients= TestData.getData();

    //field that orderBy references
    $scope.field= undefined; 
    $scope.reverse= false; 

    $scope.sortBy= function (field){ 
      //sort percentile & change fields in desc order
      $scope.currentField= field; 
      if(field==='percentile' || field==='change'){
        $scope.field= '-'+ field; 
      } else {
        //sort all other fields in asc order
        $scope.field= field; 
      } 
    }
    
    //Predicate fxn for the filter on clients
    //It will be called for each item in clients
    //If fxn returns true, row will be displayed, else row will not be displayed
    $scope.search= function (client, idx, arr){

      //grab the user's input and turn it into a regex, ignore case
      var searchTerm= new RegExp($scope.query, 'i'); 

      //if the search term is found in either the "name" or "industry" fields, 
      //return true (in which case the row will be displayed)
      //else return false (row will not be displayed)
      return searchTerm.exec(client.name) || searchTerm.exec(client.industry);
    }

    $scope.selected= false; 
    $scope.id=-1; 

    $scope.selectRow= function (id, clients){
     
      //uncheck all boxes except for the currently selected one
      angular.forEach(clients, function (client, idx){
        if(id !== client.id){
          client.checked=false; 
        }
      })
  
      //highlights the row, unhighlights previously selected rows
      if(id===$scope.id){//user selected a row that is already highlighted, undo highlight
        $scope.selected= false; 
      } else { //highlight the selected row
        $scope.selected= true; 
        $scope.id= id;  
      }

    }

    $scope.highlightCol= function (column, highlightCol){
      $scope.column= column;
      $scope.toHighlight= highlightCol; 
    }
  }
])



