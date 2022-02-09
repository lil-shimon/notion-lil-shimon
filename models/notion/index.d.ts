import { Blocks } from "./blocks";
import { Page } from "./page";

export interface NotionPage {
  page: Page;
  blocks: Blocks;

  id: string
  title: string
}