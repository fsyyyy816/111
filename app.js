"use strict";


/* ======================================================
   01
   五个记忆
====================================================== */

const memories = [

  {

    type: "video",

    title: "关于告别",

    archive: "ARCHIVE 01",

    sequence:
      ["2","5","8","6","3"],

    file:
      "videos/farewell.mp4"

  },


  {

    type: "video",

    title: "童年玩过的游戏",

    archive: "ARCHIVE 02",

    sequence:
      ["1","4","7","8","9"],

    file:
      "videos/childhood-game.mp4"

  },


  {

    type: "video",

    title: "小时候手欠做过的事",

    archive: "ARCHIVE 03",

    sequence:
      ["3","6","5","4","1"],

    file:
      "videos/naughty.mp4"

  },


  {

    type: "story",

    title: "小时候撒过的谎",

    archive: "ARCHIVE 04",

    sequence:
      ["7","4","5","6","9"],

    image:
      "images/lie.jpg",

    story:
`小时候，我撒过一个很笨的谎。

小学的时候，我特别喜欢吃冰箱里的雪糕。

有一天晚上，我趁我妈洗澡的时候，偷偷拿了一根。

吃完以后，我怕被发现，就把包装袋塞到了沙发最下面。

第二天我妈问我：

“冰箱里的雪糕是不是你吃的？”

我特别坚定地说：

“不是我。”

后来她什么也没说。

直到晚上，我发现那个包装袋，已经被放在了我的书桌上。

她其实一直都知道。

但她没有拆穿我。

这可能是我人生第一次发现——

大人有时候，会假装相信小孩的谎。`,

    question:
      "你小时候，也撒过这样的谎吗？"

  },


  {

    type: "story",

    title: "小时候没实现的愿望",

    archive: "ARCHIVE 05",

    sequence:
      ["9","8","5","2","1"],

    image:
      "images/wish.jpg",

    story:
`我小时候一直想养一只狗。

每次路过宠物店，我都会站在玻璃外面看很久。

那时候我总跟我妈说：

“等我长大以后，我一定要养一只。”

我甚至已经想好了它的名字。

后来我真的长大了。

上学、搬家、实习、工作……

好像一直都没有一个“现在终于可以了”的时候。

前几天，我在路上看到一个小朋友牵着狗从我旁边经过。

我突然想起来——

原来小时候的我，还在等我完成这件事。`,

    question:
      "你小时候的那个愿望，后来实现了吗？"

  }

];



/* ======================================================
   02
   纸团池中的5个陌生人故事
====================================================== */
   /* ======================================================
   真实纸团 PNG 素材
====================================================== */

const paperBallImages = [

  "images/paper-ball-1.png",
  "images/paper-ball-2.png",
  "images/paper-ball-3.png",
  "images/paper-ball-4.png",
  "images/paper-ball-5.png"

];


function getRandomPaperBallImage() {

  const randomIndex =
    Math.floor(
      Math.random() *
      paperBallImages.length
    );


  return paperBallImages[
    randomIndex
  ];

}


const strangerStories = [

 



`高中毕业那天，我们说以后一定要经常见面。

后来聊天越来越少。

有一次我翻到以前的照片，才发现我们已经三年没有见过了。

我其实很多次想问一句：

“我们现在还是朋友吗？”

但最后都没有发出去。`,


`小时候我特别讨厌奶奶叫我多穿衣服。

每次她说，我都会很不耐烦地说：

“知道了，知道了。”

后来有一年冬天，我一个人在外地。

出门的时候突然发现很冷。

那一刻我下意识地想：

如果她在的话，一定又会让我多穿一件。`,


`初中的时候，我喜欢过一个人。

我们每天放学都会走同一条路。

有一天我已经决定告诉她了。

我甚至在路上练习了很多遍。

可真正走到那个路口的时候，

我还是只说了一句：

“明天见。”

后来，我们真的就只是明天见。`,


`小时候我和朋友在楼下埋过一个“宝藏”。

里面有玻璃珠、一张卡片，

还有我们写给未来自己的信。

我们约好十年以后一起回来挖。

后来那栋楼拆了。

我也不知道那个铁盒去了哪里。

有时候我会想：

如果有人挖到了，

会不会真的把那封信看完。`,


`小时候爸爸每次出门，

我都会跑到阳台看他的车开走。

后来我长大了。

每次回家，

都是他站在阳台看我离开。

有一次车开出去很远，

我从后视镜里发现他还站在那里。

那天我突然意识到：

原来我们的位置，

不知道什么时候交换了。`

];



