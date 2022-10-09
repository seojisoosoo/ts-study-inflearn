const a= '5';
const b = 5;
const c=true;
const d: undefined=undefined;
const e: null=null;


// type Add=(x:number, y:number)=>number;
// const add: Add=(x,y)=>x+y;
function add(x: number, y: number): number { return x + y };
const result=add(1,2);
// const add: (x: number, y: number) => number = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

const f: true=true

const arr: string[]=['123','456','567']
const arr2: number[]=[123,456]
const arr3:[number, number, string]=[123,456,'hello']
const obj:{lat:number, lon:number}={lat:37.5,lon:127.5}

//타입스크립트는 타입을 표기해주어야한다.
//사실 표기 안해도, 타입스크립트는 타입을 알아서 추론한다. 
//타입이 표기되어있지 않아도 올바른 코드여야한다.

type Add=()=>number;
interface Minus{} 
// function add(x: number, y: number): number;
// function add(x,y) { 
//     return x + y 
// }
//이렇게 함수 두 번 선언도 가능하다

let aa=123;
aa='hello' as unknown as number;
//강제로 타입 변환

