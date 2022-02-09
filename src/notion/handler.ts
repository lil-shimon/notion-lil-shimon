import { NotionPage } from '../../models/notion/index';
import notion from './index';

/**
 * ページの情報を取得する
 * @param string pageId 
 * @returns 
 */
export const getPage = async (pageId: string): Promise<NotionPage> => {
  const page = (await notion.pages.retrieve({
    page_id: pageId,
  })) as NotionPage['page'];

  const blocks = (await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100
  })) as NotionPage['blocks'];

  return {
    page,
    blocks,
    id: page.id,
    title: page.properties.title.title[0].plain_text,
  }
}