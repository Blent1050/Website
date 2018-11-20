var bodyParser =    require("body-parser"),
    methodOverride  = require("method-override"),
    expressSanitizer= require("express-sanitizer"),
    express =       require("express"),
    mongoose =      require("mongoose"),
    app =           express();
    

mongoose.connect('mongodb://localhost:27017/runescape_directory',{useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));//Take whatver it is equal to and treat it as that request(PUT OR DELETE)

//MODEL
var itemSchema = new mongoose.Schema({
    itemName: String,
    itemImage: String,
    itemDescription: String
});
var Item = mongoose.model('Item', itemSchema);


//RESTFUL ROUTES
app.get('/', function(req, res) {
    res.redirect('/items');
});

//INDEX
app.get('/items', function(req, res) {
    Item.find({}, function(err, items){
        if(err){
            console.log('There has been an error at INDEX')
        }else{
            res.render('index', {items:items});
        }
    });
});

//NEW ROUTE
app.get('/items/new', function(req, res) {
    res.render('new');
});

//CREATE ROUTE
app.post('/items', function(req, res){
    //Create blog 
    req.body.item.itemDescription = req.sanitize(req.body.item.itemDescription);//sanitzer script from textarea
    Item.create(req.body.item, function(err, newItem){
        if(err){
            res.render('There has been an error at CREATE');
        }else{
            console.log('ITEM CREATED')
            res.redirect('/items');
        }
    })
    //then, redirect to index
});

//SHOW
app.get('/items/:id', function(req, res) {
    Item.findById(req.params.id, function(err, foundItem){
        if(err){
            res.redirect('/items');
        }else{
            res.render('show', {item: foundItem});
        }
    })
});

//EDIT ROUTE
app.get('/items/:id/edit', function(req, res) {
    Item.findById(req.params.id, function(err, foundItem){
        if(err){
            res.redirect('/items');
        }else{
            res.render('edit', {item: foundItem});
        }
    });
});

//UPDATE ROUTE
app.put('/items/:id', function(req, res){
    req.body.item.itemDescription = req.sanitize(req.body.item.itemDescription);//sanitzer script from textarea
    Item.findByIdAndUpdate(req.params.id, req.body.item, function(err, updatedItem){
       if(err){
           res.redirect('/items');
       }else{
           res.redirect('/items/' + req.params.id);
       }
   })
});

//DELETE ROUTE
app.delete('/items/:id', function(req,res){
    //destroy blog
    Item.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/items');
        }else{
            res.redirect('/items');
        }
    })
    //redirect 
})




app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is running!');
});
