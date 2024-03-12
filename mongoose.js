const mongoose = require('mongoose')


const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/student");
    const pschema = new mongoose.Schema({
        name:String
    });

    const pmodel1 = mongoose.model("data",pschema);
    let data1 = new pmodel1({name:"welcome"});
    let result = await data1.save();
    console.log(result);
}

main();