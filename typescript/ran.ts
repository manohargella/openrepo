interface Person {
    name: string;
    age: number;
  }
  
  class Animal {
    constructor(public species: string, public sound: string) {}
  
    makeSound() {
      console.log(this.sound);
    }
  }
  
  function add(a: number, b: number): number {
    return a + b;
  }
  
  const numbers: number[] = [1, 2, 3, 4, 5];
  
  const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
  ];
  
  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
  
  function shuffleArray<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = getRandomInt(i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  const shuffledNumbers = shuffleArray(numbers);
  console.log("Shuffled Numbers:", shuffledNumbers);
  
  const dog = new Animal("Dog", "Woof!");
  dog.makeSound();
  
  function factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log("Factorial of 5:", factorial(5));
  