/* ======================================================
   03
   获取网页元素
====================================================== */

const pages =
  document.querySelectorAll(".page");


const targetSequence =
  document.getElementById(
    "target-sequence"
  );


const inputProgress =
  document.getElementById(
    "input-progress"
  );


const unlockOverlay =
  document.getElementById(
    "unlock-overlay"
  );



const memoryVideo =
  document.getElementById(
    "memory-video"
  );


const videoTitle =
  document.getElementById(
    "video-title"
  );


const videoArchive =
  document.getElementById(
    "video-archive"
  );


const playVideoButton =
  document.getElementById(
    "play-video"
  );


const videoError =
  document.getElementById(
    "video-error"
  );


const skipVideo =
  document.getElementById(
    "skip-video"
  );


const videoStatus =
  document.getElementById(
    "video-status"
  );



const storyImage =
  document.getElementById(
    "story-image"
  );


const imageError =
  document.getElementById(
    "image-error"
  );


const storyArchive =
  document.getElementById(
    "story-archive"
  );


const storyTitle =
  document.getElementById(
    "story-title"
  );


const storyScroll =
  document.getElementById(
    "story-scroll"
  );


const storyText =
  document.getElementById(
    "story-text"
  );


const typingCursor =
  document.getElementById(
    "typing-cursor"
  );


const storyQuestion =
  document.getElementById(
    "story-question"
  );



const storyInput =
  document.getElementById(
    "story-input"
  );


const characterCount =
  document.getElementById(
    "character-count"
  );


const finishStory =
  document.getElementById(
    "finish-story"
  );


const noteDate =
  document.getElementById(
    "note-date"
  );



const crumpleNote =
  document.getElementById(
    "crumple-note"
  );


const crumpleText =
  document.getElementById(
    "crumple-text"
  );


const yourPaperBall =
  document.getElementById(
    "your-paper-ball"
  );



const memoryPool =
  document.getElementById(
    "memory-pool"
  );


const randomNumber =
  document.getElementById(
    "random-number"
  );


const drawMemory =
  document.getElementById(
    "draw-memory"
  );


const numberError =
  document.getElementById(
    "number-error"
  );



const chosenBall =
  document.getElementById(
    "chosen-ball"
  );


const hand =
  document.getElementById(
    "hand"
  );


const drawMessage =
  document.getElementById(
    "draw-message"
  );



const exchangeNote =
  document.getElementById(
    "exchange-note"
  );


const exchangeText =
  document.getElementById(
    "exchange-text"
  );


const exchangeNumber =
  document.getElementById(
    "exchange-number"
  );


const ending =
  document.getElementById(
    "ending"
  );


const restart =
  document.getElementById(
    "restart"
  );


const resetButton =
  document.getElementById(
    "reset-button"
  );



/* ======================================================
   04
   程序状态
====================================================== */

let currentMemory;

let currentInput = [];

let currentPage =
  "input";

let locked =
  false;

let typingTimer =
  null;

let typingIndex =
  0;

let userStory =
  "";

let selectedStory =
  0;



/* ======================================================
   05
   通用函数
====================================================== */

function delay(ms) {

  return new Promise(
    resolve =>
      setTimeout(resolve, ms)
  );

}



function showPage(pageID) {

  pages.forEach(
    page => {

      page.classList.remove(
        "active"
      );

    }
  );


  const newPage =
    document.getElementById(
      pageID
    );


  newPage.classList.add(
    "active"
  );


  currentPage =
    pageID.replace(
      "page-",
      ""
    );

}



function stopTyping() {

  if (typingTimer) {

    clearTimeout(
      typingTimer
    );

    typingTimer = null;

  }

}



/* ======================================================
   06
   随机选择一个记忆
====================================================== */

function chooseMemory() {

  const randomIndex =
    Math.floor(
      Math.random() *
      memories.length
    );


  currentMemory =
    memories[randomIndex];

}



