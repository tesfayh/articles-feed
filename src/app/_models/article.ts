export interface Article {
    author: string;
    title: string;
    content: string;
    description: string;
    publishedAt: Date;
    url: string;
    urlToImage: string;
    source: Source;
    bookmarked: boolean;
}
export interface Source{
    id?: number;
    name: string;
}