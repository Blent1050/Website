var bodyParser =    require("body-parser"),
    express =       require("express"),
    mongoose =      require("mongoose"),
    app =           express();

mongoose.connect('mongodb://localhost:27017/nosw',{useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//INDEX
app.get('/', function(req, res) {
    res.redirect('/index');
});


//NEW

//CREATE

//SHOW

//EDIT

//UPDATE

//DELETE

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is running!');
});