/* ======================================================
   07
   显示数字路径
====================================================== */

function renderSequence() {

  targetSequence.innerHTML =
    "";


  currentMemory.sequence.forEach(
    (number, index) => {

      const numberElement =
        document.createElement(
          "span"
        );


      numberElement.className =
        "sequence-number";


      numberElement.textContent =
        number;


      targetSequence.appendChild(
        numberElement
      );


      if (
        index <
        currentMemory.sequence.length - 1
      ) {

        const arrow =
          document.createElement(
            "span"
          );


        arrow.className =
          "sequence-arrow";


        arrow.textContent =
          "→";


        targetSequence.appendChild(
          arrow
        );

      }

    }
  );

}



/* ======================================================
   08
   第一页数字输入
====================================================== */

function inputNumber(number) {

  if (
    currentPage !== "input"
  ) {

    return;

  }


  if (locked) {

    return;

  }


  animateKey(number);


  const expectedNumber =
    currentMemory.sequence[
      currentInput.length
    ];


  if (
    number === expectedNumber
  ) {

    currentInput.push(
      number
    );


    inputProgress.textContent =
      currentInput.join(
        "  →  "
      );


    if (
      currentInput.length ===
      currentMemory.sequence.length
    ) {

      unlockMemory();

    }

  }


  else {

    currentInput = [];


    inputProgress.textContent =
      "路径错误 · 请重新开始";


    locked = true;


    setTimeout(
      () => {

        locked = false;

        inputProgress.textContent =
          "等待输入";

      },

      700
    );

  }

}



/* ======================================================
   09
   数字动画
====================================================== */

function animateKey(number) {

  const button =
    document.querySelector(
      `.hop-key[data-key="${number}"]`
    );


  if (!button) {

    return;

  }


  button.classList.add(
    "pressed"
  );


  setTimeout(
    () => {

      button.classList.remove(
        "pressed"
      );

    },

    150
  );

}



/* ======================================================
   10
   解锁
====================================================== */

async function unlockMemory() {

  locked = true;


  inputProgress.textContent =
    "MEMORY FOUND";


  unlockOverlay.classList.add(
    "show"
  );


  await delay(1300);


  unlockOverlay.classList.remove(
    "show"
  );


  if (
    currentMemory.type ===
    "video"
  ) {

    openVideo();

  }


  else {

    openStory();

  }

}



/* ======================================================
   11
   视频记忆
====================================================== */

function openVideo() {

  showPage(
    "page-video"
  );


  videoTitle.textContent =
    currentMemory.title;


  videoArchive.textContent =
    currentMemory.archive;


  videoError.classList.add(
    "hidden"
  );


  playVideoButton.classList.add(
    "hidden"
  );


  videoStatus.textContent =
    "MEMORY IS LOADING";


  memoryVideo.pause();


  memoryVideo.src =
    currentMemory.file;


  memoryVideo.load();


  const playPromise =
    memoryVideo.play();


  if (playPromise) {

    playPromise

      .then(
        () => {

          videoStatus.textContent =
            "MEMORY IS PLAYING";

        }
      )

      .catch(
        () => {

          videoStatus.textContent =
            "WAITING FOR YOU";


          playVideoButton.classList.remove(
            "hidden"
          );

        }
      );

  }

}



playVideoButton.addEventListener(
  "click",

  () => {

    memoryVideo.play();

    playVideoButton.classList.add(
      "hidden"
    );

  }
);



memoryVideo.addEventListener(
  "ended",

  async () => {

    videoStatus.textContent =
      "MEMORY ENDED";


    await delay(1800);


    openWritePage();

  }
);



memoryVideo.addEventListener(
  "error",

  () => {

    videoError.classList.remove(
      "hidden"
    );

  }
);



skipVideo.addEventListener(
  "click",

  () => {

    openWritePage();

  }
);



/* ======================================================
   12
   图片故事
====================================================== */

