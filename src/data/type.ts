// data数组结构
export type dataParam = dataItem[]

export interface dataItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}