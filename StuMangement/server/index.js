const express = require('express')
const app = express()
// const student = require('mongoose')
const Student = require('./database')
//跨域问题
app.use(require('cors')())
app.use(express.json())
//服务端端口首页：
app.get('/',async(req,res) =>{
    res.send('hello node')
})

//1:显示学生列表
app.get('/api/getStudentList',async(req,res)=>{
    //查询学生并返回学生
    const students = await Student.find()
    res.send(students)
})
//2:录入学生：
app.post('/api/students',async(req,res)=>{
    // console.log(req.body)
    const student = await Student.create(req.body)
    //创建学生并返回给前端
    res.send(student)
})
//3:根据ID删除学生：
//什么时候使用req.params,后台接口必须有  :?的占位符  否则使用 req.query ★★★★★
app.delete('/api/students/:id',async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})
//4:根据id显示对应学生信息：
app.get('/api/update/:id',async(req,res)=>{
    const student = await Student.findById(req.params.id)
    res.send(student)
})
//5:更新学生信息：
app.put('/api/confirmUpdate/:id',async(req,res)=>{
    // console.log(req.body)
    const student = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.send(student)
})
//6:根据学号精确查询：
app.get('/api/findBySnumber/:xuehao',async(req,res)=>{
    
    const students = await Student.find({'snumber':req.params.xuehao})
    res.send(students)
})
//7:根据姓名模糊查询：
app.get('/api/findByName/:names',async(req,res)=>{

    var query = new RegExp(req.params.names)
    // $or操作符，可以查询多个键值的任意给定值，只要满足其中一个就可返回，用于存在多个条件判定的情况下使用
    const students = await Student.find({$or:[{"name": query}]})
    res.send(students)

})

//姓名模糊分页查询:
app.get('/api/findByName', (req,res)=>{
    result= {
        data:{},
        total:''
    };
    // var total;
    var confident = new RegExp(req.query.names)

    //总记录数：
    var query =  Student.find({$or:[{"name": confident}]});
    query.count({},function(err, count){
        if(err){
            res.json(err)
        }else{
            result.total = count;
            console.log("count的值是：",result.total);
        }
    });
    //第几页的数据：
    pageSize = parseInt(req.query.pageSize);
    currentPage = parseInt(req.query.currentPage);

    Student.find({},(error,data)=>{
            result.data = data;
            res.send(result);
    }).where({$or:[{"name": confident}]}).skip((currentPage-1)*pageSize).limit(pageSize);
    //对结果默认排序

})
//分页查询列表：
app.all('/api/studentList',(req,res,next)=>{
    console.log(req.query)
    // console.log(req.params)
    result= {
        data:[],
        total:''
    };
    // var total;
    //总记录数：
    var query =  Student.find({});
    query.count({},function(err, count){
        if(err){
            res.json(err)
        }else{
            result.total = count;
            console.log("count的值是：",result);
        }
    });
    //第几页的数据：
    pageSize = parseInt(req.query.pageSize);
    currentPage = parseInt(req.query.currentPage);
    console.log("页码shishi：");
    console.log(pageSize+"   "+currentPage);
     Student.find({},(error,data)=>{
         result.data = data;
         res.send(result);
    }).skip((currentPage-1)*pageSize).limit(pageSize);//对结果默认排序

});


//数据库相关
/*
mongoose.connect('mongodb://localhost:27017/studentm',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
})
*/

/*
const Student = mongoose.model('Student',new mongoose.Schema({
    snumber:{type:String},
    class:{type:String},
    name:{type:String},
    sex:{type:String},
    clan:{type:String},
    javalan:{type:String},
    dblan:{type:String},
}))

*/


app.listen(3001,()=>{
    console.log('http://localhost:3001/')
})