function openStory() {

  showPage(
    "page-story"
  );


  storyArchive.textContent =
    currentMemory.archive;


  storyTitle.textContent =
    currentMemory.title;


  storyText.textContent =
    "";


  storyQuestion.textContent =
    currentMemory.question;


  storyQuestion.classList.add(
    "hidden"
  );


  typingCursor.classList.remove(
    "hidden"
  );


  storyImage.classList.remove(
    "hidden"
  );


  imageError.classList.add(
    "hidden"
  );


  storyImage.src =
    currentMemory.image;


  storyImage.onerror =
    () => {

      storyImage.classList.add(
        "hidden"
      );


      imageError.classList.remove(
        "hidden"
      );

    };


  typingIndex = 0;


  stopTyping();


  typingTimer =
    setTimeout(
      typeStory,
      600
    );

}



/* ======================================================
   13
   一个字一个字出现
====================================================== */

function typeStory() {

  const fullText =
    currentMemory.story;


  if (
    typingIndex >=
    fullText.length
  ) {

    finishStoryTyping();

    return;

  }


  const character =
    fullText[
      typingIndex
    ];


  storyText.textContent +=
    character;


  typingIndex++;


  storyScroll.scrollTop =
    storyScroll.scrollHeight;


  typingTimer =
    setTimeout(
      typeStory,
      typingDelay(character)
    );

}



/* ======================================================
   14
   打字速度
====================================================== */

function typingDelay(
  character
) {

  if (
    character === "\n"
  ) {

    return 350;

  }


  if (
    "。？！".includes(
      character
    )
  ) {

    return 260;

  }


  if (
    "，、；：".includes(
      character
    )
  ) {

    return 130;

  }


  if (
    character === "—"
  ) {

    return 180;

  }


  return 48;

}



/* ======================================================
   15
   故事读完
====================================================== */

function finishStoryTyping() {

  stopTyping();


  typingCursor.classList.add(
    "hidden"
  );


  storyQuestion.classList.remove(
    "hidden"
  );


  /*
    给观众时间看最后的问题
    5秒以后自动进入下一页
  */

  typingTimer =
    setTimeout(
      openWritePage,
      5000
    );

}



/* ======================================================
   16
   写自己的故事
====================================================== */

function openWritePage() {

  stopTyping();


  memoryVideo.pause();


  showPage(
    "page-write"
  );


  storyInput.value =
    "";


  characterCount.textContent =
    "0 / 260";


  finishStory.disabled =
    true;


  setTimeout(
    () => {

      storyInput.focus();

    },

    900
  );

}



storyInput.addEventListener(
  "input",

  () => {

    const length =
      storyInput.value.length;


    characterCount.textContent =
      `${length} / 260`;


    finishStory.disabled =
      storyInput.value
        .trim()
        .length < 2;

  }
);



finishStory.addEventListener(
  "click",

  () => {

    const text =
      storyInput.value.trim();


    if (
      text.length < 2
    ) {

      return;

    }


    userStory =
      text;


    startCrumple();

  }
);



/* ======================================================
   17
   揉纸动画
====================================================== */

