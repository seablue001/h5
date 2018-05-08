<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
		<title>注册页</title>
		<link href="../layui/css/layui.mobile.css">
		<script type="text/javascript" src="../js/jquery-3.1.0.min.js"></script>
		<script type="text/javascript" src="../layui/layui.all.js"></script>
		<script src="/js/jsencrypt.min.js"></script>
		<style type="text/css">
			
			html{font-size: 100px;}
			body{font-size: .35rem;background: #f0f0f0;}
			
			
			*{margin: 0;padding: 0;}
			a:link,a:hover,a:active,a:visited{text-decoration: none;}
			
			.clearfix::after{content: '';display: block;height:0;visibility: hidden;clear: both;}
			
			
			header{background: #393a3f;padding: .25rem 0;}
			.close{width: .35rem;float:left;padding:.1rem .33rem;border-right: 1px solid #2d2d31;}
			header h2{font-weight: normal;float:left;color: #fff;font-size: .38rem;padding: 0 .25rem;}
			.share{width: .55rem;float:right;padding:0 .33rem;}
			
			
			section{background: #228fdb;padding: .25rem .28rem .3rem;box-sizing: border-box;}
			.back{float: left;width: .38rem;}
			section p{color: #fff;text-align: center;}
			
			
			.formItem {padding: .2rem 0;height: .63rem;border-bottom: 1px solid #e9e9e9;position: relative;background: #fff;}
			.formItem label{display: inline-block;padding-left: .3rem;width: 2rem;box-sizing: border-box;line-height: .63rem;font-size: .26rem;}
			.formItem input,.formItem p{height: .6rem;line-height: .6rem;width: 5rem;display: inline-block;border: none;font-size: .26rem;}
			.formItem input:disabled{background: #fff;}

			.getCode{position: absolute;right: .12rem;top: .2rem;width:2rem;background: #228fdb;color: #fff;font-size: .24rem;border-radius: .07rem;border: none;display: block;padding: .15rem .22rem;}
			.agreement{padding: .32rem;margin-bottom: .54rem;}
			.agreement input[type=checkbox]{width: .34rem;display: inline-block;position: relative;height: .01rem;}
			.agreement input[type=checkbox]::before{position: absolute;content: "";top: -.3rem;left: 0;width: .34rem;height: .34rem;background: #fff;border: 1px solid #c2c2c2;line-height: .34rem;border-radius: .05rem;}
			.agreement input[type=checkbox]:checked::before{position: absolute;content: "";top: -.3rem;left: 0;width: .34rem;height: .34rem;background: #228fdb url("../image/check.png") no-repeat center ;border: 1px solid #228fdb;line-height: .34rem;border-radius: .05rem;background-size: 90%;}
			.agreement p{display: inline-block;font-size: .28rem;color: #818181;}
			.agreement p a{color: #005cf0;}
			.log,.download{width: 6.9rem;margin:.32rem .3rem 0;background: #228fdb;color: #fff;height: .83rem;line-height: .83rem;font-size: .26rem;text-align: center;border: none;border-radius: .1rem;}
			.log:disabled{background: #ccc;}
		</style>
	</head>
	<body>
		<section class="">
			<img src="../image/back.png" class="back"/>
			<p>注册</p>
		</section>

		<form id="registerForm">
			<div class="formItem">
				<label for="">手机号</label>
				<input type="text" name="mobile" id="mobile" placeholder="请输入手机号"/>
			</div>
			<div class="formItem">
				<label for="">短信验证码</label>
				<input type="number" name="authcode"  value="" id="authcode" placeholder="请输入验证码"/>
				<button type="button" class="getCode" id="getCode">获取验证码</button>
			</div>
			<div class="formItem">
				<label for="">登录密码</label>
				<input type="password" id="pass1"  placeholder="请输入登录密码"/>
			</div>
			<div class="formItem">
				<label for="">确认密码</label>
				<input type="password" id="pass2" placeholder="请输入确认密码"/>
				<input type="hidden" name="password" id="pass3" placeholder="请输入确认密码"/>
			</div>
			<div class="formItem">
				<label for="">邀请码 </label>
				<p>${code}</p>
				<input type="hidden" name="regCode"  value="${code}"  />
			</div>
			<div class="agreement">
				<input type="checkbox" name="" id="" value="" onclick="isRead(this)" />
				<p>我已阅读并同意<a href="../contract.html">《软件许可及服务协议》</a></p>
			</div>
			<button class="log" disabled id="register" type="button">注册</button>
			<input type="hidden" name="type" value="1"/>
		</form>
		<button class="download"  onclick="downloadAPP()">下载APP</button>
	</body>
</html>

<script type="text/javascript">

    var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCTrzMjhdhm73apUJQurTBEEFZjMJ1pXAnhP+l7bLdXjIOtxwKVZMckFGHKyhxQGDT2yKKOqI5R9hrtXESq1r6rjutM4CuKYezcZ07UGjy8D6HEkEN11eiYCuWTG/Hb1+25iT1tkCfsZZGk9s5o+I+c3Q8ui2w1Ft996770rv7xTwIDAQAB";
	
	(function(doc,win){
		
		var docEl = doc.documentElement;
		
		resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
		
		recalc = function(){
			
			var cw = docEl.clientWidth;

			if( !cw )return;
			if(cw > 750){
				docEl.style.fontSize = 100 + "px";
			}else{
				docEl.style.fontSize = 100 * ( cw / 750 ) + "px"
			}
		};
		
		if(!doc.addEventListener) return;
		doc.addEventListener("DOMContentLoaded", recalc, false);
		win.addEventListener(resizeEvt, recalc, false);	
		
	})(document,window)


    function isRead(obj){
        console.log($(obj)[0].checked);
        var isRead = $(obj)[0].checked;

        if(isRead){
            $('.log').removeAttr('disabled')
		}else{
            $('.log').attr('disabled','disabled')
		}

    }


	$(function () {
		$("#getCode").on("click",function () {
		    if($("#mobile").val().length!=11){
                JumpLayer("提示","请输入正确手机号");
				return false;
			}else {
                $.ajax({
					type:'post',
                    url:'${pageContext.request.contextPath}/notice/sms/authcode',
					data:{mobile:$("#mobile").val(),type:"reg"},
					dataType:'json',
					success:function (data) {
                        if(data.code=="0000"){
                            JumpLayer("提示","发送成功");
                            countTime('#getCode')
                        }else {
                            JumpLayer("提示",data.message);
                        }
                    }
                })
			}
        })

		$("#register").on("click",function () {
			if($("#mobile").val()==""){
                JumpLayer("提示","请输入手机号!");
				return false;
			}
            if($("#authcode").val()==""){
                JumpLayer("提示","请输入验证码!");
                return false;
            }
            if($("#pass1").val()!= $("#pass2").val()){
                JumpLayer("提示","密码不一致!");
                return false;
            }
            if($("#pass2").val()==""){
                JumpLayer("提示","密码不能为空");
				return false;
			}

			//对密码进行RSA加密
            var encrypt = new JSEncrypt();
            encrypt.setPublicKey(publicKey);
            var data = encrypt.encrypt($("#pass2").val());
            $("#pass3").val(encodeURI(data).replace(/\+/g, '%2B'))
            $.ajax({
				type:'post',
				url:'${pageContext.request.contextPath}/user/register',
				data:$("#registerForm").serialize(),
				dataType:'json',
				success:function (data) {

				    console.log(data)
                    if(data.code=="0000"){
                        JumpLayer("提示","注册成功");
                        $("#mobile").val()
                        $("#authcode").val()
                        $("#pass1").val()
                        $("#pass2").val()
                    }else {
                        alert(data.message)
                    }
                }
			})
        })
    })

    function countTime(obj) {

        var i = 60;
        var timer = setInterval(function() {

            $(obj).html(i);
           $(obj).attr('disabled','disabled')
            i--;

            if(i < 0) {
                clearInterval(timer);
                $(obj).removeAttr('disabled','disabled')
                $(obj).html('重新发送');
            }
        }, 1000)
    }

    //layer弹出框
    function JumpLayer(title, msg) {
        layui.use('layer', function() {
            var layer = layui.layer;

            layer.open({
                "title": title,
                "content": msg
            })
        })
    }

    //下载APP
	function downloadAPP() {
        alert("aa")
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
			 window.location.href = "https://www.pgyer.com/xrSD";
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
			 window.location.href = "https://www.pgyer.com/pPYv";
        }
    }



</script>
