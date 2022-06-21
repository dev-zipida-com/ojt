# GoLang
## 함수
### 함수
함수는 특정 기능을 위해 만든 여러 문장을 묶어서 실행하는 코드 블록 단위입니다. 프로그램의 특정 기능들을 기능별로 묶어 구현해 놓은 것입니다. 코드의 양이 많아질수록 함수는 필수이고, 함수를 어떻게 활용하냐에 따라 프로그램의 가치가 많이 달라집니다.   
기본적인 형태의 함수 선언은 `func 함수이름 (매개변수명 매개변수형) 반환형` 입니다.
### 함수 특징
- 함수를 선언할 때 쓰는 키워드는 func
- '반환형'은 괄호 뒤에 명시
- 함수는 패키지 안에서 정의되고 호출되는 함수가 꼭 호출하는 함수 앞에 있을 필요는 없다.
- '반환값'이 여러 개일 수 있다.
- 블록 시작 브레이스(중괄호)가 함수 선언과 동시에 첫 줄에 있어야 한다.

### Pass by reference
Go언어에서는 C/C++ 언어에서 핵심 개념인 '포인터'라는 개념을 지원합니다.   
- `& : 주소`
- `* : 직접참조` 

함수를 호출할 때 주소값을 전달하기 위해 '함수이름(&변수이름)' 을 입력하고 매개변수 이름을 입력할 때는 값을 직접 참조하기 위해 '*'을 매개변수 앞에 붙입니다. 그리고 함수 안에서 매개변수 앞에 모두 '*'을 붙여야 합니다.

```go
package main

import "fmt"

func printSqure(a *int) {
	*a *= *a
	
	fmt.Println(*a)
}
func main() {
	a := 4         //지역변수 선언
	
	printSqure(&a) 
    //참조를 위한 a의 주솟값을 매개변수로 전달 // 16
	
	fmt.Println(a) // 16
}
```
main함수의 변수인 a를 printSqure 함수 안에서 참조해서 다른 함수에서 연산을 했음에도 원래 값을 바꿀 수 있습니다.

### 가변 인자 함수
가변 인자 함수는 전달하는 매개변수의 개수를 고정한 함수가 아닌 함수를 호출할 때마다 매개변수의 개수를 다르게 전달할 수 있도록 만든 함수입니다. 가변 인자 함수는 동일한 형의 매개변수를 n개 전달할 수 있습니다.
- n개의 동일한 형의 매개변수 전달
- 매개변수들은 슬라이스 형태로 전달
- 함수 선언은 `func 함수이름(매개변수이름 ...매개변수형) 반환형` 형식으로 선언
- 슬라이스를 매개변수로 전달할 때는 `함수이름(슬라이스이름...)` 형식으로 호출

### 반환값
Go언어에서는 복수개의 반환값을 반환할 수 있습니다. 복수개의 반환값을 반환하려면 반환값의 개수만큼 반환형을 명시해야 합니다. 동일한 반환형이라도 개수에 맞게 모두 명시해야 합니다.
```go
package main

import "fmt"

func add(num ...int) (int, int) {
	var result int
	var count int
	
	for i := 0; i < len(num); i++ { //for문을 이용한 num[i] 순차 접근
		result += num[i]
		count++
	}
	
	return result, count
}

func main() {
	nums := []int{10, 20, 30, 40, 50}

	fmt.Println(add(nums...)) // 150 5
}
```

반환값이 많아지고 반환형이 다양하면 가독성이 떨어집니다. Go언어에서는 반환값의 이름을 명시해 반환값의 이름과 반환형을 같이 명시할 수 있습니다.
- (반환값이름1 반환형1, 반환값이름2 반환형2, ...) 형식으로 입력
- '반환값이름 반환형' 자체가 변수 선언이기 때문에 함수 내에서 따로 선언할 필요 없음
- return 생략 불가능

### 익명함수
코드를 작성할 때 코드의 기능별로 함수화 하는것은 중요합니다. 하지만 함수들을 만들면 '프로그램 속도 저하' 라는 단점이 있습니다. 함수 선언 자체가 프로그래밍 전역으로 초기화되면서 메모리를 잡아먹고, 기능을 수행할 때마다 함수를 찾아서 호출해야하기 때문입니다. 이런 단점을 보완하기 위해 익명함수가 필요하게 됐습니다.
```go
package main

import "fmt"

func main() {
	func() {
		fmt.Println("hello") // hello
	}()

	func(a int, b int) {
		result := a + b
		fmt.Println(result) // 4
	}(1, 3)

	result := func(a string, b string) string {
		return a + b
	}("hello", " world!")
	fmt.Println(result) // hello world!

	i, j := 10.2, 20.4
	divide := func(a float64, b float64) float64 {
		return a / b
	}(i, j)
	fmt.Println(divide) / 0.5
}
```

함수의 이름만 없고 그 외의 형태는 동일합니다. 그리고 함수 선언과 동시에 괄호를 사용해 함수를 바로 호출합니다. 이때 괄호 안에 매개변수를 넣을 수 있습니다.
익명함수는 변수에 할당이 가능한데, 변수에 초기화한 익명함수는 변수 이름을 함수 이름처럼 사용할 수 있습니다.

