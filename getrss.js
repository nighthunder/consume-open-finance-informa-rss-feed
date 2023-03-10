const Parser = require('rss-parser');

(async () => {
    const parser = new Parser();
    
    const stories = []
    
    // Replace with your feed URL
    const url = "https://us5.campaign-archive.com/feed?u=49f5ff8910ce85bdb1d9a7864&id=2c187fce9d"
    
    const feed = await parser.parseURL(url);
    const { title, items } = feed
    this.title = title
    
    if (!items.length) {
      $end("No new stories")
    }
    
    this.items = items

    console.log("items size"+items.length)

    feed.items.forEach((item) => {
        var date = new Date(item.pubDate);
        var string = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()

        console.log("Title " + item.title + ", Link: " + item.link + ", Data:" + string);
    });
})();