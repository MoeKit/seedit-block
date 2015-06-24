# seedit-block [![spm version](https://moekit.timo.today/badge/seedit-block)](https://moekit.timo.today/package/seedit-block)

---

Seedit Common Header and Footer Blocks.

## 说明
> 使用该模块可以动态加载插入常用的公共头尾部模块，DRY。

已有模块：

+ PC统一头部
+ PC统一尾部信息
+ PC统一尾部版权
+ PC统一尾部脚本
+ WAP头部

## 接口 

+ `getPcHead()` 加载 PC统一头部
+ `getWapHead()` 加载 WAP头部
+ `getFooterInfo()` 加载PC统一尾部信息
+ `getFooterCopyright()` 加载PC统一尾部版权
+ `getWapHead()` 加载PC统一尾部脚本
+ `getPcBlocks()` 加载所有常用PC公共模块，目前包括PC统一头部、PC统一尾部信息、PC统一尾部版权、PC统一尾部脚本
+ `getWapBlocks()` 加载所有常用WAP模块，目前包括WAP头部
+ `getBlock(id,cb,ecb)` 加载指定id的模块，`id`为模块ID，`cb`为APICore中的正确回调，`ecb`为APICore中的错误回调