### 일급함수
Go언어에서 함수는 일급함수 입니다. 일급 함수는 함수를 기본 타입과 동일하게 사용할 수 어 함수 자체를 다른 함수의 매개변수로 전달하거나 다른 함수의 반환 값으로 사용될 수 있다는 것입니다.
```go
package main

import "fmt"

func calc(f func(int, int) int, a int, b int) int {
	result := f(a, b)
	return result
}

func main() {
	multi := func(i int, j int) int {
		return i * j
	}
	
	r1 := calc(multi, 10, 20)
	fmt.Println(r1) // 200

	r2 := calc(func(x int, y int) int { return x + y }, 10, 20)
	fmt.Println(r2) // 30
}
```

#

## 클로저
### 외부함수 접근
클로저는 함수 안에서 익명함수를 정의해서 바깥쪽 함수에 선언한 변수에도 접근할 수 있는 함수를 말합니다. 함수 안에서 바깥 변수를 사용하려면 매개 변수를 사용해야 하지만 익명 함수는 클로저이기 때문에 외부 함수의 변수를 그냥 접근할 수 있습니다.
```go
package main

import "fmt"

func main() {
	a, b := 10, 20
	str := "Hello goorm!"
	
	result := func () int{ // 익명함수 변수에 초기화
		return a + b // main 함수 변수 바로 접근
	}()
	
	func() {
		fmt.Println(str) // main 함수 변수 바로 접근
	}()
 
	fmt.Println(result)	 // 30
}
```

함수 안에서 함수를 정의하기 위해서 당연히 익명함수만 쓸 수 있습니다. 위의 코드에서는 main()함수 내에 선언된 익명 함수들이 main()함수의 변수를 매개변수 없이 접근합니다.

### 함수를 리턴하는 함수
```go
package main

import "fmt"

func next() func() int {
	i := 0
	return func() int {
		i += 1
		return i
	}
}

func main() {
	nextInt := next()

	fmt.Println(nextInt()) // 1
	fmt.Println(nextInt()) // 2
	fmt.Println(nextInt()) // 3

	newInt := next()
	fmt.Println(newInt()) // 1
}
```

next 함수는 반환형으로 `func() int` 를 입력해 매개변수가 없고 반환형이 int인 함수를 선언했습니다. 지역변수로 i를 0으로 초기화하고 i를 1 증가시키는 익명함수를 반환합니다. 이 함수를 `nextInt` 라는 변수에 초기화하고 출력값을 확인해보면 nextInt를 실행할 때마다 값이 초기화 되는 것이 아닌 이전의 흐름에 이어서 1을 증가시킵니다.   

#

## 구조체와 메소드
### 구조체
구조체는 하나 이상의 변수를 묶어서 새로운 자료형을 정의하는 Custom data type 입니다. Go언어에서 구조체는 필드들의 집합체이며 필드들의 컨테이너입니다.   
Go언어는 객체 지향을 따르고 있습니다. 하지만 Go언어는 전통적으로 객체 지향 언어의 클래스, 객체, 상속 개념이 없습니다. 그와 비슷한 형태로 따르고 있습니다. 구조체는 필드만 가지고 메소드는 별도로 분리하여 정의합니다.   
구조체도 type문을 사용해서 구조체를 정의합니다.
```go
type person struct {
	name string
	age int
	contact string
}
```

구조체는 선언 후 객체를 생성해서 사용할 수 있습니다. 구조체 객체 선언은 슬라이스, 맵과 선언 방식이 유사합니다. `객체이름 := 구조체이름{저장할값}` 으로 선언과 동시에 초기화 할 수 있습니다. 저장할 값에 아무것도 입력하지 않으면 빈객체가 생성됩니다. `객체이름.필드이름 = 저장할값` 으로 값을 저장할 수 있습니다.
```go
package main

import "fmt"

type person struct {
	name    string
	age     int
	contact string
}

func main() {
	var p1 = person{}
	fmt.Println(p1)

	p1.name = "kim"
	p1.age = 25
	p1.contact = "hello"
	fmt.Println(p1) // {kim 25 hello}

	p2 := person{"nam", 31, "hihi"} 
	// 필드 이름을 생력할 시 순서대로 저장함
	fmt.Println(p2) // {nam 31 hihi}

	p3 := person{contact: "world", name: "park", age: 23} 
	// 필드 이름을 명시할 시 순서와 상관 없이 저장할 수 있음
	fmt.Println(p3) // {park 23 world}

	p3.name = "ryu" //필드에 저장된 값을 수정할 수 있음
	fmt.Println(p3) // {ryu 23 world}

	fmt.Println(p3.contact) //필드 값의 개별 접근도 가능함 // world
}
```
### 구조체 포인터
매개변수에 &를 붙여서 값이 저장된 주소에 직접 접근하는 포인터가 있습니다. 구조체도 마찬가지로 구조체 포인터를 생성할 수 있습니다. 구조체 포인터를 생성하는 방법은 두 가지가 있습니다.    
1. `new(구조체이름)` 을 사용해 객체 생성
2. 구조체 이름 앞에 & 붙이기

다른 자료형의 포인터들은 역참조를 위해 * 연산자를 사용했지만 구조체 포인터는 선언하면서 자동으로 역참조 됩니다. 따라서 함수 안에서 *연산자를 사용할 필요가 없습니다.

