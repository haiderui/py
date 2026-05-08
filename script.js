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
    },
    {
      "title": "Fix the Lambda Sort Key",
      "buggy": "words = ['banana', 'fig', 'apple']\nwords.sort(key=lambda: len(w))\nprint(words)",
      "answer": "words = ['banana', 'fig', 'apple']\nwords.sort(key=lambda w: len(w))\nprint(words)",
      "explanation": "The lambda is missing its parameter `w`. The correct syntax is `lambda w: len(w)` so the function receives each element."
    },
    {
      "title": "Fix the Default Parameter",
      "buggy": "def greet(name, msg):\n    print(f'{msg}, {name}!')\n\ngreet('Alice')",
      "answer": "def greet(name, msg='Hello'):\n    print(f'{msg}, {name}!')\n\ngreet('Alice')",
      "explanation": "`msg` has no default value, so calling `greet('Alice')` raises a `TypeError`. Give it a default like `msg='Hello'`."
    },
    {
      "title": "Fix the Map Lambda Syntax",
      "buggy": "nums = [1, 2, 3]\nresult = list(map(lambda x = x * 2, nums))\nprint(result)",
      "answer": "nums = [1, 2, 3]\nresult = list(map(lambda x: x * 2, nums))\nprint(result)",
      "explanation": "Lambda syntax requires a colon (`:`) not `=` between the parameter and its expression: `lambda x: x * 2`."
    },
    {
      "title": "Fix the Missing Global",
      "buggy": "total = 100\n\ndef add_bonus():\n    total += 50\n\nadd_bonus()\nprint(total)",
      "answer": "total = 100\n\ndef add_bonus():\n    global total\n    total += 50\n\nadd_bonus()\nprint(total)",
      "explanation": "Without `global total`, Python treats `total` as a local variable inside the function, causing an `UnboundLocalError`. Add `global total` before modifying it."
    },
    {
      "title": "Fix the Missing Nonlocal",
      "buggy": "def outer():\n    x = 10\n    def inner():\n        x += 5\n    inner()\n    print(x)\nouter()",
      "answer": "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    print(x)\nouter()",
      "explanation": "Without `nonlocal x`, `x += 5` treats `x` as a new local variable in `inner`, causing an `UnboundLocalError`. Use `nonlocal x` to modify the enclosing variable."
    },
    {
      "title": "Fix the Sort — Missing key=",
      "buggy": "nums = [3, 1, 4, 1, 5]\nnums.sort(lambda x: x)\nprint(nums)",
      "answer": "nums = [3, 1, 4, 1, 5]\nnums.sort(key=lambda x: x)\nprint(nums)",
      "explanation": "`.sort()` does not accept a bare positional lambda. The lambda must be passed as the keyword argument `key=lambda x: x`."
    },
    {
      "title": "Fix the Default — Wrong Argument Order",
      "buggy": "def describe(age=0, name):\n    print(f'{name} is {age}')\n\ndescribe(30, 'Alice')",
      "answer": "def describe(name, age=0):\n    print(f'{name} is {age}')\n\ndescribe('Alice', 30)",
      "explanation": "In Python, non-default parameters must come before default parameters. `name` has no default, so it must be listed first."
    },
    {
      "title": "Fix the Map — Missing list()",
      "buggy": "nums = [1, 2, 3]\nresult = map(lambda x: x * 3, nums)\nprint(result[0])",
      "answer": "nums = [1, 2, 3]\nresult = list(map(lambda x: x * 3, nums))\nprint(result[0])",
      "explanation": "`map()` returns a lazy map object, not a list. Wrap it with `list()` before indexing it with `[0]`."
    },
    {
      "title": "Fix the Global — Wrong Variable Name",
      "buggy": "items = [1, 2, 3]\n\ndef reset_items():\n    items = []\n\nreset_items()\nprint(items)",
      "answer": "items = [1, 2, 3]\n\ndef reset_items():\n    global items\n    items = []\n\nreset_items()\nprint(items)",
      "explanation": "Without `global items`, the assignment `items = []` creates a brand-new local variable. The module-level list is unchanged. Add `global items` to rebind the global name."
    },
    {
      "title": "Fix the global vs nonlocal",
      "buggy": "def outer():\n    val = 0\n    def inner():\n        global val\n        val += 1\n    inner()\n    print(val)\nouter()",
      "answer": "def outer():\n    val = 0\n    def inner():\n        nonlocal val\n        val += 1\n    inner()\n    print(val)\nouter()",
      "explanation": "`global val` looks for `val` at module level, but `val` lives in `outer()`. Use `nonlocal val` to correctly reference the enclosing scope's variable."
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
    },
    {
      "title": "Lambda Sort Key — By Length",
      "code": "words = ['banana', 'fig', 'apple', 'kiwi']\nwords.sort(key=lambda w: len(w))\nprint(words)",
      "answer": "['fig', 'kiwi', 'apple', 'banana']",
      "explanation": "`sort(key=lambda w: len(w))` orders strings shortest-to-longest. 'fig'(3), 'kiwi'(4), 'apple'(5), 'banana'(6)."
    },
    {
      "title": "Lambda Sort Key — Tuple Index",
      "code": "students = [('Alice', 85), ('Bob', 72), ('Carol', 91)]\nstudents.sort(key=lambda s: s[1])\nfor name, score in students:\n    print(name)",
      "answer": "Bob\nAlice\nCarol",
      "explanation": "Sorting by the second element (score) gives 72, 85, 91 — so Bob, Alice, Carol."
    },
    {
      "title": "Default Parameter Value",
      "code": "def add(A, B=10):\n    return A + B\n\nprint(add(5))\nprint(add(5, 3))",
      "answer": "15\n8",
      "explanation": "First call omits B so the default 10 is used: 5+10=15. Second call passes B=3: 5+3=8."
    },
    {
      "title": "Map with Lambda — Squaring",
      "code": "nums = [2, 3, 4, 5]\nresult = list(map(lambda x: x ** 2, nums))\nprint(result)",
      "answer": "[4, 9, 16, 25]",
      "explanation": "`map` applies the lambda to every element, squaring each: 2²=4, 3²=9, 4²=16, 5²=25."
    },
    {
      "title": "Global Keyword",
      "code": "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nincrement()\nincrement()\nprint(counter)",
      "answer": "3",
      "explanation": "`global counter` lets the function modify the module-level variable. After three calls it equals 3."
    },
    {
      "title": "Nonlocal — Closure Counter",
      "code": "def make_counter():\n    count = 0\n    def inc():\n        nonlocal count\n        count += 1\n        return count\n    return inc\n\nc = make_counter()\nprint(c())\nprint(c())\nprint(c())",
      "answer": "1\n2\n3",
      "explanation": "`nonlocal count` lets `inc` modify `count` in the enclosing scope. Each call increments the shared variable."
    },
    {
      "title": "Lambda Sort Key — Reverse by Value",
      "code": "scores = [('Alice', 70), ('Bob', 90), ('Carol', 80)]\nscores.sort(key=lambda x: -x[1])\nfor name, score in scores:\n    print(name)",
      "answer": "Bob\nCarol\nAlice",
      "explanation": "Using `-x[1]` as the key sorts by score in descending order: 90 (Bob), 80 (Carol), 70 (Alice)."
    },
    {
      "title": "Default Parameter — Power Function",
      "code": "def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(2, 10))",
      "answer": "9\n1024",
      "explanation": "First call uses default exp=2: 3²=9. Second call uses exp=10: 2¹⁰=1024."
    },
    {
      "title": "Map with Lambda — Uppercase",
      "code": "words = ['hello', 'world', 'python']\nresult = list(map(lambda w: w.upper(), words))\nprint(result)",
      "answer": "['HELLO', 'WORLD', 'PYTHON']",
      "explanation": "`map` applies `.upper()` to each string via the lambda, returning a new list of uppercase strings."
    },
    {
      "title": "Global — List Reassignment",
      "code": "items = [1, 2, 3]\n\ndef reset():\n    global items\n    items = []\n\nreset()\nprint(items)",
      "answer": "[]",
      "explanation": "`global items` allows the function to rebind the module-level name `items` to a new empty list."
    },
    {
      "title": "Nonlocal — Accumulating Adder",
      "code": "def make_adder(n):\n    total = 0\n    def add():\n        nonlocal total\n        total += n\n        return total\n    return add\n\nadd5 = make_adder(5)\nprint(add5())\nprint(add5())",
      "answer": "5\n10",
      "explanation": "`nonlocal total` keeps `total` alive between calls. Each call adds `n=5`, so results are 5 then 10."
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
    },
    {
      "title": "Q5: Save and Display Student Grades (File + Exceptions)",
      "description": "Write a Python program with two functions:\n1. `save_grades(name, grade)` — writes the student name and grade to a file called `grades.txt`.\n2. `display_grades()` — reads and prints the contents of `grades.txt`. Use exception handling for `FileNotFoundError`.",
      "answer": "def save_grades(name, grade):\n    with open('grades.txt', 'a') as f:\n        f.write(f'{name}: {grade}\\n')\n\ndef display_grades():\n    try:\n        with open('grades.txt', 'r') as f:\n            print(f.read())\n    except FileNotFoundError:\n        print('File not found.')\n\nsave_grades('Alice', 90)\nsave_grades('Bob', 75)\ndisplay_grades()",
      "expected_output": "Alice: 90\nBob: 75",
      "explanation": "Use `open()` in append mode `'a'` to add records without overwriting. In `display_grades()`, wrap `open()` in a `try/except FileNotFoundError` block to handle a missing file gracefully."
    },
    {
      "title": "Q6: Odd Numbers Filter and Average (Lambda)",
      "description": "Write a Python program using a lambda expression to extract the odd numbers from a list and calculate their average.\n\nUse the list: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`",
      "answer": "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nodds = list(filter(lambda x: x % 2 != 0, numbers))\naverage = sum(odds) / len(odds)\nprint('Odd numbers:', odds)\nprint('Average:', average)",
      "expected_output": "Odd numbers: [1, 3, 5, 7, 9]\nAverage: 5.0",
      "explanation": "`filter()` with a lambda keeps only items where `x % 2 != 0`. Then `sum(odds) / len(odds)` computes the average of [1,3,5,7,9] which is 25/5 = 5.0."
    },
    {
      "title": "Q7: Average Exam Scores with Exception Handling",
      "description": "Write a Python function `get_average()` that:\n1. Asks the user to enter three exam scores.\n2. Calculates and prints their average.\n3. Handles `ValueError` (non-numeric input) and `ZeroDivisionError`.",
      "answer": "def get_average():\n    try:\n        s1 = float(input('Enter score 1: '))\n        s2 = float(input('Enter score 2: '))\n        s3 = float(input('Enter score 3: '))\n        count = 3\n        average = (s1 + s2 + s3) / count\n        print('Average:', average)\n    except ValueError:\n        print('Invalid input. Please enter numbers only.')\n    except ZeroDivisionError:\n        print('Cannot divide by zero.')\n\nget_average()",
      "expected_output": "Average: 85.0",
      "explanation": "Wrap `float(input(...))` calls in `try/except`. `ValueError` is raised if the user types text instead of a number. `ZeroDivisionError` is included as a guard even though dividing by 3 is safe here — it demonstrates good practice."
    },
    {
      "title": "Q8: Constructor and Destructor",
      "description": "Write a Python program to explain the concept of constructor (`__init__`) and destructor (`__del__`) using a simple class.",
      "answer": "class MyClass:\n    def __init__(self, name):\n        self.name = name\n        print(f'Constructor called for {self.name}')\n\n    def __del__(self):\n        print(f'Destructor called for {self.name}')\n\nobj = MyClass('Object1')\nprint('Using the object')\ndel obj",
      "expected_output": "Constructor called for Object1\nUsing the object\nDestructor called for Object1",
      "explanation": "`__init__` is the constructor — it runs automatically when an object is created. `__del__` is the destructor — it runs when the object is deleted with `del` or goes out of scope."
    },
    {
      "title": "Q9: Encapsulation with Private Attributes",
      "description": "Write a Python program to explain encapsulation by creating a class with a private attribute and getter/setter methods.",
      "answer": "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\n    def get_balance(self):\n        return self.__balance\n\n    def deposit(self, amount):\n        self.__balance += amount\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint('Balance:', account.get_balance())",
      "expected_output": "Balance: 1500",
      "explanation": "`self.__balance` is a private attribute (name-mangled by Python). It cannot be accessed directly from outside the class. Instead, `get_balance()` and `deposit()` provide controlled access — this is encapsulation."
    },
    {
      "title": "Q10: Class and Object",
      "description": "Write a Python program to explain the concept of class and object by creating a `Student` class and two objects from it.",
      "answer": "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n\n    def display(self):\n        print(f'Name: {self.name}, Grade: {self.grade}')\n\ns1 = Student('Alice', 'A')\ns2 = Student('Bob', 'B')\ns1.display()\ns2.display()",
      "expected_output": "Name: Alice, Grade: A\nName: Bob, Grade: B",
      "explanation": "A class is a blueprint. `Student('Alice', 'A')` creates an object `s1` with its own `name` and `grade` attributes. Calling `.display()` on each object prints its own data."
    },
    {
      "title": "Q11: Class Variables and Class Methods",
      "description": "Write a Python program to explain class variables and class methods using a `Counter` class that tracks how many objects have been created.",
      "answer": "class Counter:\n    count = 0\n\n    def __init__(self):\n        Counter.count += 1\n\n    @classmethod\n    def get_count(cls):\n        return cls.count\n\nc1 = Counter()\nc2 = Counter()\nc3 = Counter()\nprint('Objects created:', Counter.get_count())",
      "expected_output": "Objects created: 3",
      "explanation": "`count` is a class variable shared by all instances. `@classmethod` makes `get_count` a class method — it receives the class (`cls`) instead of an instance. Every `__init__` call increments the shared counter."
    },
    {
      "title": "Q12: Decorators",
      "description": "Write a Python program to explain the concept of decorators by creating a decorator that prints a message before and after a function runs.",
      "answer": "def my_decorator(func):\n    def wrapper():\n        print('Before the function')\n        func()\n        print('After the function')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()",
      "expected_output": "Before the function\nHello!\nAfter the function",
      "explanation": "`my_decorator` wraps `say_hello` inside `wrapper`. Using `@my_decorator` above the function definition is shorthand for `say_hello = my_decorator(say_hello)`. When `say_hello()` is called, the wrapper runs first, then the original function, then the after-message."
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
