
(function(){
    var works = {
        "company_info": {
            "begin_date": "2016-07-11",
            "end_date": "至今",
            "title": "用友网络科技股份有限公司"
        },
        "experience":[
            {
                "title": "人力资源核心人力",
                "memo": "软件开发",
                "text": "主要工作是"
            }, {
                "title": "移动端人员信息和组织查询",
                "memo": "软件开发",
                "text": "主要工作是"
            }, {
                "title": "员工入职微信小程序",
                "memo": "软件开发",
                "text": "主要工作是"
            }, 
        ]
    };
    var skills = [
        {
            "name": "HTML(5)",
            "ability": "熟练掌握HTML5语义化，规范代码"
        },{
            "name": "CSS(3)",
            "ability": "熟练掌握HTML5语义化，规范代码"
        }
    ];
    Vue.component('workbground', {
      template: `<div class="background">
            <p class="company-info">{{company_info.title}} (<span>{{company_info.begin_date}}</span> - <span>{{company_info.end_date}}</span)</p>
            <div v-for="arr in dataWork" class="iterator">
            <p>{{arr.title}}</p>
            <h5>{{arr.memo}}</h5>
            <div class="long-text">{{arr.text}}</div>
            </div></div>`,
        data: function () {
            return {
                dataWork: works.experience,
                company_info: works.company_info
            } ;
        }
    });
    Vue.component('skill', {
      template: `<div>
                    <div v-for="skill in dataSki">
                    <label>{{skill.name}}</label>
                    <span> {{skill.ability}}</span>
                    </div>
                </div>`,
      //template: '<div><div v-for="arr in dataEdu" class="iterator">{{arr.text}}</div></div>',
        data: function () {
            return {
                dataSki: skills
            } ;
        }
    })

    var app = {};
    
    app.skills = new Vue({
      el: '#work',
    });
    app.skills = new Vue({
      el: '#skill',
    })
})()