```go
package main

import "fmt"

type person struct {
	name    string
	age     int
	contact string
}

func addAgeRef(a *person) { //Pass by reference
	a.age += 4 //자동 역참조 * 생략
}

func addAgeVal(a person) { //Pass by value
	a.age += 4
}

func main() {
	var p1 = new(person) //포인터 구조체 객체 생성
	var p2 = person{}    // 빈 구조체 객체 생성

	fmt.Println(p1, p2) // &{ 0 } { 0 }
	
	p1.age = 25
	p2.age = 25

	addAgeRef(p1) //&을 쓰지 않아도 됨
	addAgeVal(p2)

	fmt.Println(p1.age) // 29
	fmt.Println(p2.age) // 25

	addAgeRef(&p2) //&을 붙이면 pass by reference 가능
	fmt.Println(p2.age) // 29
}
```

### 생성자 함수
생성자 함수는 호출하면 구조체 객체 생성 및 초기화, 입력한 필드 생성 및 초기화를 하고 동시에 구조체를 반환합니다.
```go
type mapStruct struct{ //맵 형태의 data필드를 가지는 "mapStruct"를 정의함
	data map[int]string
}

func newStruct() *mapStruct { //포인터 구조체를 반환함
	d := mapStruct{} //구조체 객체를 생성하고 초기화함
	d.data = map[int]string{} //data 필드의 맵을 초기화함
	return &d //초기화 한 포인터 구조체를 반환함
}
```

```go
package main

import "fmt"

type mapStruct struct {
	data map[int]string
}

func newStruct() *mapStruct { //포인터 구조체를 반환함
	d := mapStruct{}
	d.data = map[int]string{}
	return &d
}

func main() 
	s1 := newStruct() // 생성자 호출
	s1.data[1] = "hello"
	s1.data[10] = "world"

	fmt.Println(s1) // &{ map[1:hello 10:world] }

	s2 := mapStruct{}
	s2.data = map[int]string{}
	s2.data[1] = "hello"
	s2.data[10] = "world"

	fmt.Println(s2) // { map[1:hello 2:world] }
}
```

s1객체는 생성자 함수로 data 필드의 맵을 초기화했기 때문에 바로 data 필드에 값을 저장할 수 있습니다. 하지만 s2 객체는 구조체만 생성했기 때문에 data 필드에 맵을 따로 초기화 해야합니다.

#

### 메소드
특정 속성들의 기능을 수행하기 위해 만들어진 특별한 함수를 메소드라고 합니다. Go언어에서는 구조체 내에서 메소드를 선언하지 않고 일반 함수처럼 별도로 분리되어 선언됩니다. 메소드는 구조체의 필드를 이용해 특정 기능을 하는 특별한 함수입니다.
- `func (매개변수이름 구조체이름) 메소드이름() 반환형 {}` 형식으로 선언합니다.
- 매개변수 이름은 구조체 변수명으로 메소드 내에서 매개변수처럼 사용됩니다.
- 함수 이름을 입력하지 않고 구조체이름 뒤에 메소드 이름을 입력합니다.

```go
package main

import "fmt"

type triangle struct {
	width, height float32
}

func (s triangle) triArea() float32 { //value receiver
	return s.width * s.height / 2
}

func main() {
	tri1 := new(triangle)
	tri1.width = 12.5
	tri1.height = 5.2

	triarea := tri1.triArea()
	fmt.Printf("삼각형 너비:%.2f, 높이:%.2f 일때, 넓이:%.2f ", tri1.width, tri1.height, triarea)
	// 삼각형 너비:12.50, 높이:5.20 일때, 넓이:32.50
}
```

위 코드는 구조체의 값 정보를 전달받아 연산한 후 반환합니다. 하지만 포인터 정보를 전달한다면 구조체 필드 값을 메소드에서 직접 접근해 수정할 수 있습니다. 메소드를 호출할 때는 다른점이 없지만 메소드의 receiver 부분에서 주소값을 참조하는 연산자인 * 를 구조체 이름 앞에 붙여주면 됩니다.
```go
package main

import "fmt"

type triangle struct {
	width, height float32
}

func (s triangle) triAreaVal() float32 { //Value Receiver
	s.width += 10
	return s.width * s.height / 2
}

func (s *triangle) triAreaRef() float32 { //Pointer Reciver
	s.width += 10
	return s.width * s.height / 2
}

func main() {
	tri1 := new(triangle)
	tri1.width = 12.5
	tri1.height = 5.2

	triarea_val := tri1.triAreaVal()
	fmt.Printf("삼각형 너비:%.2f, 높이:%.2f 일때, 넓이:%.2f \n", tri1.width, tri1.height, triarea_val)
	//  삼각형 너비:12.50, 높이:5.20 일때, 넓이:58.50 

	triarea_ref := tri1.triAreaRef()
	fmt.Printf("삼각형 너비:%.2f, 높이:%.2f 일때, 넓이:%.2f ", tri1.width, tri1.height, triarea_ref)
	// 삼각형 너비:22.50, 높이:5.20 일때, 넓이:58.50
}
```

#

