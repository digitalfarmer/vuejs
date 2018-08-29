var pg = new Vue({
    el:'#page',
    data:{
        message:'lobotijo@gmail.com'
    }
});

const app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'time saat ini' + new Date().toLocaleString()
    }
  });