async function startCrumple() {

  /* 进入揉纸页面 */

  showPage(
    "page-crumple"
  );


  /* 把观众刚才写的故事放进便签 */

  crumpleText.textContent =
    userStory;


  /* 随机选择一个真实纸团PNG */

  yourPaperBall.style.backgroundImage =
    `url("${getRandomPaperBallImage()}")`;


  /*
    每次重新进入时，
    先把纸团和便签恢复到初始状态
  */

  crumpleNote.style.opacity =
    "1";

  crumpleNote.style.visibility =
    "visible";

  crumpleNote.style.transform =
    "rotate(-1deg) scale(1)";

  crumpleNote.style.filter =
    "none";


  yourPaperBall.style.opacity =
    "0";

  yourPaperBall.style.visibility =
    "visible";

  yourPaperBall.style.transform =
    "scale(0.15) rotate(-20deg)";


  await delay(
    700
  );


  /* ==================================================
     第一阶段
     纸张开始收缩、变形
  ================================================== */

  const foldOne =
    crumpleNote.animate(

      [

        {
          transform:
            "rotate(-1deg) scale(1, 1)",

          borderRadius:
            "0px",

          filter:
            "none"
        },


        {
          transform:
            "rotate(4deg) scale(0.88, 0.96) skewX(-4deg)",

          borderRadius:
            "4% 7% 3% 6%",

          filter:
            "brightness(0.98)"
        },


        {
          transform:
            "rotate(-7deg) scale(0.72, 0.84) skewX(6deg) skewY(-3deg)",

          borderRadius:
            "11% 5% 14% 7%",

          filter:
            "brightness(0.95)"
        }

      ],

      {

        duration:
          700,

        easing:
          "cubic-bezier(.55,0,.45,1)",

        fill:
          "forwards"

      }

    );


  await foldOne.finished;



  /* ==================================================
     第二阶段
     左右、上下继续向中心挤压
  ================================================== */

  const foldTwo =
    crumpleNote.animate(

      [

        {
          transform:
            "rotate(-7deg) scale(0.72, 0.84) skewX(6deg)"
        },


        {
          transform:
            "rotate(18deg) scale(0.56, 0.63) skewX(-10deg) skewY(5deg)"
        },


        {
          transform:
            "rotate(-24deg) scale(0.40, 0.47) skewX(9deg) skewY(-7deg)"
        },


        {
          transform:
            "rotate(38deg) scale(0.28, 0.31)"
        }

      ],

      {

        duration:
          750,

        easing:
          "cubic-bezier(.65,0,.35,1)",

        fill:
          "forwards"

      }

    );


  await foldTwo.finished;



  /* ==================================================
     第三阶段
     便签快速压成一个小团
  ================================================== */

  const foldThree =
    crumpleNote.animate(

      [

        {
          transform:
            "rotate(38deg) scale(0.28)"
        },


        {
          transform:
            "rotate(78deg) scale(0.22, 0.17)"
        },


        {
          transform:
            "rotate(132deg) scale(0.14, 0.18)"
        },


        {
          transform:
            "rotate(185deg) scale(0.09)"
        }

      ],

      {

        duration:
          520,

        easing:
          "cubic-bezier(.7,0,.3,1)",

        fill:
          "forwards"

      }

    );


  await foldThree.finished;



  /*
    原便签消失
  */

  crumpleNote.style.opacity =
    "0";

  crumpleNote.style.visibility =
    "hidden";



  /* ==================================================
     第四阶段
     真实PNG纸团接上
  ================================================== */

  yourPaperBall.style.opacity =
    "1";


  const ballAppear =
    yourPaperBall.animate(

      [

        {
          transform:
            "scale(0.12) rotate(-25deg)",

          opacity:
            0
        },


        {
          transform:
            "scale(0.7) rotate(10deg)",

          opacity:
            0.75
        },


        {
          transform:
            "scale(1.08) rotate(-6deg)",

          opacity:
            1
        },


        {
          transform:
            "scale(1) rotate(4deg)",

          opacity:
            1
        }

      ],

      {

        duration:
          500,

        easing:
          "cubic-bezier(.15,.8,.25,1.15)",

        fill:
          "forwards"

      }

    );


  await ballAppear.finished;


  await delay(
    350
  );



  /* ==================================================
     第五阶段
     纸团向下坠落
  ================================================== */

  const falling =
    yourPaperBall.animate(

      [

        {
          transform:
            "translate(0, 0) rotate(4deg) scale(1)",

          opacity:
            1
        },


        {
          transform:
            "translate(35px, 80px) rotate(85deg) scale(.96)",

          opacity:
            1
        },


        {
          transform:
            "translate(-20px, 230px) rotate(190deg) scale(.9)",

          opacity:
            0.9
        },


        {
          transform:
            "translate(25px, 500px) rotate(330deg) scale(.72)",

          opacity:
            0
        }

      ],

      {

        duration:
          1050,

        easing:
          "cubic-bezier(.42,0,1,1)",

        fill:
          "forwards"

      }

    );


  await falling.finished;



  /* ==================================================
     进入记忆池
  ================================================== */

  openPool();

}



/* ======================================================
   18
   创建纸团池
====================================================== */

