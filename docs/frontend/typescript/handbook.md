---
title: 基石
---

## 碎碎念

感觉自己入了门，但又什么都写不了，一定是基础不够稳固，抄一遍官网 [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) 部分吧。



## Basic Types

### 1. Boolean

```tsx
let isDone: boolean = false;
```

### 2. Number

```tsx
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: number = 100n;
```

### 3. String

```tsx
let color: string = "blue";

let fullName: string = `Bob bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month`;
```

### 4. Array

```tsx
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];
```

### 5. Tuple

```tsx
let x: [number, string] = [1, "1"]
```

### 6. Enum

```tsx
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green
```

### 7. Unknown

```tsx
let notSure: unknown = 4;
notSure = `maybe a string instead`;
notSure = false;

let maybe: unknown;

const aNumber: number = maybe;
// Type 'unknown' is not assignable to type 'number'.

if (typeof maybe === "string") {
  const aString: string = maybe;

  const aBoolean: boolean = maybe;
// Type 'string' is not assignable to type 'boolean'.
}
```

### 8. Void

```tsx
function warnUser (): void {
  console.log('This is a warning message');
}
```

### 9. Null and Undefined

```tsx
let u: undefined = undefined;
let n: null = null;
```

### 10. Never

告知编译器某处代码不会执行。

```tsx
function error (str: string): never {
  throw new Error(str)
}

function fail () {
  return error('Something failed')
}

function infiniteLoop (): never {
  while (true) {}
}
```

### 11. Object

此 `object` 是 `non-primitive`，

```tsx
declare function create(o: object): void;

create({});
create([]);
create(() => {});

create(null);
// Argument of type 'null' is not assignable to parameter of type 'object'.
```

### 12. Type assertions

`as` 没有谁比我更懂类型！

```tsx
const someValue: unknown = 'this is a string';
export const strLength = (someValue as string).length;

// or
const someValue: unknown = 'this is a string';
export const strLength: number = (<string>someValue).length;
```



## Interfaces

### 1. Our First Interface

示例看起来让人困惑，可能需要先了解下 [Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html) 概念。

```tsx
interface LabeledValue {
  label: string
}

function printLabel (labelObj: LabeledValue) {
  console.log(labelObj.label)
}

const myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)
```

### 2. Optional Properties

```tsx
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare (config: SquareConfig): { color: string, area: number} {
  const newSquare = { color: 'white', area: 100 }

  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

const mySquare = createSquare({ color: 'black' })
```

### 3. Readonly properties

```tsx
interface Point {
  readonly x: number
  readonly y: number
}

const p1: Point = { x: 10, y: 20 }
p1.x = 5
// Cannot assign to 'x' because it is a read-only property.

// 数组
const a: number[] = [1, 2, 3, 4]
const ro: ReadonlyArray<number> = a

ro[0] = 12
// Index signature in type 'readonly number[]' only permits reading.
```

### 4. Excess Property Checks

```tsx
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare (config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20
  }
}

const squareOptions = { colour: 'red' }
const mySquare = createSquare(squareOptions)
```

### 5. Function Types

```tsx
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = function (src, sub) {
  const result = src.search(sub)
  return result > -1
}
```

### 6. Indexable Types

```tsx
interface ReadonlyStringArray {
  readonly [index: number]: string
  readonly length: number
}

const myArray: ReadonlyStringArray = ['Alice', 'Bob']
myArray[2] = 'Mallory'
// Index signature in type 'ReadonlyStringArray' only permits reading.
```

### 7. Class Types

```tsx
// Implementing an interface
interface ClockInterface {
  currentTime: Date
  setTime(d: Date): void
}

class Clock implements ClockInterface {
  currentTime: Date = new Date()

  constructor (h: number, m: number) {}

  setTime (d: Date) {
    this.currentTime = d
  }
}

// Difference between the static and instance sides of classes
interface ClockInterface {
  tick(): void;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor (h: number, m: number) {}
  
  tick () {
    console.log('beep beep')
  }
}

const clock = new Clock(12, 17)
clock.tick()
```

### 8. Extending Interfaces

```tsx
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

const square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0
```

### 9. Hybrid Types

```tsx
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter (): Counter {
  const counter = function (start: number) {} as Counter
  counter.interval = 123
  counter.reset = function () {}
  return counter
}

const c = getCounter()
c(10)
c.reset()
c.interval = 5.1
```

### 10. Interfaces Extending Classes

```tsx
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select () {}
}

class TextBox extends Control {
  select () {}
}

class ImageControl implements SelectableControl {
  // Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
  // Types have separate declarations of a private property 'state'.
  private state: any;
  select () {}
}
```



## Functions

### 1. Function Types

```tsx
// simple
function add (x: number, y: number): number {
  return x + y
}

const add = function (x: number, y: number): number {
  return x + y
}

// full
const add: (baseValue: number, increment: number) => number = (x, y) => x + y
```

### 2. Optional and Default Parameters

```tsx
function buildName (firstName: string, lastName: string): string {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

buildName('Bob', 'Adams')
```

### 3. Rest Parameters

```tsx
function buildName (firstName: string, ...resetOfName: string[]): string {
  return firstName + ' ' + resetOfName.join(' ')
}

const buildNameFun: (fname: string, ...rest: string[]) => string = buildName
```

### 4. this

