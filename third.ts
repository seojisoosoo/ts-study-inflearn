interface Array<t>{
    forEach(callbackfn:(value:T, index:number, array:T[])=>void, thisArg?:any):void;    
}
// 인터페이스, 타입, 클래스 모두 제네릭 선언할 수 있다. 
// 선언할 때, 이름 뒤에 제네릭이 항상 같이 온다. 
// 이 제네릭은 자바스크립트화될 때 사라진다.
class A<T>{

}
const a:Array<number>=[1,2,3];
A.forEach((value)=>{console.log(value);});
//이렇게 쓸 수도 있고 아래처럼 쓸 수도 있다.

//콘솔에 1,2,3 찍힘.
[1,2,3].forEach((value)=>{console.log(value);});
//콘솔에 1,2,3찍힌다. number로 추론됨
['1','2','3'].forEach((value)=>{console.log(value);});
// string으로 추론됨.
[ture, false, false].forEach((value)=>{console.log(value);});
// boalean으로 추론됨

// 제네릭 안하면? 제네릭 해야지 타입이 일치한 경우에만의 연산 등이 가능하게 할 수 있다. 
// add(1,2) 이렇게 타입이 일치한 경우만!
// 제네릭을 안 하면 add('1',2) 이런 경우가 생긴다.
// 아래의 T가 제네릭
function add<T>(x:T,y:T):T{return x}
// 아래의 number는 제네릭 타입 파라미터를 넣어준 것.
add<number>(1,2);
// 앞에 붙으면 as로 변하는 강제 변환. 타입을 강제 지정해준 것. 
<number>add(1,2);

//map 써보기
interface Array<T>{
    forEach(callbackfn:(value:T, index:number, array:T[])=>void, thisArg?:any):void;
    map<U>(callbackfn:(value:T,index:number, array:T[])=>U,thisArg?:any):U[];
}

const strings=[1,2,3].map((item)=>item.toString);
//타입스크립트는 이걸 어떻게 잘 추론한 것일까?
//제네릭에서 T가 number의 배열임을 알았음.
//map 뒤가 동일한 콜백함수임. toString이니까, string일 것이고, 그래서 U가 string으로 추론된다.
//item=>item+1이라면, [2,3,4] number 로 나올 것이다.
//추론할 수 있는 것을 빨리 찾아야한다.


//filter 제네릭 분석
interface Array<T>{
    forEach(callbackfn:(value:T, index:number, array:T[])=>void, thisArg?:any):void;
    map<U>(callbackfn:(value:T,index:number, array:T[])=>U,thisArg?:any):U[];
    filter<S extends T>(predicate:(value:T, index:number, array:T[])=>value is S, thisArg?:any):S[];
    filter(predicate:(value:T, index:number, array:T[])=>unknown, thisArg?:any):T[]; 
}
const filtered=[1,2,3,4,5].filter((value)=>value%2);
//number로 타입추론된다.그러므로 T는 number일 것이고, value%2도 넘버일 것이다.
//넘버니깐 unknown이 아닐 것이고, 그래서 첫번째 filter가 쓰인 것일 것이다.
//제네릭은 결국 찾기이다.
const filtered=['1',2,'3',4,'5'].filter((value)=>typeof value==='string');
//이건 추론을 잘 못한다. 위의 filter에서 (string|number) 스트링 또는 넘버가 되어야 스트링 또는 넘버라고 타입추론이 될 수 있다.
//위의 필터에서는 T가 스트링 또는 넘버여서 S는 바뀔 여지가 있지만, 아래의 필터는 T가 스트링 또는 넘버로 정해져서 바뀔 여지가 없다.

const predicate=(value:string|number):value is string=>typeof value==='string';
//첫번째 filter의 predicate을 빼와서 선언. string extends string|number. 
const filtered=['1',2,'3',4,'5'].filter((value)=>typeof value==='string');
//이렇게 위에 predicate해주고 쓰면 잘 선언된다.


//forEach 타입 직접 만들기
//지금까지는 타입을 분석해본 것, 이제는 우리가 타입을 만들어볼 거다
interface Arr{
    forEaach(callback:(item:number)=>void):void;
}

const a:Arr=[1,2,3]
a.forEach((item)=>{
    console.log(item);
});
a.forEach((item)=>{
    console.log(item);
    return '3';
})
const b:Arr=['1','2','3']
b.forEach((item)=>{
    console.log(item);
});
b.forEach((item)=>{
    console.log(item);
    return '3';
})
//위에서 item:number면 a만 통과, item:string이면 b만 통과
//item:string|number 로 하면 둘 다 통과됨.근데 코딩하다보면 에러 날 수도 있다.
//제네릭 자리를 추론하지 못하면 unknown이 뜬다.
interface Arr<T>{
    forEach(callback:(item:T)=>void):void;
    //여까지만 해도 옼이
    forEach(callbackfn:(value:T, index:number, array:T[])=>void, thisArg?:any):void;
    //정답.. 
}


//map 타입 직접 만들기
interface Arr<T>{
    forEach(callback:(item:T, index:number):void):void;
    map(callback:(v)=>void):void;
    map<S>(callback:(v:T)=>S):S[];

}
const a:Arr<number>=[1,2,3];
const b=a.map((v)=>v+1); //[2,3,4]
const c=a.map((v)=>v.toString());//['2','3','4'] 이 경우는 두번째 map처럼 선언해주는 게 좋다.
//S자리가 문자가됨. 
const d=a.map((v,i)=>v%2===0)//[false, true, false] boolean
//인덱스를 쓰는 경우 아래처럼 i 추가.
const b=a.map((v,i)=>v+1);
map<S>(callbak:(v:T, i:number)=>S):S[];