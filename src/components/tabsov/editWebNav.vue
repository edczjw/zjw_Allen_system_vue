<template>
  <div class="edit_wrap"> 
      <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="网站名称" prop="webName">
          <el-input v-model="ruleForm.webName"></el-input>
        </el-form-item>
        <el-form-item label="网站地址" prop="webUrl">
          <el-input v-model="ruleForm.webUrl"><template slot="prepend">Http://</template></el-input>
        </el-form-item>
        <el-form-item label="网站LOGO" prop="webLogo"> <br>
          <input type="file" accept="image/*" name="file1" @change="upload"> 
          <div class="webLogo_wrapper"><img :src="ruleForm.webLogo" alt=""></div>
        </el-form-item>
        <el-form-item label="网站类型" prop="webType"> 
          <el-select v-model="ruleForm.webType" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="录入时间" prop="webDate"> 
          <el-date-picker
            v-model="ruleForm.webDate"
            type="date" 
            format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="网站描述" prop="webDesc">
          <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="ruleForm.webDesc"
          maxlength="230"
          show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
  export default {
    data() {  
      return {
        options: [{
          value: '1',
          label: '前端技术框架类'
        }, {
          value: '2',
          label: 'UI框架类'
        }, {
          value: '3',
          label: '其他类'
        }],
        ruleForm: {
          webName: '',
          webUrl: '',
          webLogo: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          webType: null,
          webDate: '',
          webDesc: ''
        }, 
      };
    },
    methods: {
      //上传图片 
      upload(t) { 
        var _that = this
        let s = t.target.files || t.dataTransfer.files;
        let filereader = new FileReader; 
        filereader.readAsDataURL(s[0]);                 //读取文件转成base64
        filereader.onloadend = function(e){             //无论读取成功还是失败都会执行此方法
          _that.ruleForm.webLogo = e.target.result ;
        } 
      },
      //提交
      async submitForm() {
          const res = await this.$httpAxios.editWebApi(this.ruleForm)
          if(res.code != '0000'){
              alert('出现异常')
          }else{
            
          }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
    .edit_wrap{
        width: 100%;
        height: 100%; 
        display: table; 
        padding: 30px;
        .el-form{ 
          display: table-cell;
          vertical-align: middle; 
        }
        .webLogo_wrapper{
          border: 1px dashed rgb(190, 188, 188);
          width: 100px;
          height: 100px;
          border-radius:8px;
          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
    } 
</style>