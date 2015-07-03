"use strict";
var APICore = require('seedit-api');
var Events = require('eventor');
var $ = require('jQuery');

var cAPI = APICore.scope('common');
var eventor = new Events();

var $footWrapHtml =  $('<div class="g_footerWrap">'+
    '<div class="g_footer">'+
    '<div class="b_info clearfix">'+
    '</div>'+
    '</div>'+
    '</div>');

//PC统一头部
 function getPCHead() {
     console.log(this);
     var _this = this;
     return function(){
         _this.trigger('start');
         cAPI.get('cms/content', {type: 'block', id: '51872356327d5fe81f000024'},
             function (d) {
                 $('body').prepend(d);
                 seajs.use('http://scdn.bozhong.com/source/common/js/global/common.min.js');
                 seajs.use('http://scdn.bozhong.com/source/common/js/common_nav.js');
                 console.log('_this1',_this)
                 _this.trigger('finish');
                 console.log('_this2',_this)
             },
             function (e) {
                 console.log('ERROR LOAD PC HEAD',e);
             }
         );
         _this.trigger('end');
         console.log(_this);

         return _this;
     };

}

Events.mixTo(getPCHead);

exports.getPCHead = new getPCHead();


//WAP头部
var getWapHead = function(){
    cAPI.get('cms/content', {
            type: 'block',
            id: '5476d726a3c3b14d588b457e'  //WAP_V2_头部内容
        },
        function(d) {
            $('body').prepend(d);
            cAPI.get('cms/content', {
                type: 'block',
                id: '54783a46a3c3b1a21d8b456f'   //WAP_V2_头部脚本
            },function(d){
                $('body').append(d);
            },function(e){
                console.log('ERROR LOAD WAP SCRIPT IN getWapHead',e);
            });
        },
        function(e) {
            console.log('ERROR LOAD WAP CONTENT IN getWapHead',e);
        }
    );
};

exports.getWapHead = getWapHead;


//PC统一尾部信息
var getFooterInfo = function () {
    cAPI.get('cms/content', {type: 'block', id: '51515b16327d5f037200004c'},
        function (d) {
            if(!!$('.g_footerWrap').length){
                $('.g_footer .b_info').append(d);
            }else{
                //如果页面内没有<div class='g_footerWrap'></div>
                $('body').append($footWrapHtml);
                $('.g_footer .b_info').append(d);
            }
        },
        function (e) {
            console.log('ERROR LOAD PC FOOTER INFO',e);
        }
    );
};

exports.getFooterInfo = getFooterInfo;


//PC统一尾部版权
var getFooterCopyright = function () {
    cAPI.get('cms/content', {type: 'block', id: '51c80fd4a3c3b10a51000000'},
        function (d) {
            if(!!$('.g_footerWrap').length){
                $('.g_footer .b_info').after(d);
            }else{
                $('body').append($footWrapHtml);
                $('.g_footer .b_info').after(d);
            }
        },
        function (e) {
            console.log('ERROR LOAD PC FOOTER COPYRIGHT',e);
        }
    );
};

exports.getFooterCopyright = getFooterCopyright;


//PC统一尾部脚本
var getFooterScript = function(){
    cAPI.get('cms/content', {type: 'block', id: '5195949a327d5fe61f00003c'},
        function (d) {
            $('body').append(d);},
        function (e) {
            console.log('ERROR LOAD PC FOOTER SCRIPT',e);
        }
    );
};

exports.getFooterScript = getFooterScript;

exports.getPcBlocks  = function () {
    getPcHead();
    getFooterInfo();
    getFooterCopyright();
    getFooterScript();
};

exports.getWapBlocks =function(){
    getWapHead();
};

exports.getBlock = function(id,cb,ecb){
    cAPI.get('cms/content', {type: 'block', id: id},
        cb,
        ecb
    );
};




