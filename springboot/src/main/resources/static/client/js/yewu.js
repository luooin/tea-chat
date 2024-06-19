/**
 * Created by Bowa on 2014/8/28.
 */
var shoplist = [];
var goodlist = [];
var focusobj = null;
var focususer = null;
var focushop = {};
var focuspost = null;
var gouwuche = "gouwuche";
var postslist = [];
var _yanzhengma = "";
var billlist = [];
var foodcarlist = [];


var focuslist = [];
var focustype = 1;


var chattimmer = null;
var iftobutton = true;
var path = "";
var isRecordStart = false;
var counttimmer = null;
var count = 0;

var _chattype = 1;//1朋友聊天,2群聊天
var _mingancis = null;

$(function(){
    $("div[data-role='header']").addClass("ideaheader");
    $("div[data-role='footer']").addClass("ideafooter");
    $("div[data-role='navbar']").addClass("ideafooter");
    $("div[data-role='page']").addClass("ideapage");
    var atpl = {};
    atpl.tpl = '<li><a href="#" onclick="toAddressMg(%s);">'+
        '<h2>%s</h2>'+
        '</a><a onclick="delAddress(%s);"></a></li>';
    atpl.colums = ["id","title","id"];
    $("#addresss").data("property",JSON.stringify(atpl));
//设置类别列表
    var p = {};
    p.tpl = '<li><a href="#" onclick="toShop(%s);">'+
                //'<img src="'+fileurl+'%s" class="ui-li-thumb">'+
                '<h2>%s</h2>'+
                //'<p>%s</p>'+
            '</a></li>';
    p.colums = ["id","sname"];
    $("#shops").data("property",JSON.stringify(p));

    var p2 = {};
    p2.tpl = '<li onclick="toGood(%s);">'+
        '<img style="height: 100px;margin: 10px 0 0 10px" src="'+fileurl+'%s" class="ui-li-thumb">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p style="color: red;">%s 元</p>'+
        '</li>';
    p2.colums = ["id","img","gname","note","price"];
    $("#goods").data("property",JSON.stringify(p2));
    $("#goods2").data("property",JSON.stringify(p2));


    /*var p2good = {};
    p2good.tpl='<li>'+
        '<a href="#" onclick="toGood(%s);">'+
        '<img class="previewimg listimg" src="'+fileurl+'%s">'+
        '<h2 style="">%s</h2>'+
        '<p style="color: red;">%s 元</p>'+
        '<p style="color: red;">销量:%s</p>'+
        '</a>'+
        '<div class="countopreadiv">'+
        '<a onclick="countFood(%s,1);"><img src="images/add.png"></a>'+
        '<input id="food%s" data-role="none" type="text" value="0">'+
        '<a onclick="countFood(%s,-1);"><img src="images/jian.png"></a>'+
        '</div>'+
        '</li>';
    p2good.colums = ["id","img","gname","price","xiaoliang","id","id","id"];
    $("#goods").data("property",JSON.stringify(p2good));*/

    var p3 = {};
    p3.tpl = '<li><a>'+
        '<img src="'+fileurl+'%s" class="ui-li-thumb">'+
        '<h2>%s</h2>'+
        '<p style="color: red;">单价:%s元,数量:%s</p></a>'+
        '<a href="#" onclick="removeCar(%s)"></a>'+
        '</li>';
    p3.colums = ["img","gname","price","count","id"];
    $("#cars").data("property",JSON.stringify(p3));

    var p4 = {};
    p4.tpl = '<li onclick="billDetail(%s);">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p style="color: red;">总价:%s</p>'+
        '<p style="color: red;">状态:%s</p>'+
        '<p>电话:%s</p>'+
        '<p>地址:%s</p>'+
        '</li>';
    p4.colums = ["id","ndate","gnames","total","statecn","tel","address"];
    $("#bills").data("property",JSON.stringify(p4));

    var p4qd = {};
    p4qd.tpl = '<li onclick="qiangdanDetail(%s);">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p style="color: red;">总价:%s</p>'+
        '<p style="color: red;">状态:%s</p>'+
        '<p>客户电话:%s</p>'+
        '<p>地址:%s</p>'+
        '</li>';
    p4qd.colums = ["id","ndate","gnames","total","statecn","tel","address"];
    $("#qiangdanbills").data("property",JSON.stringify(p4qd));
    $("#myqiangdanbills").data("property",JSON.stringify(p4qd));

    var p7 = {};
    p7.tpl = '<li onclick="toGood(%s,1);">'+
        '<img src="'+fileurl+'%s" class="ui-li-thumb">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p style="color: red;">%s 元</p>'+
        '</li>';
    p7.colums = ["id","img","gname","note","price"];
    $("#billgoods").data("property",JSON.stringify(p7));

    var p5 = {};
    p5.tpl = '<li onclick="postDetail(%s);">'+
        //'<img src="'+fileurl+'%s" style="height: 80px;">'+
    '<h2>%s</h2>'+
    '<p>%s</p>'+
        '<p>%s</p>'+
    '</li>';
    p5.colums = ["id","title","type","ndate"];
    $("#posts").data("property",JSON.stringify(p5));

    var p6 = {};
    p6.tpl = '<li>'+
    '<h2>%s</h2>'+
    '<p>%s</p>'+
    '<p>%s<span style="color: #3e6790;margin-left: 50px;" onclick="huifu(\'%s\')">回复</span> </p>'+
    '</li>';
    p6.colums = ["ndate","note","username","username"];
    $("#replays").data("property",JSON.stringify(p6));

    var p666 = {};
    p666.tpl = '<li>'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p>%s</p>'+
        '</li>';
    p666.colums = ["ndate","note","username"];
    $("#replays2").data("property",JSON.stringify(p666));
    $("#replays3").data("property",JSON.stringify(p666));


    var p6666 = {};
    p6666.tpl = '<li onclick="noticeDetail(%s)">'+
        '<img src="'+fileurl+'%s" style="height: 80%;">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '</li>';
    p6666.colums = ["id","img","title","ndate"];
    $("#noticelist").data("property",JSON.stringify(p6666));

    clickYanzhengma();







/*****************好友聊天相关***************************/
    var pppp = {};
    pppp.tpl = '<li>'+
        '<p>%s</p>'+
        '<p>%s</p>'+
        '<p>%s</p>'+
        '</li>';
    pppp.colums = ["note","username","ndate"];
    $("#msglist").data("property",JSON.stringify(pppp));

    var fp = {};
    fp.tpl = '<li><a  onclick="toUserInfo(%s);">'+
        '<img src="'+fileurl+'%s">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '</a><a href="#" onclick="toChat(%s,1)"></a></li>';
    fp.colums = ["id","img","username","sex","id"];
    $("#myfriendlist").data("property",JSON.stringify(fp));


    var fpp = {};
    fpp.tpl = '<li onclick="toUserInfo(%s);">'+
        '<img src="'+fileurl+'%s">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '</li>';
    fpp.colums = ["id","img","username","sex"];
    $("#userlist").data("property",JSON.stringify(fpp));

    var fppp = {};
    fppp.tpl = '<li onclick="toYzMessage(%s);">'+
        '<img src="'+fileurl+'%s">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '</li>';
    fppp.colums = ["id","img","fuser","ndate"];
    $("#messagelist").data("property",JSON.stringify(fppp));


    $("#recordbtn").unbind("click").bind("click",function(){
        if(isRecordStart){
            isRecordStart = false;
            hideLoader();
            $("#recordbtn").text("点击录音");
            path = myObj.getRecordFile();
            setTimeout(function(){
                sendMsg(path,2);
            },2000);
            clearInterval(counttimmer);
            count = 0;
            myObj.stopSound();
        }else{
            isRecordStart = true;
            $("#recordbtn").text("录音中");
            //showLoader("录音中 "+count+"s",true);
            counttimmer = setInterval(function(){
                //showLoader("录音中 "+count+"s",true);
                $("#recordbtn").text("录音中"+count+"s");
                count++;
            },1000);
            myObj.recordSound();
        }

    });

    $("#filebutton").unbind("click").bind("click",function(){
        sendFile();
    });

    /*****************好友聊天相关***************************/


});

