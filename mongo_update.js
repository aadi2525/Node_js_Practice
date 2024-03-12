const getdata  = require('./mongo_config');

const updatedata = async ()=> {
    const data = await getdata();
    const result = await data.updateMany({name:'ash'}, {$set: {name:'PikAsh'}});

    console.log(result);
}

updatedata();