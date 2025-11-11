export interface codegenSchema {
    classes: codegenClass[],
}

export interface codegenClass {
    title: string,
    properties: codegenProperty[],
    relations: codegenRelation[],
}

export interface codegenProperty {
    title: string,
    type: string,
}

export interface codegenRelation {
    title: string,
    firstprop: string,
    firstproptype: string,
    isMany: boolean,
    hasMany: boolean,
    owned: boolean
}
