import * as BearReact from './b-react';

/** @jsx BearReact.createElement */
const element = (
    <div className='parent'>
        <div className='child1'>
            test
        </div>
        <div className='child2'>
            <a href='https://github.com/northpbear'>link</a>
        </div>
    </div>
);
// 经过Babel翻译，element成为createElement返回的vDom

console.log('element::', element)

