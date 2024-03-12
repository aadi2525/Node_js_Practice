const getdata = require('./mongo_config')

const deleteData = async ()=> {
    const data = await getdata();
    const result = await data.deleteOne({name:'aa'});

    console.log(result);
}

deleteData();