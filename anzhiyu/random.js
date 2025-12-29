var posts=["2025/12/29/美女与野兽的战斗/","2025/12/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };