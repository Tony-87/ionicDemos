require(['mock', 'jquery'], function (Mock) {

//2.1 登录
    Mock.mock(GLOBAL.ajaxUrl + '/user/signin', {
        'code': 200,
        'message': '操作成功！',
        "result":{
            "token": "@guid"
        }
    });
    //3.1 填写账户名，发送验证邮件
    Mock.mock(GLOBAL.ajaxUrl + '/user/retrievePwd1', {
        'code': 200,
        'message': '操作成功！',
        "result": "@guid"
    });

    //3.2 设置新密码
    Mock.mock(GLOBAL.ajaxUrl + '/user/retrievePwd2', {
        'code': 200,
        'message': '操作成功！',
        "result": "@guid"
    });
    //4.1 用户注册
    Mock.mock(GLOBAL.ajaxUrl + '/user/register', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "@guid"
        }
    });
    //4.3 用户注册验证
    Mock.mock(GLOBAL.ajaxUrl + '/user/registerCheck', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "@guid"
        }
    });



    //5.1 个人主页信息初始化
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/init', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "allImpactNum|1-10000": 10000, // 论文总影响因子
            "allPublishThesisNum|1-10000": 10000,// 论文发表总数
            "allQuestIAnswerAgreeNum|1-10000": 10000,// 我回答问题赞同总数
            "allQuestIAnswerNum|1-10000": 10000, // 我回答问题总评论数
            "allQuestIAskFollowNum|1-10000": 10000, // 我提问问题关注总数
            "allQuestIAskNum|1-10000": 10000, // 我提问问题总数
            "allQuestIAskViewNum|1-10000": 10000, // 我提问问题浏览总数
            "allThesisAnswerNum|1-10000": 10000, // 论文评论总数
            "allThesisFollowNum|1-10000": 10000, // 论文关注总数
            "allThesisViewNum|1-10000": 10000, // 论文浏览总数

            "allUnPublishAnswerNum|1-10000": 10000, // 未发表工作总评论数
            "allUnPublishNum|1-10000": 10000, // 未发表工作总数
            "allUnPublishViewNum|1-10000": 10000, // 未发表工作总浏览数

            "company": "@ctitle", // 公司
            "conferenceIAsks|1-5": [// 我参加的会议
                {
                    "conId|1-10000": 10000, // 会议id
                    "conferenceTitle": "@ctitle", // 会议标题
                    "conferenceDate": "@date" //会议时间
                }
            ],
            "currentUserId|1-10000": 10000, // 当前登陆人id
            "currentUserImg": Mock.Random.dataImage('36x36'), // 当前登陆人头像
            "degree": "@cname", // 最高学历
            "discussionGroups|1-5": [// 我加入的讨论组
                {
                    "groupId|1-10000": 10000,  //	 讨论组id
                    "title": "@ctitle", // 讨论组标题
                    "userNum|1-10000": 10000,  // 讨论组成员数量
                }
            ],
            "educations|1-5": [// 教育经历
                {
                    "beginDate": "@date", // 开始时间
                    "degree": "@cname", // 学历
                    "endDate": "@date", // 结束时间
                    "id": 1, // 主键
                    "profession": "@ctitle", // 专业
                    "school": "@ctitle" // 学校
                }
            ],
            "experiences|1-5": [// 工作经验
                {
                    "beginDate": "@date", // 开始时间
                    "company": "@ctitle", // 公司
                    "endDate": "@date", // 结束时间
                    "id": 0, // 主键
                    "job": "@ctitle" // 职位
                }
            ],
            "followToMes|15": [// 关注我的人
                {
                    "company": "@ctitle", // 用户公司
                    "impactnum": "99", // 学术影响值
                    "userId|1-100": 100, // 关注我的用户id
                    "userImg": Mock.Random.dataImage('36x36'), // 用户头像
                    "username": "@cname" // 用户名称
                }
            ],
            "frientIFollow|1-8": [// 我关注的好友列表
                {
                    "company": "@ctitle", // 用户公司
                    "impactnum|1-100": 100, // 学术影响值
                    "userId|1-1000": 1000, // 关注我的用户id
                    "userImg": Mock.Random.dataImage('36x36'), // 用户头像
                    "username": "@cname" // 用户名称
                }
            ],
            "fttms|4": [// 我关注的论文
                {
                    "coverImg": Mock.Random.dataImage('66x95'), // 封面图片
                    "thesisId|1-1000": 1000, // 论文id
                    "title": "@csentence" // 论文标题
                }
            ],
            "impactnum|1-1000": 10000, // 该用户影响因子
            "introduction": "@cparagraph", // 简介
            "isFollow": 1,//是否关注
            "isOwner": 0,// 是否本人主页,0不是本人1是本人,wxb
            "jobTitle": "@ctitle", // 职位
            "messageNum|1-1000": 1000, // 消息数量，页面右上角小信封使用
            "prizes|1-5": [// 获奖信息
                {
                    "name": "@ctitle", // 获奖名称
                    "prizeDate": "@date", // 获奖时间
                    "prizeLevel": "一等奖" // 获奖等级
                }
            ],
            "questionIAnswers|1-5": [//我回答的学术问题
                {
                    "answerItems|3": [// 回复内容
                        {
                            "agreeNum|1-100": 100, // 赞同数
                            "answerId|1-10000": 10000, // 回复id
                            "content": "@cparagraph" // 回复内容
                        }
                    ],
                    "questionId|1-100": 100, // 问题id
                    "questionTitle": "@csentence", // 问题标题
                    "userId|1-100": 100, // 提问者id
                    "username": "@cname", // 提问者姓名
                    "userImg": Mock.Random.dataImage('36x36') // 提问者头像
                }
            ],
            "questionIAsks|1-5": [// 我提问的学术问题
                {
                    "answerNum|1-100": 100, // 回答数量
                    "content": "@cparagraph", //	问题内容
                    "followNum|1-100": 100, // 关注数量
                    "questionId|1-100": 100,  // 问题id
                    "questionTitle": "@csentence", //	问题标题
                    "userId|1-100": 100, // 提问都头像
                    "userImg": Mock.Random.dataImage('36x36') // 提问者id
                }
            ],
            "questionIFlows|4": [// 我关注的问题
                {
                    "questionId|1-100": 100,  // 问题id
                    "title": "@csentence", // 问题标题
                    "answerNum|1-100": 100
                }
            ],
            "ranking|1-10000": 10000, // 名次，我在好友中学术影响值的排名
            "researchs": [// 科研
                {
                    "beginDate": "@date", // 开始时间
                    "endDate": "@date", // 结束时间
                    "fundCode": "56461-546", // 基金编号
                    "id|1-100": 100, // 主键
                    "joinType": 12, // 参与类型
                    "projectFrom":"@csentence",
                    "projectName": "@ctitle" // 项目名称
                }
            ],
            "subjectWords|1-10": [// 主题词列表
                {
                    "keywordId|1-100": 100,  // 主题词id
                    "keywordName": "@name" // 主题词
                }
            ],
            "summary": "@csentence", // 简介
            "thesisInfos|2": [// 我发表的论文列表
                {
                    "answerNum|1-100": 100,  // 评论数
                    "authors": "@cname", // 作者
                    "coverImg": Mock.Random.dataImage('108x144'), // 封面图片
                    "doi": "@guid",
                    "followNum|1-100": 100,  // 关注数
                    "hasFullText": 0, // 是否有全文，0没有，1有全文
                    "impactFactor": "654", // 影响因子
                    "summary": "@cparagraph", // 摘要
                    "thesisId|1-100": 100, // 论文id
                    "title": "@ctitle", // 论文标题
                    "viPage": "@title", // 卷期页码
                    "viewNum": "5465" // 浏览数
                }
            ],
            "thesisUnpublishes|1-3": [// 我未发表的工作列表
                {
                    "answerNum|1-100": 100,// 回答数量
                    "anthor": "@cname", // 作者
                    "thesisId|1-100": 100,// 论文id
                    "thesisTitle": "@ctitle", // 标题
                    "viewNum|1-100": 100// 浏览数量
                }
            ],
            "userId|1-100": 100, // 个人主页归属人
            "userImg": Mock.Random.dataImage('120x120', '头像'), // 头像
            "username": "@cname", // 姓名
            "zxingImg": Mock.Random.dataImage('120x120', '二维码') // 二维码

        }
    });

    //5.2 论文标签分页
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/thesisListInfo', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 100,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|2": [{
                "answerNum|1-100": 100,
                "authors:5": "@cname",
                "coverImg": Mock.Random.dataImage('108x144'),
                "doi": "@guid",
                "followNum|1-100": 100,
                "hasFullText|0-1": 1,
                "impactFactor": "564",
                "summary": "@cparagraph",
                "thesisId|1-100": 100,
                "title": "@ctitle",
                "viPage": "@ctitle",
                "viewNum|1-100": 100
            }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo": 1,
            "pageSize": -1,
            "prev": 1,
            "totalPage": 1
        }
    });

    //5.3 提问标签分页
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/questionIAsk', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 100,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|2": [{
                "answerNum|1-100000": 100,
                "content": "@cparagraph",
                "followNum": 100,
                "questionId": 100,
                "questionTitle": "@ctitle",
                "userId": 100,
                "userImg": Mock.Random.dataImage('50x50')
            }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo": 1,
            "pageSize": -1,
            "prev": 1,
            "totalPage": 1
        }
    });

    //5.4 回答标签分页
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/questionIAnswer', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 100,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|2": [{
                "answerItems|3": [{
                    "agreeNum|1-100": 100,
                    "answerId|1-10000": 10000,
                    "content": "@cparagraph"
                }
                ],
                "questionId": 100,
                "questionTitle": "@csentence",
                "useId": 100,
                "userImg": Mock.Random.dataImage('50x50')
            }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo": 1,
            "pageSize": -1,
            "prev": 1,
            "totalPage": 1
        }
    });

    //5.5 讨论组标签分页
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/discussionGroupList', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 100,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|5": [{
                "content": "@cparagraph",
                "discription": "@csentence",
                "groupId|1-100": 100,
                "title": "@ctitle",
                "userNum|1-100": 100
            }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo|1-20": 20,
            "pageSize": 10,
            "prev": 1,
            "totalPage|1-100": 100
        }
    });

    //5.6 未发表工作标签分页
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/thesisUnpublish', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 100,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|2": [{
                "answerNum": 100,
                "anthor": "@cname",
                "items": [{
                    "attachment": "",
                    "content": "@cparagraph",
                    "id": 100
                }
                ],
                "thesisId": 100,
                "thesisTitle": "@csentence",
                "viewNum": 100
            }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo": 1,
            "pageSize": -1,
            "prev": 1,
            "totalPage": 1
        }
    });

    //5.7 上传全文
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/uploadMaster', {
        'code': 200,
        'message': '操作成功！',
        "result": "@guid"
    });

    //5.8 删除主题词
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/deleteSubject', {
        'code': 200,
        'message': '操作成功！',
        "result": {}
    });

    //5.9 查询主题词
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/findSubject', {
        "code": 200,
        "message": "操作成功!",
        "result": {
            "count": 0,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|1-10": [
                {
                    "keywordId|1-1000": 1000,
                    "keywordName": "@cname"
                }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo": 1,
            "pageSize": -1,
            "prev": 1,
            "totalPage": 1
        }
    });

    //5.10 添加主题词
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/insertSubject', {
        'code': 200,
        'message': '操作成功！',
        "result": {}
    });

    //5.11 我的关注
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/findIFollow', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 12,
            "list|5": [{
                "company": "@county(true)",
                "followId": 100,
                "id": 100,
                "impactnum": "123",
                "isFollow|0-1": 0,
                "isFriend": 0,
                "userImg": Mock.Random.dataImage('36x36'),
                "username": "@cname"
            }
            ]
        }
    });

    //5.12 我的粉丝
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/findIFollowMe', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 12,
            "list|5": [{
                "company": "@county(true)",
                "followId": 100,
                "id": 100,
                "impactnum": "123",
                "isFollow|0-1": 0,
                "isFriend": 0,
                "userImg": "images/pic2.jpg",
                "username": "@cname"
            }
            ]
        }
    });

    //5.13 取消关注
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/cancelFollow', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "111111111"
        }
    });

    //5.14 关注
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/insertFollow', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "111111111"
        }
    });

    //5.15 关注论文
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/thesisIFollow', {
        "code": 200,
        "message": "操作成功!",
        "result": {
            "count": 0,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|10": [
                {
                    "answerNum|1-100": 100,
                    "authors|1-5": [
                        {
                            "userId|1-100": 100,
                            "username": "@cname"
                        }
                    ],
                    "followNum|1-100": 100,
                    "publishedIn": "",
                    "publishedTime": "@date",
                    "thesisId|1-100": 100,
                    "title": "@csentence",
                    "viPage|1-100": 100,
                    "viewNum|1-100": 100
                }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo": 1,
            "pageSize": -1,
            "prev": 1,
            "totalPage": 1
        }
    });

    //5.16 关注问题
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/findQuestionIFollowList', {
        "code": 200,
        "message": "操作成功!",
        "result": {
            "count": 0,
            "disabled": true,
            "first": 1,
            "firstPage": true,
            "firstResult": 0,
            "funcName": "page",
            "funcParam": "",
            "last": 1,
            "lastPage": true,
            "list|6": [
                {
                    "answerNum|1-100": 100,
                    "company": "@title",
                    "impactnum|1-100": 100,
                    "questionId|1-100": 100,
                    "title": "@csentence",
                    "userId|1-100": 100,
                    "userImg": Mock.Random.dataImage('36x36'),
                    "username": "@cname"
                }
            ],
            "maxResults": -1,
            "next": 1,
            "notCount": false,
            "orderBy": "",
            "pageNo": 1,
            "pageSize": -1,
            "prev": 1,
            "totalPage": 1
        }
    });

    //5.17 发消息
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/sendMessage', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "111111111"
        }
    });

    //5.18 删除学术论文
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/deleteThesis', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "111111111"
        }
    });

    //5.19 删除提问
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/deleteQuestion', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "111111111"
        }
    });

    //5.20 删除回答
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/deleteQuestionAnswer', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "111111111"
        }
    });

    //5.22 回答赞同用户列表
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/findUserAgreeAnswer', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "count": 12,
            "list|5": [{
                "company": "@county(true)",
                "followId": 100,
                "id": 100,
                "impactnum": "123",
                "isFollow|0-1": 0,
                "isFriend": 0,
                "userImg": "images/pic2.jpg",
                "username": "@cname"
            }
            ]
        }
    });

    //8.1 页面初始化查询


    //9.1 9.1创建讨论组询
    Mock.mock(GLOBAL.ajaxUrl + '/group/insertGroup', {
        'code': 200,
        'message': '操作失败！',
        "result|1-100": 100
    });


    //8.1 页面初始化查询
    //8.1 页面初始化查询
    //8.1 页面初始化查询





    //14我发表的全部论文
    Mock.mock(GLOBAL.ajaxUrl + '/thesis/findAllThesisToMe', {
        'code': 200,
        'message': '操作失败！',
        "result": {
            "allImpactNum": 256,
            "allPublishThesisNum": 0,
            "allThesisFollowNum": 0,
            "allThesisViewNum": 0,
            "isOwner": 1,
            "thesisInfos|2": [{
                "answerNum|1-1000": 1000,
                "authors": "@cname",
                "coverImg": "",
                "doi": "@guid",
                "followNum|1-1000": 1000,
                "impactFactor|1-1000": 1000,
                "summary": "@csentence",
                "thesisId": 1000,
                "title": "@title",
                "viPage": "@ctitle",
                "viewNum|1-1000": 1000
            }
            ]
        }
    });

    //提问
    Mock.mock(GLOBAL.ajaxUrl + '/main/sendQuestion', {
        'code': 200,
        'message': '操作成功！',
        "result": "@guid"
    });
    //取消关注用户
    Mock.mock(GLOBAL.ajaxUrl + '/homepage/cancelFollowUser', {
        'code': 200,
        'message': '操作成功！',
        "result": {
            "token": "111111111"
        }
    });

});