function createPool() {

  memoryPool.innerHTML = "";


  const amount = 35;


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const ball =
      document.createElement(
        "div"
      );


    ball.className =
      "paper-ball pool-ball";


    /*
      每个纸团随机使用5张真实PNG中的一张
    */

    ball.style.backgroundImage =
      `url("${getRandomPaperBallImage()}")`;


    /*
      随机大小
      比原来更大一些
      才能看清真实纸张褶皱
    */

    const size =
      72 +
      Math.random() * 65;


    ball.style.width =
      size + "px";


    ball.style.height =
      size + "px";


    /*
      横向随机位置
    */

    ball.style.left =
      Math.random() *
      94 +
      "%";


    /*
      纵向集中在页面底部
      让它像一个真正的“纸团池”
      而不是满天漂浮
    */

    ball.style.bottom =
      Math.random() *
      48 +
      "%";


    /*
      每个纸团随机旋转角度
    */

    const rotation =
      Math.random() *
      80 -
      40;


    ball.style.transform =
      `rotate(${rotation}deg)`;


    /*
      随机透明度
      增加前后层次
    */

    const opacity =
      0.82 +
      Math.random() *
      0.18;


    ball.style.opacity =
      opacity;


    /*
      动画错开
    */

    ball.style.animationDelay =
      (
        Math.random() *
        -5
      ) +
      "s";


    /*
      随机层级
      有些纸团在前面
      有些在后面
    */

    ball.style.zIndex =
      Math.floor(
        Math.random() * 5
      );


    memoryPool.appendChild(
      ball
    );

  }

}



/* ======================================================
   19
   打开记忆池
====================================================== */

function openPool() {

  showPage(
    "page-pool"
  );


  createPool();


  randomNumber.value =
    "";


  drawMemory.disabled =
    true;


  numberError.textContent =
    "";


  setTimeout(
    () => {

      randomNumber.focus();

    },

    800
  );

}



/* ======================================================
   20
   0—100数字
====================================================== */

randomNumber.addEventListener(
  "input",

  () => {

    const value =
      randomNumber.value;


    if (
      value === ""
    ) {

      drawMemory.disabled =
        true;


      numberError.textContent =
        "";


      return;

    }


    const number =
      Number(value);


    const valid =
      Number.isInteger(number) &&
      number >= 0 &&
      number <= 100;


    drawMemory.disabled =
      !valid;


    numberError.textContent =
      valid
      ? ""
      : "请输入 0—100 的整数";

  }
);



drawMemory.addEventListener(
  "click",

  () => {

    const number =
      Number(
        randomNumber.value
      );


    if (
      !Number.isInteger(number) ||
      number < 0 ||
      number > 100
    ) {

      return;

    }


    /*
      用参与者输入的数字
      决定抽到哪一个故事
    */

    selectedStory =
      number %
      strangerStories.length;


    startDrawAnimation();

  }
);



/* ======================================================
   21
   手取纸团
====================================================== */

async function startDrawAnimation() {

  showPage(
    "page-draw"
  );

  /*
    被手拿起来的纸团
    随机使用5张真实PNG中的一张
  */

  chosenBall.style.backgroundImage =
    `url("${getRandomPaperBallImage()}")`;


  chosenBall.classList.remove(
    "lift"
  );


  hand.classList.remove(
    "reach"
  );


  drawMessage.textContent =
    "正在寻找与你交换的记忆……";


  await delay(
    800
  );


  hand.classList.add(
    "reach"
  );


  await delay(
    800
  );


  chosenBall.classList.add(
    "lift"
  );


  drawMessage.textContent =
    "找到了一段陌生人的记忆";


  await delay(
    1200
  );


  openExchange();

}



/* ======================================================
   22
   展开陌生人的便签
====================================================== */

async function openExchange() {

  showPage(
    "page-exchange"
  );


  exchangeText.textContent =
    "";


  ending.classList.add(
    "hidden"
  );


  exchangeNote.classList.remove(
    "open"
  );


  exchangeNumber.textContent =
    String(
      selectedStory + 1
    ).padStart(
      2,
      "0"
    );


  await delay(
    300
  );


  exchangeNote.classList.add(
    "open"
  );


  await delay(
    1200
  );


  typeExchangeStory(
    0
  );

}



/* ======================================================
   23
   陌生人故事逐字出现
====================================================== */

function typeExchangeStory(
  index
) {

  const text =
    strangerStories[
      selectedStory
    ];


  if (
    index >=
    text.length
  ) {

    typingTimer =
      setTimeout(

        () => {

          ending.classList.remove(
            "hidden"
          );

        },

        900
      );


    return;

  }


  const character =
    text[index];


  exchangeText.textContent +=
    character;


  typingTimer =
    setTimeout(

      () => {

        typeExchangeStory(
          index + 1
        );

      },

      typingDelay(character)

    );

}



