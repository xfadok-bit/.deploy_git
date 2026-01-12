var posts=["2026/01/11/喜欢穿可爱内裤的可爱屁股/","2026/01/11/如何重新开始/","2025/12/29/美女与野兽的战斗/","2025/12/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };