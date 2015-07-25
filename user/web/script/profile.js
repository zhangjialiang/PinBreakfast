/*
 * Copyright (C) 2015 Baidu, Inc. All Rights Reserved.
 */

(function () {
    var model = [{
        user: {
            name: "鼠儿果",
            avatar: "img/user.jpg",
            balance: 0,
            success: 5,
            left: 2
        },
        next: {
            time: "明天早晨7点",
            to: "上海市浦东新区鹤沙航城某幢楼某个房间",
            price: 5,
            items: [
                {
                    name: "面包1", id: 1, price: 11, amount: 2, image: "img/food.jpg"
                },
                {
                    name: "牛奶2", id: 1, price: 21, amount: 3, image: "img/food.jpg"
                },
                {
                    name: "包子3", id: 1, price: 24, amount: 4, image: "img/food.jpg"
                }
            ],
            extra: 2
        },
        history: [
            {
                time: "今天早晨7点",
                to: "上海市浦东新区鹤沙航城某幢楼某个房间",
                price: 5,
                items: [
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    }
                ],
                extra: 2
            },
            {
                time: "昨天天早晨7点",
                to: "上海市浦东新区鹤沙航城某幢楼某个房间",
                price: 5,
                items: [
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    }
                ],
                extra: 2
            }, {
                time: "前几天早晨7点",
                to: "上海市浦东新区鹤沙航城某幢楼某个房间",
                price: 5,
                items: [
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    }
                ],
                extra: 2
            }
        ],
        links: {changeNext: "../../order/createOrder.html#config=1"}
    },{
        user: {
            name: "鼠儿果",
            avatar: "img/user.jpg",
            balance: 0,
            success: 5,
            left: 2
        },
        next: {
            time: "明天早晨7点",
            to: "上海市浦东新区鹤沙航城某幢楼某个房间",
            price: 5,
            items: [
                {
                    name: "面包1", id: 1, price: 11, amount: 2, image: "img/food.jpg"
                },
                {
                    name: "牛奶2", id: 1, price: 21, amount: 3, image: "img/food.jpg"
                },
                {
                    name: "包子4", id: 1, price: 7, amount: 1, image: "img/food.jpg"
                }
            ],
            extra: 2
        },
        history: [
            {
                time: "今天早晨7点",
                to: "上海市浦东新区鹤沙航城某幢楼某个房间",
                price: 5,
                items: [
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    }
                ],
                extra: 2
            },
            {
                time: "昨天天早晨7点",
                to: "上海市浦东新区鹤沙航城某幢楼某个房间",
                price: 5,
                items: [
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    }
                ],
                extra: 2
            }, {
                time: "前几天早晨7点",
                to: "上海市浦东新区鹤沙航城某幢楼某个房间",
                price: 5,
                items: [
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    },
                    {
                        name: "煎饼果子", id: 1, price: 0.5, amount: 2, image: "img/food.jpg"
                    }
                ],
                extra: 2
            }
        ],
        links: {changeNext: "../../order/createOrder.html#config=2"}
    }];
    $("#result").html($.templates("#tmpl").render(model[getConfig()]));
})();
function getConfig(){
    var url = location.href;
        return url.split('#')[1].split('=')[1];
}