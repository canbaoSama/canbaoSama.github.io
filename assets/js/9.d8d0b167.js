(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1043:function(t,a,n){"use strict";n.r(a);var s,i=n(252),e=(n(158),{props:(s={id:{type:String,default:"Z95Q021361"},checkIn:{type:String,default:"4A"},trainType:{type:String,default:"G"},trainId:{type:String,default:"1560"}},Object(i.a)(s,"trainType",{type:String,default:"G"}),Object(i.a)(s,"startStation",{type:String,default:"杭州东"}),Object(i.a)(s,"endStation",{type:String,default:"宁波"}),Object(i.a)(s,"startStationEn",{type:String,default:"HangZhouDong"}),Object(i.a)(s,"endStationEn",{type:String,default:"NingBo"}),Object(i.a)(s,"date",{type:String,default:"2018/03/26 08:44"}),Object(i.a)(s,"trainNum",{type:String,default:"15"}),Object(i.a)(s,"trainSeatNum",{type:String,default:"10D"}),Object(i.a)(s,"trainSeatLv",{type:String,default:"二等座"}),Object(i.a)(s,"price",{type:String,default:"80.5"}),Object(i.a)(s,"net",{type:Boolean,default:!0}),Object(i.a)(s,"footer",{type:String,default:"66100310950321Q021361郑州东售"}),s),computed:{year:function(){return new Date(this.date).getFullYear()},month:function(){return this.appendZero(new Date(this.date).getMonth()+1)},day:function(){return this.appendZero(new Date(this.date).getDate())},hour:function(){return this.appendZero(new Date(this.date).getHours())},minute:function(){return this.appendZero(new Date(this.date).getMinutes())}},methods:{appendZero:function(t){return t<10?"0"+t:t}}}),r=(n(990),n(68)),c=Object(r.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"train-ticket"},[s("p",[s("span",{staticClass:"id"},[t._v(t._s(t.id))]),t._v(" "),"none"!=t.checkIn?s("span",{staticClass:"check-in"},[t._v("检票："+t._s(t.checkIn))]):t._e()]),t._v(" "),s("div",{staticClass:"station flex"},[s("div",{staticClass:"train-id"},[t._v("\n      "+t._s(t.trainType)+"\n      "),s("span",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.trainId))])]),t._v(" "),s("div",{staticClass:"start-station"},[s("p",[s("span",{staticClass:"station-cn"},[t._v(t._s(t.startStation))]),t._v(" "),s("span",{staticClass:"zhan"},[t._v("站")])]),t._v(" "),s("p",[s("span",{staticClass:"station-pinyin"},[t._v(t._s(t.startStationEn))])])]),t._v(" "),s("div",{staticClass:"end-station"},[s("p",[s("span",{staticClass:"station-cn"},[t._v(t._s(t.endStation))]),t._v(" "),s("span",{staticClass:"zhan"},[t._v("站")])]),t._v(" "),s("p",[s("span",{staticClass:"station-pinyin"},[t._v(t._s(t.endStationEn))])])])]),t._v(" "),s("div",{staticClass:"second"},[s("span",{staticClass:"time"},[t._v("\n      "+t._s(t.year)+"\n      "),s("span",{staticClass:"unit"},[t._v("年")]),t._v("\n      "+t._s(t.month)+"\n      "),s("span",{staticClass:"unit"},[t._v("月")]),t._v("\n      "+t._s(t.day)+"\n      "),s("span",{staticClass:"unit"},[t._v("日")]),t._v("\n      "+t._s(t.hour)+":"+t._s(t.minute)+"\n      "),s("span",{staticClass:"unit"},[t._v("开")])]),t._v(" "),s("span",[t._v("\n      "+t._s(t.trainNum)+"\n      "),s("span",{staticClass:"unit"},[t._v("车")]),t._v("\n      "+t._s(t.trainSeatNum)+"\n      "),s("span",{staticClass:"unit"},[t._v("号")])])]),t._v(" "),s("div",{staticClass:"third flex"},[s("div",[s("span",{staticClass:"unit"},[t._v("￥")]),t._v("\n      "+t._s(t.price)+"\n      "),s("span",{staticClass:"unit"},[t._v("元")])]),t._v(" "),s("div",[t.net?s("span",[t._v("网")]):t._e()]),t._v(" "),s("div",[t._v(t._s(t.trainSeatLv))])]),t._v(" "),s("div",{staticClass:"forth"},[t._v("限乘当日当次车")]),t._v(" "),t._m(0),t._v(" "),s("img",{staticClass:"qrcode",attrs:{alt:"",src:n(988)}}),t._v(" "),s("img",{staticClass:"train-bg",attrs:{alt:"",src:n(989)}}),t._v(" "),s("div",{staticClass:"footer"},[t._v(t._s(t.footer))])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"fivth"},[this._v("\n    3623\n    "),a("span",[this._v("** **** **** **")]),this._v("19 桑杭宁\n  ")])}],!1,null,"6e6ec861",null);a.default=c.exports},906:function(t,a,n){},988:function(t,a,n){t.exports=n.p+"assets/img/train-ticket-qrcode.d2821d48.png"},989:function(t,a,n){t.exports=n.p+"assets/img/train.1624fa35.png"},990:function(t,a,n){"use strict";n(906)}}]);