function toShops(){
    changePage("shopspage");
    listShop();
}

function listShop(){
    ajaxCallback("listJ",{table:"shop"},function(data){
        shoplist = data;
        $("#shops").refreshShowListView(data);
    });
}

function toShop(id){

    ajaxCallback("findJ",{id:id,table:"shop"},function(data){
        focushop = data;
        focusobj = data;
        toShopDetail();
    });

}

function toShopDetail(){
    changePage('shoppage');
    $("#gname3").text("名称:"+focushop.sname);
    $("#gimg3").attr("src",fileurl+focushop.img);
    $("#gaddress").text("地址:"+focushop.address);
    $("#gtel3").text("电话:"+focushop.tel);
    $("#gnote3").text("介绍:"+focushop.note);
    //getShopJifen();
}

function pingjia(){
    var obj = {};
    focusobj.statecn="已评价";
    focusobj.table="bill";
    ajaxCallback("saveJ", focusobj, function (data) {
        showTipTimer("操作成功!", function () {
            billDetail(focusobj);
        });

    });

}

function countFood(id,flag){
    var obj = getObjectById(id,goodlist);
    if(obj){
        var el = $("#food"+id);
        var ocount = el.val();
        ocount = parseInt(ocount);
        ocount+=flag;
        if(ocount<=0){
            el.val("0");
            ocount = 0;
        }
        obj.count = ocount;
        el.val(ocount);
        addToFoodCar(obj,0);
    }
}

function countFoodCar(id,flag){
    var obj = getObjectById(id,goodlist);
    if(obj){
        var el = $("#foodcar"+id);
        var ocount = el.val();
        ocount = parseInt(ocount);
        ocount+=flag;
        if(ocount<=0){
            el.val("0");
            ocount = 0;
        }
        obj.count = ocount;
        el.val(ocount);
        addToFoodCar(obj,1);
    }
}

function addToFoodCar(obj,type){
    var newlist = [];
    var flag = false;
    for(var i=0;i<foodcarlist.length;i++){
        if(foodcarlist[i].id == obj.id){
            if(foodcarlist[i].count==0){
                continue;
            }else{
                foodcarlist[i] = obj;
                flag = true;
            }

        }
        newlist.push(foodcarlist[i]);
    }
    if(!flag){
        newlist.push(obj);
    }
    foodcarlist = newlist;
    if(type==1){
        listFoodCar();
    }
}



function toNewest(uid){
    changePage('goodnew');
   /* uid = uid || "";
    ajaxCallback("listJ",{table:"good",uid:uid},function(data){
        $("#goods2").refreshShowListView(data);
    });*/
    listGoodTuijian();
}

function toNotice(){
    changePage('noticepage');
    listNotice();
}

function listNotice(){
    ajaxCallback("listJ",{table:"notice"},function(data){
        focuslist = data;
        $("#noticelist").refreshShowListView(data);
    });
}

function noticeDetail(id){
    var obj = getObjectById(id,focuslist);
    changePage('noticedetailpage');
    $("#dimg").attr("src",fileurl+obj.img);
    $("#vtitle").text(obj.title);
    var html = obj.note.replace(/upload/g,fileurl);
    $("#vnote").html(html);
    showAttach("nvideo",obj.video);
    //$("#vndate").text("时间:"+obj.ndate);
}
function filterGood(){
    var title = $("#searchinput").val();
    var list = filterObj(title,goodlist);
    $("#goods").refreshInsertView(list);
}

function filterObj(title,list){
    var rlist = [];
    if(!title || $.trim(title)==""){
        return list;
    }
    for(var i= 0,len=list.length;i<len;i++){
        var obj = list[i];
        var str = obj.gname;
        title = $.trim(title);
        if(str.indexOf(title)!=-1){
            rlist.push(obj);
        }
    }
    return rlist;
}


function huifu(username){
    $("#rnote").val("回复 "+username+":");
}

function toMain(){
    /*changePage("mainpage");
    listShop();*/
    if(userinfo.roletype=="2"){
        toGoods();
        setTimeout(function (){
            initswiper();
        },500);
    }else{
        toQiangdan();
    }

}

function listShop(){
    ajaxCallback("listJ",{table:"shop"},function(data){
        shoplist = data;
        $("#shops").refreshShowListView(data);
    });
}

function delGood(){
    if(!userinfo){
        toLogin();
        return;
    }
    ajaxCallback("deleteJ",{id:focusobj.id,table:"good"},function(data){
        toMain();
    });
}


