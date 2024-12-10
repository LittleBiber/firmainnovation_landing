export interface AsIsGridData {
    img: string;
    title: string;
    tags: string[];
}

export interface ToBeGridData extends AsIsGridData {
    detail: { title: string; desc: string }[];
}
