// 多语言配置文件
const i18nConfig = {
    defaultLanguage: 'en',
    translations: {
        en: {
            "header.blog": "Blog",
            "header.radio": "What Is Amateur Radio",
            "about.title": "About Me",
            "about.content": "Hi, I'm Cade <br/>I enjoy programming and <a href='#' onclick='openRadioPage()'>amateur radio</a> in my spare time. My callsign is <a href='https://www.qrz.com/db/BG0FFH'>BG0FFH</a>. <br/>Curious about new technologies, and always open to learning.",
            "radio.title": "Amateur Radio",
            "radio.about": "About",
            "radio.timeline": [
                "Obtained the callsign <a href='https://www.qrz.com/db/BG0FFH' target='_blank'>BG0FFH</a> at the end of 2024.",
                "In 2020, I came across a video showing BG4QL receiving SSTV signals from the ISS, which sparked my strong interest in amateur radio.",
                "A friend gave me a Quansheng UV-K6, and I soon purchased a Yagi antenna to try receiving satellite signals.",
                "At the end of 2024, I passed the amateur radio operator exam and received my license.",
                "On January 9, 2025, I completed my first QSO via a local repeater with <a href='https://www.qrz.com/db/BG0EOQ' target='_blank'>BG0EOQ</a>.",
                "On January 27, 2025, I made my first satellite repeater QSO using the ISS repeater, contacting <a href='https://www.qrz.com/db/BG7QIW' target='_blank'>BG7QIW</a>.",
                "I experimented with digital modes using the Yaesu FT-70DR, but due to the limited number of local digital-mode operators, I haven't used it often.",
                "After learning about MMDVM, I purchased a duplex hotspot and began practicing English QSOs in the TG91 worldwide talkgroup.",
                "During a field activity, I met <a href='https://www.qrz.com/db/BG0EUQ' target='_blank'>BG0EUQ</a> and began learning about shortwave communication.",
                "I later acquired an ICOM IC-705 and a shortwave GP antenna to begin SWL on HF.",
                "In my spare time, I explored various communication modes with <a href='https://www.qrz.com/db/BG0EUQ' target='_blank'>BG0EUQ</a>, including D-STAR and RTTY.",
                "On May 23, 2025, I successfully made my first contact via the RS-44 linear transponder satellite with <a href='https://www.qrz.com/db/BG0EUQ' target='_blank'>BG0EUQ</a>.",
                "I currently hold a Class B license."
            ],
            "radio.equipment": "My equipments",
            "radio.activities": "Activities",
            "radio.contests": "Contests",
            "radio.myself": "Myself",
            "radio.satellite": "Satellite repeater",
            "radio.qo100": "The first successful amateur radio test via the QO-100 satellite was achieved.",
            "radio.field": "Field operation",
            "quote.title": "Everyday quote",
            "quote.loading": ":D Fetching...",
            "title": "Personal Page of Kokona",
            "radio.modal.title": "What Is Amateur Radio",
            "radio.modal.content": "Amateur radio is a hobby and service that allows individuals to communicate via radio waves on designated frequency bands. It's not just about communication technology, but also a global means of cultural exchange and emergency communication.",
            "radio.modal.gettingStarted": "How to Get Started",
            "radio.modal.steps": [
                "Learn basic radio knowledge",
                "Take the amateur radio operator exam",
                "Obtain your callsign and license",
                "Purchase equipment and start communicating"
            ],
            "radio.modal.methods": "Communication Methods",
            "radio.modal.methodsList": [
                "Local repeater communication",
                "Satellite communication",
                "Shortwave communication",
                "Digital mode communication"
            ]
        },
        zh: {
            "header.blog": "博客",
            "header.radio": "什么是业余无线电",
            "about.title": "关于我",
            "about.content": "你好，我是 凯德/Cade<br/>我喜欢编程和 <a href='#' onclick='openRadioPage()'>业余无线电</a>。我的呼号是 <a href='https://www.qrz.com/db/BG0FFH'>BG0FFH</a>。<br/>对新技术充满好奇，也乐于不断学习。",
            "radio.title": "业余无线电",
            "radio.about": "经历",
            "radio.timeline": [
                "于2024年底取得呼号 <a href='https://www.qrz.com/db/BG0FFH' target='_blank'>BG0FFH</a>。",
                "2020年看到BG4QL接收来自国际空间站的SSTV视频，从而对业余无线电产生浓厚兴趣。",
                "朋友赠送了泉盛UV-K6，对卫星通信产生兴趣后购买八木天线尝试接收。",
                "2024年底通过业余无线电操作证考试并获得执照。",
                "2025年1月9日通过本地中继与 <a href='https://www.qrz.com/db/BG0EOQ' target='_blank'>BG0EOQ</a> 完成首次通联。",
                "2025年1月27日使用国际空间站中继与 <a href='https://www.qrz.com/db/BG7QIW' target='_blank'>BG7QIW</a> 完成首个卫星通联。",
                "使用 Yaesu FT-70DR 尝试数字模式，但由于本地数字用户较少，使用频率不高。",
                "得知 MMDVM 后购入双工热点，在 TG91 世界组练习英语通联。",
                "在一次野架活动中认识 <a href='https://www.qrz.com/db/BG0EUQ' target='_blank'>BG0EUQ</a>，并开始了解短波通信。",
                "后续购入 ICOM IC-705 和短波GP天线，开始进行短波守听（SWL）。",
                "在业余时间与 <a href='https://www.qrz.com/db/BG0EUQ' target='_blank'>BG0EUQ</a> 一起尝试多种通信方式，如 D-STAR 与 RTTY。",
                "2025年5月23日，首次通过 RS-44 卫星线性转发器与 <a href='https://www.qrz.com/db/BG0EUQ' target='_blank'>BG0EUQ</a> 完成通联。",
                "现在持有B类执照操作证。"
            ],
            "radio.equipment": "我的设备",
            "radio.activities": "活动记录",
            "radio.contests": "竞赛",
            "radio.myself": "本人",
            "radio.satellite": "卫星中继通联",
            "radio.qo100": "QO-100卫星首次测试成功",
            "radio.field": "野架活动",
            "quote.title": "每日一言",
            "quote.loading": ":D 搜寻中...",
            "title": "Kokona的个人页",
            "radio.modal.title": "什么是业余无线电",
            "radio.modal.content": "业余无线电是一种允许个人在特定频段上进行无线电通信的爱好和服务。它不仅仅是通信技术，更是一种全球性的文化交流和应急通信手段。",
            "radio.modal.gettingStarted": "如何开始",
            "radio.modal.steps": [
                "学习无线电基础知识",
                "参加业余无线电操作证考试",
                "获得呼号和执照",
                "购买设备开始通联"
            ],
            "radio.modal.methods": "通联方式",
            "radio.modal.methodsList": [
                "本地中继通联",
                "卫星通联",
                "短波通联",
                "数字模式通联"
            ]
        }
    }
};