function toMapPage(){
    changePage('mappage');
    setTimeout(function (){
        if(!map){
            initMap();
        }
    },600);

}

function toUser(id){
    goback();
    refreshGood(null,null,id);
}

function toJiaoliu(){
    changePage('jiaoliupage');
    listReplay3();
}

/*
function toShop(id){
    for(var i=0;i<shoplist.length;i++){
        if(shoplist[i].id == id){
            focushop = shoplist[i];
            break;
        }
    }
    toGoods(id)
}*/

function toGoods(id){
    var sid = id || focushop.id;
    changePage("goodspage");
    listType();
    listGood(sid);
}

function refreshGood(title,type,uid){
    var stype = title || $("#type").val() || "";
    //var statecn = "待订单";

    ajaxCallback("listJ",{stitle:title,typeid:stype,table:"good"},function(data){
        $("#goods").refreshShowListView(data);
    });
}

function listGood(sid){
    ajaxCallback("listJ",{sid:sid,table:"good"},function(data){
        goodlist = data;
        $("#goods").refreshShowListView(data);
    });
}

function listType(){
    ajaxCallback("listJ",{table:"type"},function(data){
        $("#type").empty();
        var html = "<option value=''>请选择</option>";
        $("#type").append(html);
        for(var i=0;i<data.length;i++){
            var obj = data[i];
            var html = "<option value='"+obj.id+"'>"+obj.title+"</option>";
            $("#type").append(html);
        }
    });
}

function toGood(id){
    var obj = getGoodById(id);
    focusobj = obj;
    changePage("goodpage");
    checkFavs();
    $("#gname2").text("名称:"+obj.gname);
    $("#gimg2").attr("src",fileurl+obj.img);
    $("#gnote2").text("简介:"+obj.note);
    $("#gprice2").text("价格:"+obj.price);
    $("#glevel").text("新旧程度:"+(obj.level||"9")+"成新");
    $("#gstype").text("送货方式:"+(obj.stype||"自提"));
    listReplay2();
    if(focusobj.uid == userinfo.id){
        $("#mygood").show();
    }else{
        $("#mygood").hide();
    }

}

function getGoodById(id){
    for(var i=0;i<goodlist.length;i++){
        var good = goodlist[i];
        if(good.id == id){
            return good;
        }
    }
    return null;
}

function payBill() {
        var choose = $('input[name="payway"]:checked').val();
    //if (userinfo.money && userinfo.money * 1 > focusobj.total * 1) {
        var id = focusobj.id;
        var statecn = "已付款";
        var paytype = choose;
        focusobj.paytype=paytype;
        focusobj.statecn=statecn;
        focusobj.table="bill";
        if(paytype=="1"){
            /* var ljifen = (userinfo.jifen*1)%10;
        var jifenzhekou = Math.floor((userinfo.jifen*1)/10);
        focusobj.total = (focusobj.total*1-jifenzhekou).toFixed(2);*/
            disCharge(focusobj.total,function (){
                ajaxCallback("saveJ", focusobj, function (data) {
                    //if(data){
                    showTipTimer("付款成功!", function () {
                        billDetail(focusobj);
                        chargeJifen(focusobj.total);
                    });
                    /* ajaxCallback("saveJ",{table:"user",jifen:ljifen,id:userinfo.id},function (data) {
                         userinfo.jifen = ljifen;
                     })*/
                    /*}else{
                        if(choose=="2"){
                            showLoader("积分不足!",true);
                        }else{
                            showLoader("操作失败!",true);
                        }
                    }*/


                });
            })

            /*} else {
                showLoader("余额不足!", true);
            }*/
        }else{
            disChargeJifen(focusobj.jifen,function (){
                ajaxCallback("saveJ", focusobj, function (data) {
                    //if(data){
                    showTipTimer("付款成功!", function () {
                        billDetail(focusobj);
                    });
                    /* ajaxCallback("saveJ",{table:"user",jifen:ljifen,id:userinfo.id},function (data) {
                         userinfo.jifen = ljifen;
                     })*/
                    /*}else{
                        if(choose=="2"){
                            showLoader("积分不足!",true);
                        }else{
                            showLoader("操作失败!",true);
                        }
                    }*/


                });
            })
        }


}

function fahuo(){
    //if(userinfo.money && userinfo.money*1>focusobj.total*1){
    var id = focusobj.id;
    var statecn="已发货";
    var fnote = $("#fnote2").val();
    focusobj.statecn = statecn;
    focusobj.table="bill";
    focusobj.fnote=fnote;
    ajaxCallback("saveJ",focusobj,function(data){
        showTipTimer("操作成功!",function(){
            billDetail(data);
        });

    });
    /*    }else{
     showLoader("余额不足!",true);
     }*/

}

function sureBill(){
    var id = focusobj.id;
    var statecn="已收货";
    focusobj.statecn=statecn;
    focusobj.table="bill";
    ajaxCallback("saveJ",focusobj,function(data){
        showTipTimer("操作成功!",function(){
            billDetail(focusobj);
        });

    });
}
var qishouuser = null;
function billDetail(id) {
    //clearInterval(_linetimmer);
    /*if(flag){

     }else{*/
    changePage("billgoodspage");
    //}

    var bill = {};
    if (typeof id == "object") {
        bill = id;
    } else {
        bill = getObjectById(id, billlist);
    }

    focusobj = bill;
    $("#btotal").text("总价:" + bill.total);
    //$("#bfenqi").text("提货方式:"+bill.way);
    $("#bndate").text("下单时间:" + bill.ndate);

    //var m = bill.total*1/bill.fenqi;
    //m = m.toFixed(2);
    //$("#bmoney").text("发货信息:"+(bill.fnote||""));
    $("#statecn").text("订单状态:" + bill.statecn);
    if(focusobj.qid){
        var html = "<a href='#' onclick='toUrl(userinfo.id,focusobj.qid);'>送货员:"+focusobj.qusername+"</a><a href='tel:"+focusobj.qtel+"' onclick=''>电话:"+focusobj.qtel+"</a><a href='#' onclick='toMapPage();'>位置跟踪</a>";
        ajaxCallback("findJ",{id:focusobj.qid,table:"user"},function (qishou) {
            qishouuser = qishou;
            $("#qsctn").html(html);
        })

    }else{
        $("#qsctn").html("等到送货员接单");
    }
    if (bill) {
        var gids = bill.gids;
        var sql="select * from wct_good where id in ("+gids+")";
        ajaxCallback("listSqlJ", {sql: sql}, function (data) {
            $("#billgoods").refreshShowListView(data);
        },true);
    }
    $("#paydiv").hide();
    $("#surediv").hide();
    $("#fahuodiv").hide();
    $("#pingjiadiv").hide();
    if(bill.sid==userinfo.id){
        if(bill.statecn=="已付款"){
            $("#fahuodiv").show();
        }
        $("#surediv").hide();
    }else{
        if (bill.statecn == "待付款") {
            $("#paydiv").show();
        }else if (bill.statecn == "已发货") {
            $("#surediv").show();
        } else if (bill.statecn == "已收货") {
            $("#pingjiadiv").show();
        }
    }

    //$("#fkjifen").text("可用积分:"+userinfo.jifen);




    /*if(bill.statecn=="未叫号"){
     getLineNumber(id,function (count){
     if(count==0){
     $("#statecn").text("订单状态:已叫号");
     }else if(count<3){
     $("#statecn").text("准备取餐");
     myObj.showIntentActivityNotify("点餐提示","请准备取餐",100);
     }else{
     $("#statecn").text("等待人数:" + count+"人");
     }
     _linetimmer = setInterval(function(){
     billDetail(id,true);
     },5000);
     });
     }else{
     clearInterval(_linetimmer);
     $("#statecn").text("订单状态:" + bill.statecn);
     }*/




}





