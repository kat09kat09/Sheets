var data= 
{
    "vendors": [
  {
      "score": "A",
      "name": "Some Company Inc.",
      "percentile": ".94",
      "change": "4",
      "industry": "Information Tech."
  },
  {
      "score": "F",
      "name": "Block City Inc.",
      "percentile": ".46",
      "change": "-6",
      "industry": "Retail"
  },
  {
      "score": "C",
      "name": "Moon Ltd.",
      "percentile": ".78",
      "change": "0",
      "industry": "Social Media"
  },
  {
      "score": "A",
      "name": "Mt. Doom Inc.",
      "percentile": "1",
      "change": "0",
      "industry": "Transportation"
  },
  {
      "score": "A",
      "name": "Lovable Inc.",
      "percentile": ".94",
      "change": "4",
      "industry": "Information Tech."
  },
  {
      "score": "B",
      "name": "1337 Ltd.",
      "percentile": ".85",
      "change": "0",
      "industry": "Marketing"
  },
  {
      "score": "F",
      "name": "SinCity Inc.",
      "percentile": ".46",
      "change": "-6",
      "industry": "Retail"
  },
  {
      "score": "C",
      "name": "Watson Incorporated",
      "percentile": ".70",
      "change": "1",
      "industry": "Social Media"
  },
  {
      "score": "A",
      "name": "RedVBlue Inc.",
      "percentile": "1",
      "change": "0",
      "industry": "Finance"
  },
  {
      "score": "D",
      "name": "Some Company Inc.",
      "percentile": ".64",
      "change": "-2",
      "industry": "Energy"
  },
  {
      "score": "A",
      "name": "Some Company Inc.",
      "percentile": ".94",
      "change": "4",
      "industry": "Information Tech."
  },
  {
      "score": "B",
      "name": "School House Rock & Bill Cap. Hill",
      "percentile": ".86",
      "change": "0",
      "industry": "Energy"
  },
  {
      "score": "A",
      "name": "Mordor Inc.",
      "percentile": ".99",
      "change": "1",
      "industry": "Social Media"
  },
  {
      "score": "A",
      "name": "Jedi Union",
      "percentile": ".94",
      "change": "2",
      "industry": "Transportation"
  },
  {
      "score": "F",
      "name": "Miss Piggy Inc.",
      "percentile": ".38",
      "change": "0",
      "industry": "Marketing"
  },
  {
      "score": "B",
      "name": "Howlin Moon Ltd.",
      "percentile": ".88",
      "change": "1",
      "industry": "Infomation Tech."
  },
  {
      "score": "B",
      "name": "Hipster Conglomerate",
      "percentile": ".81",
      "change": "-3",
      "industry": "Media"
  },
  {
      "score": "D",
      "name": "Oompa Loompa Services",
      "percentile": ".666",
      "change": "5",
      "industry": "Retail"
  },
  {
      "score": "F",
      "name": "Not Winners Ltd.",
      "percentile": ".38",
      "change": "-10",
      "industry": "Marketing"
  }
    ]
}; 


angular.module('myApp.dataFactory', []) //create a new module called myApp.dataFactory

.factory('TestData', [
  function (){

    var getData= function () {
      var count=0; 
      data.vendors.forEach(function(vendor){
        //add a unique id to each client
        vendor.id= vendor.id || count;
        count++; 
      })
      return data.vendors; 
    }

    return {
      getData: getData
    }
  }
])

