import Vue from 'vue';
require('../css/my.less');
//(function(){//require('../css/my.less');
var works = {
    "company_info": {
        "begin_date": "2016-07-11",
        "end_date": "至今",
        "title": "用友网络科技股份有限公司",
        "memo": "产品名称：友人才。是以员工服务、共享服务为核心理念的SaaS HR，我入职之后主要负责核心人力部分，包括组织管理、员工中心、员工假勤"
    },
    "experience": [{
        "title": "人力资源核心人力",
        "memo": `使用基于流的gulp构建源代码到产出代码，按照不同文件类型进行编译并压缩输出；
        使用RequireJs框架加载各类模块文件；
        使用babel支持ES6语法编译并压缩；
        使用mock-server模拟REST请求，可以在不依赖后端服务的情况下，本地前端自己起一个服务，使用假数据渲染模板并实现请求路由映射；
        使用koa2实现前后端分离，模拟服务；
        使用Knockout库实现双向绑定即MVVM模式`,
        "text": "主要工作是实现组织管理中的职级、职务和职位，员工假勤的考勤日报、月报、休假类型、假勤档案、签到数据、班次定义、考勤周期、员工排班、员工加班等；使用UEditor实现知识库；还有流程相关的业务"
    }, {
        "title": "PC端——企业海报模板",
        "memo": `使用Angular框架实现海报模板的"所见即所得"`,
        "text": "主要工作是实现海报列表，海报详情。可以在详情页直接编辑，预览，上下页移动、翻页、隐藏，替换背景图片等，发布之后可以复制链接在手机端浏览。"
    }, {
        "title": "移动端——人员信息和组织查询",
        "memo": `使用webpack打包模块;使用mock-server模拟服务
        使用React框架和Ant Design实现模板渲染和功能交互，
        `,
        "text": "主要工作是查询员工的我的团队，查询团队中人员信息；查询我的组织以及下级组织或者上级组织以及组织内人员列表和人员详情，人员详情包括基本信息、学历、任职信息、工作记录、其他信息等"
    }, {
        "title": "微信小程序——员工入职",
        "memo": "使用微信web开发者工具根据小程序文档开发相关功能",
        "text": "该程序主要用于入职人员，接受offer之后，填写个人相关信息。实现增删改查"
    }, ]
};
var skills = [{
    "name": "HTML(5)",
    "ability": "熟练掌握HTML5语义化，合理使用标签，规范代码书写结构"
}, {
    "name": "CSS(3)、Less",
    "ability": "熟练掌握CSS、CSS3、LESS"
}, {
    "name": "JavaScript,JQuery, ES6;Knockout,React;Angular,Vue,RequireJS",
    "ability": `熟练掌握JavaScript、JQuery；基本掌握Knockout和React;了解和熟悉Angular、Vue和RequireJS。`
}, {
    "name": "webpack",
    "ability": "熟练掌握webpack常用用法，合并打包各类文件并配合其他框架搭建项目"
}, {
    "name": "Node,NPM",
    "ability": "了解node服务，熟悉npm常用命令"
}, {
    "name": "Git,shell",
    "ability": "熟练掌握Git操作，配合团队协作开发。掌握基本的shell命令"
}, {
    "name": "Java,MyBatis,MVC",
    "ability": "学过后台语言，简单的增删改查会写，SpringMVC接触过一些"
}, {
    "name": "常用的数据结构和算法",
    "ability": ""
}];
var dataEdu = {
    school: "西北农林科技大学",
    major: "电子商务",
    MCourses: "主修课程：C、C++、数据勾结、数据库、Java、网页设计与制作、算法分析与设计、计算机网络、数字逻辑、计算机组成原理、操作系统、网络安全、电子支付与安全等",
    somethingelse: "在大学期间，曾多次获得奖学金"
}

Vue.component('workbground', {
    template: `<div class="background">
            <p class="company-info">{{company_info.title}} <span>{{company_info.begin_date}}</span> - <span>{{company_info.end_date}}</span)</p>
            <div v-for="arr in dataWork" class="iterator">
            <p><label>名称<label>{{arr.title}}</p>
            <h5><label>技术实现<label>{{arr.memo}}</h5>
            <div class="long-text"<label>主要职责<label>>{{arr.text}}</div>
            </div></div>`,
    data: function() {
        return {
            dataWork: works.experience,
            company_info: works.company_info
        };
    }
});
Vue.component('skill', {
    template: `<div class="skill">
                    <div v-for="skill in dataSki">
                        <label>{{skill.name}}</label>
                        <span> {{skill.ability}}</span>
                    </div>
                </div>`,
    //template: '<div><div v-for="arr in dataEdu" class="iterator">{{arr.text}}</div></div>',
    data: function() {
        return {
            dataSki: skills
        };
    }
});
Vue.component('edubground', {
    template: `<div class="edu-background">
                <div>
                    {{edu.school}}
                </div>
                <div>
                    {{edu.major}}
                </div>
                <div>
                    {{edu.MCourses}}
                </div>
                <div>
                    {{edu.somethingelse}}
                </div>
            </div>`,
    data: function() {
        return {
            edu: dataEdu
        }
    }
});
var app = {};

app.works = new Vue({
    el: '#work',
});
app.skills = new Vue({
    el: '#skill',
})
app.edu = new Vue({
    el: '#edu'
});
//})()