function tijiaouser(){
    var note = $("#infobeizhu2").val();
    var bill = {};
    bill.uid = userinfo.id;
    bill.user = userinfo.username;
    bill.shop = focusobj.shop;
    bill.sid = focusobj.sid;
    bill.gids = focusobj.id;
    bill.gnames = focusobj.gname;
    bill.total = focusobj.price*focusobj.count;
    bill.jifen = focusobj.jifen*focusobj.count;
    bill.tel = userinfo.tel;
    bill.address = $("#naddress").val()
    var iswaimai = $("#iswaimai").val();
    if(iswaimai=="1"){
        bill.address = "";//$("#zhuohao").find("option:selected").text();
        bill.way = "自取";
    }else{
        bill.way = "外送";
    }
    bill.note = note;
    bill.way = focusobj.stype;
    bill.table="bill";
    bill.statecn="待付款";
    bill.way = $("#way").val();
    ajaxCallback("saveJ",bill,function(){
        showLoader("订单提交成功!",true);
        showTipTimer("订单提交成功!",function(){
            toMyBill();
        });

    });

    var sql="update wct_good set statecn='已订单' where id in ("+bill.gids+")";

    ajaxCallback("updateSqlJ",{sql:sql},function(data){

    });
}

function tijiao(){
    focusobj.count = $("#count").val();
    if(!userinfo){
        toLogin();
        return;
    }
    if(focusobj.uid==userinfo.id){
        showLoader("自己的鲜花无法提交!",true);
        return;
    }
    if(userinfo){
        changePage("infopage2");
        $("#ntel").text("电话:"+userinfo.tel);
        //$("#dizhi").text("地址:"+userinfo.address);
        $("#iscar2").val("1");
        setUserInfo();
        toggleWaimai();
    }else{
        changePage("infopage");
        $("#iscar").val("1");
    }
}


function toggleWaimai(){
    var r = $("#iswaimai").val();
    if(r==1){
        $("#canting").show();
        $("#waimai").hide();
    }else {
        $("#canting").hide();
        $("#waimai").show();
    }
}

function setUserInfo() {
    $("#ntel").text("电话:"+userinfo.tel);
    ajaxCallback("listJ",{uid:userinfo.id,table:"address"},function(data){
        $("#naddress").refreshShowSelectMenu(data,null,"title","title");
    });
    /*ajaxCallback("listJ",{table:"room"},function(data){
        $("#zhuohao").refreshShowSelectMenu(data);
    });*/
}
function tijiaoyouke(){
    var tel = $("#infotel").val();
    var address = $("#infoaddress").val();
    var note = $("#infobeizhu").val();
    if($.trim(tel)=="" || $.trim(address)==""){
        showLoader("请填写电话和地址信息!",true);
        return;
    }
    if(tel.length<11){
        showLoader("请填写正确的电话号码!",true);
        return;
    }
    var bill = {};
    bill.shop = focushop.sname;
    bill.sid = focushop.id;
    bill.gids = focusobj.id;
    bill.gnames = focusobj.gname;
    bill.total = focusobj.price;
    bill.tel = tel;
    bill.address = address;
    bill.note = note;
    bill.table="bill";
    ajaxCallback("saveJ",bill,function(){
        showLoader("订单提交成功!",true);
        showTipTimer("订单提交成功!",function(){
            toMyBill();
        });

    });
}

function youketijiao(){
    var type = $("#iscar").val();
    if(type == 1){
        tijiaoyouke();
    }else{
        tijiaocaryouke();
    }
}

function usertijiao(){
    var type = $("#iscar2").val();
    if(type == 1){
        tijiaouser()
    }else{
        tijiaocaruser();
    }
}

function addToCar(){
    var str = localStorage[gouwuche];
    var list = [];
    if(str){
        list = JSON.parse(str);
    }
    focusobj.count = $("#count").val();
    list.push(focusobj);
    localStorage[gouwuche] = JSON.stringify(list);
    showLoader("已经添加到购物车!",true);
}

function showCar(){
    if(!userinfo){
        changePage("loginpage");
        return;
    }
    changePage("carspage");
    carlist();
    //listFoodCar();
}

function toTuijian(){
    changePage("goodnew");
    listGoodTuijian();
}

function toPianhao(){
    changePage("usersetpage");
    fillFormData($("#pianhaoform"),userinfo);
}

function savePianhao(){
    var fdata = serializeObject($("#pianhaoform"));
    fdata.id = userinfo.id;
    fdata.table="user";
    ajaxCallback("saveJ",fdata,function (data) {
        showLoader("操作成功!",true);
    });
}
function listFoodCar(){
    $("#cars").refreshShowListView(foodcarlist);
    var total = 0;
    for(var i=0;i<foodcarlist.length;i++){
        var g = foodcarlist[i];
        total+=g.price*g.count;
    }
    $("#gwctotal").text("总价:"+total+"元");
}

function carlist(){
    var total = 0;
    var str = localStorage[gouwuche];
    var list = [];
    if(str){
        list = JSON.parse(str);
        for(var i=0;i<list.length;i++){
            var g = list[i];
            total+=g.price*g.count;
        }
        $("#gwctotal").text("总价:"+total+"元");
    }
    $("#cars").refreshShowListView(list);
}

function removeCar(id){
    var str = localStorage[gouwuche];
    var list = [];
    var newlist = [];
    if(str){
        list = JSON.parse(str);
        for(var i=0;i<list.length;i++){
            var obj = list[i];
            if(obj.id == id){
                continue;
            }
            newlist.push(obj);
        }
        localStorage[gouwuche] = JSON.stringify(newlist);
        carlist();
    }
}

function tijiaocar(){
    setUserInfo();
    if(userinfo){
        changePage("infopage2");
        $("#iscar2").val("2");
    }else{
        changePage("infopage");
        $("#iscar").val("2");
    }
}

function tijiaocaruser(){
    var note = $("#infobeizhu2").val();
    var str = localStorage[gouwuche];
    var sids = [];
    var shopgoods = {};
    var bills = [];
    if(str){
        var list = JSON.parse(str);//foodcarlist;
        for(var i=0;i<list.length;i++){
            var flag = false;
            var good = list[i];
            for(var n=0;n<sids.length;n++){
                if(sids[n]==good.sid){
                    shopgoods[good.sid].push(good);
                    flag = true;
                    break;
                }
            }
            if(!flag){
                shopgoods[good.sid] = [];
                shopgoods[good.sid].push(good);
                sids.push(good.sid);
            }
        }
    }

    for(var i=0;i<sids.length;i++){
        var goodlist = shopgoods[sids[i]];
        var gids = "";
        var gnames = "";
        var sname = "";
        var total = 0;
        var jifen = 0;
        var sid = sids[i];
        var bill = {};
        bill.uid = userinfo.id;
        bill.user = userinfo.username;
        for(var n=0;n<goodlist.length;n++){
            var good = goodlist[n];
            if(n==0){
                sname = good.shop;
                gids+=good.id;
                gnames+=good.gname;
            }else{
                gids+=","+good.id;
                gnames+=","+good.gname;
            }
            total+=parseInt(good.price*(good.count||1));
            jifen+=parseInt(good.jifen*(good.count||1));
        }
        bill.shop = sname;
        bill.sid = sid;
        bill.gids = gids;
        bill.gnames = gnames;
        bill.total = total;
        bill.jifen = jifen;
        bill.tel = userinfo.tel;
        bill.address = $("#naddress").val();
        bill.note = note;

        bill.table="bill";
        bill.statecn="待付款";
        var iswaimai = $("#iswaimai").val();
        if(iswaimai=="1"){
            bill.address = $("#zhuohao").find("option:selected").text();
            bill.way = "自取";
        }else{
            bill.way = "外卖";

        }
        ajaxCallback("saveJ",bill,function(data){
            foodcarlist=[];
            showTipTimer("订单提交成功!",function(){
                toMyBill();
            });
        });
    }
    /*if(bills.length){
        ajaxCallback("saveBills",{bills:JSON.stringify(bills)},function(data){
            localStorage[gouwuche] = "";
            showTipTimer("订单提交成功!",function(){
                toMyBill();
            });
        });
    }*/

}

function liuyan(){
    var fdata = {};
    fdata.ndate = getNdate();
    fdata.note = $("#lynote").val();
    fdata.table = "notice";
    ajaxCallback("saveJ",fdata,function(data){
        showLoader("提交成功!",true);
    });

}

function toLiuyan(){
    changePage('liuyanpage');
}

function tijiaocaryouke(){
    var tel = $("#infotel").val();
    var address = $("#infoaddress").val();
    var note = $("#infobeizhu").val();
    if($.trim(tel)=="" || $.trim(address)==""){
        showLoader("请填写电话和地址信息!",true);
        return;
    }
    if(tel.length<11){
        showLoader("请填写正确的电话号码!",true);
        return;
    }
    var str = localStorage[gouwuche];
    var sids = [];
    var shopgoods = {};
    var bills = [];
    if(str){
        var list = JSON.parse(str);
        for(var i=0;i<list.length;i++){
            var flag = false;
            var good = list[i];
            for(var n=0;n<sids.length;n++){
                if(sids[n]==good.sid){
                    shopgoods[good.sid].push(good);
                    flag = true;
                    break;
                }
            }
            if(!flag){
                shopgoods[good.sid] = [];
                shopgoods[good.sid].push(good);
                sids.push(good.sid);
            }
        }
    }

    for(var i=0;i<sids.length;i++){
        var goodlist = shopgoods[sids[i]];
        var gids = "";
        var gnames = "";
        var sname = "";
        var total = 0;
        var sid = sids[i];
        var bill = {};
        bill.uid = "";
        bill.user = "";
        for(var n=0;n<goodlist.length;n++){
            var good = goodlist[n];
            if(n==0){
                sname = good.shop;
                gids+=good.id;
                gnames+=good.gname;
            }else{
                gids+=","+good.id;
                gnames+=","+good.gname;
            }
            total+=parseInt(good.price);
        }
        bill.shop = sname;
        bill.sid = sid;
        bill.gids = gids;
        bill.gnames = gnames;
        bill.total = total;
        bill.tel = tel;
        bill.address = address;
        bill.note = note;
        bills.push(bill);
    }
    if(bills.length){
        ajaxCallback("saveBills",{bills:JSON.stringify(bills)},function(data){
            localStorage[gouwuche] = "";
            showTipTimer("订单提交成功!",function(){
                toMyBill();
            });
        });
    }

}



function toMyBill(){
    if(userinfo){
        changePage("mybillpage");
        mybillslist(userinfo.id);
    }else{
        changePage("loginpage");
    }

}

function mybillslist(uid,sid,statecn){
    ajaxCallback("listJ",{uid:uid,sid:sid,table:"bill",statecn:statecn},function(data){
        billlist = data;
        $("#bills").refreshShowListView(data);
    });
}



function toLuntan(id){
    changePage("luntanpage");
    listPosts(id);
}

function toFabu(){
    if(!userinfo){
        toLogin();
        return;
    }
    changePage("fabupage");
    $("#gtel").val(userinfo.tel);
    ajaxCallback("listJ",{table:"type"},function(data){
        shoplist = data;
        $("#fcity").refreshShowSelectMenu(data,"选择分类","id","title");
    });
}


function listPosts(id){
    ajaxCallback("listJ",{table:"posts"},function(data){
        postslist = data;
        $("#posts").refreshShowListView(data);
    });
}
function toAddForm(){
    if(!userinfo){
        toLogin();
        return;
    }
    changePage("addformpage");
}
function addForm(){
    var note = $("#fnote").val();
    var title = $("#ftitle").val();
    var type = $("#ftype").val();
    ajaxFormUploadFile(function(r){
        ajaxCallback("saveJ",{uid:userinfo.id,title:title,note:note,username:userinfo.username,img:r,type:type,table:"posts",ndate:getNdate()},function(){
            toLuntan();
        });
    });

}
function postDetail(id){
    var obj = getPostsById(id);
    focuspost = obj;
    changePage("postdetail");
    $("#vptitle").text("标题:"+obj.title);
    $("#vpnote").text("内容:"+obj.note);
    $("#vpusername").text("发布者:"+obj.username);
    $("#vpdate").text("时间:"+obj.ndate);
    $("#pimg").attr("src",fileurl+obj.img);
    if(obj.uid == userinfo.id){
        $("#mypost").show();
    }else{
        $("#mypost").hide();
    }
    listReplay();
}
function listReplay(){
    ajaxCallback("listJ",{pid:focuspost.id,table:"replay"},function(data){
        $("#replays").refreshShowListView(data);
    });
}
function listReplay2(){
    ajaxCallback("listJ",{pid:focusobj.id,table:"replay"},function(data){
        $("#replays2").refreshShowListView(data);
    });
}
function addReplay(){
    if(!userinfo){
        toLogin();
        return;
    }
    var note = $("#rnote").val();
    ajaxCallback("saveJ",{pid:focuspost.id,uid:userinfo.id,username:userinfo.username,note:note,table:"replay"},function(data){
        listReplay();
        $("#rnote").val("");
    });
}
function addReplay2(){
    if(!userinfo){
        toLogin();
        return;
    }
    var note = $("#rnote2").val();
    ajaxCallback("saveJ",{pid:focusobj.id,uid:userinfo.id,username:userinfo.username,note:note,table:"replay"},function(data){
        listReplay2();
        $("#rnote2").val("");
    });
}


function addReplay3(){
    var note = $("#rnote3").val();
    ajaxCallback("saveJ",{pid:focusobj.sid,uid:userinfo.id,username:userinfo.username,note:note,table:"replay"},function(data){
        listReplay3();
        $("#rnote3").val("");
    });
}


function listReplay3(){
    ajaxCallback("listJ",{pid:focusobj.sid,table:"replay"},function(data){
        $("#replays3").refreshShowListView(data);
    });
}

function getPostsById(id){
    for(var i=0;i<postslist.length;i++){
        if(postslist[i].id == id){
            return postslist[i];
        }
    }
}

function mygood(){
    toGoods(userinfo.id);
}


function mypost(){
    toLuntan(userinfo.id);
}

function saveGood(){
    var fdata = serializeObject($("#goodform"));
    fdata.sid = userinfo.id;
    fdata.shop = userinfo.username;
    fdata.uid = userinfo.id;
    fdata.username = userinfo.username;
    fdata.table="good";
    fdata.statecn="待订单";

    ajaxFormUploadFile(function(img){
        fdata.img = img;
        ajaxCallback("saveJ",fdata,function(){
            showLoader("发布成功!",true);
            toGoods();
        });
    });
}

function delPosts(){
    ajaxCallback("delPosts",{id:focuspost.id},function(data){
        toLuntan();
    });
}
























/**************************************聊天相关******************************/

function backclear(){
    clearInterval(chattimmer);
    goback();
}

var refreshgap = 5000;
/*function toQunChat(id){
 var qz = getObjectById(id,focuslist);
 focusobj = qz;
 changePage("chatpage");
 chattimmer = setInterval(function (){
 refreshServerQunChatList();
 },refreshgap);
 }*/

function toChat(id,type){
    ajaxCallback("findJ",{table:"user",id:id},function (data) {
        focususer = data;
        /*if(userinfo.status=="禁言"){
             showLoader("你已被禁言",true);
             return;
             }*/
        _chattype = type;
        /*if(type==2){
            var qz = getObjectById(id,focuslist);
            focususer = qz;
        }*/

        changePage("chatpage");
        refreshServerChatList();
        chattimmer = setInterval(function (){
            refreshServerChatList();
        },refreshgap);
    })

}

function refreshChatMSg(){
    ajaxCallback("listMyMessage",{uid:userinfo.id,fid:focususer.id},function(data){
        $("#msglist").refreshShowListView(data);
    },true);
}






function sendFile(){
    getFileAttach(function(path){
        sendMsg(path,3);
    });
}

function sendMsg(path,type){

    var ajaxurl = "addMessage";
    if(_chattype==2){
        ajaxurl="addQunMessage";
    }
    var obj = {};
    obj.uid = userinfo.id;
    obj.fid = focususer.id;
    if(_chattype==2){
        obj.qid = focususer.id;
    }
    obj.note = $("#msgaarea").val();
    obj.username = userinfo.username;
    obj.fusername = focususer.username;
    obj.type = 1;
    obj.img = userinfo.img;
    if(path){
        if(type==2){
            obj.type = type;
            uploadFileUrl = path;
            uplaodImg(function(r){
                obj.attach = r;
                ajaxCallback(ajaxurl,obj,function(data){
                    iftobutton = true;
                    refreshServerChatList();
                });
            });
        }else if(type==3){
            obj.type = type;
            uploadFileUrl = path;
            uplaodImg(function(r){
                obj.attach = r;
                obj.attachname = uploadFileUrl.substr(uploadFileUrl.lastIndexOf("/")+1);
                ajaxCallback(ajaxurl,obj,function(data){
                    iftobutton = true;
                    refreshServerChatList();
                });
            });
        }

    }else{
        /*if(checkMgc(obj.note)){
         showLoader("消息不合法",true);
         return;
         }*/
        obj.attach = "";
        ajaxCallback(ajaxurl,obj,function(data){
            iftobutton = true;
            refreshServerChatList();
        });
    }
    $("#msgaarea").val("");


    /*var note = $("#chatnote").val();
     var msg = {};
     msg.note = note;
     msg.qid = focususer.id;
     msg.uid = userinfo.id;
     msg.username = userinfo.username;
     ajaxCallback("addQunMessage",msg,function(data){
     ajaxCallback("listQunMessage",{uid:userinfo.id,qid:focususer.id},function(data){
     $("#chatnote").val("");
     $("#qunmsglist").refreshShowListView(data);
     });
     });*/
}

