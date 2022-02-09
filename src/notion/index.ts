const { Client } = require('@notionhq/client');
const notion = new Client({
  auto: process.env.NOTION_TOKEN
})

export default notion;