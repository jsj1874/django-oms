webpackJsonp([45],{"4PmZ":function(e,t,r){var a=r("DqrR");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("57baff90",a,!0)},DqrR:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".addticket{margin:50px;width:80%}",""])},WpqJ:function(e,t,r){"use strict";function a(e){r("4PmZ")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("BO1k"),n=r.n(o),l=r("EMlb"),s=r("nSkA"),i=r("QmSG"),u=r("0xDb"),c=r("vMJZ"),p={components:{},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{name:"",type:"",content:"",create_user:localStorage.getItem("username"),pid:""},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],type:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},uploadurl:i.uploadurl,types:[],img_file:{},fileList:[],count:0,enclosureData:[],enclosureForm:{project:"",create_user:localStorage.getItem("username"),file:""}}},created:function(){this.getTypes()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.pid="dm"+Object(u.a)(),Object(l.u)(t.ruleForm).then(function(e){'"Created"'===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,a=!1,o=void 0;try{for(var i,p=n()(t.fileList);!(r=(i=p.next()).done);r=!0){var m=i.value,d=new FormData;d.append("username",t.enclosureForm.create_user),d.append("file",m),d.append("create_time",Object(u.a)(m.uid)),d.append("type",m.type),d.append("archive",t.route_path[1]),Object(s.i)(d).then(function(r){t.enclosureForm.file=r.data.filepath,t.enclosureForm.project=e.data.id,Object(l.t)(t.enclosureForm)})}}catch(e){a=!0,o=e}finally{try{!r&&p.return&&p.return()}finally{if(a)throw o}}var f={groups__name:"OMS_Dev_Manager"};Object(c.f)(f).then(function(e){var r=e.data,a=!0,o=!1,l=void 0;try{for(var i,u=n()(r);!(a=(i=u.next()).done);a=!0){var c=i.value,p={action_user:c.username,title:"【新需求】"+t.ruleForm.name,message:"操作人: "+t.ruleForm.create_user+"\n地址: http://"+window.location.host+"/#/projects/viewdemand/"+e.data.id};Object(s.h)(p)}}catch(e){o=!0,l=e}finally{try{!a&&u.return&&u.return()}finally{if(o)throw l}}}),t.$router.push("/projects/demands")})})},resetForm:function(e){this.$refs[e].resetFields()},getTypes:function(){var e=this;Object(l.n)().then(function(t){e.types=t.data})},imgAdd:function(e,t){var r=this.$refs.md,a=new FormData;a.append("username",this.ruleForm.create_user),a.append("file",t),a.append("create_time",Object(u.a)(t.lastModified)),a.append("type",t.type),a.append("archive",this.route_path[1]),Object(s.i)(a).then(function(t){r.$imglst2Url([[e,t.data.file]])})},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1}}},m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.types,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"附件"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList}},[r("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:"",disabled:e.count>4},slot:"trigger"},[e._v("\n            上传\n          ")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过10m，"),r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传5个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},d=[],f={render:m,staticRenderFns:d},h=f,v=r("VU/8"),_=a,g=v(p,h,!1,_,null,null);t.default=g.exports}});