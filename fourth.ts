import { CustomTransformerFactory } from "typescript";

//filter 타입 직접 만들기
interface Arr<T>{
    forEach(callback:(item:T, index:number)=>void):void;
    map<S>(callback:(v:T, i:number)=>S):S[];
    filter(callback:(v:T)=>boolean):T[];
}

const a:Arr<number>=[1,2,3];

const b=a.filter((v):v is number=>v%2===0);

const c:Arr<number | string>=[1,'2',3,'4',5];

const d=c.filter((v):v is string=>typeof v==='string');

//공변성 반공변성
function a(x:string):number{
    return +x;
}
a('1');

type B=(x:string)=>number;
let b:B=a;

//매개변수는 좁은 타입, 리턴값은 넓은 타입으로 대입

//오버로딩 - 하나에는 걸리겠지
add(1,2);
add('1','2');
//이거 다 되는 것이 오버로딩


//타입스크립트는 건망증이 심하다
interface CustomError{
    
}
declare const axios: Axios;

(async()=>{
    try{
        await axios.get();
    } catch(err:unknown){
        const customError=err as CustomError;
        customError.response?.data
    }
})
