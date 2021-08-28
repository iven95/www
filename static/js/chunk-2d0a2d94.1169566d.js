(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a2d94"],{"0053":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("br"),r("br"),r("br"),r("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"培训时间-start"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["trainingStartDate",{rules:[]}],expression:"['trainingStartDate', { rules: [] }]"}]})],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"培训时间-end"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["trainingEndDate",{rules:[]}],expression:"['trainingEndDate', { rules: [] }]"}]})],1),r("a-form-item",{attrs:{label:"培训时间"}},[r("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["trainingDates",{rules:[{required:!0,message:"请输入培训时间！"}],initialValue:e.defaultTrainingDates}],expression:"['trainingDates', { rules: [{ required: true, message: '请输入培训时间！' }],initialValue: defaultTrainingDates}]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.handleChangeTrainingDates}})],1),r("a-form-item",{attrs:{label:"培训地点"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["trainingAddress",{rules:[{required:!0,message:"请输入培训地点！"}]}],expression:"['trainingAddress', { rules: [{ required: true, message: '请输入培训地点！' }] }]"}]})],1),r("a-form-item",{attrs:{label:"培训主题"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["trainingSubject",{rules:[{required:!0,message:"请输入培训主题！"}]}],expression:"['trainingSubject', { rules: [{ required: true, message: '请输入培训主题！' }] }]"}]})],1),r("a-form-item",{attrs:{label:"姓名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入姓名！"}]}],expression:"['name', { rules: [{ required: true, message: '请输入姓名！' }] }]"}]})],1),r("a-form-item",{attrs:{label:"学员单位"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company",{rules:[{required:!0,message:"请输入学员单位！"}]}],expression:"['company', { rules: [{ required: true, message: '请输入学员单位！' }] }]"}]})],1),r("a-form-item",{attrs:{label:"职称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["position",{rules:[{required:!0,message:"请输入职称！"}]}],expression:"['position', { rules: [{ required: true, message: '请输入职称！' }] }]"}]})],1),r("a-form-item",{attrs:{label:"学历"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["education",{rules:[{required:!0,message:"请选择学历！"}]}],expression:"['education', { rules: [{ required: true, message: '请选择学历！' }] }]"}],attrs:{options:e.educationList}})],1),r("a-form-item",{attrs:{label:"专业方向"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["major",{rules:[{required:!0,message:"请输入专业方向！"}]}],expression:"['major', { rules: [{ required: true, message: '请输入专业方向！' }] }]"}]})],1),r("a-form-item",{attrs:{label:"工程问题"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["engineeringProblems",{rules:[]}],expression:"['engineeringProblems', { rules: [] }]"}],attrs:{placeholder:"工程问题","auto-size":""}})],1),r("a-form-item",{attrs:{label:"管理问题"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["managementProblem",{rules:[]}],expression:"['managementProblem', { rules: [] }]"}],attrs:{placeholder:"管理问题","auto-size":""}})],1),r("a-form-item",{attrs:{label:"所属专业领域"}},[r("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["professionalField",{rules:[{required:!0,message:"请选择所属专业领域"}]}],expression:"['professionalField', { rules: [{ required: true, message: '请选择所属专业领域' }] }]"}],attrs:{options:e.professionalFieldList}})],1),e.form.getFieldValue("professionalField")&&e.form.getFieldValue("professionalField").some((function(e){return"其他"===e}))?r("a-form-item",{attrs:{label:"所属专业领域-其他"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["professionalFieldOtherValue",{rules:[{required:!0,message:"请输入其他值，多个用“;”隔开！"}]}],expression:"['professionalFieldOtherValue', { rules: [{ required: true, message: '请输入其他值，多个用“;”隔开！' }] }]"}],attrs:{placeholder:"手动输入，多个用“;”隔开！"}})],1):e._e(),r("a-form-item",{attrs:{label:"创新方法概述"}},[r("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["innovationOverview",{rules:[{required:!0,message:"请选择创新方法概述"}]}],expression:"['innovationOverview', { rules: [{ required: true, message: '请选择创新方法概述' }] }]"}],attrs:{options:e.innovationOverviewList}})],1),e.form.getFieldValue("innovationOverview")&&e.form.getFieldValue("innovationOverview").some((function(e){return"其他"===e}))?r("a-form-item",{attrs:{label:"创新方法概述-其他"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["innovationOverviewOtherValue",{rules:[{required:!0,message:"请输入其他值，多个用“;”隔开！"}]}],expression:"['innovationOverviewOtherValue', { rules: [{ required: true, message: '请输入其他值，多个用“;”隔开！' }] }]"}],attrs:{placeholder:"手动输入，多个用“;”隔开！"}})],1):e._e(),r("a-form-item",{attrs:{label:"多方法融合"}},[r("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["multiFusion",{rules:[],initialValue:!1,valuePropName:"checked"}],expression:"['multiFusion', { rules: [],initialValue: false,valuePropName:'checked' }]"}]})],1),e.form.getFieldValue("multiFusion")?r("a-form-item",{attrs:{label:"多方法融合选项"}},[r("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["multiFusionValue",{rules:[{required:!0,message:"请选择多方法融合选项"}]}],expression:"['multiFusionValue', { rules: [{ required: true, message: '请选择多方法融合选项' }] }]"}],attrs:{options:e.multiFusionValueList}})],1):e._e(),e.form.getFieldValue("multiFusionValue")&&e.form.getFieldValue("multiFusionValue").some((function(e){return"其他"===e}))?r("a-form-item",{attrs:{label:"多方法融合选项-其他"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["multiFusionOtherValue",{rules:[{required:!0,message:"请输入其他值，多个用“;”隔开！"}]}],expression:"['multiFusionOtherValue', { rules: [{ required: true, message: '请输入其他值，多个用“;”隔开！' }] }]"}],attrs:{placeholder:"手动输入，多个用“;”隔开！"}})],1):e._e(),r("a-form-item",{attrs:{label:"方案（可以不只1个）"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["programme",{rules:[]}],expression:"['programme', { rules: [] }]"}],attrs:{placeholder:"方案（可以不只1个）","auto-size":""}})],1),r("a-form-item",{attrs:{label:"论文"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["paper",{rules:[]}],expression:"['paper', { rules: [] }]"}],attrs:{placeholder:"论文","auto-size":""}})],1),r("a-form-item",{attrs:{label:"专利"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["patent",{rules:[]}],expression:"['patent', { rules: [] }]"}],attrs:{placeholder:"专利","auto-size":""}})],1),r("a-form-item",{attrs:{label:"标准"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["standard",{rules:[]}],expression:"['standard', { rules: [] }]"}],attrs:{placeholder:"标准","auto-size":""}})],1),r("a-form-item",{attrs:{label:"报告"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["report",{rules:[]}],expression:"['report', { rules: [] }]"}],attrs:{placeholder:"报告","auto-size":""}})],1),r("a-form-item",{attrs:{label:"节省成本"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["costSavings",{rules:[]}],expression:"['costSavings', { rules: [] }]"}],attrs:{placeholder:"节省成本","auto-size":""}})],1),r("a-form-item",{attrs:{label:"营利增长"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["profitGrowth",{rules:[]}],expression:"['profitGrowth', { rules: [] }]"}],attrs:{placeholder:"营利增长","auto-size":""}})],1),r("a-form-item",{attrs:{label:"培养人才"}},[r("a-input",{attrs:{"addon-before":"博士培养","addon-after":"人"},on:{change:e.handleChangeTrainingTalentsValues},model:{value:e.trainingTalentsValue1,callback:function(a){e.trainingTalentsValue1=a},expression:"trainingTalentsValue1"}}),r("a-input",{attrs:{"addon-before":"硕士培养","addon-after":"人"},on:{change:e.handleChangeTrainingTalentsValues},model:{value:e.trainingTalentsValue2,callback:function(a){e.trainingTalentsValue2=a},expression:"trainingTalentsValue2"}}),r("a-input",{attrs:{"addon-before":"高级职称","addon-after":"人"},on:{change:e.handleChangeTrainingTalentsValues},model:{value:e.trainingTalentsValue3,callback:function(a){e.trainingTalentsValue3=a},expression:"trainingTalentsValue3"}}),r("a-input",{attrs:{"addon-before":"其他高技能人才","addon-after":"人"},on:{change:e.handleChangeTrainingTalentsValues},model:{value:e.trainingTalentsValue4,callback:function(a){e.trainingTalentsValue4=a},expression:"trainingTalentsValue4"}}),r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["trainingTalents",{rules:[]}],expression:"['trainingTalents', { rules: [] }]"}],attrs:{"auto-size":"",disabled:!0}})],1),r("a-form-item",{attrs:{label:"关联产业效益"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["industrialBenefits",{rules:[]}],expression:"['industrialBenefits', { rules: [] }]"}],attrs:{placeholder:"关联产业效益","auto-size":""}})],1),r("a-form-item",{attrs:{label:"社会进步"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["socialProgress",{rules:[]}],expression:"['socialProgress', { rules: [] }]"}],attrs:{placeholder:"社会进步","auto-size":""}})],1),r("a-form-item",{attrs:{label:"其他"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["other",{rules:[]}],expression:"['other', { rules: [] }]"}],attrs:{placeholder:"其他","auto-size":""}})],1),r("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[r("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v(" "+e._s(e.raiseStatus?"重新提交":"提交")+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:this.raiseStatus,expression:"this.raiseStatus"}],staticStyle:{color:"aqua","margin-left":"50px"}},[e._v(" 你已提交资料，可以重新提交")]),r("br"),r("span",{staticStyle:{color:"#a0d911","margin-left":"50px"}},[e._v("Version: "+e._s(e.version1))])],1)],1),r("br"),r("br"),r("br")],1)},i=[],s=(r("a15b"),r("5530")),n=r("2f62"),o=r("c1df"),l=r.n(o),u={data:function(){return{loading:!1,yearList:[],educationList:["博士","硕士","本科","专科","高中","初中","小学"],multiFusionValueList:["试错法","六顶思考帽法","头脑风暴法","六西格玛","TRIZ法","可拓学","其他"],professionalFieldList:["材料","新能源","机械装备","人工智能","计算机与互联网","安全环保","化工","食品","电子通信","其他"],innovationOverviewList:["创新方法概述","工程问题解析","因果分析","人工智能","功能定义与模型建立","系统裁剪","资源分析","技术矛盾","发明原理","物理矛盾与分离原理","其他"],formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),defaultTrainingStartDate:l()().add(-1,"y"),defaultTrainingEndDate:l()(),trainingTalentsValue1:0,trainingTalentsValue2:0,trainingTalentsValue3:0,trainingTalentsValue4:0}},computed:Object(s["a"])(Object(s["a"])({},Object(n["e"])("b",["raiseStatus","body","data"])),{},{defaultTrainingDates:function(){return[this.defaultTrainingStartDate,this.defaultTrainingEndDate]},version1:function(){return"202108280933"}}),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(n["b"])("b",["saveWorkEffectiveness"])),Object(n["d"])("b",["setRaiseStatus","setBody","setData"])),{},{handleChangeTrainingTalentsValues:function(){var e="";this.trainingTalentsValue1&&(e+="博士培养".concat(this.trainingTalentsValue1,"人;")),this.trainingTalentsValue2&&(e+="硕士培养".concat(this.trainingTalentsValue2,"人;")),this.trainingTalentsValue3&&(e+="高级职称".concat(this.trainingTalentsValue3,"人;")),this.trainingTalentsValue4&&(e+="其他高技能人才".concat(this.trainingTalentsValue4,"人;")),this.form.setFieldsValue({trainingTalents:e})},handleChangeTrainingDates:function(e){this.form.setFieldsValue({trainingStartDate:e[0].format("YYYY-MM-DD"),trainingEndDate:e[1].format("YYYY-MM-DD")})},handleSubmit:function(e){var a=this;this.form.validateFieldsAndScroll((function(e,r){e||(a.loading=!0,a.setBody(r),a.$nextTick((function(){a.saveWorkEffectiveness(Object.assign({},r,{id:a.data.id,professionalField:r.professionalField?r.professionalField.join(","):"",innovationOverview:r.innovationOverview?r.innovationOverview.join(","):"",multiFusionValue:r.multiFusionValue?r.multiFusionValue.join(","):""})).then((function(e){a.setData(e),a.setRaiseStatus(!0),a.loading=!1}))})))}))}}),created:function(){var e=this;this.$nextTick((function(){e.form.setFieldsValue(Object.assign({},{trainingDates:e.defaultTrainingDates,trainingStartDate:e.defaultTrainingDates[0].format("YYYY-MM-DD"),trainingEndDate:e.defaultTrainingDates[1].format("YYYY-MM-DD")}))}))}},d=u,m=r("0c7c"),c=Object(m["a"])(d,t,i,!1,null,"4b0ae9e8",null),v=c.exports;a["default"]=v}}]);