<template>
  <el-container>
    <transition name="el-zoom-in-top" >
    <!-- 编辑学生信息框(以对话框的形式展现)的显示与否 -->
    <el-dialog :title="dialogTitle"  :visible.sync="dialogFormVisible" size="mini" v-show="dialogFormVisible" class="transition-box">
    <el-form :inline="true" :model="addstudent" class="demo-form-inline" size="mini" :rules="rules" >
      <!--   分割框的线  -->
       <el-divider content-position="center">学生的基本信息:</el-divider>

       <el-form-item label="学号:" prop="snumber">
        <el-input v-model="addstudent.snumber" placeholder="最好是三位数"></el-input>
      </el-form-item>

      <el-form-item label="班级:">
        <el-input v-model="addstudent.class" placeholder="软件工程3班"></el-input>
      </el-form-item>

      <el-form-item label="姓名:" prop="name">
        <el-input v-model="addstudent.name" placeholder="你的名字"></el-input>
      </el-form-item>

      <el-form-item label="性别:" >
        <el-radio-group v-model="addstudent.sex" style="margin-left:40px;margin-right:40px;">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
    <!-- 三个lan是三科成绩数据-->
      <el-divider content-position="left">各科成绩：</el-divider>
        <el-form-item label="c语言:">
        <el-input-number controls-position="right" v-model="addstudent.clan" placeholder="1-100"  :max="100" :min="0" style="width:80px"></el-input-number>
      </el-form-item>

      <el-form-item label="java设计:">
        <el-input  v-model="addstudent.javalan" placeholder="1-100" :max="100" :min="0" style="width:80px" ></el-input>
      </el-form-item>

      <el-form-item label="数据库:">
        <el-input v-model="addstudent.dblan" placeholder="1-100" :max="100" :min="0" style="width:80px"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="close()" size="mini">取消</el-button>
      <el-button type="success"  @click="addAndUpdateStudent()" size="mini">确定</el-button>
    </div>

  </el-dialog>
 </transition>
    <!--  页面的大标题  -->
    <el-header><i class="el-icon-edit" @click="fetch()">个人学生成绩管理系统</i></el-header>
    <!--  页面form表单 :model 主要用表单验证的，也就是配合el-form的rules和el-form-item的prop来使用的。-->
    <el-form :inline="true" :model="xstudent" class="demo-form-inline" size="mini" ref="xstudent" >
      <!--  传入一个学号的规则制定 -->
      <!--  message是不满足规则的提示信息 -->
      <el-form-item label="学号" prop="snumber"
          :rules="[
            {min:3,max:10,message:'请输入3-10位数字', trigger: 'blur'}
          ]">
        <el-input v-model="xstudent.snumber" placeholder="输入准确学号最少三位" ></el-input>
      </el-form-item>

      <el-form-item label="姓名"  prop="name"
          :rules="[
           {min:0,max:4,message:'长度不在有效范围内', trigger: 'blur'},
         ]">
        <el-input v-model="xstudent.name" placeholder="模糊查询" ></el-input>
      </el-form-item>
      <!--  查询按钮  -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit('xstudent')">查询</el-button>
      </el-form-item>
      <!--  录入按钮  -->
      <el-form-item>
        <el-button type="success" @click="add()">录入</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格主体显示部分   -->
    <el-main>
      <!-- 这里不要把所有的列的width都设置，要不然会出现空白的列，是由组件自动填充的 -->
           <el-table :data="studentList" border style="width: 100%;">
            <!--   column列  prop="snumber" 字段名   fixed列是否固定在左侧或者右侧，true 表示固定在左侧-->
            <el-table-column
              fixed
              prop="snumber"
              label="学号"
              width="170"
              style="text-align:center;justify-content: center;">
            </el-table-column>

            <el-table-column
              prop="class"
              label="班级">
            </el-table-column>

            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>

            <el-table-column
              prop="sex"
              label="性别">
            </el-table-column>
          <!-- 三科成绩 -->
            <el-table-column
              prop="clan"
              label="c语言">
            </el-table-column>

            <el-table-column
              prop="javalan"
              label="java设计">
            </el-table-column>

            <el-table-column
              prop="dblan"
              label="数据库">
            </el-table-column>
            <!--  最后边编辑与删除按钮 -->
            <el-table-column
              fixed="right"
              label="操作">
            <!--  ？？？  -->
              <template slot-scope="scope">
                <el-button @click="edit(scope.row._id)" type="primary" size="mini">编辑</el-button>
                <el-button @click="remove(scope.row._id)" type="danger" size="mini">删除</el-button>
              </template>
            </el-table-column>

          </el-table>
          <!-- 页脚的页码： -->
          <!-- <div float="left" style="font-size:12px;color:info">一共有{{page.total}}条记录</div> -->
          <div class="block" style='text-align:right;margin-top:10px'>
            <el-pagination
              @current-change="currentChange"
              layout="prev, pager, next"
              :page-size="page.size"
              :current-page="page.current"
              :total="page.total">
            </el-pagination>
          </div>
    </el-main>

  </el-container>
</template>