/* ======================================================
   24
   第一页鼠标点击
====================================================== */

document
  .querySelectorAll(
    ".hop-key"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        () => {

          inputNumber(
            button.dataset.key
          );

        }

      );

    }

  );



/* ======================================================
   25
   电脑键盘
====================================================== */

document.addEventListener(
  "keydown",

  event => {

    if (
      event.repeat
    ) {

      return;

    }


    /*
      第一页
      数字键1—9
    */

    if (
      currentPage === "input" &&
      /^[1-9]$/.test(
        event.key
      )
    ) {

      inputNumber(
        event.key
      );

    }


    /*
      R键管理员重置

      写故事的时候不触发，
      避免输入英文R误重置
    */

    if (
      (
        event.key === "r" ||
        event.key === "R"
      ) &&
      document.activeElement !==
      storyInput
    ) {

      resetExperience();

    }

  }
);



/* ======================================================
   26
   重新开始
====================================================== */

restart.addEventListener(
  "click",

  resetExperience
);


resetButton.addEventListener(
  "click",

  resetExperience
);



function resetExperience() {

  stopTyping();


  memoryVideo.pause();


  memoryVideo.removeAttribute(
    "src"
  );


  currentInput =
    [];


  locked =
    false;


  typingIndex =
    0;


  userStory =
    "";


  unlockOverlay.classList.remove(
    "show"
  );


  crumpleNote.classList.remove(
    "crumpling"
  );


  yourPaperBall.classList.remove(
    "show"
  );


  chooseMemory();


  renderSequence();


  inputProgress.textContent =
    "等待输入";


  showPage(
    "page-input"
  );

}



/* ======================================================
   27
   日期
====================================================== */

function setDate() {

  const today =
    new Date();


  const year =
    today.getFullYear();


  const month =
    String(
      today.getMonth() + 1
    ).padStart(
      2,
      "0"
    );


  const day =
    String(
      today.getDate()
    ).padStart(
      2,
      "0"
    );


  noteDate.textContent =
    `${year}.${month}.${day}`;

}



/* ======================================================
   28
   启动程序
====================================================== */

setDate();

chooseMemory();

renderSequence();

showPage(
  "page-input"
);


/* ======================================================
   29
   背景音乐系统
====================================================== */

const backgroundMusic =
  document.getElementById(
    "background-music"
  );


/*
  背景音乐音量
  0 = 静音
  1 = 最大音量
*/

backgroundMusic.volume = 0.25;


/*
  第一次点击网页或按键以后
  开始播放背景音乐
*/

function startBackgroundMusic() {

  /*
    如果视频正在播放，
    BGM不能播放
  */

  if (
    currentPage === "video" &&
    !memoryVideo.paused
  ) {

    return;

  }


  /*
    如果BGM已经在播放，
    不重复执行
  */

  if (
    !backgroundMusic.paused
  ) {

    return;

  }


  backgroundMusic
    .play()
    .catch(() => {

      /*
        浏览器阻止自动播放时
        等待下一次用户操作
      */

    });

}


/*
  点击网页
  → 启动BGM
*/

document.addEventListener(
  "pointerdown",
  startBackgroundMusic
);


/*
  按键
  → 启动BGM
*/

document.addEventListener(
  "keydown",
  startBackgroundMusic
);



/* ======================================================
   视频开始播放
   → BGM完全暂停
====================================================== */

memoryVideo.addEventListener(
  "play",

  () => {

    backgroundMusic.pause();

  }
);



/* ======================================================
   视频播放结束
   → BGM从刚才暂停的位置继续播放
====================================================== */

memoryVideo.addEventListener(
  "ended",

  () => {

    backgroundMusic
      .play()
      .catch(() => {});

  }
);



/* ======================================================
   视频加载失败
   → BGM继续播放
====================================================== */

memoryVideo.addEventListener(
  "error",

  () => {

    backgroundMusic
      .play()
      .catch(() => {});

  }
);



/* ======================================================
   点击跳过视频
   → BGM继续播放
====================================================== */

skipVideo.addEventListener(
  "click",

  () => {

    backgroundMusic
      .play()
      .catch(() => {});

  }
);