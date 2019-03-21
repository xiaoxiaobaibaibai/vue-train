new Vue({
    el: '#vue-app',
    data: {
        // name: 'xiaoBai',
        // job: 'FEer',
        // website:"https://github.com",
        // websiteTag:"<a href='https://github.com'>GayHub</a>"
        age: 22,
        x: 0,
        y: 0
    },
    methods: {
        // greet: function(time){
        //     return 'Good ' + time + ', ' + this.name;
        add: function(inc){
            this.age += inc;
            
        },
        subtract: function(dec){
            this.age -= dec;

        },

        updateXY: function(event){
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;

        },
        stopMoving: function(event){
            event.stopPropagation();
            
        },
        logName: function(){
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        }
        }
    }
);