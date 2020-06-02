// 获取元素
var arrow_l = document.querySelector(".arrow-l");
var arrow_r = document.querySelector(".arrow-r");
var focus = document.querySelector(".focus_f1");
var focusWidth = focus.offsetWidth;
// 鼠标经过focus就隐藏左右按钮
focus.addEventListener("mouseenter", function () {
  arrow_l.style.display = "block";
  arrow_r.style.display = "block";
  clearInterval(timer);
  timer = null;
});
focus.addEventListener("mouseleave", function () {
  arrow_l.style.display = "none";
  arrow_r.style.display = "none";
  timer = setInterval(function () {
    arrow_r.click();
  }, 2000);
});
// 生成动态的小圆
var ul = focus.querySelector("ul");
var ol = focus.querySelector(".circle");
// console.log(ul.children.length);
for (var i = 0; i < ul.children.length; i++) {
  var li = document.createElement("li");
  li.setAttribute("index", i);
  ol.appendChild(li);
  li.addEventListener("click", function () {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    this.className = "current";
    var index = this.getAttribute("index");
    //把li的索引号给num
    num = index;
    cirle = index;
    console.log(focusWidth);
    animate(ul, -index * focusWidth);
  });
}
ol.children[0].className = "current";
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);
var num = 0;
var cirle = 0;
var flag = true;
arrow_r.addEventListener("click", function () {
  if (flag) {
    flag = false;
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      num = 0;
    }
    num++;
    console.log(num);
    console.log(num * focusWidth);
    animate(ul, -num * focusWidth, function () {
      flag = true;
    });
    cirle++;
    if (cirle == ol.children.length) {
      cirle = 0;
    }
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[cirle].className = "current";
  }
});
arrow_l.addEventListener("click", function () {
  if (flag) {
    flag = false;
    if (num == 0) {
      num = ul.children.length - 1;
      ul.style.left = -num * focusWidth + "px";
    }
    num--;
    console.log(num);
    console.log(num * focusWidth);
    animate(ul, -num * focusWidth, function () {
      flag = true;
    });
    cirle--;
    if (cirle < 0) {
      cirle = ol.children.length - 1;
    }
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[cirle].className = "current";
  }
});
var timer = setInterval(function () {
  arrow_r.click();
}, 2000);
