module.exports = defineComponent({
    props: {
      rss: {
        type: "app",
        app: "rss",
      }
    },
    async run({steps, $}) {
      // Retrieve items from a sample feed
      const Parser = require('rss-parser');
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
    },
  })
  