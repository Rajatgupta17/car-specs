var express=require("express");
var path=require("path");
var app=express();
var expressSanitizer=require("express-sanitizer");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
// mongodb://localhost/restful_blogapp
mongoose.connect("mongodb+srv://rajat456bansal:Rajat@1705@cluster0-w5iyn.mongodb.net/restful_blogapp?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
// mongodb://localhost/restful_blogapp
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
var blogSchema=new mongoose.Schema({
    title: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    price: String,
    engine: String,
    torque: String,
    power: String,
    mileage: String,
    trans: String,
});
var hyundai=mongoose.model("hyundai", blogSchema);
var maruti=mongoose.model("maruti", blogSchema);
var honda=mongoose.model("honda", blogSchema);
var ford=mongoose.model("ford", blogSchema);
var tata=mongoose.model("tata", blogSchema);
var mahindra=mongoose.model("mahindra", blogSchema);
var renault=mongoose.model("renault", blogSchema);
var nissan=mongoose.model("nissan", blogSchema);
var skoda=mongoose.model("skoda", blogSchema);
var volkswagen=mongoose.model("volkswagen", blogSchema);
var kia=mongoose.model("kia", blogSchema);
var mg=mongoose.model("mg", blogSchema);
var toyota=mongoose.model("toyota", blogSchema);
var audi=mongoose.model("audi", blogSchema);
var bmw=mongoose.model("bmw", blogSchema);
var mercedes=mongoose.model("mercedes", blogSchema);






// BASIC ROUTES
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/brands", function(req, res){
    if(req.query.searchb && req.query.searchm){
        var brand=req.query.searchb;
        var model=req.query.searchm;
        hyundai.find({"title": "Hyundai "+model}, function(err, foundCar){
            if(err){
                console.log(err);
            }
            else{
                res.render("/brands/hyundai/"+foundCar._id);
            }
        });
    }
    else{
    res.render("brands");
}
});







//MARUTI ROUTES
app.get("/brands/maruti", function(req, res){
    maruti.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Maruti"});
        }
    });
});

app.get("/brands/maruti/:id", function(req, res){
    maruti.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/maruti");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Maruti"});
        }
    });
});




//HYUNDAI ROUTES
app.get("/brands/hyundai", function(req, res){
    hyundai.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Hyundai"});
        }
    });
});

app.get("/brands/hyundai/:id", function(req, res){
    hyundai.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/hyundai");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Hyundai"});
        }
    });
});


//HONDA ROUTES
app.get("/brands/honda", function(req, res){
    honda.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Honda"});
        }
    });
});

app.get("/brands/honda/:id", function(req, res){
    honda.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/honda");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Honda"});
        }
    });
});


//FORD ROUTES
app.get("/brands/ford", function(req, res){
    ford.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Ford"});
        }
    });
});

app.get("/brands/ford/:id", function(req, res){
    ford.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/ford");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Ford"});
        }
    });
});

//TATA ROUTES
app.get("/brands/tata", function(req, res){
    tata.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Tata"});
        }
    });
});

app.get("/brands/tata/:id", function(req, res){
    tata.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/tata");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Tata"});
        }
    });
}); 
//MAHINDRA ROUTES
app.get("/brands/mahindra", function(req, res){
    mahindra.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Mahindra"});
        }
    });
});

app.get("/brands/mahindra/:id", function(req, res){
    mahindra.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/mahindra");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Mahindra"});
        }
    });
}); 
//Renault Routes
app.get("/brands/renault", function(req, res){
    renault.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Renault"});
        }
    });
});

app.get("/brands/renault/:id", function(req, res){
    renault.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/renault");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Renault"});
        }
    });
}); 

//Nissan Routes
app.get("/brands/nissan", function(req, res){
    nissan.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Nissan"});
        }
    });
});

app.get("/brands/nissan/:id", function(req, res){
    nissan.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/nissan");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Nissan"});
        }
    });
}); 
//Skoda Routes
app.get("/brands/skoda", function(req, res){
    skoda.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Skoda"});
        }
    });
});

app.get("/brands/skoda/:id", function(req, res){
    skoda.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/skoda");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Skoda"});
        }
    });
}); 
//Volkswagen Routes
app.get("/brands/volkswagen", function(req, res){
    volkswagen.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Volkswagen"});
        }
    });
});

app.get("/brands/volkswagen/:id", function(req, res){
    volkswagen.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/volkswagen");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"volkswagen"});
        }
    });
}); 
//Kia Routes
app.get("/brands/kia", function(req, res){
    kia.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Kia"});
        }
    });
});

app.get("/brands/kia/:id", function(req, res){
    kia.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/kia");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Kia"});
        }
    });
}); 
//MG ROUTES
app.get("/brands/mg", function(req, res){
    mg.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "MG"});
        }
    });
});

app.get("/brands/mg/:id", function(req, res){
    mg.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/mg");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"MG"});
        }
    });
}); 
//Toyota routes
app.get("/brands/toyota", function(req, res){
    toyota.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Toyota"});
        }
    });
});

app.get("/brands/toyota/:id", function(req, res){
    toyota.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/toyota");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Toyota"});
        }
    });
}); 
//Audi Routes
app.get("/brands/audi", function(req, res){
    audi.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Audi"});
        }
    });
});

app.get("/brands/audi/:id", function(req, res){
    audi.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/audi");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Audi"});
        }
    });
}); 
//BMW Routes
app.get("/brands/bmw", function(req, res){
    bmw.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "BMW"});
        }
    });
});

app.get("/brands/bmw/:id", function(req, res){
    bmw.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/bmw");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"BMW"});
        }
    });
}); 
//Mercedes Routes
app.get("/brands/mercedes", function(req, res){
    mercedes.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }
        else{
            res.render("maruticars", {blogs:blogs, brandName: "Mercedes"});
        }
    });
});

app.get("/brands/mercedes/:id", function(req, res){
    mercedes.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/brands/mercedes");
        }
        else{
            res.render("show", {blog: foundBlog, brandName:"Mercedes"});
        }
    });
}); 
//NEW BLOG



app.listen(3000, ()=>{
    console.log("Server Started");
})
