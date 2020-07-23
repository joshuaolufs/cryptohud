var coins = ["ADA", "ALGO", "ATOM", "BAT", "BCH", "BNB", "BTC", "BUSD", "DASH", "DOGE", "ENJ", "EOS", "ETC", "ETH", "HBAR", "ICX", "IOTA", "KNC", "LINK", "LTC", "MATIC", "NANO", "NEO", "OMG", "ONT", "QTUM", "REP", "RVN", "USDT", "VET", "WAVES", "XLM", "XRP", "XTZ", "ZEC", "ZIL", "ZRX"];

var chartsContainer = document.getElementById("grid-container");
for (var i = 0; i < coins.length; i++) {
    // generate the html for the chart
    var htmlOutput = "<div class='chart-info'></div><div class='tradingview-widget-container'><div id='tradingview_db" + i + "' class='chart'></div></div>";
    var outputElement = document.createElement('div');
    outputElement.innerHTML = htmlOutput;
    outputElement.classList.add("grid-item");
    chartsContainer.appendChild(outputElement);

    // populate it with a chart
    var currentCoin = "BINANCE:" + coins[i] + "USDT";
    var currentId = "tradingview_db" + i;
    new TradingView.widget({
        "autosize": "true",
        "height": 200,
        "symbol": currentCoin,
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_legend": true,
        "allow_symbol_change": true,
        "save_image": false,
        "container_id": currentId
    });
}