## 인터페이스
### 메소드 집합 인터페이스
구조체는 같은 속성의 필드들의 집합체이고, 메소드는 함수중에서도 구조체의 속성을 기능적으로 수행하는 특별한 함수입니다. 프로그램을 확장하다보면 구조체에 대한 메소드가 추가될 수 있습니다. 따라서 변수를 묶는 구조체뿐만 아니라 메소드를 모아놓은 인터페이스도 필요합니다.   
예를들어 '원'의 정보와 '사각형'의 정보를 가진 구조체가 있고 넓이를 구하는 메소드가 있을때, 넓이를 구하는 기능은 같지만 구조체의 필드와 연산 방법이 다르기 때문에 이름은 같지만 내용이 다른 메소드를 따로 만들어야 합니다.
```go
package main

import (
	"fmt"
	"math" //Pi를 사용하기 위해 import함
)

type Rect struct {
	width, height float64
}

type Circle struct {
	radius float64
}

func (r Rect) area() float64 {
	return r.width * r.height
}

func (c Circle) area() float64 {
	return math.Pi * c.radius * c.radius
}

func main() {
	r1 := Rect{10, 20}
	c1 := Circle{10}

	fmt.Println(r1.area()) // 200
	fmt.Println(c1.area()) // 314.159265...
}
```
area 메소드는 공통적으로 넓이를 구하는 기능을 하지만 전달받는 구조체 객체와 그에 따른 연산 과정이 다르기 때문에 각각 따로 선언했습니다. 같은 속성의 기능을 묶어놓은 인터페이스를 활용하면 인터페이스에 있는 메소드들을 호출할 수 있습니다.

```go
package main

import (
	"fmt"
	"math"
)

type geometry interface { //인터페이스 선언 Reat와 Circle 메도스의 area를 모두 포함
	area() float64
}

type Rect struct {
	width, height float64
}

type Circle struct {
	radius float64
}

func (r Rect) area() float64 {
	return r.width * r.height
}

func (c Circle) area() float64 {
	return math.Pi * c.radius * c.radius
}


func main() {
	r1 := Rect{10, 20}
	c1 := Circle{10}
	r2 := Rect{12, 14}
	c2 := Circle{5}

	printMeasure(r1, c1, r2, c2)
}

func printMeasure(m ...geometry) { //인터페이스를 가변 인자로 하는 함수
	for _, val := range m { //가변 인자 함수의 값은 슬라이스형
		fmt.Println(val.area()) //인터페이스의 메소드 호출
	}
}
```
인터페이스는 매개변수로 선언이 되어 따로 선언하지 않습니다. 매개변수로 인터페이스를 사용한다는 것은 구조체에 관계없이 인터페이스에 포함된 메소드를 사용하겠다는 것입니다.

### 빈 인터페이스(Empty interface)
인터페이스도 함수, 구조체와 마찬가지로 형(type)으로 사용할 수 있습니다. 인터페이스는 하나의 형이기 때문에 매개변수로 사용될 수 있습니다. 또한 인터페이스는 어떠한 타입도 담을 수 있는 컨테이너입니다.
```go
package main
 
import "fmt"
 
func printVal(i interface{}) {
    fmt.Println(i)
}

func main() {
    var x interface{} //빈 인터페이스 선언
 
	x = 1
	printVal(x) // 1
  
	x = "test"
    printVal(x) // test
}
```

# 

### 지연처리 defer
defer는 함수 앞에 쓰이는 키워드로 특정 문장 혹은 함수를 감싸고 있는 함수 내에서 제일 나중에, 끝나기 직전에 실행하게 하는 용법입니다.    
defer는 블록이 필요하지도 않고 특정 위치나 형식이 필요한 것도 아닙니다. 함수 앞에 defer를 명시함으로써 사용합니다.   
defer는 프로그램 흐름에 분기가 많아 예외처리가 많아서 복잡할 때 유용하게 사용됩니다. defer를 사용하면 흐름 중간에 에러가 발생해도 바로 종료하지 않고 마지막에 꼭 실행을 하게 됩니다.
```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")
	fmt.Println("hello")
} 
// hello 
// world
```

```go
package main

import "fmt"

func hello() {
	fmt.Println("Hello")
}

func world() {
	fmt.Println("world")
}

func main() {
	defer world()
	hello()
	
	for i := 0; i <3; i++ {
		defer fmt.Println(i)
	}
}
// Hello
// 2
// 1
// 0
// world
```

위 코들를 실행해보면 defer를 사용한 함수가 역순으로 실행되는 것을 알 수 있습니다. 자료구조의 스택과 동일한 방식으로 제일 나중에 지연 호출한 함수가 가장 먼저 실행되는 것입니다.   
defer는 파일을 열고 닫을 때 많이 활용됩니다. 파일을 열거나 읽어들이는 중간에 에러가 발생하면 파일을 닫을 수 없게 되기 때문입니다.

