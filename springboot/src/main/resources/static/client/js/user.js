/**
 * Created by ideabobo on 14-6-28.
 */

/***************************************用户模块*******************************************/
$(function(){
    var uinfo = localStorage['userinfo'];
    var f = localStorage['welcomed'];
    //if(f){
        if(uinfo && $.trim(uinfo)!=""){
            uinfo  = JSON.parse(uinfo);
            $("#lusername").val(uinfo.username);
            $("#lpasswd").val(uinfo.passwd);
            uinfo.remember = "1";
            //if(uinfo.roletype=="2"){
                login(uinfo);
            //}

        }
    //}else{
    //    changePage("welcomepage1","none");
    //}

    //$("#welcome1").bind("swipeleft tap",function(){
    //    changePage("welcomepage2");
    //});
    //$("#welcome2").bind("swipeleft tap",function(){
    //    changePage("welcomepage3");
    //});
    //$("#welcome3").bind("swipeleft tap",function(){
    //    changePage("welcomepage4");
    //});
    //$("#welcome4").bind("swipeleft tap",function(){
    //    changePage("welcomepage5");
    //});
    //$("#welcome5").bind("swipeleft tap",function(){
    //    changePage("welcomepage6");
    //});
    //$("#welcome6").bind("swipeleft tap",function(){
    //    changePage("loginpage");
    //    localStorage['welcomed'] = "yes";
    //});


});
var userinfo = null;
function login(uinfo){
    var fdata = uinfo || serializeObject($("#loginform"));
    if($.trim(fdata.username)=="" || $.trim(fdata.passwd) == ""){
        showLoader("请输入用户名或密码！",true);
        return;
    }
    fdata.table="user";
    ajaxCallback("findJ",fdata,function(data){
       if(!data){
           showLoader("用户名或密码错误",true);
           changePage("loginpage");
       }else{

           showLoader("登录成功!",true);
           //bindClient();
           userinfo = data;
           if(userinfo.roletype=="4"){
                toQiangdan();
           }else{
               toMain();
           }
           if(fdata.remember == "1"){
                localStorage["userinfo"] = JSON.stringify(data);
           }else{
               localStorage["userinfo"] = "";
           }


           //toGoods();
           /*if(userinfo.roletype==2){
                toVideoList();
           }else{
               ajaxCallback("getShop",{id:userinfo.sid},function(data){
                   focushop = data;
                   toMyBill();
                   startBillListLoop();
               });

           }*/


       }
    });
}

function logout(){
    userinfo = null;
    localStorage['userinfo'] = "";
    localStorage[gouwuche] = "";
    toLogin();
}

function toRegister(){
    changePage("registerpage");
}

function toLogin(){
    $($(':input','#loginform').get(1)).val("");
    changePage("loginpage");
}

function register(){

    var fdata = serializeObject($("#registerform"));
    if($.trim(fdata.username) == "" || $.trim(fdata.passwd) == "" || $.trim(fdata.tel) == ""){
        showLoader("请填写完整信息!",true);
        return;
    }
    if(fdata.tel.length<11){
        showLoader("电话号码格式不对!",true);
        return;
    }
    if(fdata.passwd != fdata.passwd2){
        showLoader("两次密码不一致!",true);
        return;
    }
    /*if(uploadFileUrl){
        uplaodImg(function(r){
            fdata.img = r;
            commitRegiesterInfo(fdata);
        });
    }else{*/
        commitRegiesterInfo(fdata);
    //}


}

function commitRegiesterInfo(fdata){
    fdata.table="user";
    fdata.roletype="2";
    ajaxCallback("findJ",fdata,function(d){
        if(!d){
            ajaxCallback("saveJ",fdata,function(r){
                if(r.info){
                    showLoader("注册成功!",true);
                    userinfo = fdata;
                    userinfo.id = r.info;
                    //addAddress();
                    toLogin();
                }else{
                    showLoader("注册失败请稍候再试!",true);
                }
                uploadFileUrl = null;
            });
        }else{
            showLoader("用户名已存在!",true);
        }
    });
}

function myinfo(){
    if(!userinfo){
        changePage("loginpage");
        return;
    }
    changePage("userinfopage");
    $("#editbutton").hide();
    $("#vusername").text(userinfo.username);
    $("#vtel").val(userinfo.tel);
    $("#vqq").val(userinfo.qq);
    $("#vwechat").val(userinfo.wechat);
    $("#vsex").val(userinfo.sex);
    $("#vbirth").val(userinfo.birth);
    $("#vemail").val(userinfo.email);
    $("#vaddress").val(userinfo.address);
    $("#vimg").val(userinfo.img);
    $("#rmyImage2").attr("src",fileurl+userinfo.img);
}

function editUserInfo(){
    $("#editbutton").show();
}

