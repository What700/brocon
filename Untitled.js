var storyContent = {"inkVersion":21,"root":[["^你感觉撑不下去了。","\n","^或许这就是你政治生涯的结束。这个幕府已经不再需要你。空酒瓶越来越多。","\n",["ev",{"^->":"0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^你决定向兄长请求退隐。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.4.s"},[{"#n":"$r2"}],"\n","^兄长同意了……你松了一口气……","\n","^兄长收回了同意。为什么？","\n","^城里起了骚动。你彻底离开会好一点么？","\n",{"->":"choice"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"choice":[["ev","str","^你再度向兄长请求退隐。","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",["ev","visit",8,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"ev","du",6,"==","/ev",{"->":".^.s6","c":true},"ev","du",7,"==","/ev",{"->":".^.s7","c":true},"ev","du",8,"==","/ev",{"->":".^.s8","c":true},"nop",{"s0":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s1":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s2":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s3":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s4":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s5":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s6":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s7":["pop","^兄长拒绝了。",{"->":".^.^.59"},null],"s8":["pop",{"->":"choice1"},{"->":".^.^.59"},null],"#f":5}],{"->":"choice"},"\n",{"#f":5}]}],{"#f":1}],"choice1":[[["ev",{"^->":"choice1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^你再度向兄长请求退隐。",{"->":"$r","var":true},null]}],["ev",{"^->":"choice1.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^你同意收回退隐请求",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"choice1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^你不知道自己还能再坚持多久。","\n","^使者的眼神好像在请求你不要再继续下去了。","\n","^这话应该和兄长说吧？","\n","^你很久没有对兄长生气了。就连生气的力气也没了。","\n","^如果和兄长面对面，你可以坚决地拒绝他的挽留么？","\n","^你不知道。","\n","^使者离去。夜晚，你辗转反侧，酒精令你大脑昏眩。好不容易才迷迷糊糊沉入梦乡，却在夜半惊醒。","\n","^眼前一团黑暗。迟钝的直觉告诉你有什么不对劲。你努力睁大眼睛，好不容易才意识到，那并不是夜色，而是有什么遮挡住了你的视线。那面貌模糊的东西正趴在你身上。你听见颤抖的呼吸声。面上呼过温热压抑的吐息。","\n","^“直义……为什么一定要离开我？”","\n","^你感觉一滴滚烫的液体滴落在脸颊上，向下滑落到嘴角，淌进唇齿之间。是咸的。","\n",[["^达成结局【？】","\n",{"->":"end"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-1":["ev",{"^->":"choice1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^你心知肚明，再继续下去，也只是徒劳地拖延时间。你终究还是拒绝不了兄长。你收回了退隐的请求。","\n","^得到消息之后，兄长兴高采烈地拉着你和你的侄子，说要签下和平的协约。他笑着说一切就和以前一样，什么都不会变。","\n","^真的什么都不会变么？","\n","^你看着他与过往如出一辙的笑颜。轻薄的天光明亮起来了，将室内的晦暗一扫而空，他的笑容也在这光明之中模糊了轮廓，一下子便看不清了。","\n","^达成结局【观应扰乱 第二回合】","\n",{"->":"end"},{"#f":5}]}],{"#f":1}],"end":[["^回到前一个选项么？","\n","ev","str","^是","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^否","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"choice1"},{"#f":5}],"c-1":["\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};