### 종료하는 panic()
panic은 겉으로 보기에 아무런 문제가 없는데 실행해보니 에러가 발생해서 프로그램을 종료하는 기능을 수행합니다. 겉으로 보기에 문제가 없는데 발생하는 오류는 예외라고 하는데 예외는 프로그램이 실행되면서 논리적으로 부적합한 상황이 발생하는 것을 말합니다. 예를 들어, 10/0 은 논리적 예외 상황이 됩니다. 프로그램이 오류라고 생각하지 않기 때문에 코드 상에서 따로 예외 처리를 해야합니다.
```go
package main

import "fmt"

func panicTest() {
	var a = [4]int{1,2,3,4}
	
	defer fmt.Println("Panic done")
	
	for i := 0; i < 10; i++ {
		fmt.Println(a[i])
	}		
}

func main() {
	panicTest()

	fmt.Println("Hello, world!")
}
```
반복문에서 배열의 개수보다 큰 인덱스에 접근함으로써 panic이 발생하고 프로그램이 종료됩니다. panic 에러가 발생해서 프로그램이 종료되기 때문에 Hello world!는 출력되지 않습니다.

### recover() 함수
recover() 함수는 panic 상황이 생겼을 때 프로그램을 종료하지 않고 예외 처리를 하는 것입니다. panic() 함수와 recover() 함수를 사용해 프로그램 흐름에 미리 예외 처리를 할 수 있는데 panic 상황에서 프로그램이 종료되지 않고 어떤 구문을 실행시키려면 defer 구문을 사용해야 하기 때문에 recover() 함수와 defer 구문을 항상 같이 사용해야합니다.
```go
package main

import "fmt"

func panicTest() {
	defer func() {
		r := recover() //복구 및 에러 메시지 초기화
		fmt.Println(r) //에러 메시지 출력 
	}()
	
    var a = [4]int{1,2,3,4}
    
    for i := 0; i < 10; i++ { //panic 발생
        fmt.Println(a[i])
    }       
}

func main() {
    panicTest()

    fmt.Println("Hello, world!") // panic이 발생했지만 계속 실행됨
}
// 1
// 2
// 3
// 4
// runtime error: index out of range [4] with length 4
// Hello, world!
```
panic이 발생했을 때 종료 전 defer 구문을 실행하는데 defer 구문에 익명 함수로 recover() 함수를 선언했습니다. panic 으로 프로그램이 종료되기 전 recover() 함수가 panic을 복구하기 때문에 바로 종료되지 않고 Hello, world! 가 출력됩니다.

- recover() 함수는 panic이 발생해 프로그램이 종료되는 것을 막고 복구합니다.
- 프로그램이 종료되기 전에 실행해야 하기 때문에 defer가 선언된 함수 안에서 쓰입니다.
- 에러 메세지를 반환합니다.

#

## 에러 처리
### 에러 처리
에러처리를 하는 이유는 컴파일러가 알아차리지 못하는 프로그램상의 오류를 예방하기 위해서입니다. 반환값이 있는 함수는 에러 처리를 통해 결과값과 에러 값을 함께 반환해야 합니다.
```go
package main

import "fmt"

func main() {
	var input string
	_, err := fmt.Scanln(&input);
	
	if err != nil {
		panic(err)
	}
	
	fmt.Println(input);
}
```
아무것도 입력하지 않으면 에러를 발생시킵니다. fmt패키지의 표준 입/출력 함수는 모두 입력 개수, 에러의 반환값을 가집니다. 아무것도 입력하지 않으면 err 변수에 에러값을 빤환 받습니다.

### 에러값 설정
error 형은 인터페이스형 입니다. error인터페이스는 Error() 라는 string형을 반환값으로 갖는 메소드 한개만 가지고 있습니다. 
```go
type error interface {
	Error() string
}
```
- Error() 메소드 원형
```go
func (e *errorSrting) Error() string {
	return e.s
}
```
- errorString 구조체 형식
```go
type errorString struct {
	s string
}
```
errors 패키지의 New() 함수를 이용하면 에러값을 설정할 수 있습니다.
```go
func New(text string) error {
	return &errorString(text)
}
```

### 에러 출력 및 처리
panic을 이용한 에러 값 출력 및 프로그램 종료 방식 외에 다른 형식이 있습니다. `log` 패키지에서 제공하는 에러 출력 함수를 이용하는 것입니다. 각 함수는 에러 값을 출력하고 처리하는 방식이 다릅니다.
- `func Fatal(v ...interface{})` : 에러 로그 출력 및 프로그램 종료
- `func Panic(v ...interface{})` : 시간, 에러 메세지 출력 및 패닉 발생, defer 구문이 없을 시 런타임 패닉을 발생시키고 콜스택 출력
- `func Print(c ...interface{})` : 시간, 에러 메세지만 출력, 프로그램 종료하지 않음

```go
package main

import (
    "fmt"
    "log"
)

func divide(a float32, b float32) (result float32, err error) {
    if b == 0 {
        return 0, fmt.Errorf("%.2f으로 나누지마", b) 
    }
    result = a / b
    return 
}

func main() {
    var num1, num2 float32
    fmt.Scanln(&num1, &num2)

    result, err := divide(num1, num2)

    if err != nil {
        log.Print(err)
    }

    fmt.Println(result)
}
// 10 0 입력
// 0
// 2022/06/20 10:05:15 0.00으로 나누지마
```
`fmt.Errorf("%.2f으로 나누지마", b)` 형식으로 에러 값의 출력 포멧을 지정하고 `log.Print(err)` 형식을 이용해 시간, 에러 메세지를 출력하지만 프로그램을 종효하지 않기 때문에 `fmt.Println(result)` 가 실행됩니다.

#

