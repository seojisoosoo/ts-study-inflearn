//Partial 타입 분석
//utility types
//객체 조작시에 유용하다
interface Profile {
    name:string,
    age:number,
    married:boolean,
}

const jisoo:Profile={
    name:'jisoo',
    age:24,
    married:false,
}

//Partial 기능은 뒤의 Profile을 다 optional로 만들어주는 기능
const newJisoo:Partial<Profile>={
    name:'jisoosoo',
    age:24,
}

//Pick 타입 분석
const soo:Partial<Profile, 'name'|'age'>={
    name:'soo',
    age:24
}

//Omit, Exclude, Extract 타입 분석
type Animal = 'cat' | 'Dog' | 'Human';
type Mammal = Exclude<Animal, 'Human'>;
type Human = Extract<Animal, 'cat' | 'Dog'>;

type A=Exclude<keyof Profile, 'married'>
type O<T,S>=Pick<T, Exclude<keyof T,S>>
const jisoo:O<Profile, 'married'>={
    name:'jisoo',
    age:24,
}
//타입에는 삼항 연산자가 들어갈 수 있다.

//Required, Record, NonNullable 타입 분석
interface Profile{
    readonly name?:string,
    readonly age?:number,
    readonly married?:boolean,
}
type R<T>={
    [Key in keyof T]-?:T[key];
}
const newJisoo:R<Profile>={
    name:'jisoosoo',
    age:24,
}

type A=string|null|undefined|boolean|number;
type B=N<A>;

type N<T>=T extends null | undefined ? never:T
