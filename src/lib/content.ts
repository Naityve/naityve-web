import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'content.json');

export interface ContentData {
  hero: {
    title: string;
    description: string;
  };
}

export async function getContent(): Promise<ContentData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Return defaults if file doesn't exist
    return {
      hero: {
        title: 'Programmer & Technician',
        description: 'I work as a technician and store manager at a small tech repair business. On the side, I build software that solves real bottlenecks for small businesses, and develop video games from the ground up — focusing on fun gameplay and deep virtual world interaction.',
      },
    };
  }
}

export async function saveContent(content: ContentData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(content, null, 2));
}
