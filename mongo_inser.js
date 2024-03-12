const getdata = require('./mongo_config');


const insert = async ()=> {
    const db = await getdata();
    const result =await db.insertMany({name:"aa",age:20},{name:"abc",age:10});
    console.log(result)

    if(result.acknowledged){
        console.log("data  inserted ")
    }else{

        console.log("data  inserted ")
    }
}
insert();