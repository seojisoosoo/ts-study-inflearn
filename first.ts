//week1
const a= '5';
const b = 5;
const c=true;
const d: undefined=undefined;
const e: null=null;
// 타입형은 꼭 소문자로 써야한다.

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

// 타입스크립트는 타입을 표기해주어야한다.
// 사실 표기 안해도, 타입스크립트는 타입을 알아서 추론한다. 
// 타입이 표기되어있지 않아도 올바른 코드여야한다.

type Add=()=>number;
interface Minus{} 
// function add(x: number, y: number): number;
// function add(x,y) { 
//     return x + y 
// }
//이렇게 함수 두 번 선언도 가능하다

let aa=123;
aa='hello' as unknown as number;
// 강제로 타입 변환
try{
    const array:string[]=[];
    array.push('hello');
}catch(error){
    error;
}
// 빈배열이면 never가 나온다. 빈배열에서는 타입 지정해줘야함
 
const head=document.querySelector("#head")!;
// !는 null, undefined를 막아주는 방법.이건 절대 null, undefined일리가 없다는 뜻.
// 추천하지는 않는다.
// 만약, id이름이 바뀌거나한다면 큰 문제 발생...

type World="world" | 'hell' |'helloword';
const aaa: World='world';
const bbb=`hello${a}`
type Greeting=`hello${World}`;
const ccc:Greeting='helloworld'

const enum EDirection{
    Up=3,
    Down=5,
    Left=1,
    Right=8,
}
const aaaa=EDirection.Up;
const cccc=EDirection.Left;

const ODirection={
    Up: 3,
    Down: 5,
    Left: 1,
    Right: 8,
} as const; 
// 나는 이 값을 상수로 쓰겠다는 뜻. 고정된 값으로 타입을 지정해주게 된다. 
// readonly : 읽기전용값. 변경 불가능.

const objobj={a:'123',b:'hello',c:'world'};
type Key=keyof typeof objobj;
// keyof 키값을 뽑아내겠다.
type Value=typeof objobj[keyof typeof objobj];
// value 값을 뽑아내겠다.

// intersection & : 모두 만족해야 한다. 
// union | : 하나만 있어도 된다. 

type Animal={breath:true};
type Poyouru=Animal&{breath:true}
type Human=Poyouru&{think:true}
// 이렇게 intersection을 상속의 개념으로 사용할 수도 있다.

interface A{
    breath:true
}
interface B extends A{
    breed:true
}
const bre:B={breath:true, breed:true}
const zerocho:Human={breath:true, think:true}

// 좁은 타입을 넓은 타입에 입력하는 것은 가능하지만, 반대는 안됨.
type AA={name:string}
type BB={age:number}
type AABB=AA|BB
type CC=AA&BB
const ab:AABB={name:"jisoo"}
const abc:CC={name:"jisoo", age:24}
// 더 구체적인 게 좁은 타입

