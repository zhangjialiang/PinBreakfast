/**
 * Created by baidu on 15/7/24.
 */
$(function(){
    var data = [
        {
            'id':0,
            'name':'鼠儿果',
            'tel':'13043280737',
            'address':'纳贤路701号',
            'is_add':true
        },
        {
            'id':1,
            'name':'鼠儿果',
            'tel':'13043280737',
            'address':'纳贤路701号',
            'is_add':false,
            'breakfast_list':[{
               'name':'面包1',
                'num':2,
                'price':11
                },
                {
                'name':'牛奶2',
                'num':3,
                'price':21
                },
                {
                    'name':'包子3',
                    'num':4,
                    'price':24
                }],
            'date':2,
            'time':3,
            'day':'1/7',
            'total':56,
            'jump':0
        },{
            'id':2,
            'name':'鼠儿果',
            'tel':'13043280737',
            'address':'纳贤路701号',
            'is_add':false,
            'breakfast_list':[{
                'name':'面包1',
                'num':2,
                'price':11
            },
                {
                    'name':'牛奶2',
                    'num':3,
                    'price':21
                },
                {
                    'name':'包子4',
                    'num':1,
                    'price':7
                }],
            'date':2,
            'time':3,
            'day':'1/7',
            'total':39,
            'jump':1
        }

    ];

    var template = $.templates("#theTmpl");

    var htmlOutput = template.render(data[getConfig()]);

    $("#result").html(htmlOutput);
    loadingAddress(data[getConfig()].is_add);
    $("button").on('click',function(){
        loadingPay(data);
    })

});
function getConfig(){
    var url = location.href;
    if(url.split('#').length != 1)
        return url.split('#')[1].split('=')[1];
    else
        return 0;
}
function loadingAddress(flag){
    if(flag){
        $(".address")[0].style.display = 'none';
        setTimeout(function(){
            $(".loading")[0].style.display = 'none';
            $(".loading-text").text("定位中...");
            $(".address")[0].style.display = 'block';
        },1000);
    }else{
        $(".loading")[0].style.display = 'none';
    }
}
function loadingPay(data){
    $(".loading-text").text("等待支付...");
    $(".loading")[0].style.display = 'block';
    setTimeout(function(){
        window.location.href = '../user/web/profile.html#config='+data[getConfig()].jump;
        $(".loading")[0].style.display = 'none';
    },1000)
}