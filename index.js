(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;

  // Lấy phần tử audio bằng ID
  var myAudio = $('myAudio');

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer); // Sửa lỗi đánh máy ở đây
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
      // Bắt đầu phát nhạc khi thiệp đã mở hoàn toàn
      myAudio.play();
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer); // Sửa lỗi đánh máy ở đây
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
      // Tạm dừng nhạc khi thiệp được đóng
      myAudio.pause();
    }, 1000);
  });

}());