function checkMgc(str){
    for(var i=0;i<_mingancis.length;i++){
        var mgc = _mingancis[i]['title'];
        if(str.indexOf(mgc)!=-1){
            return true;
        }
    }
    return false;
}

function refreshServerChatList(){
    var queryobj = {uid:userinfo.id,fid:focususer.id};
    var ajaxurl = "listMyMessage";
    if(_chattype==2){
        queryobj = {uid:userinfo.id,qid:focususer.id};
        ajaxurl = "listQunMessage";
    }
    ajaxCallback(ajaxurl,queryobj,function(data){
        refreshChatList(data);
    },true);
}


var _oldlength = null;
function refreshChatList(data){
    if(data.length!=_oldlength){
        iftobutton = true;
        _oldlength = data.length;
    }
    var html = "";
    if(data && data.length){
        for(var i=0;i<data.length;i++){
            var msg = data[i];
            var cn = "citemto";
            if(msg.uid != userinfo.id){
                var cn = "citemfrom";
            }
            var li = "";
            if(msg.type==1){
                li = '<li class="'+cn+'"><div><img src="'+fileurl+msg.img+'"><p>'+msg.note+'</p></div></li>';
            }else if(msg.type==2){
                li = '<li class="'+cn+'" onclick="myObj.playAudio(\''+msg.attach+'\');"><div><img src="'+fileurl+msg.img+'"><p>点击播放语音</p></div></li>';
            }else if(msg.type==3){
                if(getFileType(msg.attach)==".png" || getFileType(msg.attach)==".jpg"||getFileType(msg.attach)==".gif"||getFileType(msg.attach)==".jpeg"){
                    li = '<li class="'+cn+'" onclick="localFile(\''+msg.attach+'\');"><div><img src="'+fileurl+msg.img+'"><p class="imgctn" style="background-image: url('+fileurl+msg.attach+')"></p></div></li>';
                }else{
                    li = '<li class="'+cn+'" onclick="localFile(\''+msg.attach+'\');"><div><img src="'+fileurl+msg.img+'"><p>'+msg.attachname+'</p></div></li>';
                }

            }

            html+=li;
        }
        $("#chatlist").html(html);
        setScroll("chatscroll",document.getElementById("chatdiv"));
    }else{
        $("#chatlist").html(html);
    }
    var hei = $("#chatlist").height();
    if(iftobutton){
        if(hei>600){
            var scrollY = 0-(hei-600);
            scrolls["chatscroll"].scrollTo(0,scrollY,300);
        }
        iftobutton = false;
    }


}
/**************************************聊天相关结束******************************/
/*****************************************************************好友管理********************************************/
function toMyFriend(){
    if(!userinfo){
        toLogin();
        return;
    }
    changePage('friendpage');
    listMyFriend();
}
function listMyFriend(){
    ajaxCallback("listMyFriend",{uid:userinfo.id},function(data){
        focuslist = data;
        $("#myfriendlist").refreshShowListView(data);
    });
}

function toUserInfo(id){
    if(!userinfo){
        toLogin();
        return;
    }
    ajaxCallback("getUser",{id:id},function(obj){

        if(obj){
            focususer = obj;
            changePage('userdetailpage');
            checkIsMyFriend();
            $("#vusername2").text("用户名:"+focususer.username);
            $("#vuserimg2").attr("src",fileurl+focususer.img);
            $("#vbirth2").text("生日:"+focususer.birth);
            $("#vsex2").text("性别:"+focususer.sex);
            $("#vqq2").text("QQ:"+focususer.qq);
            $("#vemail2").attr("href","tel:"+focusobj.tel).text("电话:"+focususer.tel);
        }
    });


}

function toSearchFriend(){
    changePage("addfriendpage");
    listUser();
}

function listUser(){
    ajaxCallback("listUser",{roletype:2},function(data){
        focuslist = data;
        $("#userlist").refreshShowListView(data);
    });
}

function checkIsMyFriend(cb){
    ajaxCallback("checkIsMyFriend",{uid:userinfo.id,fid:focususer.id},function(data){
        //cb && cb(data.info);
        if(data.info=="1"){
            $("#canadd").hide();
            $("#candelf").show();
        }else{
            if(focususer.id!=userinfo.id){
                $("#canadd").show();
                $("#candelf").hide();
            }else{
                $("#canadd").hide();
                $("#candelf").hide();
            }

        }
    });
}

function addFriend(){
    ajaxCallback("addFriend",{uid:userinfo.id,fid:focususer.id},function(data){
        userinfo = data;
        toMyFriend();
     });
    //改为同意的时候后台自动加上
    /*ajaxCallback("sendAddMessage",{fid:userinfo.id,tid:focususer.id,status:"待同意",fuser:userinfo.username,img:userinfo.img},function(data){
        showLoader("请求已发送,等待好友验证!",true);
    });*/
}

function delFriend(){
    ajaxCallback("delFriend",{uid:userinfo.id,fid:focususer.id},function(data){
        userinfo = data;
        toMyFriend();
    });
}


function toMyYanzhengMessage(){
    changePage('yzmessagelistpage');
    ajaxCallback("listMyAddMessage",{uid:userinfo.id},function(data){
        focuslist = data;
        $("#messagelist").refreshShowListView(data);
    });
}

function toYzMessage(id){
    var msg = getObjectById(id,focuslist);
    if(msg){
        focusobj = msg;
        changePage('yzmsgdetailpage');
        $("#vusername4").text(msg.fuser);
        $("#vstatus").text("状态:"+msg.status);
        $("#userimg").attr("src",fileurl+msg.img);
        if(msg.status="待同意"){
            $("#opctn").show();
        }else{
            $("#opctn").hide();
        }
    }
}