## 고루틴 (Goroutine)
### 비동기 프로세스
고루틴은 여러 함수를 동시에 실행할 수 있는 논리적 가상 스레드입니다. 스레드는 프로세스(메모리에 할당된 프로그램) 안의 실행 흐름입니다. 하나의 스레드를 사용한다면 주어진 일을 순서대로 하나씩 동기처리합니다. 하지만 멀티 스레드가 되면 주어진 일을 동시에 처리하는 것이 가능합니다.   
Go언어에서는 스레드보다 훨씬 가벼운 비동기 동시 처리를 구현해 각각의 스레드와 1대1로 대응하지 않고 훨씬 적은 스레드를 사용합니다.   
Go언어에서는 함수에 고루틴을 선언함으로써 함수를 비동기적으로 동시에 실행할 수 있습니다. 선언하는 방법은 함수 앞에 `go` 를 입력하면 다른 함수와 상관 없이 동시에 실행합니다.
```go
package main

import "fmt"

func testGo() {
	fmt.Println("Hello goorm!")
}

func main() {
	go testGo() //고루틴으로 비동기 실행
}
```
`testGo()` 함수가 실행되지 않고 종료됩니다. `testGo()` 함수와 `main()`함수가 동시에 실행되기 때문에 'Hello goorm!'이 출력되기 전에 `main()`함수가 종료되고 프로그램이 종료됩니다.

### 고루틴 활용
위의 코드에서 `main()`함수 내에 고루틴으로 실행되는 `testGo()`가 실행되지 않았습니다. 이렇게 실행되지 않는 현상을 막고 고루틴이 끝날 때까지 대기하는 기능이 따로 있습니다.
`sync` 패키지의 `WaitGroup`을 사용합니다. WaitGroup는 sync 패키지에 선언되어있는 구조체로 고루틴이 완료될 때까지 대기합니다. 변수로 선언해 메소드를 활용할 수 있습니다.
- `Add()`: 기다릴 고루틴의 수 설정
- `Done()`: 고루틴이 실행된 함수 내에서 호출함으로써 함수 호출이 완료됐음을 알림
- `Wait()`: 고루틴이 모두 끝날 때까지 차단

```go
package main

import (
    "fmt"
    "math/rand"
    "time"
    "sync"
)

func hello(n int, w *sync.WaitGroup) {
    defer w.Done() //끝났음을 전달
    
    r := rand.Intn(3)
    
    time.Sleep(time.Duration(r) * time.Second)
    
    fmt.Println(n)  
}

func main() {
    wait := new(sync.WaitGroup) //waitgroup 생성
    
    wait.Add(100) // 100개의 고루틴을 기다림
    
    for i := 0; i < 100; i++ {
            go hello(i, wait) //wait을 매개변수로 전달
    }   
    
    wait.Wait() // 고루틴이 모두 끝날때까지 대기
}
```
WaitGroup 생성 - 고루틴 개수 성정 - 끝났음을 전달 - 모두 끝날 때까지 대기 - 종료   
- `new`키워드를 사용해 포인터 변수 `wait`생성   
- `wait.Add(100)` 메소드로 고루틴 100개를 기다리도록 한다.   
- `wait`은 포인터 변수이기 때문에 매개변수형을 `*sync.WaitGroup`형식으로 선언
- *연산자를 넣지 않으면 `hello()` 함수의 `w`와 `main()`함수의 `wait`이 다르게 인식되어 고루틴이 종료되지 않고 교착상태에 빠짐

### 크롤저에서의 고루틴
`WaitGroup`은 클로저에서 많이 활용됩니다. 익명함수 클로저를 사용하면 클로저를 감싸고있는 함수 내에 선언된 `wait`을 직접 접근할 수 있기 때문에 사용하기 편리합니다.

```go
package main

import (
	"fmt"
	"sync"
)

func main() {
	var wait sync.WaitGroup
	wait.Add(100)

	for i := 0; i < 100; i++ {
		go func(n int) {
			defer wait.Done()

			fmt.Println(n)
		}(i)
	}

	wait.Wait()
}
```

## 채널(Channel)
### 고루틴의 데이터 통로 : 채널
고루틴을 사용하면 비동기적으로 여러개의 함수를 실행할 수 있고 이를 활용해 각 데이터를 동시에 서버에 전송할 수 있는 기능을 가지고 있습니다. 채널은 고루틴끼리 서로 값을 주고 받는 통로 역할을 합니다.
```go
package main

import "fmt"

func main() {
	var a, b = 10, 5
	var result int
	
	go func() {
		result = a + b
	}()
	
	fmt.Printf("두 수의 합은 %d입니다.", result)
}
// 두 수의 합은 0입니다.
```
익명함수를 고루틴으로 실행하면 result 에 값이 할당되기 전에 `main()`함수가 종료되기 때문에 0을 출력하게 된다. 이런 현상을 제어하기 위해 `WaitGroup`를 사용해 고루틴의 종료시간을 제어했습니다. 채널은 고루틴 사이에서 값을 주고 받는 통로 역할을 하고, 송/수신자가 서로를 기다리는 속성때문에 고루틴의 흐름을 제어합니다. 채널의 데이터를 주고 받을때까지 해당 고루틴을 종료하지 않아 별도의 lock을 하지 않고도 데이터를 동기화 하는데 사용합니다.
- `make(chan 데이터타입)` 형식으로 생성
- 채널의 송/수신은 `<-` 연산자 사용
- 채널에 값을 보낼때는 `채널 <- 데이터`, 값을 받을 때는 `<- 채널` 입니다. `:=`, `=`를 이용해 변수에 바로 값을 대입할 수 있습니다.
- 채널에서 값을 받을때까지만 대기합니다.
```go
package main

import "fmt"

func main() {
	var a, b = 10, 5
	var result int
	
	c := make(chan int)
	
	go func() {
		c <- a + b
	}()
	
	result = <-c
	fmt.Printf("두 수의 합은 %d입니다.", result)
}
// 두 수의 합은 15입니다.
```

