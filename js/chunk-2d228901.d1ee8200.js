(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.user.image,width:"200",height:"200"}}):e._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")])])])},s=[],n=a("1da1"),i=a("5530"),u=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("b0c0"),a("d9e2"),a("2f62")),c=a("2fa3"),o=a("4cce"),m={data:function(){return{user:{name:"",image:"",id:-1},isProcessing:!1}},created:function(){this.setUser()},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),methods:{setUser:function(){this.user=this.currentUser},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.user.image="";else{var a=window.URL.createObjectURL(t[0]);this.user.image=a}},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s,n,i,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.user.name){a.next=3;break}return c["a"].fire({type:"warning",title:"您尚未填寫姓名"}),a.abrupt("return");case 3:return r=e.target,s=new FormData(r),a.prev=5,t.isProcessing=!0,a.next=9,o["a"].update({userId:t.user.id,formData:s});case 9:if(n=a.sent,i=n.data,u=n.statusText,"OK"===u&&"success"===i.status){a.next=14;break}throw new Error(u);case 14:t.$router.push({name:"user",params:{id:t.user.id}}),a.next=21;break;case 17:a.prev=17,a.t0=a["catch"](5),t.isProcessing=!1,c["a"].fire({type:"error",title:"無法更新使用者資料，請稍後再試"});case 21:case"end":return a.stop()}}),a,null,[[5,17]])})))()}}},l=m,d=a("2877"),p=Object(d["a"])(l,r,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d228901.d1ee8200.js.map