
(function(){
    var skills = [
        {
            "begin_date": "2016-02-18",
            "end_date": "2016-04-28",
            "title": "用友网络科技股份有限公司",
            "memo": "实习生",
            "text": "主要工作是"
        },{
            "begin_date": "2016-07-11",
            "end_date": "至今",
            "title": "用友网络科技股份有限公司",
            "memo": "软件开发",
            "text": "主要工作是"
        }
    ];
    Vue.component('simple-counter', {
      template: '<div v-for="arr in dataEdu" class="iterator">
            <h2 :class="classes">{{arr.begin_date}}-{{arr.end_date}}</h2>
            <p>{{arr.title}}</p>
            <h5>{{arr.memo}}</h5>
            <div class="long-text">{{arr.text}}</div>
        </div>',
     
        data: function () {
            return skills
        }
    })

    var app = {};
    
    app.skills = new Vue({
      el: '#bored',
      
    })
})()