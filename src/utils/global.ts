export const isObject = (obj: object | undefined) => {
    const type = typeof obj;
    return type === 'function' || (type === 'object' && !!obj);
}
