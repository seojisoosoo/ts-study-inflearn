//week2
//interface끼리는 서로 합쳐진다
interface AAA{a:string}
// interface AAA={b:string}
// const obj1:AAA={a:'hello', b:'world'}
//개체 리터럴에서 잉여속성 검사라는 게 등장한다.
const obj1={a:'hello', b:'world'};
const objA:A=obj1;
//이렇게 하면 잉여속성 검사 안 해서 에러 안 뜸.

//타입 에일리언스는 합쳐지지 않음 - 식별자가 중복되었다고 뜬다!
type BBB={a:string}
type BBB={b:string}
const obj2:BBB={a:'hello', b:'world'}

function a():void{
    return undefined;
}
//return 값이 없는 경우 void가 됨.
//null을 리턴할 순 없다. undenfined를 리턴하거나, 그냥 return;

function a(callback:()=>void):void{}
interface Human{
    talk:()=>void;
}
const human:Human={
    talk(){return 'abc';}
}
//void의 여러 종류. 
//void는 undefined와 다르다.

const b:number=a.talk() as number;
//강제로 변환할 때는 as사용을 권장한다

//any는 타입선언을 안 하겠다는 포기선언과 다름없다
//unknown은 지금 타입은 모르겠는데~이다. 나중에 타입을 직접 지정해줘서 사용.  
const b:unknown=a.talk()
(b as A).talk();
//undefined는 void에 할당 가능. null은 안됨 -> 어차피 하다보면 에러메시지 뜬다!

typeof a==='number'
//a가 넘버인게 확실!
typeof a==='string'
//a가 스트링인게 확실!
function num(a:number|string){
    if (typeof a==='number'){
        //a가 넘버인게 확실!
    }
    else{
        //a는 number 또는 string이니까, els면 string
    }   
}

class A{

}
function aOrB(param:A|B){

}
aOrB(new A());
//꼭 new라고 써줘야한다.

type B={type:'b', bbb:string}
type C={type:'c', ccc:string}

function typeCheck(a:B|C|D){
    if('bbb' in a){
        a.type;
    }
    //이렇게 되면 a는 타입B가 된다.
}

(a:Cat|Dong): a is Dog
//a의 타입은 Dog

//Promise 비동기 -> Pending 기다림 -> Settled 성공 혹은 실패
const promises=await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')])
const errors=promises.filter((promise)=>promise.status===='rejected')

//클래스 자체도 타입이 될 수 있다
//interface가 추상, class가 구현으로 생각할 수 있다
//private, public, protected 객체지향 개념이랑 유사

//generic - T이런식으로 표기. 같은 애들은 다 같은 걸로
function add<T extends number>(x:T, y:T):T{
    return x+y;
}