### 비동기 채널과 버퍼
채널을 사용할 때 '데드락(Deadlock)'이라는 오류가 발생할 수 있습니다. 데드락은 둘 이상의 프로세스(함수)가 서로 가진 한정된 자원을 요청하는 경우 발생하는 것으로, 프로세스가 전진되지 못하고 모든 프로세스가 대기 상태가 되는 것을 말합니다.

### 비동기 채널 버퍼
채널에서 송/수신이 꼭 일대일 대응을 해야하기 때문에 번거로운 상황이 생길 수 있는데, 이를 중재하는 역할을 '버퍼'가 하게 됩니다. 송신 루틴에서 수신 루틴으로 데이터를 바로 전달하는 것이 아니라 특정 개수의 버퍼를 만들어 송신자는 버퍼로 데이터를 보내고, 수신자는 버퍼에서 데이터를 가져오게끔 합니다.   
버퍼를 만드는 형식은 `make(chan 데이터타입, 버퍼개수)`입니다.   
이때 송신자와 수신자는 서로 자기가 할 일만 끝내면 끝이라고 생각합니다. 송신 루틴은 수신자가 없어도 버퍼에 데이터를 보내면 일을 끝내고, 수신 루틴은 일단 데이터를 받으면 송신 루틴의 일이 끝나지 않았어도 자신의 일을 끝내게 됩니다.
```go
package main
 
import "fmt"
 
func main() {
	c := make(chan string, 1)

	c <- "Hello goorm!"
	
	fmt.Println(<-c)
}
```
수신 루틴이 없어도 버퍼에 값을 보내 오류 없이 프로그램을 종료합니다.   
비동기 채널 버퍼에서 고루틴의 대기 조건
- 송신 루틴은 버퍼가 가득차면 대기합니다.
- 수신 루틴은 버퍼에 값이 없으면 대기합니다.
```go
package main

import (
	"fmt"
)

func main() {
	done := make(chan bool, 2)

	go func() {
		for i := 0; i < 6; i++ {
			done <- true

			fmt.Println("고루틴 : ", i)
		}
	}()

	for i := 0; i < 6; i++ {
		<-done                    
		
		fmt.Println("메인 함수 : ", i)
	}	
}
/* 고루틴 :  0
 고루틴 :  1
 고루틴 :  2
메인 함수 :  0
메인 함수 :  1
메인 함수 :  2
메인 함수 :  3
고루틴 :  3
고루틴 :  4
고루틴 :  5
메인 함수 :  4
메인 함수 :  5 */
```
송신자는 수신자가 직접 데이터를 받을때까지 대기하지 않고 버퍼에 값을 보내기만 하면 다음 코드를 실행하기 때문에 훨씬 효율이 높아집니다. 버퍼가 가득차면 더이상 송신할 수 없기 때문에 대기상태가 됩니다. main()함수의 수신 루틴은 한개를 받고 한개를 처리할 필요 없이 버퍼에 값이 있으면 바로바로 꺼냅니다. 더이상 버퍼에 값이 송신되지 않으면 수신 루틴은 무한 대기 상태가 되고 데드락이 발생합니다. 따라서 송/수신 채널의 개수를 잘 맞춰야합니다.

### 동기 채널
동기 채널은 단순히 송/수신 채널이 여러개일때, 송신 루틴과 수신 루틴이 번갈아가면서 실행되는 것을 말합니다. 
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	done := make(chan bool)

	go func() {
		for i := 0; i < 4; i++ {
			done <- true

			fmt.Println("고루틴 : ", i)
		}
	}()

	for i := 0; i < 4; i++ {
		<-done
		
		fmt.Println("메인 함수 : ", i)
		
		time.Sleep(time.Second)
	}	
}
// 고루틴 :  0
// 메인 함수 :  0
// 메인 함수 :  1
// 고루틴 :  1
// 메인 함수 :  2
// 고루틴 :  2
// 메인 함수 :  3
// 고루틴 :  3
```
동기 채널 방식을 사용하면 송신자는 수신자가 데이터를 수신할 때까지 대기하고, 수신자는 송신자가 데이터를 송신할 때까지 대기합니다.

### 채널 닫기
데이터 송신시 수신하는 곳이 명확하지 않은채 채널로 데이터를 송신하면 무한 대기 상태가 됩니다. 데이터 수신시에도 송신된 데이터가 없을 경우 채널에서 데이터를 수신하면 무한 대기 상태가 됩니다. 이때 채널에 데이터를 송신한 후 채널을 닫으면 해당 채널로는 더이상 데이터를 송신할 수 없지만 채널이 닫힌 후에 계속 수신이 가능합니다. 채널을 닫을 때는 `close(채널이름)`형식을 사용합니다.
```go
package main