function updateUserInfo(){
    var fdata = serializeObject($("#userform"));
    fdata.id = userinfo.id;
    /*if(uploadFileUrl){
        uplaodImg(function(r){
            fdata.img = r;
            commitUpdateUserInfo(fdata);
        });
    }else{*/
        commitUpdateUserInfo(fdata);
    //}
}

function commitUpdateUserInfo(fdata){
    fdata.table = "user";
    ajaxCallback("saveJ",fdata,function(user){
        if(user){
            showLoader("保存成功!",true);
            userinfo = fdata;
            uploadFileUrl = null;
        }else{
            showLoader("保存失败,请稍候再试!",true);
        }
    });
}

function toChangePasswd(){
    $("#pusername").text("用户名:"+userinfo.username);
    changePage("passwdpage");
}

function changePasswd(){
    var fdata = serializeObject($("#passwdform"));
    fdata.id = userinfo.id;
    if(fdata.oldpasswd != userinfo.passwd){
        showLoader("原始密码错误！",true);
        return;
    }
    if($.trim(fdata.passwd) == ""){
        showLoader("密码不能为空！",true);
        return;
    }
    if(fdata.passwd != fdata.passwd2){
        showLoader("两次密码不一致！",true);
        return;
    }
    userinfo.passwd = fdata.passwd;
    userinfo.table="user";
    ajaxCallback("saveJ",userinfo,function(r){
        if(r){
            showLoader("保存成功!",true);
            setTimeout(function(){
                toLogin();
            },2000);
        }else{
            showLoader("保存失败,请稍候再试!",true);
        }
    });
}

function toMore(){
    changePage('morepage');
    $("#myjifen").text("我的积分:"+(userinfo.jifen||0));
}

/***************************************用户模块*******************************************/


function charge(){
    var money = $("#money").val();
    var umoney = userinfo.money || 0;
    if(umoney){
        umoney+=money*1;
    }else{
        umoney = money*1;
    }
    userinfo.money = umoney;
    ajaxCallback("saveJ",{id:userinfo.id,table:"user",money:umoney},function(data){
        showLoader("操作成功!",true);
        toMyMoney();
    });
}

function disCharge(total,cb){
    var umoney = userinfo.money || 0;
    if(umoney<total){
        showLoader("余额不足!",true);
        return false;
    }else{
        userinfo.money = umoney*1-total*1;
        ajaxCallback("saveJ",{id:userinfo.id,table:"user",money:userinfo.money},function(data){
            cb && cb();
        });
    }

}



function chargeJifen(money){
    var umoney = userinfo.jifen || 0;
    if(umoney){
        umoney+=money*1;
    }else{
        umoney = money*1;
    }
    userinfo.jifen = umoney;
    ajaxCallback("saveJ",{id:userinfo.id,table:"user",jifen:umoney},function(data){
        showLoader("操作成功!",true);
        toMyMoney();
    });
}

function disChargeJifen(total,cb){
    var umoney = userinfo.jifen || 0;
    if(umoney<total){
        showLoader("积分不足!",true);
        return false;
    }else{
        userinfo.jifen = umoney*1-total*1;
        ajaxCallback("saveJ",{id:userinfo.id,table:"user",money:userinfo.jifen},function(data){
            cb && cb();
        });
    }

}


function toMyMoney(){
    changePage('moneypage');
    $("#lingqian").text((userinfo.money||0)+"元");
}

/****************************************************在线收藏***********************************/
function toFavs(){
    changePage("favspage");
    var sql = "select * from wct_good where id in ("+userinfo.favs+")";
    ajaxCallback("listSqlJ",{sql:sql},function (data) {
        var p3 = {};
        p3.tpl = '<li ><a onclick="toGood(%s);">'+
            '<img style="height: 80px;width: 80px;" src="'+fileurl+'%s">'+
            '<h2>%s</h2>'+
            '<p>%s</p>'+

            '</a><a onclick="deleteFavs(%s)">删除</a></li>';
        p3.colums = ["id","img","gname","note","id"];
        $("#favslist").data("property",JSON.stringify(p3));
        $("#favslist").refreshShowListView(data);
    })
}




function toggleFavs(){
    if(checkFavs()){
        deleteFavs();
    }else{
        saveFavs();
    }
}

function checkFavs(){
    var favs = userinfo.favs;
    var flag = false;
    $("#favbtn").text("加入收藏");
    if(favs){
        favs+="";
        var favarray = favs.split(",");
        for(var i=0;i<favarray.length;i++){
            if(favarray[i]==focusobj.id){
                $("#favbtn").text("移除收藏");
                flag = true;
                break;
            }
        }
    }


    return flag;

}


