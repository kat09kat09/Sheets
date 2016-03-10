var bodyParser=  require('body-parser'), 
    cors= require('cors'); 

module.exports= function (app, express){
  app.use(cors());
  app.use(bodyParser.urlencoded({extended:true})); 
  app.use(bodyParser.json()); 

  // serve static assets from client folder
  app.use(express.static(__dirname + '/../client'));
 
}