import "fmt"

func main() {
	c := make(chan string, 2) // 버퍼 2개 생성

	c <- "Hello"
	c <- "gootm"

	close(c) // 채널 닫음

	fmt.Println(<- c) // Hello
	fmt.Println(<- c) // goorm
	fmt.Println(<- c) // 무한 대기 상태 x
}
```
데이터를 모두 송신하고 채널을 닫으면 무한 대기 상황을 미연에 방지할 수 있습니다.   
채널을 닫을 때 두가지 특징
- 채널을 닫은 후에 데이터를 채널에 송신하면 'send on closed channel' 메세지와 함께 panic이 발생한다.
- 채널의 데이터를 모두 수신하고 또 수신하면 nil 값을 반환한다.
- 수신자를 의마하는 `<-채널이름`은 두개의 값을 반환
  - 첫번째는 데이터, 두번째는 채널의 개폐 여부를 bool값으로 반환한다.

### 채널 range문
채널의 range문은 채널에 송신한 데이처의 개수만큼 접근하는 용법입니다. 주의할 점은 range는 송신 채널이 닫히지 않았다면 데이터가 들어올때까지 계속 대기하기 때문에 닫힌 채널의 데이터를 수신할 때 사용하는 것이 일반적입니다. 
```go
package main

import "fmt"

func main() {
	c := make(chan int, 10)

	for i := 0; i < 10; i++ {
		c <- i
	}
	close(c)

	for val := range c { // <-c 를 사용하지 않고 c만 사용
		fmt.Println(val)
	}
}
```

### 송신 전용, 수신 전용 채널
특별한 선언이 없으면 채널은 송신과 수신에 있어 자유롭습니다. 송신을 하고 이후 수신도 할 수 있고, 수신을 하고 이후 송신도 할 수 있습니다.   
채널을 함수의 매개변수로 전달할 때는 `(매개변수이름 chan 채널데이터타입)`형태로 입력합니다.   
채널을 함수의 매개변수로 전달하거나 반환할 때 채널로 송신만 할 것인지 수신만 할 것인지 설정할 수 있습니다. `chan<-채널데이터타입`을 입력하면 송신 전용 루틴, `<-chan 채널데이터타입`을 입력하면 수신 전용 루틴으로 사용할 수 있습니다.
```go
package main
 
import "fmt"

func main() {
	c := make(chan int)
	
	go sendChannel(c)
	go receiveChannel(c)

	fmt.Scanln()
}

func sendChannel(ch chan<- int) {
	ch <- 1
	ch <- 2
	// <-ch 오류 발생
	fmt.Println("done1")
}

func receiveChannel(ch <-chan int) {
	fmt.Println(<-ch)
	fmt.Println(<-ch)
	//ch <- 3 오류 발생
	fmt.Println("done2")
}
// 1
// 2
// done2
// done1
```

### 채널 select문
채널에서의 select문은 switch문과 거의 흡사한 용법으로 사용됩니다.
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch1 := make(chan bool)
	ch2 := make(chan bool)

	go func() {
		for {
			time.Sleep(1000 * time.Millisecond)
			ch1 <- true
		}
	}()

	go func() {
		for {
			time.Sleep(500 * time.Millisecond)
			ch2 <- true	
		}
	}()

	go func() {
		for {
			select {
			case <-ch1:
				fmt.Println("ch1 수신")
			case <-ch2:
				fmt.Println("ch2 수신")
			}
			
		}
	}()

	time.Sleep(5 * time.Second)
}
```
ch1과 ch2가 실행되는 시간이 다르기 때문에 원래 ch1이 수신될 때까지 ch2는 대기상태에 있어야 하지만 select문을 이용하면 데이터가 송신될 때까지 기다리지 않고 송신되면 바로 select문에 의해 바로 수신됩니다. select문에서는 `case 변수 := <-채널`형식으로 수신과 동시에 변수에 데이터를 초기화할 수 있습니다.

#

## 패키지
### 패키지의 개념
코드 상단에 `impot "fmt"`를 입력하는데, 이것은 직접 기능을 만들고 구현하지 않아도 누군가 만들어놓은 코드를 재사용한다는 것을 의미합니다.    
패키지에는 두 종류가 있는데 main 패키지와 그 외 패키지 입니다. main 패키지를 제외한 모든 패키지는 개발자가 직접 작성하거나 Go언어에서 제공하는 패키지입니다.    
main 패키지는 컴퍼일러에 의해 특별히 인식됩니다. 컴파일러는 main 패키지를 공유 패키지(라이브러리)가 아닌 실행(executable) 프로그램으로 만듭니다.   

Go언어는 선어만 해놓고 사용하지 않는 변수가 있다면 런타임 에러가 발생합니다. 패키지도 import만 하고 사용하지 않으면 에러가 발생하는데, 패키지 이름 앞에 '_'(언더바)를 입력하면 컴파일 에러가 발생하지 않습니다.
```go
package main

import (
	f "fmt"
	_ "runtime"
)

func main() {
	f.Println("Hello goorm!") // Hello goorm!
}
```