function agree(){
    ajaxCallback("addFriend",{uid:focusobj.fid,fid:focusobj.tid},function(r){
        ajaxCallback("addFriend",{uid:userinfo.id,fid:focusobj.fid},function(rr){
            ajaxCallback("updateYzMsgStatus",{id:focusobj.id,status:"已同意"},function(data){
                userinfo = rr;
                toMyFriend();
            });

        });
    });
}

function refuse(){
    ajaxCallback("updateYzMsgStatus",{id:focusobj.id,status:"已拒绝"},function(data){
        goback();
    });

}

/*****************************************************************好友管理结束********************************************/



/********************************************************地址增删改******************************************/
var addresslist = [];
function toAddressPage(){
    changePage("addresspage");
    listAddress();
}
function listAddress(){
    ajaxCallback("listJ",{uid:userinfo.id,table:"address"},function(data){
        addresslist = data;
        $("#addresss").refreshShowListView(data);
    });
}
function toAddressMg(id){
    changePage("addressmgpage");
    if(id){
        $("#addressid").val(id);
        $("#addressaction").val("edit");
        var obj = getObjectById(id,addresslist);
        focusobj = obj;
        var addressinfo = obj.title;
        var as = addressinfo.split(" ");
        $("#title").val(as[2]);
        $("#ausername").val(as[0]);
        $("#atel").val(as[1]);
    }else{
        $("#addressform")[0].reset();
        $("#addressaction").val("add");
    }

}





function saveAddress(){
    var fdata = serializeObject($("#addressform"));
    fdata.uid = userinfo.id;
    fdata.title = fdata.username+" "+fdata.tel+" "+fdata.title;
    fdata.table="address";
    ajaxCallback("saveJ",fdata,function(){
        showTipTimer("操作成功",function(){
            toAddressPage();
        });
    });
}



function delAddress(id){
    ajaxCallback("deleteJ",{id:id,table:"address"},function(){
        toAddressPage();
        showLoader("操作成功",true);
    });
}
/********************************************************地址增删改end******************************************/
function toMoreQishou() {
    changePage("qishoumorepage");
}
function toMyQiangdan() {
    changePage("myqiangdanpage");
    listMyQiangdan("");
}
function listMyQiangdan(statecn) {
    ajaxCallback("listJ",{table:"bill",statecn:statecn,qid:userinfo.id},function (data) {
        $("#myqiangdanbills").refreshShowListView(data);
    })
}

function toQiangdan() {
    changePage("qiangdanpage");
    listQiangdan();
}


function jiedan() {
    var obj = {};
    obj.id = focusobj.id;
    obj.qid = userinfo.id;
    obj.qusername = userinfo.username;
    obj.qtel = userinfo.tel;
    obj.statecn = "已接单";
    obj.table = "bill";
    ajaxCallback("saveJ",obj,function (data) {
        qiangdanDetail(focusobj.id);
    })
}

function listQiangdan() {
    ajaxCallback("listJ",{table:"bill",statecn:"已付款"},function (data) {
        $("#qiangdanbills").refreshShowListView(data);
    })
}

function qiangdanDetail(id) {
    changePage("qiangdandetailpage");
    ajaxCallback("findJ",{table:"bill",id:id},function (data) {
        focusobj = data;
        if(data){
            $("#qaddress").text("地址:"+focusobj.address);
            $("#qstatecn").text("状态:"+focusobj.statecn);
            $("#qgnames").text("订单内容:"+focusobj.gnames);
            $("#qndate").text("下单时间:"+focusobj.ndate);
            $("#qtel").text("顾客电话:"+focusobj.tel).attr("href","tel:"+focusobj.tel);
            $("#qusername").text("顾客:"+focusobj.user).attr("onclick","toUrl("+focusobj.qid+","+focusobj.uid+")");
            $("#jiedanctn").hide();
            $("#suserstatectn").hide();
            if(focusobj.statecn!="已收货"){
                if(focusobj.statecn!="已接单"){
                    $("#jiedandiv").show();
                }

                if(focusobj.statecn=="已付款"){
                    $("#jiedanctn").show();
                }else{
                    $("#suserstatectn").show();
                }
            }
        }
    })
}

function changeState() {
    var statecn = $("#statecn2").val();
    ajaxCallback("saveJ",{table:"bill",id:focusobj.id,statecn:statecn},function (data) {
        qiangdanDetail(focusobj.id);
    })
}

function toUrl(uid,fid){
    //window.location.href="http://www.baidu.com";
    changePage("webcontent");
    //if (flag==1){
    $("#webtitle").text("");
    $("#webiframe").attr("src","chatplugs.html?uid="+uid+"&fid="+fid);
    /*}else{
        $("#webtitle").text("");
        $("#webiframe").attr("src","http://www.54new.com");
    }*/

}





function toDaka(){
    changePage('dakapage');
    ajaxCallback("listJ",{uid:userinfo.id,table:"daka"},function(data){
        var pd = {};
        pd.tpl = '<li>' +
            //'<img style="height: 80px;" src="'+fileurl+'%s"/>'+
            '<h2>%s</h2>'+
            '</li>';
        pd.colums = ["ndate"];
        $("#dakalist").data("property",JSON.stringify(pd));
        $("#dakalist").refreshShowListView(data);
    });
}

function daka(){
    var ndate = getNdateNian();
    ajaxCallback("listJ",{uid:userinfo.id,ndate:ndate,table:"daka"},function(data){
        if(data&&data.length){
            showLoader("已经打过了!",true);
        }else{
            ajaxCallback("saveJ",{uid:userinfo.id,ndate:ndate,table:"daka"},function(data2){
                songJifen();
                toDaka();
            });
        }
    });
}

function songJifen(){
    var jifen = userinfo.jifen || 0;
    if(jifen){
        jifen+=1;
    }else{
        jifen = 1;
    }
    userinfo.jifen = jifen;
    ajaxCallback("saveJ",{id:userinfo.id,table:"user",jifen:jifen},function(data){
    });
}

function getNdateNian(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if(month*1<10){
        month = "0"+month;
    }
    if(day*1<10){
        day = "0"+day;
    }
    if(hour*1<10){
        hour = "0"+hour;
    }
    if(minute*1<10){
        minute = "0"+minute;
    }
    if(second*1<10){
        second = "0"+second;
    }
    return year+'-'+month+'-'+day
}