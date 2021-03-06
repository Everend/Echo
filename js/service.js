$(function(){
    var arr1 = ['客户','实施','服务'],
        arr2 = ['咨询','实施','售后'],
        arr3 = ['物业企业咨询数据报告','物业企业实施数据报告','系统运行体检报告'], 
        arr4 = ['标杆企业典型应用案例','行业优秀实施经验分析','物业企业售后服务月报'],
        arr5 = ['提供企业咨询数据报告，基于13年来的咨询服务经验，帮助企业分析存在痛点，为企业提供个性化解决方案，帮助企业提高竞争力','提供企业实施数据报告，基于13年来的实施服务经验，最大限度地发挥软件系统的价值，为客户量身定制实施方案，确保实施成功','供企业系统运行的数据报告，服务过程中定期提供各类型系统运行建议，全面诊断系统的运行状况，给出实际解决建议'],
        arr6 = ['提供同行业优秀应用案例，为企业提供专属行业场景，通过真实有效案例，为企业提供专业可借鉴的物业信息化建设方案','提供同行业优秀实施案例，为企业提供专属行业场景，通过真实有效案例，为企业提供专业可借鉴的物业信息化建设方案','按月展示服务内容，内容、过程、结果清晰明确，领导可全程掌控'],
        arr7 = [[1,2,3],[1,2,4],[5,6,4]],
        arr8 = [['一对一全程服务','咨询专家团队响应','7*24小时咨询服务'],['一对一全程服务','专业实施团队','微信实施法'],['有问必答','全程跟踪','7*24小时售后服务']],
        arr9 = [['1位专属项目经理，提供实用的业务匹配方案和专业的信息化建设咨询服务','13年来，新视窗培养出一批经验丰富、熟悉物业企业业务管理模式的咨询专家团队，以专业的业务和服务能力做坚实支撑','全天候咨询服务团队，7*24小时电话为物业企业提供信息化咨询服务'],['1位专属项目经理，提供实用的业务匹配方案和专业的信息化建设咨询服务','高层挂帅，全员参与项目启动，坚持组织保障，根据客户情况各角色到位，各司其职','建立微信项目管理群，进度情况、阶段成果、遇到困难领导可随时掌握'],['有问必答在线答疑平台，需求提交不被遗漏、问题处理过程实时跟踪','在售后服务各个阶段，提供阶段性的回访电话服务，及时了解进展及问题','全天候售后服务团队，7*24小时电话为企业提供专业技术支持服务']],
        arr10 = [['实施经验','行业标准','制度建设','参观交流'],['数据一键导入','系统管理员培养','培训认证','实施周报'],['多种渠道','行业标准','服务器维护','系统升级']],
        arr11 = [['两百余家物业一级资质企业实施经验传递','收集最先进的行业标准，集成到系统并落地','协助物业企业信息化制度建设','行业优秀案例参观交流安排'],['企业历史数据支持一键导入，避免传统软件繁杂的数据整理和迁移','全程提供系统化培训，为客户培养合格系统管理员，可独立实施项目','软件系统简单易用<br>，提供自助的学习及考试渠道，新员工可快速掌握上手','每周实施进度汇报<br>，既关注全局，又重视当前任务完成情况'],['提供电话、QQ、微信、钉钉等多种服务渠道，全方位提供专业服务','通过系统操作视频<br>、在线操作指南，简单问题客户可随时自行解决','阿里云服务器维护服务，企业无需操心','每月2次系统升级服务，客户可随时体验最新系统']];
    $('.item li').each(function(index){
        $(this).tap(function(){
            if(index === 0){
                $('.two').css('background-color','#5739f4');
                $('.four').css('background-color','#16aab9');
                $('.two h2, .two h3, .two p, .four h3, .four h2, .four p').css('color','white');
            }else{
                $('.two, .four').css('background-color','#eaf0f7');
                $('.two h2, .two h3, .four h2, .four h3').css('color','#333333');
                $('.two p, .four p').css('color','#666666');
            }
            $('.one span').text(arr1[index]);
            $('.one img').attr('src','img/service-one'+(index+1)+'.png');
            $('.two span, .four span').text(arr2[index]);
            $('.two h3:eq(0)').text(arr3[index]);
            $('.two h3:eq(1)').text(arr4[index]);
            $('.two p:eq(0)').text(arr5[index]);
            $('.two p:eq(1)').text(arr6[index]);
            $('.two img').each(function(num){
                $(this).attr({src:'img/service-two'+(index*2+num+1)+'.png',class:'two'+(index*2+num+1)});
            });
            $('.three .circle li').each(function(num){
                $(this).css('background-image','url(img/service-three'+arr7[index][num]+'.png)');
            });
            $('.three h3').each(function(num){
                $(this).text(arr8[index][num]);
            });
            $('.three p').each(function(num){
                $(this).text(arr9[index][num]);
            });
            $('.four h3').each(function(num){
                $(this).text(arr10[index][num]);
            });
            $('.four p').each(function(num){
                $(this).html(arr11[index][num]);
            });
            $('.four li').each(function(num){
                $(this).attr('class','four'+(index*4+num+1));
            });
            $('.five').removeClass('show').eq(index).addClass('show');
        });  
    });
});