<script>
export default {
    data() {
      return {
          /*
          参数说明:学生列表,单个学生信息(学号和姓名)，对话框标题，对话框是否显示
                  添加的学生对象
          */
          studentList:[],
          xstudent:{snumber:'', name:''},
          dialogTitle:'',
          dialogFormVisible: false,
          addstudent:{},
          formLabelWidth: '120px',
          //分页：
          page:{
          current:1,
          size:5,
          total:0
          },

        rules: {
            snumber: [
              {required: true, message: '学号不可为空', trigger: 'blur'},
            // {type:'number',message:'',trigger:'blur'}
              { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
          name: [
              {required: true, message: '姓名不可为空', trigger: 'blur'}
            ]
        }
      }
    },
    created(){
        // this.fetch();
        this.pageInation();
    },
    methods: {
      //点击回到第一页
      fetch(){
          this.xstudent.name = '';
          this.page.current = 1;
          this.pageInation();
      },
      //录入学生：
      add(){
        //点击录入弹出对话框，仅仅改变标题
        this.dialogTitle = "录入学生信息";
        this.dialogFormVisible = true;
      },
      addStudent(){
        //直接扔一个对象过去 data:this.addstudent
        this.$http.post('students',this.addstudent).then(()=>{
          //清空录入框信息：
          this.addstudent = {};
          //隐藏录入框：
          this.dialogFormVisible = false;
          this.$message({
              message: '录入成功',
              type: 'success'
            });
            this.page.current = 1;
            this.pageInation();
        })
      },
      //删除学生：
      remove(id){
          //${id}模板字符串
          this.$http.delete(`students/${id}`).then(()=>{
             this.$message({
              message: '删除学生信息成功',
              type: 'success'
            });
            // this.page.current = 1;
              this.pageInation();
          })
      },
      //修改学生：
      edit(id){
          this.id = id;
          this.dialogTitle = "修改学生信息";
          this.$http.get(`update/${id}`).then(res=>{
              this.addstudent = res.data
              this.dialogFormVisible = true;
          });
      },
      ConfirmUpdateStudent(id){
        this.$http.put(`confirmUpdate/${id}`,this.addstudent).then(()=>{
           this.dialogFormVisible = false;
            this.$message({
              message: '更新成功',
              type: 'success'
            });
            this.addstudent = {};
            // this.page.current = 1;
              this.pageInation();
        })
      },
      //录入和修改：
      addAndUpdateStudent(){
        this.dialogFormVisible = false;
          if (this.dialogTitle == "录入学生信息") {
              this.addStudent();
          } else {
              this.ConfirmUpdateStudent(this.id);
          }
      },
      //关闭模态框：
      close(){
        if(this.dialogTitle == "修改学生信息"){
          this.addstudent = {};
        }
        this.dialogFormVisible = false;
      },
      //如何查询学生
      onSubmit(ruleForm){
        if(this.xstudent.snumber!='' && this.xstudent.name ==''){
          this.$refs[ruleForm].validate((valid) => {
              if(valid) {
                //根据学号精确查询：
                this.$http.get(`findBySnumber/${this.xstudent.snumber}`).then(res=>{
                  console.log('学号查询')
                  this.studentList = res.data;
                  this.xstudent.snumber = '';
                  this.page.total = 0;
                })
              } else {
                  this.message('请输入3位数字学号','error');
                  return false;
              }
         });
        }else if(this.xstudent.snumber == '' && this.xstudent.name !=''){
          this.$refs[ruleForm].validate((valid) => {
              if(valid) {
                 console.log('姓名查询')
                  //根据姓名模糊查询：？之后的是params参数
                    this.$http.get('findByName?currentPage='+this.page.current+'&pageSize='+this.page.size+'&names='+this.xstudent.name).then(res=>{

                      console.log('姓名模糊分页查询结果：')
                      console.log(res.data)
                      this.studentList = res.data.data;
                      this.page.total = res.data.total;

                  })
              } else {
                  this.message('不要输入太奇葩的字符','warning');
                  return false;
              }
          });
        }else{
          if(this.xstudent.snumber == '' && this.xstudent.name ==''){
              this.message('请输入有效字符','error')
              return;
          }
        }
      },
      //消息通知框：
      message(messages,mtype){
        this.$message({
              message: messages,
              type: mtype
        });
      },
      //界面初始化
      pageInation() {
        let that = this;
        //每次点击更改页码值  ？之后的是params参数
        this.$http.get('studentList?currentPage='+that.page.current+'&pageSize='+that.page.size).then(res=>{

            if(res.data.data == null || res.data.data.length == 0){
               //除第一页的其他某页全都删除了的情况：(手动一个个删除某一页时候，会造成空页的显示错误)
               that.page.current =  that.page.current - 1;
               that.pageInation();
            }else {
              // console.log(res)
              that.studentList = res.data.data;
              // console.log(res.data.total)
              that.page.total = res.data.total;
            }

        });
      },
      //姓名查询及其之后 的翻页问题
      currentChange(current){
        console.log(current+'页')
        this.page.current = current;
        //再进行姓名模糊查询的分页：
        if(this.xstudent.name  != ''){
          this.$http.get('findByName?currentPage='+this.page.current+'&pageSize='+this.page.size+'&names='+this.xstudent.name).then(res=>{
                      console.log('姓名模糊分页查询结果：？')
                      console.log(res.data)
                      this.studentList = res.data.data;
                      this.page.total = res.data.total;
          })
          return;
        }
        //刷新页面
        this.pageInation();
      }
    }
}
</script>
<style>
  body{
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .el-header, .el-footer {
    background-color: #f0f9eb;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-bottom: 10px;
  }
  .el-form{
    text-align: center;
    justify-content: center;
  }

</style>