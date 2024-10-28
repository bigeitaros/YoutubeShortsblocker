let lastUrl = location.href;

function checkForShortsPage() {
  const currentUrl = location.href;

  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;

    if (currentUrl.includes("shorts")) {
    //   alert("YouTube Shortsページに遷移しました");
	window.location.href = 'https://github.com/';
      // ここにYouTube Shortsページで行いたい処理を記述
    }
  }
}

// 1秒ごとにURLの変化を確認
setInterval(checkForShortsPage, 1000);
