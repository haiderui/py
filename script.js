const data = {
  "DEBUG_QUESTIONS": [
    {
      "title": "Fix the Function",
      "buggy": "def greet(name)\n    print(\"Hello, \" + name)\n\ngreet(\"Alice\")",
      "answer": "def greet(name):\n    print(\"Hello, \" + name)\n\ngreet(\"Alice\")",
      "explanation": "A colon `:` is required at the end of a `def` statement. Without it Python raises a `SyntaxError`."
    },
    {
      "title": "Fix the Loop",
      "buggy": "total = 0\nfor i in range(1, 6):\ntotal += i\nprint(total)",
      "answer": "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)",
      "explanation": "The body of a `for` loop must be indented. `total += i` needs 4 spaces of indentation."
    },
    {
      "title": "Fix the Condition",
      "buggy": "x = 10\nif x = 10:\n    print(\"Ten\")",
      "answer": "x = 10\nif x == 10:\n    print(\"Ten\")",
      "explanation": "`=` is assignment; `==` is comparison. Use `==` inside `if` conditions."
    },
    {
      "title": "Fix the List Index",
      "buggy": "nums = [1, 2, 3]\nprint(nums[3])",
      "answer": "nums = [1, 2, 3]\nprint(nums[2])",
      "explanation": "Python lists use 0-based indexing. The last element of a 3-item list is at index `2`, not `3`."
    },
    {
      "title": "Fix the String Concatenation",
      "buggy": "age = 20\nprint(\"Age: \" + age)",
      "answer": "age = 20\nprint(\"Age: \" + str(age))",
      "explanation": "You cannot concatenate a `str` with an `int` directly. Wrap the integer with `str()` first."
    },
    {
      "title": "Fix the Function Return",
      "buggy": "def add(a, b):\n    result = a + b\n\nprint(add(3, 4))",
      "answer": "def add(a, b):\n    result = a + b\n    return result\n\nprint(add(3, 4))",
      "explanation": "The function never returns a value, so it returns `None`. Add `return result` inside the function."
    },
    {
      "title": "Fix the Exception Handling",
      "buggy": "try:\n    x = int(\"abc\")\nexcept:\n    print(e)",
      "answer": "try:\n    x = int(\"abc\")\nexcept Exception as e:\n    print(e)",
      "explanation": "To access the exception object you must bind it with `as e`. The bare `except:` clause has no `e` variable."
    },
    {
      "title": "Fix the Default Argument",
      "buggy": "def power(base, exp):\n    return base ** exp\n\nprint(power(3))",
      "answer": "def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))",
      "explanation": "`exp` has no default value so calling `power(3)` raises a `TypeError`. Give it a default: `exp=2`."
    },
    {
      "title": "Fix the While Loop",
      "buggy": "i = 0\nwhile i < 3:\n    print(i)",
      "answer": "i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
      "explanation": "`i` is never incremented so the loop runs forever. Add `i += 1` inside the loop body."
    },
    {
      "title": "Fix the Lambda",
      "buggy": "square = lambda: x x * x\nprint(square(5))",
      "answer": "square = lambda x: x * x\nprint(square(5))",
      "explanation": "Lambda syntax is `lambda params: expression`. The parameter `x` must come before the colon."
    },
    {
      "title": "Fix the Missing Self",
      "buggy": "class Car:\n    def drive():\n        print('Vroom!')\n\nc = Car()\nc.drive()",
      "answer": "class Car:\n    def drive(self):\n        print('Vroom!')\n\nc = Car()\nc.drive()",
      "explanation": "Instance methods must take 'self' as their first parameter."
    },
    {
      "title": "Fix the Super Init",
      "buggy": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__()\n        self.breed = breed",
      "answer": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed",
      "explanation": "You must pass the required arguments ('name') to the parent class's __init__ method."
    },
    {
      "title": "Fix the File Write Mode",
      "buggy": "with open('data.txt', 'r') as f:\n    f.write('Hello')",
      "answer": "with open('data.txt', 'w') as f:\n    f.write('Hello')",
      "explanation": "To write to a file, you must open it in write mode ('w') or append mode ('a'), not read mode ('r')."
    },
    {
      "title": "Fix the Dictionary Access",
      "buggy": "student = {'name': 'John', 'age': 20}\nprint(student.name)",
      "answer": "student = {'name': 'John', 'age': 20}\nprint(student['name'])",
      "explanation": "Dictionary values are accessed using bracket notation (e.g., student['name']), not dot notation."
    },
    {
      "title": "Fix the List Append",
      "buggy": "my_list = [1, 2, 3]\nmy_list.add(4)\nprint(my_list)",
      "answer": "my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)",
      "explanation": "Lists in Python use the 'append()' method to add elements, not 'add()'."
    },
    {
      "title": "Fix the Negative Step Range",
      "buggy": "for i in range(5, 0):\n    print(i)",
      "answer": "for i in range(5, 0, -1):\n    print(i)",
      "explanation": "To count backwards with range(), you must provide a negative step value, like -1."
    },
    {
      "title": "Fix the Lambda Return",
      "buggy": "multiply = lambda x, y: return x * y\nprint(multiply(2, 3))",
      "answer": "multiply = lambda x, y: x * y\nprint(multiply(2, 3))",
      "explanation": "Lambda functions automatically return their evaluated expression. Do not use the 'return' keyword."
    },
    {
      "title": "Fix the Except Clause",
      "buggy": "try:\n    x = 1 / 0\nexcept ZeroDivisionError e:\n    print(e)",
      "answer": "try:\n    x = 1 / 0\nexcept ZeroDivisionError as e:\n    print(e)",
      "explanation": "The correct syntax for catching an exception as a variable is 'except ExceptionType as variable:'."
    },
    {
      "title": "Fix the Method Overriding",
      "buggy": "class Bird:\n    def speak(self):\n        return 'Tweet'\n\nclass Duck(Bird):\n    def speak():\n        return 'Quack'",
      "answer": "class Bird:\n    def speak(self):\n        return 'Tweet'\n\nclass Duck(Bird):\n    def speak(self):\n        return 'Quack'",
      "explanation": "Overridden methods in the child class must also include 'self' as the first parameter."
    },
    {
      "title": "Fix the String Formatting",
      "buggy": "name = 'Alice'\nprint('Hello {name}')",
      "answer": "name = 'Alice'\nprint(f'Hello {name}')",
      "explanation": "To interpolate variables inside a string, prefix the string with 'f' to make it an f-string."
    },
    {
      "title": "Fix the Instance Variable Setup",
      "buggy": "class Book:\n    def __init__(title):\n        self.title = title",
      "answer": "class Book:\n    def __init__(self, title):\n        self.title = title",
      "explanation": "The __init__ method must take 'self' as its first parameter to refer to the instance."
    },
    {
      "title": "Fix the Keyword Arguments",
      "buggy": "def greet(first, last):\n    print(f'{first} {last}')\n\ngreet(last='Smith', 'John')",
      "answer": "def greet(first, last):\n    print(f'{first} {last}')\n\ngreet('John', last='Smith')",
      "explanation": "Positional arguments must appear before keyword arguments in a function call."
    },
    {
      "title": "Fix the Nested Condition",
      "buggy": "x = 10\nif x > 5:\nif x > 8:\nprint('High')\n",
      "answer": "x = 10\nif x > 5:\n    if x > 8:\n        print('High')",
      "explanation": "Nested blocks must be further indented to indicate they belong inside the outer block."
    },
    {
      "title": "Fix the List Comprehension",
      "buggy": "evens = [x for x in range(10) if x % 2 = 0]",
      "answer": "evens = [x for x in range(10) if x % 2 == 0]",
      "explanation": "Use '==' for comparison inside a list comprehension condition, not '='."
    },
    {
      "title": "Fix the Class Instantiation",
      "buggy": "class Robot:\n    def run(self):\n        print('Running')\n\nr = Robot\nr.run()",
      "answer": "class Robot:\n    def run(self):\n        print('Running')\n\nr = Robot()\nr.run()",
      "explanation": "To create an instance of a class, you must call it with parentheses: 'Robot()'."
    },
    {
      "title": "Fix the File Close",
      "buggy": "f = open('data.txt', 'r')\ncontent = f.read()\nclose(f)",
      "answer": "f = open('data.txt', 'r')\ncontent = f.read()\nf.close()",
      "explanation": "File objects use the '.close()' method to close the file, not a global 'close()' function."
    },
    {
      "title": "Fix the Multiple Exceptions",
      "buggy": "try:\n    x = int('a')\nexcept ValueError, TypeError:\n    print('Error')",
      "answer": "try:\n    x = int('a')\nexcept (ValueError, TypeError):\n    print('Error')",
      "explanation": "To catch multiple exceptions in one except block, you must wrap them in a tuple using parentheses."
    },
    {
      "title": "Fix the Decorator Return",
      "buggy": "def my_dec(func):\n    def wrap():\n        print('Hi')\n        func()\n\n@my_dec\ndef say():\n    pass",
      "answer": "def my_dec(func):\n    def wrap():\n        print('Hi')\n        func()\n    return wrap\n\n@my_dec\ndef say():\n    pass",
      "explanation": "A decorator must return its inner wrapper function so it can replace the original function."
    },
    {
      "title": "Fix the Global Scope",
      "buggy": "count = 0\ndef inc():\n    count += 1\ninc()",
      "answer": "count = 0\ndef inc():\n    global count\n    count += 1\ninc()",
      "explanation": "To modify a global variable inside a function, you must declare it with the 'global' keyword."
    },
    {
      "title": "Fix the Lambda Parameters",
      "buggy": "add = lambda x y: x + y\nprint(add(2, 3))",
      "answer": "add = lambda x, y: x + y\nprint(add(2, 3))",
      "explanation": "Lambda parameters must be separated by commas, just like regular function parameters."
    },
    {
      "title": "Fix the Method Call",
      "buggy": "class A:\n    def play():\n        print('A')\na = A()\na.play(a)",
      "answer": "class A:\n    def play(self):\n        print('A')\na = A()\na.play()",
      "explanation": "'self' is passed automatically when calling an instance method. You must define it in the parameter list, but not pass it explicitly."
    }
  ],
  "OUTPUT_QUESTIONS": [
    {
      "title": "Basic Print",
      "code": "x = 5\ny = 3\nprint(x + y)\nprint(x * y)",
      "answer": "8\n15",
      "explanation": "`5 + 3 = 8` and `5 * 3 = 15`, each on its own line."
    },
    {
      "title": "String Multiplication",
      "code": "print(\"ha\" * 3)",
      "answer": "hahaha",
      "explanation": "String multiplication repeats the string. `\"ha\" * 3` produces `\"hahaha\"`."
    },
    {
      "title": "Range Loop",
      "code": "for i in range(3):\n    print(i)",
      "answer": "0\n1\n2",
      "explanation": "`range(3)` yields 0, 1, 2. Each is printed on a separate line."
    },
    {
      "title": "List Operations",
      "code": "nums = [10, 20, 30]\nnums.append(40)\nprint(len(nums))\nprint(nums[-1])",
      "answer": "4\n40",
      "explanation": "After appending 40 the list has 4 elements. `nums[-1]` is the last element: 40."
    },
    {
      "title": "Conditional",
      "code": "x = 7\nif x > 5:\n    print(\"big\")\nelse:\n    print(\"small\")",
      "answer": "big",
      "explanation": "`7 > 5` is `True`, so the `if` branch executes and prints `big`."
    },
    {
      "title": "String Methods",
      "code": "s = \"hello world\"\nprint(s.upper())\nprint(s.count(\"l\"))",
      "answer": "HELLO WORLD\n3",
      "explanation": "`.upper()` converts to uppercase. `.count(\"l\")` counts occurrences of `l` (positions 2, 3, 9) \u2192 3."
    },
    {
      "title": "Nested Function",
      "code": "def outer(x):\n    def inner(y):\n        return y * 2\n    return inner(x) + 1\n\nprint(outer(4))",
      "answer": "9",
      "explanation": "`inner(4)` returns `8`. `outer` then returns `8 + 1 = 9`."
    },
    {
      "title": "Decorator Effect",
      "code": "def shout(func):\n    def wrapper():\n        result = func()\n        return result.upper()\n    return wrapper\n\n@shout\ndef greet():\n    return \"hello\"\n\nprint(greet())",
      "answer": "HELLO",
      "explanation": "The `shout` decorator wraps `greet` so its return value is uppercased: `\"hello\"` \u2192 `\"HELLO\"`."
    },
    {
      "title": "Lambda with Map",
      "code": "nums = [1, 2, 3, 4]\nresult = list(map(lambda x: x ** 2, nums))\nprint(result)",
      "answer": "[1, 4, 9, 16]",
      "explanation": "`map` applies the lambda (squaring) to each element: `[1, 4, 9, 16]`."
    },
    {
      "title": "Exception Handling",
      "code": "try:\n    print(10 // 0)\nexcept ZeroDivisionError:\n    print(\"cannot divide by zero\")\nfinally:\n    print(\"done\")",
      "answer": "cannot divide by zero\ndone",
      "explanation": "Integer division by zero raises `ZeroDivisionError`. The `except` block prints the message; `finally` always runs."
    },
    {
      "title": "Loop with Continue",
      "code": "for i in range(4):\n    if i == 2:\n        continue\n    print(i)",
      "answer": "0\n1\n3",
      "explanation": "'continue' skips the rest of the loop body when i is 2."
    },
    {
      "title": "List Slicing",
      "code": "letters = ['a', 'b', 'c', 'd', 'e']\nprint(letters[1:4])",
      "answer": "['b', 'c', 'd']",
      "explanation": "Slicing [1:4] extracts elements from index 1 up to, but not including, index 4."
    },
    {
      "title": "List Comprehension",
      "code": "nums = [1, 2, 3]\nprint([x * 10 for x in nums])",
      "answer": "[10, 20, 30]",
      "explanation": "The comprehension multiplies each element in the list by 10."
    },
    {
      "title": "Polymorphism Output",
      "code": "class Cat:\n    def sound(self): return 'Meow'\nclass Dog:\n    def sound(self): return 'Woof'\n\nanimals = [Cat(), Dog()]\nfor a in animals:\n    print(a.sound())",
      "answer": "Meow\nWoof",
      "explanation": "Each object's specific 'sound' method is called due to polymorphism."
    },
    {
      "title": "Try Except Else",
      "code": "try:\n    val = 10 / 2\nexcept ZeroDivisionError:\n    print('Error')\nelse:\n    print('Success')\n    print(int(val))",
      "answer": "Success\n5",
      "explanation": "Since no exception occurred, the 'else' block executes."
    },
    {
      "title": "Inheritance Method Calling",
      "code": "class A:\n    def greet(self): print('A greet')\nclass B(A):\n    pass\n\nb = B()\nb.greet()",
      "answer": "A greet",
      "explanation": "Class B inherits the 'greet' method from Class A."
    },
    {
      "title": "Sorting with Lambda",
      "code": "data = [(1, 5), (3, 2), (2, 8)]\ndata.sort(key=lambda x: x[1])\nprint(data)",
      "answer": "[(3, 2), (1, 5), (2, 8)]",
      "explanation": "The list is sorted based on the second element of each tuple."
    },
    {
      "title": "String Split and Join",
      "code": "text = 'a-b-c'\nparts = text.split('-')\nprint('*'.join(parts))",
      "answer": "a*b*c",
      "explanation": "The string is split into ['a', 'b', 'c'] and then joined with '*'."
    },
    {
      "title": "Variable Shadowing",
      "code": "x = 10\ndef foo():\n    x = 5\n    print(x)\nfoo()\nprint(x)",
      "answer": "5\n10",
      "explanation": "The inner 'x' shadows the global 'x' inside the function, but doesn't change it outside."
    },
    {
      "title": "Nested Loops Output",
      "code": "for i in range(2):\n    for j in range(2):\n        print(i + j)",
      "answer": "0\n1\n1\n2",
      "explanation": "(0+0)=0, (0+1)=1, (1+0)=1, (1+1)=2."
    },
    {
      "title": "Magic Method __str__",
      "code": "class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __str__(self):\n        return f'({self.x}, {self.y})'\n\np = Point(3, 4)\nprint(p)",
      "answer": "(3, 4)",
      "explanation": "Printing the object calls its __str__ method automatically."
    },
    {
      "title": "Filtering with Map",
      "code": "nums = [1, 2, 3]\nres = list(map(lambda x: x + 2, filter(lambda x: x > 1, nums)))\nprint(res)",
      "answer": "[4, 5]",
      "explanation": "First, filter keeps numbers > 1 (which are 2, 3). Then map adds 2, resulting in [4, 5]."
    },
    {
      "title": "Dictionary Keys and Values",
      "code": "d = {'a': 1, 'b': 2}\nprint(list(d.keys())[0])\nprint(d['b'])",
      "answer": "a\n2",
      "explanation": "The first key is 'a', and the value for 'b' is 2."
    },
    {
      "title": "Class Attribute Modification",
      "code": "class Counter:\n    count = 0\n\nCounter.count += 1\nc1 = Counter()\nCounter.count += 1\nprint(c1.count)",
      "answer": "2",
      "explanation": "count is a class attribute. It's incremented twice on the class, so the instance sees 2."
    },
    {
      "title": "List Element Mutation",
      "code": "def modify(lst):\n    lst[0] = 99\n\nmy_list = [1, 2]\nmodify(my_list)\nprint(my_list[0])",
      "answer": "99",
      "explanation": "Lists are mutable, so modifications inside the function affect the original list."
    },
    {
      "title": "String Splitlines (File Simulation)",
      "code": "lines = 'first\\nsecond'.splitlines()\nprint(len(lines))\nprint(lines[1])",
      "answer": "2\nsecond",
      "explanation": "splitlines() splits the string by newlines into a list of 2 items. The item at index 1 is 'second'."
    },
    {
      "title": "Try-Finally Order",
      "code": "def test():\n    try:\n        return 'A'\n    finally:\n        print('B')\nprint(test())",
      "answer": "B\nA",
      "explanation": "The 'finally' block always executes before the 'try' block's return statement hands control back to the caller."
    },
    {
      "title": "Decorator Flow",
      "code": "def star(func):\n    def wrap():\n        return '*' + func() + '*'\n    return wrap\n\n@star\ndef text():\n    return 'yes'\nprint(text())",
      "answer": "*yes*",
      "explanation": "The decorator modifies the output of text() by prepending and appending a star."
    },
    {
      "title": "Nonlocal Variable",
      "code": "def outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x = 2\n    inner()\n    print(x)\nouter()",
      "answer": "2",
      "explanation": "The 'nonlocal' keyword allows the inner function to modify the 'x' defined in the outer function."
    },
    {
      "title": "Lambda in List Comprehension",
      "code": "funcs = [lambda x=x: x*2 for x in [1, 2]]\nfor f in funcs:\n    print(f())",
      "answer": "2\n4",
      "explanation": "The default argument x=x binds the loop variable early. Calling the lambdas yields 1*2 and 2*2."
    },
    {
      "title": "Super Method (Inheritance)",
      "code": "class Parent:\n    def val(self): return 5\nclass Child(Parent):\n    def val(self): return super().val() + 3\nprint(Child().val())",
      "answer": "8",
      "explanation": "super().val() calls the Parent's val() which returns 5. Then 3 is added to return 8."
    }
  ],
  "MINI_PROJECTS": [
    {
      "title": "Even Number Collector",
      "description": "Write a Python script that:\n1. Creates a list of numbers from 1 to 10 using a loop.\n2. Collects only the even numbers into a new list.\n3. Prints the even numbers list.\n\nExpected output:\n`[2, 4, 6, 8, 10]`",
      "answer": "evens = []\nfor i in range(1, 11):\n    if i % 2 == 0:\n        evens.append(i)\nprint(evens)",
      "expected_output": "[2, 4, 6, 8, 10]",
      "explanation": "Use `range(1, 11)` for 1\u201310, check `i % 2 == 0` for even numbers, append to list, then print."
    },
    {
      "title": "Multiplication Table",
      "description": "Write a Python script that prints the multiplication table for 3 (from 3\u00d71 to 3\u00d75).\n\nExpected output:\n```\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n```",
      "answer": "for i in range(1, 6):\n    print(f\"3 x {i} = {3 * i}\")",
      "expected_output": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15",
      "explanation": "Loop `i` from 1 to 5 and use an f-string to print each multiplication line."
    },
    {
      "title": "Grade Classifier",
      "description": "Write a Python script that:\n1. Defines a variable `score = 75`.\n2. Prints `'A'` if score >= 90, `'B'` if >= 80, `'C'` if >= 70, else `'F'`.\n\nExpected output:\n`C`",
      "answer": "score = 75\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")",
      "expected_output": "C",
      "explanation": "Use `if/elif/else` chains. `75 >= 70` is True so `C` is printed."
    },
    {
      "title": "Sum of Digits",
      "description": "Write a Python script that:\n1. Sets `number = 1234`.\n2. Calculates the sum of its digits.\n3. Prints the sum.\n\nExpected output:\n`10`",
      "answer": "number = 1234\ntotal = 0\nfor digit in str(number):\n    total += int(digit)\nprint(total)",
      "expected_output": "10",
      "explanation": "Convert the number to a string, iterate over characters, convert each back to `int`, and accumulate."
    },
    {
      "title": "FizzBuzz (1\u201315)",
      "description": "Write a FizzBuzz script for numbers 1 to 15:\n- Print `Fizz` for multiples of 3.\n- Print `Buzz` for multiples of 5.\n- Print `FizzBuzz` for multiples of both.\n- Otherwise print the number.",
      "answer": "for i in range(1, 16):\n    if i % 3 == 0 and i % 5 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)",
      "expected_output": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
      "explanation": "Check divisibility by 15 (both) first, then 3, then 5, else print the number."
    }
  ]
};