function saveFavs(){
    var favs = userinfo.favs;
    if(favs){
        favs+="";
        var favarray = favs.split(",");
        var flag = true;
        for(var i=0;i<favarray.length;i++){
            if(favarray[i]==focusobj.id){
                flag = false;
                break;
            }
        }
        if(flag){
            favs+=","+focusobj.id;
        }
    }else{
        favs = focusobj.id;
    }

    ajaxCallback("saveJ",{table:"user",favs:favs,id:userinfo.id},function (data) {
        showLoader("操作成功!",true);
        userinfo.favs = favs;
        checkFavs();
    })

}

function deleteFavs(gid){
    var id = gid || focusobj.id;
    var favs = userinfo.favs;
    var tfavs = "";
    if(favs){
        favs+="";
        var favarray = favs.split(",");
        for(var i=0;i<favarray.length;i++){
            if(favarray[i]==id){
                continue;
            }else{
                if(tfavs==""){
                    tfavs = favarray[i];
                }else{
                    tfavs+=","+favarray[i];
                }
            }
        }

    }

    ajaxCallback("saveJ",{table:"user",favs:tfavs,id:userinfo.id},function (data) {
        showLoader("操作成功!",true);
        userinfo.favs = tfavs;
        if(gid){
            toFavs();
        }else{
            checkFavs();
        }

    })

}




function toMyYouhuijuan(){
    changePage('youhujuanpage');
    var YouhuijuanTpl2 = {};
    YouhuijuanTpl2.tpl = '<li onclick="findYouhuijuan(%s);">'+
        '<h2 style="color: red;">%s元 满%s可使用</h2>'+
        '<p>到期时间:%s</p>'+
        '</li>';
    YouhuijuanTpl2.colums = ["id","total","fulluse","extimestr"];
    $("#myyouhuijuanlist").data("property",JSON.stringify(YouhuijuanTpl2));
    ajaxCallback("listJ",{uid:userinfo.id,typeid:2,statecn:"正常",table:"youhuijuan"},function(data){
        $("#myyouhuijuanlist").refreshShowListView(data);
    });
}
var _focusyouhuijuan = null;
function findYouhuijuan(id){
    ajaxCallback("findJ",{id:id,table:"youhuijuan"},function(data){
        _focusyouhuijuan = data;
        var total = focusobj.total*1;
        var yhtotal = _focusyouhuijuan.total*1;
        var lasttotal = total;
        if(total>yhtotal){
            lasttotal = total-yhtotal;
        }else{
            lasttotal = 0;
        }
        focusobj.total = lasttotal;
        $("#btotal").text("应付金额:"+focusobj.total+"元,使用"+_focusyouhuijuan.total+"元优惠卷").css("color","red");
        goback();
        useYouhuijuan(id);
    });
}

function getYouhuijuan(id){
    ajaxCallback("findJ",{id:id,table:"youhuijuan"},function (yhj) {
        var obj = {};
        yhj.uid = userinfo.id;
        yhj.typeid = 2;
        yhj.statecn="正常";
        yhj.table="youhuijuan";
        yhj.id=null;
        ajaxCallback("saveJ",yhj,function (data) {
            showTipTimer("优惠卷领取成功!",function (){
                goback();
            });
        })
    })
}

function useYouhuijuan(id){
    ajaxCallback("findJ",{id:id,table:"youhuijuan",statecn:"已使用"},function(yhj){

    });
}

function toShopYouhuijuan(){
    changePage('shopyouhuijuan');
    var YouhuijuanTpl3 = {};
    YouhuijuanTpl3.tpl = '<li onclick="getYouhuijuan(%s);">'+
        '<h2 style="color: red;">%s元 满%s可使用</h2>'+
        '<p>到期时间:%s</p>'+
        '</li>';
    YouhuijuanTpl3.colums = ["id","total","fulluse","extimestr"];
    $("#shopyouhuijuanlist").data("property",JSON.stringify(YouhuijuanTpl3));
    ajaxCallback("listJ",{typeid:1,table:"youhuijuan",sid:focushop.id},function(data){
        $("#shopyouhuijuanlist").refreshShowListView(data);
    });
}


/****************************************************在线收藏***********************************/

function listGoodTuijian(){

    ajaxCallback("listJ",{table:"good",xinqing:userinfo.xinqing,yanse:userinfo.yanse},function (data) {
        var p2 = {};
        p2.tpl = '<li onclick="toGood(%s);">'+
            '<img style="height: 80px;" src="'+fileurl+'%s">'+
            '<h2>%s</h2>'+
            '<p>%s</p>'+
            '<p style="color: red;">价格:%s 元</p>'+
            '</li>';
        p2.colums = ["id","img","gname","note","price"];
        $("#goods2").data("property",JSON.stringify(p2));
        $("#goods2").refreshShowListView(data);
    })

}