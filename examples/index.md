# Demo

---

## 加载PC模块

````javascript
var Block = require('seedit-block');
console.log(Block);
console.log(this);
Block.getPCHead().on('start',function(a){
        console.log('start',a);
    }).on('finish',function(b){
    console.log('finish this',this);
        console.log('finish',b);
    }).on('end',function(c){
        console.log('end',c);
    });
````

## 加载WAP模块
 
````siframe:1080
<link rel="stylesheet" href="http://scdn.bozhong.com/source/m/css/m_bbs__header.css"/>
<link rel="stylesheet" href="http://scdn.bozhong.com/source/m/css/m_bbs_public.css"/>
<body>
<script src="http://scdn.bozhong.com/source/common/js/jquery.min.js"></script>
<script>
seajs.use('seedit-block/0.0.1/index', function(seeditBlock) {    
 seeditBlock.getWapBlocks() //加载Wap模块
});

````

## 加载自定义模块

````siframe:1080
<link rel="stylesheet" href="http://scdn.bozhong.com/source/common/css/common_v2.min.css">
<body>
<script src="http://scdn.bozhong.com/source/common/js/jquery.min.js"></script>
<script>
seajs.use('seedit-block/0.0.1/index', function(seeditBlock) {    
    seeditBlock.getBlock('5440ca43a3c3b11b1a8b465a',function(d){
        $('body').append(d);
    },function(e){
       console.log(e);
    }) 
});
</script>
</body>
````