let state = {
    currentTab: 'debug',
    debug: { idx: 0, score: 0, total: 0, answer: '', submitted: false, valid: true, msg: '' },
    output: { idx: 0, score: 0, total: 0, answer: '', submitted: false },
    mini: { idx: 0, score: 0, total: 0, answer: '', submitted: false, valid: true, msg: '' }
};

function normalizeOutput(text) {
    if (!text) return "";
    return text.trim().split('\n').map(l => l.trim()).join('\n');
}

function normalizeCode(text) {
    if (!text) return "";
    let lines = text.trim().split('\n');
    let out = [];
    for (let line of lines) {
        let stripped = line.trimStart();
        let indent = line.length - stripped.length;
        stripped = stripped.replace(/ {2,}/g, ' ');
        stripped = stripped.replace(/\(\s+/g, '(').replace(/\s+\)/g, ')');
        // Match operators
        stripped = stripped.replace(/\s*([=+\-*/%<>!,:]|\*\*|\/\/|==|!=|<=|>=)\s*/g, '$1');
        stripped = stripped.replace(/'/g, '"');
        out.push(' '.repeat(indent) + stripped);
    }
    return out.join('\n');
}

function checkSyntax(code) {
    if (!code) return { valid: false, msg: "⚠️ Syntax Warning: Code cannot be empty." };
    let lines = code.trim().split('\n');
    for (let line of lines) {
        if (line.trim().length > 0) {
            let indent = line.length - line.trimStart().length;
            if (indent % 4 !== 0 && indent !== 0) {
                return { valid: false, msg: "⚠️ Syntax Warning: You have an Indentation Error! Please check your spaces and tabs." };
            }
        }
    }
    // Simulated Syntax check: if colon is missing on blocks
    if (code.includes('def ') && !code.includes(':')) {
        return { valid: false, msg: "⚠️ Syntax Warning: Invalid syntax. Missing colon." };
    }
    return { valid: true, msg: "" };
}

function switchTab(tab) {
    state.currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    render();
}

function handleInput(val) {
    state[state.currentTab].answer = val;
}

function submitAnswer() {
    const tab = state.currentTab;
    const st = state[tab];
    st.submitted = true;
    
    let q;
    let correct = false;
    
    if (tab === 'debug') {
        q = data.DEBUG_QUESTIONS[st.idx];
        const syntax = checkSyntax(st.answer);
        st.valid = syntax.valid;
        st.msg = syntax.msg;
        if (st.valid) {
            st.total += 1;
            if (normalizeCode(st.answer) === normalizeCode(q.answer)) {
                st.score += 1;
            }
        }
    } else if (tab === 'output') {
        q = data.OUTPUT_QUESTIONS[st.idx];
        st.total += 1;
        if (normalizeOutput(st.answer) === normalizeOutput(q.answer)) {
            st.score += 1;
        }
    } else if (tab === 'mini') {
        q = data.MINI_PROJECTS[st.idx];
        const syntax = checkSyntax(st.answer);
        st.valid = syntax.valid;
        st.msg = syntax.msg;
        if (st.valid) {
            st.total += 1;
            // Since we cannot run Python backend, we simulate output checking by verifying the code directly
            // For a pure client-side grading of open-ended code without a parser, we compare to expected answer code logic.
            // But if expected output is what we want, we can't generate actual output. We'll compare code structure.
            if (normalizeCode(st.answer) === normalizeCode(q.answer)) {
                st.score += 1;
            }
        }
    }
    render();
}

function nextQuestion() {
    const tab = state.currentTab;
    const st = state[tab];
    let maxIdx = 0;
    if (tab === 'debug') maxIdx = data.DEBUG_QUESTIONS.length;
    if (tab === 'output') maxIdx = data.OUTPUT_QUESTIONS.length;
    if (tab === 'mini') maxIdx = data.MINI_PROJECTS.length;
    
    st.idx = (st.idx + 1) % maxIdx;
    st.answer = '';
    st.submitted = false;
    st.valid = true;
    st.msg = '';
    render();
}

function render() {
    const container = document.getElementById('app-container');
    const tab = state.currentTab;
    const st = state[tab];
    
    let questions = [];
    let title = "", desc = "";
    let placeholder = "";
    let rows = 10;
    
    if (tab === 'debug') {
        questions = data.DEBUG_QUESTIONS;
        title = "## 🔧 Debugging Section";
        desc = "Find and fix the bug in the Python snippet below. Type the **corrected code** in the text area.";
        placeholder = "Write the fixed code...";
        rows = 12;
    } else if (tab === 'output') {
        questions = data.OUTPUT_QUESTIONS;
        title = "## 👁️ Guess the Output Section";
        desc = "Read the code carefully and type the **exact printed output** (line by line).";
        placeholder = "Type the exact output here...";
        rows = 6;
    } else if (tab === 'mini') {
        questions = data.MINI_PROJECTS;
        title = "## 🚀 Mini-Projects Section";
        desc = "Write a complete Python script to solve the task.";
        placeholder = "# Write your full Python script...";
        rows = 12;
    }
    
    const q = questions[st.idx];
    
    let html = `
        <div class="section-header">
            <span class="nav-pill">Question ${st.idx + 1} / ${questions.length}</span>
            <div class="score-card">
                <div class="score-num">${st.score}/${st.total}</div>
                <div class="score-text">Score</div>
            </div>
        </div>
        
        <h2>${title.replace('## ', '')}</h2>
        <p>${desc}</p>
        
        <div class="question-box">
            <strong>${q.title}</strong>
            ${q.description ? `<br><br>${q.description.replace(/\n/g, '<br>')}` : ''}
            ${q.buggy ? `<div class="code-block">${q.buggy}</div>` : ''}
            ${q.code ? `<div class="code-block">${q.code}</div>` : ''}
        </div>
        
        <textarea rows="${rows}" placeholder="${placeholder}" oninput="handleInput(this.value)">${st.answer}</textarea>
        
        <div class="actions">
            <button class="btn-submit" onclick="submitAnswer()">✅ Submit</button>
            <button class="btn-next" onclick="nextQuestion()">➡️ Next</button>
        </div>
    `;
    
    if (st.submitted) {
        if (!st.valid && (tab === 'debug' || tab === 'mini')) {
            html += `<div class="result-warn">${st.msg}</div>`;
        } else {
            let correct = false;
            let expectedAns = q.answer;
            if (tab === 'debug') {
                correct = normalizeCode(st.answer) === normalizeCode(q.answer);
            } else if (tab === 'output') {
                correct = normalizeOutput(st.answer) === normalizeOutput(q.answer);
            } else if (tab === 'mini') {
                correct = normalizeCode(st.answer) === normalizeCode(q.answer);
            }
            
            if (correct) {
                html += `<div class="result-ok">✅ <strong>Correct! Well done.</strong></div>`;
            } else {
                html += `
                <div class="result-err">
                    ❌ <strong>Incorrect.</strong><br><br>
                    <strong>Correct Answer:</strong>
                    <div class="correct-ans">${expectedAns}</div>
                    <br><strong>Explanation:</strong> ${q.explanation}
                </div>`;
            }
        }
    }
    
    container.innerHTML = html;
}

// Initial render
render();
