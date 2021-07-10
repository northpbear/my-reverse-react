/**
 * 构造vDom 对应packages\react\src\ReactElement.js中的createElement以及ReactElement函数
 * @param {*} type 节点类型
 * @param {*} props 节点属性
 * @param  {...any} children 子节点
 */
function createElement(type, props, ...children) {
    console.log(type, props, children);
    return {
        type,
        props: {
            ...props,
            children
        }
    }
}

export {
    createElement
}