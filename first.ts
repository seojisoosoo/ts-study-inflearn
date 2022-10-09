const a: string = '5';
const b: number = 5;
const c: boolean=true;
const d: undefined=undefined;
const e: null=null;


type Add=(x:number, y:number)=>number;
const add: Add=(x,y)=>x+y;
// function add(x: number, y: number): number { return x + y }
// const add: (x: number, y: number) => number = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

const f: true=true

const arr: string[]=['123','456','567']
const arr2: number[]=[123,456]
const arr3:[number, number, string]=[123,456,'hello']
const obj:{lat:number, lon:number}={lat:37.5,lon:127.5}