```tsx
// arrow function
const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

const cardPicker = deck.createCardPicker()
const pickedCard = cardPicker()

// parameters
interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(Math.random() * 13)

      return {
        suit: this.suits[pickedSuit],
        card: this.cards[pickedCard]
      }
    }
  }
}

const cardPicker = deck.createCardPicker()
const pickedCard = cardPicker()

// callbacks
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClickGood (this: void, e: Event) {
    console.log('clicked!')
  }
}

const h = new Handler()
uiElement.addClickListener(h.onClickGood)
```

### 5. Overloads

```tsx
const suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard (x: { suit: string, card: number }[]) : number
function pickCard (x: number): { suit: string, card: number}
function pickCard (x: unknown): any {
  if (typeof x === 'object' && Array.isArray(x)) {
    const pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    const pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

const myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]

const pickedCard1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

const pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)
```



## Literal Types

### 1. String Literal Types

```tsx
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
  animate (dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      //
    } else if (easing === 'ease-out') {
      //
    } else if (easing === 'ease-in-out') {
      //
    } else {
      //
    }
  }
}

const button = new UIElement()
button.animate(0, 0, 'ease-in')
```

### 2. Numberic Literal Types

```tsx
interface MapConfig {
  lng: number
  lat: number
  titleSize: 8 | 16 | 32
}

const setupMapConfig: MapConfig = {
  lng: -73.935242,
  lat: 40.73061,
  titleSize: 16
}
```

### 3. Boolean Literal Types

```tsx
interface ValidationSuccess {
  isValid: true
  reason: null
}

interface ValidationFailure {
  isValid: false
  reson: string
}

type ValidationResult = ValidationSuccess | ValidationFailure
```



## Unions and Intersections Types

### 1. Union Types

```tsx
function padLeft (value: string, padding: number | string): string {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }

  if (typeof padding === 'string') {
    return padding + value
  }

  throw new Error(`Expected string or number, got '${typeof padding}'.`)
}

padLeft('Hello world', 4)
```

### 2. Union With Common Fields

```tsx
interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

declare function getSmallPet() : Bird | Fish

const pet = getSmallPet()
pet.layEggs()

pet.swim()
// Property 'swim' does not exist on type 'Bird | Fish'.
// Property 'swim' does not exist on type 'Bird'.
```

### 3. Discriminating Unions

```tsx
type NetworkLoadingState = {
  state: 'loading'
}

type NetworkFailedState = {
  state: 'failed',
  code: number
}

type NetworkSuccessState = {
  state: 'success',
  response: {
    title: string
    duration: number
    summary: string
  }
}

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState

export function logger (state: NetworkState): string {
  switch (state.state) {
    case 'loading':
      return 'Downloading...'
    case 'failed':
      return `Error ${state.code} downloading`
    case 'success':
      return `Downloaded ${state.response.title} - ${state.response.summary}`
  }
}
```

### 4. Union Exhaustiveness checking

```tsx
type NetworkLoadingState = {
  state: 'loading'
}

type NetworkFailedState = {
  state: 'failed',
  code: number
}

type NetworkSuccessState = {
  state: 'success',
  response: {
    title: string
    duration: number
    summary: string
  }
}

type NetworkFromCachedState = {
  state: 'from_cache',
  id: string,
  response: NetworkSuccessState['response']
}

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NetworkFromCachedState

function assertNever (x: never): never {
  throw new Error('Unexpected object: ' + x)
}

export function logger (s: NetworkState): string {
  switch (s.state) {
    case 'loading':
      return 'Downloading...'
    case 'failed':
      return `failed with code ${s.code}`
    case 'success':
      return `Downloaded ${s.response.title} - ${s.response.summary}`
    default:
      return assertNever(s)
    // Argument of type 'NetworkFromCachedState' is not assignable to parameter of type 'never'.
  }
}
```

### 5. Intersection Types

```tsx
interface ErrorHandling {
  success: boolean
  error?: { message: string }
}

interface ArtworksData {
  artworks: { title: string }[]
}

interface ArtistsData {
  artists: { name: string }[]
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message)
    return
  }

  console.log(response.artists)
}
```



## Classes

不喜欢 `class`。

### 1. Inheritance

```tsx
class Animal {
  name: string;
  constructor (theName: string) {
    this.name = theName
  }

  move (distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  move (distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  move (distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

const sam = new Snake('Sammy the Python')
const tom: Animal = new Horse('Tommy the Palomino')

sam.move()
tom.move(34)
```

> 如果子类没有定义 `constructor` 方法，那么这个方法会被默认添加。
>
> ```js
> class Child extends Parent {}
> 
> // 等价于
> class Child extends Parent {
>   constructor(...args) {
>     super(...args)
>   }
> }
> ```



## Generics

### 1. Hello World of Generics

```tsx
function identity<T> (arg: T): T {
  return arg
}

const ot = identity<string>('some string')
```

### 2. Generic Types

```tsx
interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T> (arg: T): T {
  return arg
}

const myIdentity: GenericIdentityFn<number> = identity
```

### 3. Generic Classes

```tsx
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
```

### 4. Generic Constraints

```tsx
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise> (arg: T): T {
  return arg
}

loggingIdentity(3)
// Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
loggingIdentity({ length: 10, value: 3 })
```

### 5. Using Type Parameters in Generics

```tsx
function getProperty<T, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

getProperty(obj, 'a')
getProperty(obj, 'm')
// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```