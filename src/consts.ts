export const keyValueObj = {
    name: '名前',
    age: '年齢',
    address: '住所',
} as const

export type KeyValueObj = typeof keyValueObj
