const questions = [
    {
        type: "list",
        name: "question1",
        message: "\n1.What is TypeScript?\n",
        choices: ['web framework', 'programming language', 'server-side runtime', 'markup language']
    },
    {
        type: "list",
        name: "question2",
        message: "\n2.Which of following companies has developed Typescript?\n",
        choices: ['MicroSoft', 'Oracle', 'Amazon', 'Google']
    },
    {
        type: "list",
        name: "question3",
        message: "\n3.What is the extension used for TypeScript files?\n",
        choices: ['.js', '.html', '.ts', '.css'],
    },
    {
        type: "list",
        name: "question4",
        message: "\n4.Which of the following is a valid TypeScript variable declaration?\n",
        choices: ['var x: string;', 'let x = "hello";', 'const x: number = 5;', 'all of the above']
    },
    {
        type: "list",
        name: "question5",
        message: "\n5.Which of the following operators can be used to declare a union type in TypeScript?\n",
        choices: ['&', '|', '^', '*']
    },
    {
        type: "list",
        name: "question6",
        message: "\n6.Which of the following is the correct syntax for declaring a class in TypeScript?\n",
        choices: ['class MyClass { }', 'function MyClass() { }', 'MyClass = class { }', 'class = MyClass { }']
    },
    {
        type: "list",
        name: "question7",
        message: "\n7.Which of the following is the syntax for defining a function in TypeScript?\n",
        choices: ['function myFunction() { }', 'let myFunction = function() { }', 'const myFunction = () => { }', 'all of the above'],
    },
    {
        type: "list",
        name: "question8",
        message: "\n8.What is the syntax for exporting a module in TypeScript?\n",
        choices: ['export default myModule;', 'export { myModule };', 'export = myModule;', 'all of the above']
    },
    {
        type: "list",
        name: "question9",
        message: "\n9.What is the syntax for importing a module in TypeScript?\n",
        choices: ["mport myModule from './myModule';", "import { myModule } from './myModule';", "import { myModule as myFunc} from './myModule';", "all of the above"]
    },
    {
        type: "list",
        name: "question10",
        message: "\n10.Which of the following is a widely used version control system?\n",
        choices: ['Git', 'SVN', 'Mercurial', 'CVS']
    }
];
export { questions };
