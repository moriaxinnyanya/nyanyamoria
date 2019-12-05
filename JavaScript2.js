

schedule = [
{ 
    "1限": { subject: "数学", teacher: "佐藤", contents: [{ "連立方程式の解き方": "30分" }, { "円の面積の計算": "20分" }, { "円柱の計算": "40分" }] }
},

{
    "2限": { subject: "国語", teacher: "芥川", contents: [{ "梶井基次郎『檸檬』": "60分" }, { "夏目漱石『こころ』": "30分" }] }
},
{
    "3限": { subject: "体育", teacher: "田中", contents: [{ "バレーボール": "90分" } ] }
}



]

schedule = [
{
    subject: "数学", teacher: "佐藤", contents: [{ "連立方程式の解き方": "30分" }, { "円の面積の計算": "20分" }, { "円柱の計算": "40分" }] 
},

{
    subject: "国語", teacher: "芥川", contents: [{ "梶井基次郎『檸檬』": "60分" }, { "夏目漱石『こころ』": "30分" }] 
},
{
    subject: "体育", teacher: "田中", contents: [{ "バレーボール": "90分" }] 
}



]

classes = [
    {
        subject: "数学",
        teacher: "佐藤",
        contents: [
            {
                headline: "連立方程式の解き方",
                time: 30
            },
            {
                headline: "円の面積の計算",
                time: 20
            },
            {
                headline: "円柱の計算",
                time: 40
            },
        ]
    },
    {
        subject: "国語",
        teacher: "芥川",
        contents: [
            {
                headline: "梶井基次郎『檸檬』",
                time: 60
            },
            {
                headline: "夏目漱石『こころ』",
                time: 30
            }
        ]
    },
    {
        subject: "体育",
        teacher: "田中",
        contents: [
            {
                headline: "バレーボール",
                time: 90
            }
        ]
    }
]



a = 0
for (var i = 0; i < 3; i++) {
    a = a + i
    console.log(classes[i])
}

classes[0].teacher

classes[2][0]

console.log(classes[0].teacher)


for (var i = 0; i < 3; i++) {
    console.log(classes[i].teacher)
}
for (var i = 0; i < 3; i++) {
    console.log(classes[i].contents[0].headline)
}

for (var i = 0; i < classes.length; i++) {
    console.log(classes[i].teacher)
}

for (var i = 0; i < classes.length; i++) {
    for (var j = 0; j < classes[i].contents.length; j++) {
        console.log(classes[i].contents[j].time - 10)
    }
   
}

if (a === 1) {
    console.log("aは1です")
} else if (a === 2) {
    console.log("aは2です")
} else {
    console.log("aは1でも2でもありません")
}


if (a === "国語") {
    console.log("国語です")
}
else {
    console.log("国語ではありません")
}


for (var i = 0; i < classes.length; i++) {
    b = 0
    for (var j = 0; j < classes[i].contents.length; j++) {
        b+=classes[i].contents[j].time
    }
    if (b === 90) {
        console.log("正常な合計時間です")
    }
    else {
        console.log("異常な合計時間です。値を見直してください")
    }
}



for (var i = 0; i < classes.length; i++) {
    sum = 0
    for (var j = 0; j < classes[i].contents.length; j++) {
        sum += classes[i].contents[j].time
    }
    if (sum === 90) {
        console.log("正常な合計時間です")
    } else {
        console.log("異常な合計時間です。値を見直してください")
    }
}

function hoge(a, b) {
    return a + b
}
hoge(1, 2) //3

hoge = function (a, b) { return a + b }
hoge = 1
hoge = 1 + 2 //3

hoge = function (a, b) {
    return a + b
}
hoge(1, 2) //3

foot = function (a, b) {
    return a*b
}
foot(1, 3)


bar=function(hoge,fuga,piyo){
return (hoge + fuga) * piyo
}
bar(2, 5, 2)

a = foo(2, 3) + bar(1, 2, 3)

bar = function (hoge, fuga, piyo) {
    sum = hoge + fuga
    return sum * piyo
}

bar = function(hoge,fuga,piyo){
	var sum = hoge+fuga
	return sum*piyo
}

a = [
    1,
    false,
    function () { return 1 }
]

b = {
    name: "are",
    hoge: function () { return "b" }
}

a = [ 1,3,function(foo,bar){ return foo*bar },12,function(a[0],a[1],a[3]){ return 1 }

]
console.log(a[2])
console.log(a[4])



