
Social Media Rotator - Copy of SocialMedia Rotation Widget by Benno
https://streamelements.com/overlay/63585336676f3d46f2a7d4dd/yNZRpfPCZHDR-0bJsegP42pvjL_DyIz2TTMrr2OMwLayFbyc
Layers
Settings
Fields
Font family
Montserrat
Font color
#ffffff
Font size
60
Font Weight
Bold (700)
Order social 1
Icon First
Social 1 name
vhmpontes
Social 1 FontAwesome icon color
#1da1f2
Social 1 FontAwesome icon
twitter
Social 1 upload icon
Show social 1 icon:
Social 1 FontAwesome icon
Order social 2
Icon First
Social 2 name
LeChuck311
Social 2 FontAwesome icon color
#ff0000
Social 2 FontAwesome icon
youtube
Social 2 upload icon
Show social 2 icon:
Social 2 FontAwesome icon
Order social 3
Icon First
Social 3 name
vhpontes
Social 3 FontAwesome icon color
#e1306c
Social 3 FontAwesome icon
instagram
Social 3 upload icon
Show social 3 icon:
Social 3 FontAwesome icon
Order social 4
Icon First
Social 4 name
LeChuck311
Social 4 FontAwesome icon color
#6441a5
Social 4 FontAwesome icon
twitch
Social 4 upload icon
Show social 4 icon:
Social 4 FontAwesome icon
Animation In time ms
400
Display time ms
6000
Animation Out time ms
400
Time between each social (in ms)
400
Time before socials repeats itself (in ms)
400
Animation In:
bounceInRight
Animation Out:
bounceOutRight
Position, size and style
Width
PX
Height
PX
Top
Left
Animation settings
Duration (seconds)
Duration (seconds)
650 x 80

1
// This widget contains content from @lx who made the Top Events Rotator 
2
// (https://github.com/StreamElements/widgets/blob/master/TopEventsRotator/widget.js)
3
// which was an inspiration for this widget. 
4
// Thank you very much @lx for helping me developing this widget.
5
​
6
let elements = [
7
  {
8
    name: "{{el1Name}}",
9
    icon: "{{el1Icon}}",
10
    link: "{{el1IconLink}}",
11
    color: "{{el1Color}}",
12
    showImage: "{{el1IconShow}}",
13
    order: "{{icon1SocialOrder}}"
14
  },
15
  {
16
    name: "{{el2Name}}",
17
    icon: "{{el2Icon}}",
18
    link: "{{el2IconLink}}",
19
    color: "{{el2Color}}",
20
    showImage: "{{el2IconShow}}",
21
    order: "{{icon2SocialOrder}}"
22
  },
23
  {
24
    name: "{{el3Name}}",
25
    icon: "{{el3Icon}}",
26
    link: "{{el3IconLink}}",
27
    color: "{{el3Color}}",
28
    showImage: "{{el3IconShow}}",
29
    order: "{{icon3SocialOrder}}"
30
  },
31
  {
32
    name: "{{el4Name}}",
33
    icon: "{{el4Icon}}",
34
    link: "{{el4IconLink}}",
35
    color: "{{el4Color}}",
36
    showImage: "{{el4IconShow}}",
37
    order: "{{icon4SocialOrder}}"
38
  },
39
  {
40
    name: "{{el5Name}}",
41
    icon: "{{el5Icon}}",
42
    link: "{{el5IconLink}}",
43
    color: "{{el5Color}}",
44
    showImage: "{{el5IconShow}}",
45
    order: "{{icon5SocialOrder}}"
46
  },  
47
    /*              // To use more than 4 icons copy this example 
48
  {
49
    name: "exampleName",
50
    icon: "discord",
51
    link: "https://uc45c92bdd0662d16394d3c6af22.previews.dropboxusercontent.com/p/thumb/AAbkIz3hWBqFshHVDB6EJGzzjkB4c1qXytULt6Q_ptoZ_KJQ5oxLXOgwuDZxHtMuGSbRmby2wAgiKWGBH727ZJS5lZmUsMFEt0oObn-BwVWR8cDYyC80QgjAq58K6pYdswGqqWooE0AkF5mV4nVkaXuxzTyZ_CJaCL_hIf8JTIWkBSLoQlv8Cn93TwdQx7UG7tEJ8gO_-IybOm0hlyq3-SJwP8MbL3VqWFv4P9w1yR-s4I9H99m09gZXkzDtm8fgRFni2XapqtNimJ15JRo8bZ2x4hbp8Jfv6BInCj9-wNNhNevQkKQPMHQZXRQeuUFojqguDKcPytXyI6I4oR-dKbkh/p.png?fv_content=true&size_mode=5",
52
    color: "#7289DA",
53
    showImage: "fontawesome", //none, fontawesome, url
54
    order: "iconfirst" //iconfirst, socialfirst
55
  },
56
    */
57
];
58
​
59
let next = 0;
60
let amount = 0;
61
let box;
62
let animationIn = 'bounceIn';
63
let animationOut = 'bounceOut'
64
let timeIn = 400;
65
let timeDisplay = 4000;
66
let timeOut = 400;
67
let timeInBetween = 400;
68
let timeDelay = 400;
69
​
70
window.addEventListener('onWidgetLoad', function (obj) {
71
  const fieldData = obj.detail.fieldData;
72
  animationIn = fieldData['animationIn'];
73
  animationOut = fieldData['animationOut'];
74
  timeIn = fieldData['timeIn'];
75
  timeDisplay = fieldData['timeDisplay'];
76
  timeOut = fieldData['timeOut'];
77
  timeInBetween = fieldData['timeInBetween'];
78
  timeDelay = fieldData['timeDelay'];
79
  slideTime = timeIn + timeDisplay + timeOut + timeInBetween;
80
​
81
  for (element of elements) {
82
    if (element.order == 'iconfirst') {
83
        s = `<div class="mySlides">
84
          <div>
85
        ${element.showImage === 'url' ? `<span class="imgcontainer"> <img class="image" src="` + element.link + `"></img></span>` : ''}
86
        ${element.showImage === 'fontawesome' ? `<span style="color:` + element.color + `" class="fab fa-${element.icon}"></span>` : ''}
87
        <span id=username>${element.name}</span>
88
          </div>
89
        </div>`;
90
    }
91
    else if (element.order == 'socialfirst') {
92
        s = `<div class="mySlides">
93
          <div>
94
        <span id=username>${element.name}</span>
95
        ${element.showImage === 'url' ? `<span class="imgcontainer"> <img class="image" src="` + element.link + `"></img></span>` : ''}
96
        ${element.showImage === 'fontawesome' ? `<span style="color:` + element.color + `" class="fab fa-${element.icon}"></span>` : ''}
97
          </div>
98
        </div>`;
99
    }
100
    $(".container").append(s);
101
  }
102
​
103
  box = $(".mySlides");
104
  amount = box.length;
105
  showSlide(next);
106
​
107
  function showSlide(i) {
108
    $(box[i])
109
      .addClass(animationIn + ' animated', timeIn)
110
      .show(0, timeIn)
111
      .delay(timeDisplay)
112
      .removeClass(animationIn, timeDisplay)
113
      .addClass(animationOut, timeOut)
114
      .removeClass(animationOut + " animated", timeOut)
115
      .hide(0, timeOut);
116
    next++;
117
    if (next >= amount) {
118
      next = 0;
119
      setTimeout(function () {
120
        showSlide(next)
121
      }, slideTime + timeDelay - timeInBetween);
122
    } else {
123
      setTimeout(function () {
124
        showSlide(next)
125
      }, slideTime);
126
    }
127
  }
128
  
129
});
130
​
