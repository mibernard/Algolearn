export type Chapter = {
  language: string;
  title: string;
  content: string;
  id: number;
  initialCode: string;
};

const chapters: Chapter[] = [
  {
    id: 1,
    language: 'Python',
    title: 'Variables',
    content: `
    <p>In Python, we have several data types that are used to store different kinds of information:</p>
    <ul class=inText>
        <li>Integer: Represents whole numbers without a decimal component.</li>
        <li>String: A sequence of characters enclosed within quotes.</li>
        <li>Float: Represents numbers that contain a decimal point.</li>
        <li>Boolean: Represents one of two values, True or False.</li>
        <li>List: An ordered collection of items enclosed within square brackets.</li>
        <li>Dictionary: A collection of key-value pairs enclosed within curly braces.</li>
        <li>Tuple: An ordered collection of items enclosed within parentheses.</li>
    </ul>
    
    <p class=content>
    my_number = 1000      # Integer<br>
    my_text = "Hello!"    # String<br>
    my_float = 7.5        # Float<br>
    my_bool_1 = True      # Boolean<br>
    my_bool_2 = False     # Boolean<br>
    my_list = []          # List<br>
    my_dictionary = {}    # Dictionary<br>
    my_tuple = (1, 2, 3)  # Tuple</p>
    
    <p>These data types are essential for storing and manipulating different kinds of information in Python.</p>
    <p>The name you see before the '=' is what's called a "variable". You can name it whatever you want! Above you can see how I named my variables eg; my_number, my_text, my_float, my_bool_1.</p>
    <p>It's good practice to name your variable relevant to its purpose. For example if I was creating a variable that would represent the cash price of an item, I might name it something like:</p>
    
    <p class=content>
    item_cost = 1                        # The cost of an item, which will be 1 dollar<br>
    supply_remaining = 2_500_000_000    # The number of items in inventory that are remaining, Note that we use '_' instead of commas as a separator<br>
    name_CTO = "John Woods"<br>
    value_of_a_quarter = 0.25
    </p>
    
    <p>You might notice that I use the underscore symbol "_" instead of spaces in my variable. Something to keep in mind is you cannot start a variable with an integer, use any special characters aside from "_", and you cannot use spaces.
    Here are some examples of incorrect variables that will not work in your code, and will cause an error, <strong>DO NOT USE</strong>:</p>
    
    <p class=content>
    3variable = 5     # Starts with a number<br>
    my-variable = 6   # Contains a hyphen<br>
    my variable = 7   # Contains a space
    </p>
    
    <h2>General Arithmetic for Integers, Floats, and Strings</h2>
    
    <p>General arithmetic operations are a great place to start! Let's try creating a number variable, and printing it to the console.</p>
    <p>If this is your first time programming, or even if you have programmed before, you'll quickly find out or are already familiar that printing is one of the most commonly used functions for debugging. It's how you "see" what the value is of your variable at a specific point in your code.</p>
    
    <p class=content>
    my_number = 1<br>
    my_number_plus_one = my_number + 1<br>
    print(my_number_plus_one)
    </p>
    
    <p>The steps that occur here:</p>
    <ol class=inText>
    <li>Created my "my_number" variable and assigned it to the integer 1</li>
    <li>Created another variable called "my_number_plus_one" and assigned it to what "my_number" is when 1 is added to it</li>
    <li>Used the "print()" function to see the value in my terminal</li>
    </ol>
    
    <p>There are several arithmetic operators (Like "+" or "-") available in Python, and they are as follows:</p>
    <p class=content>
    a = 10<br>
    b = 3<br><br>
    addition = a + b          # Addition: 13<br>
    subtraction = a - b       # Subtraction: 7<br>
    multiplication = a * b    # Multiplication: 30<br>
    division = a / b          # Division: 3.3333333333333335<br>
    floor_division = a // b   # Floor Division: 3<br>
    modulus = a % b           # Modulus: 1<br>
    exponentiation = a ** b   # Exponentiation: 1000
    </p>
    
    <p>Similar to integers and floats, you can also use arithmetic operators on strings, these are mostly limited to:</p>
    <ul class=inText>
    <li>Addition and multiplication: +, *</li>
    </ul>
    <p>The act of combining strings together or multiplying a single string is often referred to as <strong>concatenation</strong>.</p>
    
    <p class=content>
    result = "Hello, " + "World!"<br>
    print(result) # result is "Hello, World!"<br><br>
    string = "Hello"<br>
    result = string * 3<br>
    print(result) # result is "HelloHelloHello"
    </p>
    
    <p>We won't dive into Lists, Dictionaries, or Tuples just yet, but I would like to mention, and this is something you'll see in practice later— that lists and dictionaries are mutable, whereas tuples are immutable.
    When you hear mutable, think "can be changed", where mutable means it can be changed and immutable means it cannot be changed.</p>
    
    <p>Example:</p>
    <p class=content>
    my_tuple = (1, 2)<br>
    print(my_tuple[0])<br>
    my_tuple[0] = 2<br>
    print(my_tuple)<br><br>
    # ERROR<br>
    #    my_tuple[0] = 2<br>
    #    ~~~~~~~~^^^<br>
    # TypeError: 'tuple' object does not support item assignment
    </p>
    
    <p>A more advanced concept to start early with, but another thing we will review later:</p>
    <h2>Examples of mutable and immutable parameters on an asset on Algorand</h2>
    <strong>Immutable Parameters:</strong></br>
    <p>These parameters can only be specified when an asset is created.</p>
    <ul class=inText>
    <li>Creator: The address of the account that created the asset.</li>
    <li>AssetName: The name of the asset.</li>
    <li>UnitName: The unit name of the asset.</li>
    <li>Total: The total number of units of the asset.</li>
    <li>Decimals: The number of digits to use after the decimal point when displaying the asset.</li>
    <li>DefaultFrozen: Whether the asset is frozen by default.</li>
    <li>URL: A URL where more information about the asset can be retrieved.</li>
    <li>MetaDataHash: A commitment to some unspecified asset metadata.</li>
    </ul>
    <strong>Mutable Parameters:</strong></br>
    <p>These parameters can be changed after the asset is created.</p>
    <ul class=inText>
    <li>Manager: The address of the account that can change the asset's mutable parameters.</li>
    <li>Reserve: The address of the account that holds the asset reserve. (Cannot be changed if initially not declared)</li>
    <li>Freeze: The address of the account that can freeze or unfreeze user asset holdings. (Cannot be changed if initially not declared)</li>
    <li>Clawback: The address of the account that can revoke user asset holdings and send them to other addresses. (Cannot be changed if initially not declared)</li>
    </ul>
    <em>*Note: Exception for various ARC types like ARC19 and ARC69 that use the reserve address and/or note field to point to metadata*</em>
  
      
  
      <form>
      <h1>Quiz</h1>
          <h3>Question 1</h3>
          <p>What data type is used to store whole numbers in Python?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) String</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) Float</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) Integer</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) Boolean</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following is an example of a correct variable name in Python?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) 3variable</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) my-variable</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) my variable</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="correct">d) my_variable</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code snippet?</p>
          <pre>string = "Hello"
  result = string * 3
  print(result) </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) HelloHelloHello</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) Hello, Hello, Hello</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) Hello*3</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) Error</label><br>
  
          <h3>Question 4</h3>
          <p>Which Python data type is mutable?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) Tuple</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) String</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="correct">c) List</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Integer</label><br>
  
          <br>
      </form>
    `,
    initialCode: `a = 10\nb = 3.5\nprint(a+b)`,
  },
  {
    id: 4,
    language: 'Python',
    title: 'Dictionaries',
    content: `
    <p>Now we'll dive into a bit more advanced data structures, dictionaries! A dictionary is like a list, except it uses curly brackets { } instead of square brackets [ ]— but most importantly, dictionaries also differ in that they store values with keys, and can accept several data types. A dictionary can be highly versatile, and can not only be used for data storage, but for more complex algorithms like hashmaps, which we'll go over later. Most interestingly, we can have dictionaries with dictionaries within them, and even lists as well! It's important to mention that keys and values have a colon ' : ' separator between them.</p>
    
    <p>Here's a simple example of a dictionary:</p>
    <p class=content>this_is_my_dictionary = {"name": "John", "age": 22}</p>
    
    <p>In lists, we used a process called indexing, and the index notation format to access values, eg; my_list[3]. With dictionaries, we use a similar process called key access, and the key notation format to access values.</p>
    
    <p>The main difference is that we use keys, instead of solely integers that refer to position, to select values from a dictionary— and not to confuse you, but a key in a dictionary can also be an integer =).</p>
    
    <p>For example, in this_is_my_dictionary above, you'll see the value "John" belongs to the key, "name". As well as the value 22, belongs to the key, "age". This is what key notation would look like for accessing a value for a specific key in a dictionary:</p>
    <p class=content>name_value = this_is_my_dictionary['name']<br>
    print(name_value)</p>
    <p># Output: "John"</p>
    
    <p>Try printing the "age" value in the code editor below:</p>
    <p class=content>age_value = this_is_my_dictionary['age']<br>
    print(age_value)</p>
    <p># Output: 22</p>
    
    <p>Now we'll look over a more intricate dictionary, that's a bit larger and complex.</p>
    <p class=content>this_is_my_dictionary = {"name": "John", "age": 22, "likes": ["Exercise", "Cooking", "Coding"]}</p>
    
    <p>We see something in this dictionary that we haven't seen before, a list as the value to a key. Let's try accessing the 1st index of John's likes using a mix of key notation and index notation!</p>
    <p class=content>likes = this_is_my_dictionary['likes']<br>
    print(likes)</p>
    <p># Output:<br># ["Exercise", "Cooking", "Coding"]</p>
    
    <p class=content>likes_first_index = likes[1]<br>
    print(likes_first_index)</p>
    <p># Output:<br># "Cooking"</p>
  
    
  
      <form>
      <h1>Quiz</h1>
          <h3>Question 1</h3>
          <p>What is the correct way to define a dictionary in Python?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) my_dict = [1: "one", 2: "two"]</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) my_dict = (1: "one", 2: "two")</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) my_dict = {1: "one", 2: "two"}</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) my_dict = 1: "one", 2: "two"</label><br>
  
          <h3>Question 2</h3>
          <p>How do you access the value associated with a key in a dictionary?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) Using key notation</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) Using index notation</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Using both key and index notation</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) Using value notation</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  this_is_my_dictionary = {"name": "John", "age": 22}
  print(this_is_my_dictionary['age'])
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) "John"</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 22</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) "age"</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) "name"</label><br>
  
          <h3>Question 4</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  this_is_my_dictionary = {"name": "John", "age": 22, "likes": ["Exercise", "Cooking", "Coding"]}
  print(this_is_my_dictionary['likes'][1])
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) "Exercise"</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) "Cooking"</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) "Coding"</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) ["Exercise", "Cooking", "Coding"]</label><br>
  
          <br>
      </form>
    `,
    initialCode: `this_is_my_dictionary = {"name": "John", "age": 22}\nprint(this_is_my_dictionary)`,
  },
  {
    id: 3,
    language: 'Python',
    title: 'Lists',
    content: `
    <p>Before we go over dictionaries, which are the most common datatype when sending and receiving information between applications (back-end to front-end, front-end to back-end, or back-end to websites, etc.), and this is especially true when interacting with the Algorand blockchain, I think it's important to have an understanding of how lists work.</p>
    
    <p>Below is an example of a list:</p>
    <p class=content>my_list = [7, "Hello", False, 63.5]</p>
    
    <p>A list can hold all types of data, and you can have all kinds of data in one list. You use lists when you need exactly that, a list. Lists are also mutable, as opposed to tuples—which means we can rearrange, extend, and replace items in a list, meaning they're super flexible!</p>
    
    <p>A list is a collection of data enclosed between square brackets [ ], and separated by commas. An example of common kinds of data you would have in a list on Algorand could be one that has asset ID's.</p>
    <p class=content>asset_ids = [1265975021, 1138500612, 400593267]</p>
    
    <p>Or perhaps a list of addresses:</p>
    <p class=content>addresses = [<br>
    'WWYUMYPM2Y5NIIZTF4O5N73A4ZTZQWXS6TNP23U37LQ6WWF543SRTGKWUU',<br>
    '7IWZ342UGNQ2JVS2E6EGFD4MPUNL4ZIWDYNFZIANR6U7WZXORCRQCCN3YY',<br>
    'HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA'<br>]</p>
    
    <p>Although lists don't have to be organized in anyway and are not descriptive, they can be manipulated. For example, if you wanted to remove duplicate entries in a list, you could use the set() function.</p>
    <p class=content>my_list = [1, 1, 2, 3, 4, 4]<br>
    my_list_without_duplicates = set(my_list)<br>
    print(my_list_without_duplicates)</p>
    
    <p># Output:<br># [1, 2, 3, 4]</p>
    
    <p>Let's look back at the first example of a list:</p>
    <p class=content>my_list = [7, "Hello", False, 63.5]</p>
    
    <p>In the list above we have an integer at the first spot, 7; a string in the second spot, "Hello"; a boolean (True or False value) in the third spot; a float (AKA decimal value), in the fourth spot.
    I refer to the places these items are in the list as "spots", but the correct term is actually "indexes". We referenced them as the first, second, third, and fourth spot— however, in programming lists are zero-indexed. This means that we always start from zero, and use an integer to refer to their position in the list. This feels strange, but it is something you should have ingrained into your mind, as this is universal across all programming when indexing for positions in a list.</p>
    
    <p>The correct reference to the positions would be Index 0 for 7, Index 1 for "Hello", Index 2 for False, and Index 3 for 63.5. But, how would we see this utilized in a programming scenario?</p>
    
    <p>To interact with the list, we must first assign it to a variable:</p>
    <p class=content>my_list = [7, "Hello", False, 63.5]</p>
    
    <p>Now, we can use index notation to pick out items of our choice by using their position, let's start with just printing the list to the terminal:</p>
    <p class=content>print(my_list)</p>
    <p># Output: [7, "Hello", False, 63.5]</p>
    
    <p>... and now lets print the item at index 1 (the second item since the first item is always 0) using index notation:</p>
    <p class=content>first_index_my_list = my_list[1]<br>
    print(first_index_my_list)</p>
    <p># Output: "Hello"</p>
    
    <p>Try printing the third index into the console using index notation, I've already defined the list for you below, click run when you're ready to run the code! The output should be 63.5</p>
    
    <p>IDE WINDOW:<br>
    my_list = [7, "Hello", False, 63.5]<br>
    . . .<br>
    CHECK OUTPUT IS 63.5 AND SHOW "SUCCESS"</p>
    <p>Next chapter: Dictionaries</p>
  
      <form>
    <h1>Quiz</h1>
          <h3>Question 1</h3>
          <p>What is the correct way to define a list in Python?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) my_list = {1, 2, 3}</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) my_list = (1, 2, 3)</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) my_list = [1, 2, 3]</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) my_list = 1, 2, 3</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following statements about lists is true?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) Lists are immutable.</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) Lists can contain different types of data.</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Lists are enclosed in parentheses ( ).</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) Lists are zero-indexed.</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  my_list = [7, "Hello", False, 63.5]
  print(my_list[2])
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 7</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) "Hello"</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) False</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 63.5</label><br>
  
          <h3>Question 4</h3>
          <p>What is the correct way to remove duplicate entries in a list?</p>
          <pre>
  my_list = [1, 1, 2, 3, 4, 4]
  my_list_without_duplicates = set(my_list)
  print(my_list_without_duplicates)
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Using the set() function</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Using the list() function</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Using the dict() function</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Using the tuple() function</label><br>
  
          <br>
      </form>
    `,
    initialCode: `my_list = [7, "Hello", False, 63.5]\nprint(my_list)`,
  },
  {
    id: 2,
    language: 'Python',
    title: 'Functions',
    content: `
    <p>In Python, a function is a block of code that performs a specific task. Functions help to modularize code, making it more readable and reusable.</p>
    <p>To define a function, we use the <code>def</code> keyword followed by the function name and parentheses. Inside the parentheses, we can specify parameters that the function can accept. The code block within every function starts with a colon (:) and is indented.</p>
    <p>Let's start with a simple function that prints a greeting message:</p>
    
    <p class=content>
    def greet():<br>
        print("Hello, world!")
    </p>
    
    <p>When we call the <code>greet()</code> function, it prints "Hello, world!" to the console.</p>
    <p>Functions can also accept parameters, which allow us to pass values into the function for processing. Here's an example:</p>
    
    <p class=content>
    def greet(name):<br>
        print(f"Hello, {name}!")<br><br>
    greet("Alice")  # Output: "Hello, Alice!"<br>
    greet("Bob")    # Output: "Hello, Bob!"
    </p>
    
    <p>In this example, the <code>greet</code> function accepts one parameter <code>name</code>. When we call the function and pass in a value like "Alice" or "Bob", the function prints a personalized greeting message.</p>
    <p>Functions can return values using the <code>return</code> statement. This allows us to capture the result of a function and use it in our code. Here's an example:</p>
    
    <p class=content>
    def add(a, b):<br>
        return a + b<br><br>
    result = add(3, 5)<br>
    print(result)  # Output: 8
    </p>
    
    <p>The <code>add</code> function takes two parameters <code>a</code> and <code>b</code>, adds them together, and returns the result. We can then store the returned value in a variable and print it.</p>
    <p>Functions can have default parameter values, which are used if no argument is provided when the function is called. Here's an example:</p>
    
    <p class=content>
    def greet(name="world"):<br>
        print(f"Hello, {name}!")<br><br>
    greet()         # Output: Hello, world!<br>
    greet("Alice")  # Output: Hello, Alice!
    </p>
    
    <p>In this example, the <code>greet</code> function has a default parameter value of "world". If no argument is passed when the function is called, it uses the default value.</p>
    <p>We can also define functions that accept a variable number of arguments using the <code>*args</code> and <code>**kwargs</code> syntax. Here's an example:</p>
    
    <p class=content>
    def add(*args):<br>
        return sum(args)<br><br>
    print(add(1, 2, 3))        # Output: 6<br>
    print(add(4, 5, 6, 7))    # Output: 22
    </p>
    
    <p>The <code>add</code> function uses <code>*args</code> to accept a variable number of arguments. Inside the function, <code>args</code> is a tuple containing all the arguments passed. We use the <code>sum</code> function to add all the values together and return the result.</p>
    <p>The <code>**kwargs</code> syntax allows us to accept a variable number of keyword arguments. Here's an example:</p>
    
    <p class=content>
    def print_info(**kwargs):<br>
        for key, value in kwargs.items():<br>
            print(f"{key}: {value}")<br><br>
    print_info(name="Alice", age=30, city="New York")
    </p>
    
    <p>In this example, the <code>print_info</code> function uses <code>**kwargs</code> to accept a varying number of keyword arguments. Inside the function, <code>kwargs</code> is a dictionary containing all the keyword arguments passed. We loop through the dictionary and print each key-value pair.</p>
    <p>Functions are a fundamental part of Python programming, enabling us to create modular, reusable, and maintainable code. As we progress, we'll explore more advanced concepts and techniques related to functions.</p>
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What keyword is used to define a function in Python?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) func</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) function</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) def</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) define</label><br>
  
          <h3>Question 2</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  def greet(name):
      print(f"Hello, {name}!")
  
  greet("Alice")
          </pre>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) Hello, world!</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) Hello, Alice!</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Hello!</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) Alice, Hello!</label><br>
  
          <h3>Question 3</h3>
          <p>What does the following function return?</p>
          <pre>
  def add(a, b):
      return a + b
  
  result = add(3, 5)
  print(result)
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 35</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 15</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) 8</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 5</label><br>
  
          <h3>Question 4</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  def greet(name="world"):
      print(f"Hello, {name}!")
  
  greet()
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Hello, world!</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Hello, Alice!</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Hello!</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) world, Hello!</label><br>
  
          <br>
      </form>
    `,
    initialCode: `def greet():\n    print("Hello, world!")\ngreet()`,
  },

  {
    id: 5,
    language: 'Python',
    title: 'Imports',
    content: `
    <p>This code begins with module imports, which is a fancy way of saying— "someone wrote some code that does something, and I want to use that something in my code". It isn't possible to use libraries, which are just collections of code created by someone, without formally importing them at the beginning of your code. Imports must appear before usage of anything within them because like the English language, python interpreters read from top to bottom.</p>
    
    <p>The module imports are the algod.py file from the v2 client folder, in the algosdk library.</p>
    <p class=content>library/folder/  file.py/        class<br>
    from algosdk.v2client.algod import AlgodClient</p>
    
    <p>The period " . " between "algosdk" and "v2client" indicates where we are going from the algosdk library, which is the v2client folder. From the v2client folder, we then enter the algod python file, and extract the AlgodClient class to use in our code. This is how you import the file, function, or "class" (we will go over classes later) that you want to use within your code. If we did not import AlgodClient specifically, we could still access it in our code from the Algod file. We would just need to type out the algod_client variable like so:</p>
    <p class=content>from algosdk.v2client import algod<br>
    algod_client = algod.AlgodClient(node_token, node_port)</p>
    
    <p>We could also stop at v2client, and follow a similar workflow</p>
    <p class=content>from algosdk import v2client<br>
    algod_client = v2client.algod.AlgodClient(node_token, node_port)</p>
    
    <p>We can see now why sometimes its more efficient to import a specific file, method, or function instead of the entire library— it is certainly easier to read, and write, and is generally much more concise. For the random module, the library comes with python naturally when installed, so you will notice that with a fresh installation of python, you will not have access to the algosdk library, but you will have access to the random library. To gain access to the algosdk library, you would simply need to install it using the pip installer.</p>
    <p class=content>pip install py-algorand-sdk</p>
    
    <p>If you don't have pip, it must be installed manually, which is gone over in the Installation guide on this webpage.</p>
    <p class=content>import random</p>
    
    <p>To decide on whether or not you want to import a specific file, function, or method, you would need to use your intuition! For example, I use the general import random at the top of my file, yet I only use randint from that module. So it may be better to use</p>
    <p class=content>from random import randint</p>
    
    <p>For the sake of understanding, lets just say perhaps the person writing the code unsure of whether or not the code will need other functions from the random library. Perhaps I plan to also use randrange from the random library with randint, so for now I'll import the entire random library.</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to import the AlgodClient class from the algosdk library?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) import AlgodClient from algosdk.v2client.algod</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) import algosdk.v2client.algod.AlgodClient</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="correct">c) from algosdk.v2client.algod import AlgodClient</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) from algosdk.v2client import AlgodClient</label><br>
  
          <h3>Question 2</h3>
          <p>Which statement about module imports is true?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) Imports can be placed anywhere in the code</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) Imports must appear before usage of anything within them</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) Python reads imports from bottom to top</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) You can only import entire libraries, not specific functions</label><br>
  
          <h3>Question 3</h3>
          <p>How would you import only the randint function from the random module?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) from random import randint</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) import random.randint</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) import randint from random</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) import random</label><br>
  
          <h3>Question 4</h3>
          <p>Which command would you use to install the algosdk library using pip?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) pip install algosdk</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) pip install py-algorand-sdk</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) pip install algorand</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) pip install py-algosdk</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `# Import the entire random module
  import random
  
  # Generate a random integer between 1 and 10
  random_number = random.randint(1, 10)
  print(f"Random number (full random import): {random_number}")
  `,
  },
  {
    id: 16,
    language: 'Python',
    title: 'Getting Started with Algorand',
    content: `
    <p>To set-up your own node, visit this github repository I have created for a previous tutorial series:</p>
    <p><a href="https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/tree/main/Episode%201%20-%20Algorand%20Node%2C%20Python%2C%20Visual%20Studio%20Code%2C%20Ubuntu%2C%20and%20Module%20Installations" target="_blank">GitHub Repository</a></p>
    <p>Scroll down to the section called "Algorand Node Installation"— and make sure to run these commands in an Ubuntu LTS Shell (Download link in bottom resources section)</p>
    <p>If you chose to run a node, that's wonderful! If not, I will be including sections for those programming without a node.</p>
    <p>Now that we have access to an Algorand testnet node, as well as a basic understanding of how to work with different kinds of variables, functions and imports. It's time to get started!</p>
    <p>This will reaffirm your ability to use functions, methods, and imports— as well as key notation: eg; accessing the name of a customer in a variable named my_dictionary</p>
    
    <p class=content>
    <code>
    my_dictionary = {'customer-name': 'Jerry'}<br>
    customer_name = my_dictionary['customer-name']<br>
    print(customer_name)
    </code>
    </p>
    
    <p>If you are using your own algorand testnet node on Windows, you will need to access your algod_token and algod_port from your node's data directory:</p>
    
    <p><strong>Obtaining your Algorand Node Token and Port</strong></p>
    <p><strong>#Enter the data directory from the root folder</strong></p>
    <p>cd node/data</p>
    <p><strong>#Use the following commands to obtain your node token and port</strong></p>
    <p>cat algod.token</p>
    <p>Logs the token into the terminal, it should look something like:</p>
    <p>b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd</p>
    <p>cat algod.net</p>
    <p>Logs the port into the terminal, it should look something like:</p>
    <p>127.0.0.1:8080</p>
    
    <p>When programming, you will format this information for variables like so:</p>
    
    <p class=content>
    <code>
    algod_token = 'b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd'<br>
    algod_port = 'http://127.0.0.1:8080'
    </code>
    </p>
    
    <p>If you are not using your own algorand testnet node, you can use these:</p>
    <p>(Free service does not require token, and the algod_token variable will be an empty string '', whereas the algod_server will be the algonode testnet cloud link)</p>
    <p class=content>
    <code>
    algod_token = ''<br>
    algod_server = 'https://testnet-api.algonode.cloud'
    </code>
    </p>
    
    <p>Let's started by simply getting the status of the Algorand testnet network!</p>
    <p class=content>
    <code>
    from algosdk.v2client.algod import AlgodClient<br><br>
    algod_token = ''  # Leave '' for public nodely service, or enter your node token <br>
    algod_server = 'https://testnet-api.algonode.cloud' # Use this cloud link, or enter your own host & port<br><br>
    # Initialize AlgodClient<br>
    algod_client = AlgodClient(algod_token, algod_server)<br><br>
    status = algod_client.status()<br><br>
    print(status)
    </code>
    </p>
    
    <p>First we import the AlgodClient from algod.py in the v2client folder of the algosdk library.</p>
    <p>Then, we define our token and server for the node we'll be using.</p>
    <p>We initialize an AlgodClient instance, which requires a token and server argument, and assign it to our "algod_client" variable.</p>
    <p>We access a function available from the AlgodClient, called status, through our algod_client variable.</p>
    <p>The result of the status function is assigned to a variable called 'status'.</p>
    <p>Finally, we print our 'status' variable.</p>
    <p>Try running the code now!</p>
    
    <p>You'll see that you receive a dictionary with several keys and associated values, here is a list of all the keys:</p>
    <ul class=inText>
        <li>catchpoint</li>
        <li>catchpoint-acquired-blocks</li>
        <li>catchpoint-processed-accounts</li>
        <li>catchpoint-processed-kvs</li>
        <li>catchpoint-total-accounts</li>
        <li>catchpoint-total-blocks</li>
        <li>catchpoint-total-kvs</li>
        <li>catchpoint-verified-accounts</li>
        <li>catchpoint-verified-kvs</li>
        <li>catchup-time</li>
        <li>last-catchpoint</li>
        <li>last-round</li>
        <li>last-version</li>
        <li>next-version</li>
        <li>next-version-round</li>
        <li>next-version-supported</li>
        <li>stopped-at-unsupported-round</li>
        <li>time-since-last-round</li>
    </ul>
    
    <p>The most popular keys are last-round, so you know which block you are on, and perhaps time-since-last-round, if you should need to know that information. Other keys are primarily
    used by node running services, like upcoming reti-pool incentives, but otherwise are not especially useful for our purposes.</p>
    
    <p>Referencing the information from Chapter 4, for dictionaries, try this:
    <ul class=inText>
        <li>Create a variable, and name it last_round</li>
        <li>Assign the value of the key 'last-round' in the status dictionary to this variable you created</li>
        <li>Print your variable!</li>
    </ul>
    </p>
    
    <p>#Code IDE</p>
    
    <p class=content>
    <code>
    status = {'catchpoint': '', 'catchpoint-acquired-blocks': 0, 'catchpoint-processed-accounts': 0, 'catchpoint-processed-kvs': 0,<br>
    'catchpoint-total-accounts': 0, 'catchpoint-total-blocks': 0, 'catchpoint-total-kvs': 0, 'catchpoint-verified-accounts': 0,<br> 
    'catchpoint-verified-kvs': 0, 'catchup-time': 0, 'last-catchpoint': '', 'last-round': 41422522,<br>
    'last-version': 'https://github.com/algorandfoundation/specs/tree/925a46433742afb0b51bb939354bd907fa88bf95',<br> 
    'next-version': 'https://github.com/algorandfoundation/specs/tree/925a46433742afb0b51bb939354bd907fa88bf95',<br>
    'next-version-round': 41422523, 'next-version-supported': True, 'stopped-at-unsupported-round': False,<br> 
    'time-since-last-round': 1687057197}<br><br>
    #Enter code below to get the 'last-round' value printed to the console!
    </code>
    </p>
    
    <p>Reveal Answer?</p>
    <p class=content>
    <code>
    last_round = status['last-round']<br>
    print(last_round)
    </code>
    </p>
  
  
      <form>
     <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to access the value associated with the key 'customer-name' in a dictionary?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) my_dictionary.customer-name</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) my_dictionary['customer-name']</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) my_dictionary('customer-name')</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) my_dictionary[customer-name]</label><br>
  
          <h3>Question 2</h3>
          <p>What is the command to view the Algorand node token in the terminal?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) cat algod.net</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) cat algod.token</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) cat node.token</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) cat algod.port</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the value of 'last_round' if the key 'last-round' in the status dictionary is 1000?</p>
          <pre>
  status = {'last-round': 1000}
  last_round = status['last-round']
  print(last_round)
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) '1000'</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 1000</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) 999</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) None</label><br>
  
          <h3>Question 4</h3>
          <p>What is the correct way to initialize an AlgodClient instance using a public Algorand testnet node?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) algod_client = AlgodClient('', 'http://localhost:4001')</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) algod_client = AlgodClient('', 'https://testnet-api.algonode.cloud')</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) algod_client = AlgodClient('my_token', 'https://mainnet-api.algonode.cloud')</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) algod_client = AlgodClient('my_token', 'http://127.0.0.1:8080')</label><br>
  
          <br>
      </form>
    `,
    initialCode: `# Using public Algorand testnet with empty token
  from algosdk.v2client.algod import AlgodClient
  
  algod_token = ''
  algod_server = 'https://testnet-api.algonode.cloud'
  
  # Initialize AlgodClient
  algod_client = AlgodClient(algod_token, algod_server)
  
  # Fetch and print status from the public testnet
  try:
      status = algod_client.status()
      print(f"Connected to public Algorand testnet! Last round: {status['last-round']}")
  except Exception as e:
      print(f"Failed to connect to public testnet: {e}")
  `,
  },

  {
    id: 17,
    language: 'Python',
    title: 'Payment Transactions',
    content: `
    <p class=content>
    <code>
    from algosdk.v2client.algod import AlgodClient<br>
    from algosdk.transaction import PaymentTxn, wait_for_confirmation<br>
    from algosdk import account<br>
    from algosdk import mnemonic<br>
    from algosdk.util import algos_to_microalgos
    </code>
    </p>
    
    <p><strong>TWO WAYS TO IMPORT AN ACCOUNT</strong></p>
    
    <p><strong>METHOD 1</strong><br>
    CREATE A NEW ACCOUNT</p>
    <p class=content>
    <code>
    private_key, address = account.generate_account()<br>
    print(private_key)<br>
    print(address)
    </code>
    </p>
    <p>Output:<br>
    6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg== <== Private Key<br>
    I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU <== Address</p>
    
    <p>IF NEEDED TO IMPORT TO A WALLET, YOU CAN OBTAIN THE MNEMONIC FROM THE PRIVATE KEY<br>
    REDEEM MNEMONIC FROM PRIVATE KEY</p>
    <p class=content>
    <code>
    mnemonic_phrase = mnemonic.from_private_key(private_key)<br>
    print(mnemonic_phrase)
    </code>
    </p>
    <p>Output:<br>
    brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual <== Mnemonic</p>
    
    <p><strong>METHOD 2</strong><br>
    USE MNEMONIC TO OBTAIN PRIVATE KEY<br>
    REDEEM PRIVATE KEY FROM MNEMONIC</p>
    <p class=content>
    <code>
    mnemonic_phrase = 'brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual'<br>
    private_key = mnemonic.to_private_key(mnemonic_phrase)<br>
    print(private_key)
    </code>
    </p>
    <p>Output:<br>
    6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg== <== Private Key</p>
    
    <p>When developing in Python, there are two methods to obtain a private key and address to use for signing transactions you create. The private key is in base64 format and required for transaction signing.</p>
    
    <p><strong>Method 1: Create a brand new account and obtain the private key and address directly</strong></p>
    <p>In the algosdk's account module, there is a function called generate_account(), which you can import at the beginning of your code, and is defined here:</p>
    <p><code>(function) def generate_account() -> tuple[str, Any]<br>
    Generate an account.</code></p>
    <p>Returns:<br>
    (str, str): private key, account address</p>
    
    <p>This returns the private key and account address as strings. Since this returns a tuple of two items, you would assign two variables to the output of the function, and then subsequently print them.</p>
    <p>In testnet, you can now fund the account by inputting the address at <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>.<br>
    All accounts require a minimum balance of 0.1 Algo to send transactions, and then 0.001 Algorand per transaction fee.</p>
    
    <p>Should you need the mnemonic to import into a wallet application later, you can do so with the from_private_key() function in the mnemonic library as well; input your private key into the function and assign the output variable to something like "mnemonic_phrase". Function is defined below:</p>
    <p><code>(function) def from_private_key(private_key: Any) -> str<br>
    Return the mnemonic for the private key.</code></p>
    <p>Args:<br>
    private_key (str): private key in base64</p>
    <p>Returns:<br>
    str: mnemonic</p>
    
    <p><strong>Method 2: Convert an Existing Mnemonic to a Private Key</strong></p>
    <p>Should you already have a mnemonic and require the private key in base64 format, you can create a variable called "mnemonic_phrase" and use the result of the to_private_key() function in the mnemonic library, which is defined below:</p>
    <p><code>(function) def to_private_key(mnemonic: Any) -> str<br>
    Return the private key for the mnemonic.</code></p>
    <p>Args:<br>
    mnemonic (str): mnemonic of the private key</p>
    <p>Returns:<br>
    str: private key in base64</p>
    <p>The mnemonic must be a string, meaning it is enclosed in apostrophes or double quotes ('' or ""), and there must be a space between words.</p>
    
    <p>Now lets use the account we generated and funded using <a href="https://bank.testnet.algorand.network/" target="_blank">https://bank.testnet.algorand.network/</a>, create our AlgodClient class to initiate a connection to the Algorand blockchain, generate a new account to interact with, and subsequently sign, and send some different kinds of payment transactions.</p>
    
    <p>We will be trying a typical payment transaction with a note field, followed by a rekey transaction (rekey to a new account and back to ourselves from the new account), and an account closing transaction. All three are under the scope of a payment transaction.</p>
    
    <p class=content>
    <code>
    from algosdk.v2client.algod import AlgodClient<br>
    from algosdk.account import generate_account<br>
    from algosdk.util import algos_to_microalgos<br>
    from algosdk.transaction import PaymentTxn, wait_for_confirmation<br><br>
    algod_token = ''<br>
    algod_server = 'https://testnet-api.algonode.cloud'<br>
    algod_client = AlgodClient(algod_token, algod_server)<br><br>
    address = 'I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU'<br>
    private_key = '6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg=='<br><br>
    amount = algos_to_microalgos(1.001)<br><br>
    params = algod_client.suggested_params()<br><br>
    new_account_private_key, new_account_address = generate_account()<br><br>
    basic_payment_transaction = PaymentTxn(<br>
        sender = address,<br>
        receiver = new_account_address,<br>
        sp = params,<br>
        amt = amount,<br>
        note = "Here's your one Algo!"<br>
    )<br><br>
    signed_basic_payment_transaction = basic_payment_transaction.sign(private_key)<br>
    transaction_id = algod_client.send_transaction(signed_basic_payment_transaction)<br>
    wait_for_confirmation(algod_client, transaction_id)<br>
    print(transaction_id)
    </code>
    </p>
    
    <p>Steps:</p>
    <ol class=inText>
      <li>Import our necessary modules</li>
      <li>Define our AlgodClient to initiate a connection to the chain</li>
      <li>Define our account's address and private key that we will be sending transactions from</li>
      <li>Define an amount of Algorand to send</li>
      <li>Obtain the params needed for all transactions</li>
      <li>Generate a new account for testing, so we have an address to send testnet Algorand to</li>
      <li>Define our payment transaction and its parameters</li>
      <li>Sign the transaction with our private key</li>
      <li>Assign the result of sending our signed transaction with the send_transaction() function from the AlgodClient class</li>
      <li>Use the wait_for_confirmation() function to ensure the transaction is successful</li>
      <li>Print the transaction ID for reference on an explorer like <a href="https://allo.info/" target="_blank">allo.info</a>, <a href="https://testnet.explorer.perawallet.app/" target="_blank">Pera Wallet Explorer</a>, <a href="https://www.blockpack.app/#/explorer/home" target="_blank">BlockPack Explorer</a>, or <a href="https://app.dappflow.org/explorer/home" target="_blank">DappFlow Explorer</a>.</li>
    </ol>
    
    <p>We introduce a few new functions here:</p>
    <ul class=inText>
      <li>the algos_to_microalgos() function from the algosdk.util module</li>
      <li>the PaymentTxn class and wait_for_confirmation() function from the algosdk.transaction module</li>
      <li>The send_transaction() function, which is a method from the AlgodClient class</li>
    </ul>
    
    <p>In the algorand SDK's, when we want to reference an amount of algo, that amount needs to be in a format called "Microalgo"; Microalgo is essentially an amount of algo times 1,000,000. Meaning that 1 Algo would be 1,000,000 Microalgo, and the transaction fee of 0.001 Algo is 1,000 Microalgo.</p>
    
    <p>Instead of manually calculating the microalgo amount each time, what we can do is use the algos_to_microalgos() function, and pass in the amount of algo as an argument, defined below:</p>
    <p><code>(function) def algos_to_microalgos(algos: Any) -> Any<br>
    Convert algos to microalgos.</code></p>
    <p>Args:<br>
    algos (int or decimal): how many algos</p>
    <p>Returns:<br>
    int: how many microalgos</p>
    
    <p>The PaymentTransaction class comes with a lot of functionality, aside from simple payment transactions of an amount of Algo to more advanced features, including:</p>
    <ul class=inText>
      <li>the ability to rekey your account to another (giving them full access, and losing your access)</li>
      <li>closing your account (send all of your remaining Algo to them)</li>
    </ul>
    
    <p><strong>PaymentTransaction format:</strong></p>
    <p><code>class PaymentTxn(<br>
        sender: str,<br>
        sp: SuggestedParams,<br>
        receiver: Any,<br>
        amt: Any,<br>
        close_remainder_to: Any | None = None,<br>
        note: Any | None = None,<br>
        lease: Any | None = None,<br>
        rekey_to: Any | None = None<br>
    )<br>
    Represents a payment transaction.</code></p>
    <p>Args:<br>
    sender (str): address of the sender<br>
    sp (SuggestedParams): suggested params from algod<br>
    receiver (str): address of the receiver<br>
    amt (int): amount in microAlgos to be sent<br>
    close_remainder_to (str, optional): if nonempty, account will be closed and remaining algos will be sent to this address<br>
    note (bytes, optional): arbitrary optional bytes<br>
    lease (byte[32], optional): specifies a lease, and no other transaction with the same sender and lease can be confirmed in this transaction's valid rounds<br>
    rekey_to (str, optional): additionally rekey the sender to this address</p>
    
    <p>After we define our Payment Transaction class parameters, we can then use the sign() method that is included within it. This sign function accepts our private key, and outputs a signed transaction object, which is needed to input to the send_transaction() function:</p>
    <p><code>(method) def sign(private_key: Any) -> SignedTransaction<br>
    Sign the transaction with a private key.</code></p>
    <p>Args:<br>
    private_key (str): the private key of the signing account</p>
    <p>Returns:<br>
    SignedTransaction: signed transaction with the signature</p>
    
    <p>The wait_for_confirmation() function requires the AlgodClient class variable we created, as well as the transaction ID to wait for:</p>
    <p><code>(function) def wait_for_confirmation(<br>
        algod_client: AlgodClient,<br>
        txid: str<br>
    )</code></p>
    
    <p>Lastly, the send_transaction() function, which accepts signed transaction objects:</p>
    <p><code>(method) def send_transaction(<br>
        txn: GenericSignedTransaction<br>
    ) -> Outputs transaction ID</code></p>
    
    <p>Below are examples of rekey transactions and close amount to transactions, which are sent in succession (BUT NOT A GROUP TRANSACTION, WHICH WE WILL LEARN ABOUT LATER)</p>
    
    <p class=content>
    <code>
    # Rekey Transaction<br>
    rekey_to_new_account_payment = PaymentTxn(<br>
        sender = address,<br>
        receiver = new_account_address,<br>
        sp = params,<br>
        amt = 0,<br>
        rekey_to = new_account_address,<br>
        note = "Take care of my account for me! I'll be back in a week"<br>
    )<br><br>
    signed_rekey_to_new_account_payment = rekey_to_new_account_payment.sign(private_key)<br>
    transaction_id = algod_client.send_transaction(signed_rekey_to_new_account_payment)<br>
    wait_for_confirmation(algod_client, transaction_id)<br>
    print(transaction_id)<br><br>
    # New account rekeys back to the original account, note that the sender is the original account but the new account uses their own private key, not the original accounts private key<br><br>
    rekey_back_to_old_account_from_new_account = PaymentTxn(<br>
        sender = address,<br>
        receiver = address,<br>
        sp = params,<br>
        rekey_to = address,<br>
        amt = 0,<br>
        note = "Sorry! I'm too busy trading this week. Maybe ask PorkChop.algo?"<br>
    )<br><br>
    signed_rekey_back_to_old_account_from_new_account = rekey_back_to_old_account_from_new_account.sign(new_account_private_key)<br>
    transaction_id = algod_client.send_transaction(signed_rekey_back_to_old_account_from_new_account)<br>
    wait_for_confirmation(algod_client, transaction_id)<br>
    print(transaction_id)<br><br>
    # Close remainder to transaction<br><br>
    close_account_to_new_account = PaymentTxn(<br>
        sender = address,<br>
        receiver = new_account_address,<br>
        sp = params,<br>
        amt = 0,<br>
        close_remainder_to = new_account_address,<br>
        note = 'Take care of my precious Algo!'<br>
    )<br><br>
    signed_close_account_to_new_account = close_account_to_new_account.sign(private_key)<br>
    transaction_id = algod_client.send_transaction(signed_close_account_to_new_account)<br>
    wait_for_confirmation(algod_client, transaction_id)<br>
    print(transaction_id)
    </code>
    </p>
    
    <p>Although the Payment Transaction has many possible inputs, the bare minimum is using the sender, sp, receiver, and amt field. Anything else is at your discretion!</p>
    
    <p><strong>DISCLAIMER:</strong> that when rekeying and closing out accounts, this process is irreversible! If you don't know the person, or feel unsure about doing so, you should never use these transactions outside of testing purposes without ultimate confidence. No platforms currently utilize rekey transactions for users, but do use them internally when generating smart contracts for contract to contract calls, which will come later in our learning process.</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What function is used to create a new Algorand account in the algosdk library?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) algosdk.createAccount()</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) algosdk.generateAccount()</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) algosdk.newAccount()</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) algosdk.accountCreate()</label><br>
  
          <h3>Question 2</h3>
          <p>How can you obtain the mnemonic phrase from a private key in the algosdk library?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) algosdk.privateKeyToMnemonic()</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) algosdk.secretKeyToMnemonic()</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) algosdk.mnemonicFromPrivateKey()</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) algosdk.mnemonicConvert()</label><br>
  
          <h3>Question 3</h3>
  <p>What is the correct way to initialize an AlgodClient instance to connect to the Algorand testnet?</p>
  <pre>
  algod_token = ''
  algod_server = 'https://testnet-api.algonode.cloud'
  algod_client = algod.AlgodClient(algod_token, algod_server)
  </pre>
  <input type="radio" id="q3a" name="q3" value="a">
  <label for="q3a" class="correct">a) algod.AlgodClient()</label><br>
  <input type="radio" id="q3b" name="q3" value="b">
  <label for="q3b" class="incorrect">b) algod.AlgodNode()</label><br>
  <input type="radio" id="q3c" name="q3" value="c">
  <label for="q3c" class="incorrect">c) algod.Algodv2()</label><br>
  <input type="radio" id="q3d" name="q3" value="d">
  <label for="q3d" class="incorrect">d) algod.Client()</label><br>
  
  
          <h3>Question 4</h3>
          <p>What function is used to convert an amount of Algo to MicroAlgo?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) algosdk.convertAlgoToMicro()</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) algosdk.algosToMicroalgos()</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) algosdk.algoToMicro()</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) algosdk.toMicroalgos()</label><br>
  
          <h3>Question 5</h3>
          <p>Which function is used to send a signed transaction in the Algorand SDK?</p>
          <input type="radio" id="q5a" name="q5" value="a">
          <label for="q5a" class="incorrect">a) algodClient.sendTransaction()</label><br>
          <input type="radio" id="q5b" name="q5" value="b">
          <label for="q5b" class="correct">b) algodClient.sendRawTransaction()</label><br>
          <input type="radio" id="q5c" name="q5" value="c">
          <label for="q5c" class="incorrect">c) algodClient.submitTransaction()</label><br>
          <input type="radio" id="q5d" name="q5" value="d">
          <label for="q5d" class="incorrect">d) algodClient.sendSignedTransaction()</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `from algosdk import account, mnemonic
  
  # Generate a new account
  private_key, address = account.generate_account()
  
  # Display the private key and address
  print("Private Key:", private_key)
  print("Address:", address)
  
  # Generate mnemonic phrase from private key
  mnemonic_phrase = mnemonic.from_private_key(private_key)
  print("Mnemonic Phrase:", mnemonic_phrase)
  
    `,
  },
  {
    id: 6,
    language: 'Javascript',
    title: 'Variables',
    content: `
    <p>In JavaScript, we have several data types that are used to store different kinds of information:</p>
    <ul class=inText>
        <li>Integer: Represents whole numbers without a decimal component. Example: let myNumber = 1000;</li>
        <li>String: A sequence of characters enclosed within quotes. Example: let myText = "Hello!";</li>
        <li>Float: Represents numbers that contain a decimal point. Example: let myFloat = 7.5;</li>
        <li>Boolean: Represents one of two values, true or false. Examples: let myBool1 = true; let myBool2 = false;</li>
        <li>Array: An ordered collection of items enclosed within square brackets. Example: let myList = [];</li>
        <li>Object: A collection of key-value pairs enclosed within curly braces. Example: let myDictionary = {};</li>
    </ul>
    
    <p>These data types are essential for storing and manipulating different kinds of information in JavaScript.</p>
    <p>It's good practice to name your variables relevant to their purpose. For example, if I was creating a variable that would represent the cash price of an item, I might name it something like:</p>
    
    <p class=content>
    let itemCost = 1; // The cost of an item, which will be 1 dollar<br>
    let supplyRemaining = 2500000000; // The number of items in inventory that are remaining<br>
    let nameCTO = "John Woods";<br>
    let valueOfAQuarter = 0.25;
    </p>
    
    <p>You might notice that I use camelCase for naming my variables. It's important to follow JavaScript naming conventions:</p>
    <ul class=inText>
    <li>Variable names cannot start with a number.</li>
    <li>Variable names cannot contain spaces.</li>
    <li>Variable names can include letters, digits, underscores (_), and dollar signs ($), but should start with a letter, underscore, or dollar sign.</li>
    </ul>
    
    <p>Here are some examples of incorrect variables that will not work in your code, and will cause an error, <strong>DO NOT USE</strong>:</p>
    <p class=content>
    let 3variable = 5;     // Starts with a number<br>
    let my-variable = 6;   // Contains a hyphen<br>
    let my variable = 7;   // Contains a space
    </p>
    
    <h2>General Arithmetic for Integers, Floats, and Strings</h2>
    <p>General arithmetic operations are a great place to start! Let's try creating a number variable, and logging it to the console.</p>
    <p>If this is your first time programming, or even if you have programmed before, you'll quickly find out or are already familiar that logging is one of the most commonly used functions for debugging. It's how you "see" what the value is of your variable at a specific point in your code</p>
    
    <p class=content>let myNumber = 1;<br>
    let myNumberPlusOne = myNumber + 1;<br>
    console.log(myNumberPlusOne); // Output will be 2</p>
    
    <p>There are several arithmetic operators available in JavaScript, and they are as follows:</p>
    
    <p class=content>let a = 10;<br>
    let b = 3;<br><br>
    let addition = a + b;          // Addition: 13<br>
    let subtraction = a - b;       // Subtraction: 7<br>
    let multiplication = a * b;    // Multiplication: 30<br>
    let division = a / b;          // Division: 3.3333333333333335<br>
    let floorDivision = Math.floor(a / b); // Floor Division: 3<br>
    let modulus = a % b;           // Modulus: 1<br>
    let exponentiation = a ** b;   // Exponentiation: 1000</p>
    
    <p>For strings, '+' is used for concatenation:</p>
    
    <p class=content>let greeting = "Hello, " + "World!";<br>
    console.log(greeting); // Output: "Hello, World!"</p>
    
    <p>Unlike Python, JavaScript does not support string multiplication using arithmetic operators; it results in NaN (Not a Number):</p>
    <p class=content>let string = "Hello";<br>
    let repeatedString = string * 3;  // This will result in NaN<br>
    console.log(repeatedString); // Output: NaN</p>
    
    <p>Instead, use the repeat function for repeating strings:</p>
    <p class=content>let repeatedGreeting = string.repeat(3);<br>
    console.log(repeatedGreeting); // Output: "HelloHelloHello"</p>
    
    <p>We won't dive into Arrays or Objects just yet, but it is important to note that arrays and objects are mutable, whereas strings are immutable in JavaScript.</p>
    <p>When you hear mutable, think "can be changed", where mutable means it can be changed and immutable means it cannot be changed.</p>
    
    <p>Example showing mutability of an array:</p>
    <p class=content>let myArray = [1, 2];<br>
    console.log(myArray[0]); // Output: 1<br>
    myArray[0] = 2;<br>
    console.log(myArray); // Output: [2, 2]</p>
    
    <p>Example showing immutability (cannot be changed) of a string:</p>
    <p class=content>let myString = "Hello";<br>
    console.log(myString);  // Output: "Hello"<br>
    myString[0] = "J";  // This does not change the string<br>
    console.log(myString);  // Output: "Hello"</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What data type is used to store whole numbers in JavaScript?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) Integer</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) String</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) Float</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) Boolean</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following is a correct variable name in JavaScript?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) 3variable</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) my-variable</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="correct">c) itemCost</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) my variable</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
          <pre>
  let myNumber = 1;
  let myNumberPlusOne = myNumber + 1;
  console.log(myNumberPlusOne);
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 1</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 2</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) NaN</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) undefined</label><br>
  
          <h3>Question 4</h3>
          <p>Which arithmetic operator is used for exponentiation in JavaScript?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) /</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) %</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) *</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="correct">d) **</label><br>
  
          <h3>Question 5</h3>
          <p>What is the correct way to concatenate strings in JavaScript?</p>
          <input type="radio" id="q5a" name="q5" value="a">
          <label for="q5a" class="correct">a) let greeting = "Hello, " + "World!";</label><br>
          <input type="radio" id="q5b" name="q5" value="b">
          <label for="q5b" class="incorrect">b) let greeting = "Hello, " * "World!";</label><br>
          <input type="radio" id="q5c" name="q5" value="c">
          <label for="q5c" class="incorrect">c) let greeting = "Hello, " - "World!";</label><br>
          <input type="radio" id="q5d" name="q5" value="d">
          <label for="q5d" class="incorrect">d) let greeting = "Hello, " / "World!";</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `let myArray = [1, 2]; 
  console.log(myArray[0]);
  myArray[0] = 2;
  console.log(myArray);`,
  },

  {
    id: 7,
    language: 'Javascript',
    title: 'Functions',
    content: `
    <p>In JavaScript, a function is a block of code that performs a specific task. Functions help to modularize code, making it more readable and reusable.</p>
    <p>To define a function, we use the <code>function</code> keyword followed by the function name and parentheses. Inside the parentheses, we can specify parameters that the function can accept. The code block within every function starts with a curly brace ({) and ends with a curly brace (}).</p>
    
    <p>Let's start with calling this simple function above that prints a greeting message:</p>
    <p class=content>function greet() {<br>
        console.log("Hello, world!");<br>
    }<br>
    greet();<br>
    // Output: "Hello, world!"</p>
    
    <p>Functions in JavaScript can accept parameters, which let you pass different values into them. Here's how we use a function called 'greet':</p>
    <p class=content>function greet(name) {<br>
        console.log(\`Hello, \${name}!\`);<br>
    }<br>
    greet("Alice"); // Outputs: "Hello, Alice!"<br>
    greet("Bob"); // Outputs: "Hello, Bob!"</p>
    
    <p>In this example, the <code>greet</code> function takes a parameter named <code>name</code>. When we call this function and give it a name like "Alice" or "Bob", it prints a personalized greeting.</p>
    <p>To create the greeting message, we use something called a template literal. A template literal is a type of string that makes it easy to include variables directly inside the string. You create a template literal by wrapping your text with backtick characters, and you can insert variables like <code>name</code> by wrapping them in \${ } inside the string.</p>
    <p>For instance, <code>Hello, \${name}!</code> combines "Hello," with the name you provide when calling the function, resulting in a complete greeting message.</p>
    
    <p>Functions can return values using the <code>return</code> statement. This allows us to capture the result of a function and use it in our code. Here's an example:</p>
    <p class=content>function add(a, b) {<br>
        return a + b;<br>
    }<br>
    let result = add(3, 5);<br>
    console.log(result);  // Output: 8</p>
    
    <p>The <code>add</code> function takes two parameters <code>a</code> and <code>b</code>, adds them together, and returns the result. We can then store the returned value in a variable and print it.</p>
    
    <p>Functions can have default parameter values, which are used if no argument is provided when the function is called. Here's an example:</p>
    <p class=content>function greet(name = "world") {<br>
        console.log(\`Hello, \${name}!\`);<br>
    }<br>
    greet();  // Output: Hello, world!<br>
    greet("Alice");  // Output: Hello, Alice!</p>
    
    <p>In this example, the <code>greet</code> function has a default parameter value of "world". If no argument is passed when the function is called, it uses the default value.</p>
    
    <p>We can also define functions that accept a variable number of arguments using the <code>...args</code> syntax. Here's an example:</p>
    <p class=content>function add(...args) {<br>
        return args.reduce((acc, curr) => acc + curr, 0);<br>
    }<br>
    console.log(add(1, 2, 3));  // Output: 6<br>
    console.log(add(4, 5, 6, 7));  // Output: 22</p>
    
    <p>The <code>add</code> function uses <code>...args</code> to accept a variable number of arguments. Inside the function, <code>args</code> is an array containing all the arguments passed. We use the <code>reduce</code> method to add all the values together and return the result.</p>
    
    <p>The <code>...</code> syntax can also be used to accept a variable number of keyword arguments in an object. Here's an example:</p>
    <p class=content>function printInfo({ ...kwargs }) {<br>
        for (let key in kwargs) {<br>
            console.log(\`\${key}: \${kwargs[key]}\`);<br>
        }<br>
    }<br>
    printInfo({ name: "Alice", age: 30, city: "New York" });</p>
    
    <p>In this example, the <code>printInfo</code> function uses <code>...</code> to accept a varying number of keyword arguments. Inside the function, <code>kwargs</code> is an object containing all the keyword arguments passed. We loop through the object and print each key-value pair.</p>
    
    <p>Functions are a fundamental part of JavaScript programming, enabling us to create modular, reusable, and maintainable code. As we progress, we'll explore more advanced concepts and techniques related to functions.</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to define a function in JavaScript that prints "Hello, world!"?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) function greet() { console.log("Hello, world!"); }</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) def greet() { print("Hello, world!"); }</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) function greet { console.log("Hello, world!"); }</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) function greet() console.log("Hello, world!");</label><br>
  
          <h3>Question 2</h3>
          <p>How do you call a function named greet that takes one parameter and logs a greeting message?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) greet["Alice"]</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="correct">b) greet("Alice")</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) greet.Alice</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) greet Alice</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
          <pre>
  function add(a, b) {
      return a + b;
  }
  let result = add(3, 5);
  console.log(result);
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 35</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 8</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) NaN</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) undefined</label><br>
  
          <h3>Question 4</h3>
          <p>What is the correct syntax for a function that accepts a variable number of arguments and returns their sum?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) function add(...args) { return args.reduce((acc, curr) => acc + curr, 0); }</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) function add(args...) { return args.reduce((acc, curr) => acc + curr, 0); }</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="correct">c) function add(...args) { return args.reduce((acc, curr) => acc + curr); }</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) function add(args...) { return args.reduce((acc, curr) => acc + curr); }</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `function add(a, b) {
  return a + b;
  }
  let result = add(3, 5);
  console.log(result); // Output: 8`,
  },
  {
    id: 8,
    language: 'Javascript',
    title: 'Arrays',
    content: `
    <p>Before we go over objects, which are the most common datatype when sending and receiving information between applications (back-end to front-end, front-end to back-end, or back-end to websites, etc.), and this is especially true when interacting with the Algorand blockchain, I think it's important to have an understanding of how arrays work.</p>
    
    <p>Below is an example of an array:</p>
    <p class=content>let myArray = [7, "Hello", false, 63.5];</p>
    
    <p>An array can hold all types of data, and you can have all kinds of data in one array. You use arrays when you need exactly that, a list. Arrays are also mutable, as opposed to tuples—which means we can rearrange, extend, and replace items in an array, meaning they're super flexible!</p>
    
    <p>An array is a collection of data enclosed between square brackets [ ], and separated by commas. An example of common kinds of data you would have in an array on Algorand could be one that has asset IDs.</p>
    <p class=content>let asset_ids = [1265975021, 1138500612, 400593267];</p>
    
    <p>Or perhaps an array of addresses:</p>
    <p class=content>let addresses = [<br>
    'WWYUMYPM2Y5NIIZTF4O5N73A4ZTZQWXS6TNP23U37LQ6WWF543SRTGKWUU',<br>
    '7IWZ342UGNQ2JVS2E6EGFD4MPUNL4ZIWDYNFZIANR6U7WZXORCRQCCN3YY',<br>
    'HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA'<br>];</p>
    
    <p>Although arrays don't have to be organized in any way and are not descriptive, they can be manipulated. For example, if you wanted to remove duplicate entries in an array, you could use the Set object.</p>
    <p class=content>let myArray = [1, 1, 2, 3, 4, 4];<br>
    let myArrayWithoutDuplicates = [...new Set(myArray)];<br>
    console.log(myArrayWithoutDuplicates);</p>
    
    <p># Output:<br># [1, 2, 3, 4]</p>
    
    <p>Let's look back at the first example of an array:</p>
    <p class=content>let myArray = [7, "Hello", false, 63.5];</p>
    
    <p>In the array above we have an integer at the first spot, 7; a string in the second spot, "Hello"; a boolean (true or false value) in the third spot; a float (decimal value), in the fourth spot.
    I refer to the places these items are in the array as "spots", but the correct term is actually "indexes". We referenced them as the first, second, third, and fourth spot— however, in programming arrays are zero-indexed. This means that we always start from zero, and use an integer to refer to their position in the array. This feels strange, but it is something you should have ingrained into your mind, as this is universal across all programming when indexing for positions in an array.</p>
    
    <p>The correct reference to the positions would be Index 0 for 7, Index 1 for "Hello", Index 2 for false, and Index 3 for 63.5. But, how would we see this utilized in a programming scenario?</p>
    
    <p>To interact with the array, we must first assign it to a variable:</p>
    <p class=content>let myArray = [7, "Hello", false, 63.5];</p>
    
    <p>Now, we can use index notation to pick out items of our choice by using their position, let's start with just logging the array to the terminal:</p>
    <p class=content>console.log(myArray);</p>
    <p># Output: [7, "Hello", false, 63.5]</p>
    
    <p>... and now let's log the item at index 1 (the second item since the first item is always 0) using index notation:</p>
    <p class=content>let firstIndexMyArray = myArray[1];<br>
    console.log(firstIndexMyArray);</p>
    <p># Output: "Hello"</p>
    
    <p>Try logging the third index into the console using index notation. I've already defined the array for you below. Click run when you're ready to run the code! The output should be 63.5.</p>
    
    <p>IDE WINDOW:<br>
    let myArray = [7, "Hello", false, 63.5];<br>
    . . .<br>
    CHECK OUTPUT IS 63.5 AND SHOW "SUCCESS"</p>
    <p>Next chapter: Objects</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What data structure is used to store a collection of values in JavaScript?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) Array</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) Object</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) String</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) Number</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following correctly initializes an array in JavaScript?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) let myArray = {7, "Hello", false, 63.5};</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) let myArray = (7, "Hello", false, 63.5);</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="correct">c) let myArray = [7, "Hello", false, 63.5];</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) let myArray = "7, Hello, false, 63.5";</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  let myArray = [7, "Hello", false, 63.5];
  console.log(myArray[2]);
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 7</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) "Hello"</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) false</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 63.5</label><br>
  
          <h3>Question 4</h3>
          <p>How do you remove duplicate entries from an array in JavaScript?</p>
          <pre>
  let myArray = [1, 1, 2, 3, 4, 4];
  let myArrayWithoutDuplicates = [...new Set(myArray)];
  console.log(myArrayWithoutDuplicates);
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Using the Set object</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Using the Map object</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Using the Filter object</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Using the Reduce object</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `let myArray = [7, "Hello", false, 63.5];
  
  // Access and log the element at index 1
  let firstIndexMyArray = myArray[1];
  console.log(firstIndexMyArray);
  
  // Access and log the element at index 3
  let thirdIndexMyArray = myArray[3];
  console.log(thirdIndexMyArray);
  `,
  },
  {
    id: 9,
    language: 'Javascript',
    title: 'Objects',
    content: `
    <p>Now we'll dive into a bit more advanced data structures, objects! An object is like an array, except it uses curly brackets { } instead of square brackets [ ]— but most importantly, objects also differ in that they store values with keys, and can accept several data types. An object can be highly versatile, and can not only be used for data storage, but for more complex algorithms like hashmaps, which we'll go over later. Most interestingly, we can have objects with objects within them, and even arrays as well! It's important to mention that keys and values have a colon ' : ' separator between them.</p>
    
    <p>Here's a simple example of an object:</p>
    <p class=content>let thisIsMyObject = {name: "John", age: 22};</p>
    
    <p>In arrays, we used a process called indexing, and the index notation format to access values, eg; myArray[3]. With objects, we use a similar process called key access, and the key notation format to access values.</p>
    
    <p>The main difference is that we use keys, instead of solely integers that refer to position, to select values from an object— and not to confuse you, but a key in an object can also be an integer =).</p>
    
    <p>For example, in thisIsMyObject above, you'll see the value "John" belongs to the key, "name". As well as the value 22, belongs to the key, "age". This is what key notation would look like for accessing a value for a specific key in an object:</p>
    <p class=content>let nameValue = thisIsMyObject['name'];<br>
    console.log(nameValue);</p>
    <p># Output: "John"</p>
    
    <p>Try printing the "age" value in the code editor below:</p>
    <p class=content>let ageValue = thisIsMyObject['age'];<br>
    console.log(ageValue);</p>
    <p># Output: 22</p>
    
    <p>Now we'll look over a more intricate object, that's a bit larger and complex.</p>
    <p class=content>thisIsMyObject = {name: "John", age: 22, likes: ["Exercise", "Cooking", "Coding"]};</p>
    
    <p>We see something in this object that we haven't seen before, an array as the value to a key. Let's try accessing the 1st index of John's likes using a mix of key notation and index notation!</p>
    <p class=content>let likes = thisIsMyObject['likes'];<br>
    console.log(likes);</p>
    <p># Output:<br># ["Exercise", "Cooking", "Coding"]</p>
    
    <p class=content>let likesFirstIndex = likes[1];<br>
    console.log(likesFirstIndex);</p>
    <p># Output:<br># "Cooking"</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What data structure is used to store values with keys in JavaScript?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) Array</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) Object</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) String</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) Number</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following correctly initializes an object in JavaScript?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) let myObject = {name: "John", age: 22};</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) let myObject = {John, 22};</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) let myObject = ["John", 22];</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) let myObject = (name: "John", age: 22);</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  let thisIsMyObject = {name: "John", age: 22};
  console.log(thisIsMyObject['age']);
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) "John"</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 22</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) "age"</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) undefined</label><br>
  
          <h3>Question 4</h3>
          <p>What will be the output of the following code?</p>
          <pre>
  let thisIsMyObject = {name: "John", age: 22, likes: ["Exercise", "Cooking", "Coding"]};
  let likesFirstIndex = thisIsMyObject['likes'][1];
  console.log(likesFirstIndex);
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) "Exercise"</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) "Cooking"</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) "Coding"</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) ["Exercise", "Cooking", "Coding"]</label><br>
  
          <br>
      </form>
    `,
    initialCode: `let thisIsMyObject = {name: "John", age: 22, likes: ["Exercise", "Cooking", "Coding"]};
  
  // Access and log the "likes" array using key notation
  let likes = thisIsMyObject['likes'];
  console.log(likes);
  
  // Expected Output: ["Exercise", "Cooking", "Coding"]
  
  // Access and log the value at the 1st index of the "likes" array
  let likesFirstIndex = likes[1];
  console.log(likesFirstIndex);
  
  // Expected Output: "Cooking"
  `,
  },
  {
    id: 10,
    language: 'Javascript',
    title: 'Imports',
    content: `
    <p>This code begins with module imports, which is a fancy way of saying— "someone wrote some code that does something, and I want to use that something in my code". It isn't possible to use libraries, which are just collections of code created by someone, without formally importing them at the beginning of your code. Imports must appear before usage of anything within them because like the English language, JavaScript interpreters read from top to bottom.</p>
    
    <p>The module imports the Algodv2 class from the algosdk library. The require statement is used to import the algosdk library in Node.js.</p>
    <p class=content>const algosdk = require('algosdk');</p>
    
    <p>In this code, the algosdk library is imported using require. Then, the Algodv2 client is instantiated with the API token, server address, and port.</p>
    
    <p>Now let's get the status of the Algod client:</p>
    <p class=content>const algodToken = 'Your algod API token';<br>
    const algodServer = 'http://YourAlgodServerAddress';<br>
    const algodPort = 'YourAlgodServerPort';<br>
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);<br>
    algodClient.status().do()<br>
        .then(status => {<br>
            console.log(status);<br>
        })<br>
        .catch(err => {<br>
            console.error(err);<br>
        });</p>
    
    <p>We use the <code>status()</code> method to get the status of the Algod client. This method returns a promise, so we use <code>.then()</code> to handle the successful response and <code>.catch()</code> to handle any errors.</p>
    
    <p>Next, we generate a random number using the random module. In JavaScript, we use <code>Math.random()</code> to generate random numbers.</p>
    <p class=content>const random_number = Math.floor(Math.random() * 101);<br>
    console.log(random_number);</p>
    
    <p>To decide on whether or not you want to import a specific file, function, or method, you would need to use your intuition! For example, you may only need a specific function from a module.</p>
    <p class=content>const { Algodv2 } = require('algosdk');<br>
    const algodToken = 'Your algod API token';<br>
    const algodServer = 'http://YourAlgodServerAddress';<br>
    const algodPort = 'YourAlgodServerPort';<br>
    const algodClient = new Algodv2(algodToken, algodServer, algodPort);</p>
    
    <p>Now you can use <code>algodClient</code> for your transactions or other operations</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What statement is used to import a module in Node.js?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) import module from 'module';</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) const module = require('module');</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) using module;</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) include module;</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following imports only the Algodv2 class from the algosdk library?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) const { Algodv2 } = require('algosdk');</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) const algosdk = require('algosdk').Algodv2;</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) const Algodv2 = require('algosdk').default;</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) const Algodv2 = require('algosdk')['Algodv2'];</label><br>
  
          <h3>Question 3</h3>
          <p>What method is used to get the status of the Algod client?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) algodClient.getStatus()</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) algodClient.status().do()</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) algodClient.fetchStatus()</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) algodClient.retrieveStatus()</label><br>
  
          <h3>Question 4</h3>
          <p>How do you generate a random number between 0 and 100 in JavaScript?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Math.floor(Math.random() * 101);</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Math.random(100);</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) random(0, 100);</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Math.rand(0, 100);</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `// Import algosdk
  const algosdk = require('algosdk');
  
  // Set up your API token, server, and port
  const algodToken = '';
  const algodServer = 'https://testnet-api.algonode.cloud';
  const algodPort = '';
  
  // Initialize the Algodv2 client
  const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  
  // Log client instance to ensure it's initialized correctly
  console.log(algodClient);
  `,
  },
  {
    id: 16,
    language: 'Javascript',
    title: 'Getting Started with Algorand',
    content: `
    <p>To set up your own node, visit this GitHub repository for a previous tutorial series:</p>
    <p><a href="https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/tree/main/Episode%201%20-%20Algorand%20Node%2C%20Python%2C%20Visual%20Studio%20Code%2C%20Ubuntu%2C%20and%20Module%20Installations">Algorand Node Installation</a></p>
    <p>Scroll down to the section called "Algorand Node Installation"— and make sure to run these commands in an Ubuntu LTS Shell (Download link in bottom resources section). If you chose to run a node, that's wonderful! If not, I will be including sections for those programming without a node.</p>
    
    <p>Now that we have access to an Algorand testnet node, as well as a basic understanding of how to work with different kinds of variables, functions and imports. It's time to get started! This will reaffirm your ability to use functions, methods, and imports— as well as key notation: eg; accessing the name of a customer in a variable named my_dictionary:</p>
    
    <p class=content>
    <code>
    const myDictionary = {'customer-name': 'Jerry'};<br>
    const customerName = myDictionary['customer-name'];<br>
    console.log(customerName);
    </code>
    </p>
    
    <p>If you are using your own Algorand testnet node on Windows, you will need to access your algod_token and algod_port from your node's data directory:</p>
    <ol class=inText>
      <li>Enter the data directory from the root folder:<br>
        <code>cd node/data</code>
      </li>
      <li>Use the following commands to obtain your node token and port:</li>
    </ol>
    <p><code>cat algod.token</code> ---Logs the token into the terminal, it should look something like:</p>
    <p><code>b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd</code></p>
    <p><code>cat algod.net</code> ---Logs the port into the terminal, it should look something like:</p>
    <p><code>127.0.0.1:8080</code></p>
    <p>When programming, you will format this information for variables like so:</p>
    <p class=content>
    <code>
    const algodToken = 'b94c8e5d7a3f1bbd249e83a1cc5b4ae67d8c2a7e9b5f0c6d8e1a7b4f263859cd';<br>
    const algodServer = 'http:127.0.0.1';<br>
    const algodPort = 8080;
    </code>
    </p>
    <p>If you are not using your own Algorand testnet node, you can use these:</p>
    <p>(Free service does not require token, and the algodToken variable will be an empty string '', whereas the algodServer will be the algonode testnet cloud link)</p>
    <p class=content>
    <code>
    const algodToken = ''; <br>
    const algodServer = 'https://testnet-api.algonode.cloud'; <br>
    const algodPort = 443;
    </code>
    </p>
    
    <p>Note: If you are attempting to run this code outside of the browser in your own IDE, remember to use npm init -y to create a package.json, and add "type": "module" anywhere in your package. Then make sure you install the algorand sdk by using 'npm install algosdk'. Afterwards, you can run the code in your terminal by using node nameOfYourFile.js.</p>
    <p>If you get an error along the likes of 'node is not a function', this means you haven't installed node.js, you can install it here:</p>
    
    <p class=content>
    <code>
    // Import algosdk<br>
    import algosdk from 'algosdk';<br><br>
    
    // Initialize AlgodClient<br>
    const algodToken = ''; // Leave '' for public node service, or enter your node token<br>
    const algodServer = 'https://testnet-api.algonode.cloud'; // Use this cloud link, or enter your own host & port<br>
    const algodPort = 443;<br><br>
    
    // Create an instance of the algod client<br>
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);<br><br>
    
    // Fetch the node status and print it<br>
    algodClient.status().do()<br>
        .then(status => {<br>
            console.log('Node status:', status);<br>
        })<br>
        .catch(err => {<br>
            console.error('Failed to get node status:', err);<br>
        });
    </code>
    </p>
    
    <p>First, we import the algosdk library, which includes the AlgodClient necessary for interacting with the Algorand network.</p>
    <p>Next, we define variables for our token, server URL, and port number for the node we'll be using. These are set up to handle connections to the Algorand testnet via a public service, but can be adjusted if you are running your own node.</p>
    <p>We then create an instance of AlgodClient using the algodToken, algodServer, and algodPort. This instance is assigned to the variable algodClient.</p>
    <p>Using the algodClient instance, we access the status method to fetch the current status of the Algorand network. This method returns a promise that resolves to the status information.</p>
    <p>Once the promise resolves, the resulting status data is contained within the status variable within the .then() method's callback. Here, we print the entire status object to the console to view its contents.</p>
    
    <p>Try running the code now!</p>
    
    <p>You'll see that you receive a dictionary with several keys and associated values, here is a list of all the keys:</p>
    <ul class=inText>
      <li>catchpoint</li>
      <li>catchpoint-acquired-blocks</li>
      <li>catchpoint-processed-accounts</li>
      <li>catchpoint-processed-kvs</li>
      <li>catchpoint-total-accounts</li>
      <li>catchpoint-total-blocks</li>
      <li>catchpoint-total-kvs</li>
      <li>catchpoint-verified-accounts</li>
      <li>catchpoint-verified-kvs</li>
      <li>catchup-time</li>
      <li>last-catchpoint</li>
      <li>last-round</li>
      <li>last-version</li>
      <li>next-version</li>
      <li>next-version-round</li>
      <li>next-version-supported</li>
      <li>stopped-at-unsupported-round</li>
      <li>time-since-last-round</li>
    </ul>
    
    <p>The most popular keys are last-round, so you know which block you are on, and perhaps time-since-last-round, if you should need to know that information. Other keys are primarily used by node running services, like upcoming reti-pool incentives, but otherwise are not especially useful for our purposes.</p>
    
    <p>Referencing the information from Chapter 4, for Objects, try this:</p>
    <ul class=inText>
      <li>Create a variable, and name it lastRound</li>
      <li>Assign the value of the key 'last-round' in the status dictionary to this variable you created</li>
      <li>Print your variable!</li>
    </ul>
    
    <p class=content>
    <code>
    // Import algosdk<br>
    import algosdk from 'algosdk';<br><br>
    
    // Initialize AlgodClient<br>
    const algodToken = ''; // Leave '' for public node service, or enter your node token<br>
    const algodServer = 'https://testnet-api.algonode.cloud'; // Use this cloud link, or enter your own host & port<br>
    const algodPort = 443;<br><br>
    
    // Create an instance of the algod client<br>
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);<br><br>
    
    // Fetch the node status and print it<br>
    algodClient.status().do()<br>
        .then(status => {<br>
            // Create a variable, and name it lastRound<br>
            const lastRound = status['last-round'];<br>
            // Print your variable<br>
            console.log('Last round:', lastRound);<br>
        })<br>
        .catch(err => {<br>
            console.error('Failed to get node status:', err);<br>
        });
    </code>
    </p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What command is used to navigate to the node's data directory in an Ubuntu shell?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) cd data/node</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) cd node/data</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) cd algod/data</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) cd node/algod</label><br>
  
          <h3>Question 2</h3>
          <p>How do you log the Algorand node token to the terminal?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) cat algod.token</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) cat algod.net</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) cat node.token</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) cat node.net</label><br>
  
          <h3>Question 3</h3>
          <p>What are the default values for algodToken and algodServer when using a public Algorand testnet node?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) const algodToken = 'default'; const algodServer = 'http://localhost';</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) const algodToken = 'public'; const algodServer = 'https://testnet.algorand.org';</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) const algodToken = ''; const algodServer = 'https://testnet-api.algonode.cloud';</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) const algodToken = 'none'; const algodServer = 'https://testnet.algorand.io';</label><br>
  
          <h3>Question 4</h3>
          <p>How do you access the value of the 'last-round' key from the Algorand node status object?</p>
          <pre>
  algodClient.status().do()
  .then(status => {
      // Create a variable, and name it lastRound
      const lastRound = status['last-round'];
      // Print your variable
      console.log('Last round:', lastRound);
  })
  .catch(err => {
      console.error('Failed to get node status:', err);
  });
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) const lastRound = status['last-round'];</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) const lastRound = status.lastRound;</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) const lastRound = status.last-round;</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) const lastRound = status['round-last'];</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `
  const algosdk = require('algosdk');
  
  // Initialize AlgodClient
  const algodToken = ''; // Leave '' for public node service, or enter your node token
  const algodServer = 'https://testnet-api.algonode.cloud'; // Use this cloud link, or enter your own host & port
  const algodPort = 443;
  
  // Create an instance of the Algod client
  const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  
  // Fetch the node status and print it
  algodClient.status().do()
    .then(status => {
      console.log('Node status:', status);
    })
    .catch(err => {
      console.error('Failed to get node status:', err);
    });
  
    `,
  },
  {
    id: 17,
    language: 'Javascript',
    title: 'Payment Transactions',
    content: `
    <p class="content">
    <code>
    const algosdk = require('algosdk');<br><br>
    
    // TWO WAYS TO IMPORT AN ACCOUNT<br><br>
    
    // METHOD 1<br>
    // CREATE A NEW ACCOUNT<br>
    const account = algosdk.generateAccount();<br>
    console.log('Private Key:', Buffer.from(account.sk).toString('base64')); // Output Private Key<br>
    console.log('Address:', account.addr); // Output Address<br><br>
    
    // IF NEEDED TO IMPORT TO A WALLET, YOU CAN OBTAIN THE MNEMONIC FROM THE PRIVATE KEY<br>
    // REDEEM MNEMONIC FROM PRIVATE KEY<br>
    const mnemonicPhrase = algosdk.secretKeyToMnemonic(account.sk);<br>
    console.log('Mnemonic Phrase:', mnemonicPhrase); // Output Mnemonic Phrase<br><br>
    
    // METHOD 2<br>
    // USE MNEMONIC TO OBTAIN PRIVATE KEY<br>
    // REDEEM PRIVATE KEY FROM MNEMONIC<br>
    const mnemonic = 'brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual';<br>
    const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);<br>
    console.log('Recovered Private Key:', Buffer.from(recoveredAccount.sk).toString('base64')); // Output Private Key<br>
    </code>
    </p>
    
    <p>When developing in JavaScript with the Algorand blockchain, there are two methods to obtain a private key and address for signing transactions you create. The private key is in base64 format and is required for transaction signing.</p>
    
    <h4>Method 1: Create a brand new account and obtain the private key and address directly</h4>
    
    <p>In the algosdk's account module, there is a function called generateAccount(), which you can import at the beginning of your code, and is defined here:</p>
    
    <p class="content">
    <code>
    function generateAccount() <br>
    Generate an account.<br><br>
    
    Returns:<br>
    {addr: string, sk: Uint8Array}: An object containing the account address and secret key
    </code>
    </p>
    
    <p>This returns an object containing the private key (as a Uint8Array) and the account address as strings. You would assign the output of the function to a variable and then subsequently print them.</p>
    
    <p>In the testnet, you can now fund the account by inputting the address at <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a>.<br>
    All accounts require a minimum balance of 0.1 Algo to send transactions, and then 0.001 Algorand per transaction fee.</p>
    
    <p>Should you need the mnemonic to import into a wallet application later, you can do so with the secretKeyToMnemonic() function in the algosdk library as well; input your secret key into the function and assign the output variable to something like "mnemonicPhrase". Function is defined below:</p>
    
    <p class="content">
    <code>
    function secretKeyToMnemonic(secretKey: Uint8Array) -> string<br>
    Return the mnemonic for the secret key.<br><br>
    
    Args:<br>
    secretKey (Uint8Array): The secret key as a Uint8Array<br><br>
    
    Returns:<br>
    string: mnemonic phrase
    </code>
    </p>
    
    <h4>Method 2: Convert an Existing Mnemonic to a Private Key</h4>
    
    <p>Should you already have a mnemonic and require the private key in base64 format, you can create a variable called "mnemonicPhrase" and use the result of the mnemonicToSecretKey() function in the algosdk library, which is defined below:</p>
    
    <p class="content">
    <code>
    function mnemonicToSecretKey(mnemonic: string) -> {addr: string, sk: Uint8Array}<br>
    Return the account object for the mnemonic.<br><br>
    
    Args:<br>
    mnemonic (string): mnemonic of the private key<br><br>
    
    Returns:<br>
    {addr: string, sk: Uint8Array}: An object containing the account address and secret key
    </code>
    </p>
    
    <p>The mnemonic must be a string, meaning it is enclosed in apostrophes or double quotes ('' or ""), and there must be a space between words.</p>
    
    <p>Now let's use the account we generated and funded using <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a>, create our AlgodClient class to initiate a connection to the Algorand blockchain, generate a new account to interact with, and subsequently sign, and send some different kinds of payment transactions.</p>
    
    <p>We will be trying a typical payment transaction with a note field, followed by a rekey transaction (rekey to a new account and back to ourselves from the new account), and an account closing transaction. All three are under the scope of a payment transaction.</p>
    
    <p class="content">
    <code>
    const algosdk = require('algosdk');<br><br>
    
    // Algod client connection parameters<br>
    const algodToken = '';<br>
    const algodServer = 'https://testnet-api.algonode.cloud';<br>
    const algodPort = '443';<br>
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);<br><br>
    
    // Sender's account details<br>
    const address = 'I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU';<br>
    const private_key = '6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg==';<br><br>
    
    // Convert 1.001 Algos to microalgos<br>
    const amount = algosdk.algosToMicroalgos(1.001);<br><br>
    
    // Get transaction parameters<br>
    async function submitTransaction() {<br>
        let params = await algodClient.getTransactionParams().do();<br><br>
    
        // Generate a new account<br>
        const { addr: newAccountAddress, sk: newAccountPrivateKey } = algosdk.generateAccount();<br>
        console.log('New Account Address:', newAccountAddress);<br><br>
    
        // Create a payment transaction<br>
        let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({<br>
            from: address,<br>
            to: newAccountAddress,<br>
            amount: amount,<br>
            note: new TextEncoder().encode("Here's your one Algo!"),<br>
            suggestedParams: params<br>
        });<br><br>
    
        // Sign the transaction<br>
        const signedTxn = txn.signTxn(Buffer.from(private_key, 'base64'));<br><br>
    
        // Send the transaction<br>
        try {<br>
            let { txId } = await algodClient.sendRawTransaction(signedTxn).do();<br>
            console.log('Transaction ID:', txId);<br><br>
    
            // Wait for confirmation<br>
            let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);<br>
            console.log('Transaction confirmed in round', confirmedTxn['confirmed-round']);<br>
        } catch (err) {<br>
            console.log('Error submitting transaction:', err);<br>
        }<br>
    }<br><br>
    
    submitTransaction();<br>
    </code>
    </p>
    
    <h4>Steps:</h4>
    <ol class="inText">
      <li>Import our necessary modules.</li>
      <li>Define our AlgodClient to initiate a connection to the chain.</li>
      <li>Define our account's address and private key that we will be sending transactions from.</li>
      <li>Define an amount of Algorand to send.</li>
      <li>Obtain the params needed for all transactions.</li>
      <li>Generate a new account for testing, so we have an address to send testnet Algorand to.</li>
      <li>Define our payment transaction and its parameters.</li>
      <li>Sign the transaction with our private key.</li>
      <li>Assign the result of sending our signed transaction with the sendTransaction() method from the AlgodClient class.</li>
      <li>Use the waitForConfirmation() function to ensure the transaction is successful.</li>
      <li>Print the transaction ID for reference on an explorer like allo.info, <a href="https://testnet.explorer.perawallet.app/">https://testnet.explorer.perawallet.app/</a>, <a href="https://www.blockpack.app/#/explorer/home">https://www.blockpack.app/#/explorer/home</a>, or <a href="https://app.dappflow.org/explorer/home">https://app.dappflow.org/explorer/home</a>.</li>
    </ol>
    
    <p>We introduce a few new functions here:</p>
    <ul class="inText">
      <li>the algosToMicroalgos() function from the algosdk.util module.</li>
      <li>the makePaymentTxnWithSuggestedParams() function and waitForConfirmation() function from the algosdk module.</li>
      <li>The sendRawTransaction() function, which is a method from the AlgodClient class.</li>
    </ul>
    
    <p>In the Algorand SDK, when we want to reference an amount of Algo, that amount needs to be in a format called "MicroAlgo"; MicroAlgo is essentially an amount of Algo times 1,000,000. Meaning that 1 Algo would be 1,000,000 MicroAlgo, and the transaction fee of 0.001 Algo is 1,000 MicroAlgo.</p>
    
    <p>Instead of manually calculating the MicroAlgo amount each time, what we can do is use the algosToMicroalgos() function, and pass in the amount of Algo as an argument.</p>
    
    <p>The makePaymentTxnWithSuggestedParams() function comes with a lot of functionality, aside from simple payment transactions of an amount of Algo to more advanced features, including:</p>
    <ul class="inText">
      <li>the ability to rekey your account to another (giving them full access, and losing your access)</li>
      <li>closing your account (send all of your remaining Algo to them)</li>
    </ul>
    
    <p>PaymentTransaction format:</p>
    <p class="content">
    <code>
    function makePaymentTxnWithSuggestedParams(sender, receiver, amount, closeRemainderTo, note, suggestedParams, rekeyTo) {<br>
        // Returns a transaction object<br>
    }
    </code>
    </p>
    
    <p>After we define our Payment Transaction parameters, we can then use the signTransaction() method that is included within it. This sign function accepts our private key, and outputs a signed transaction object, which is needed to input to the sendRawTransaction() function.</p>
    
    <p>The waitForConfirmation() function requires the AlgodClient variable we created, as well as the transaction ID to wait for.</p>
    
    <p>Lastly, the sendRawTransaction() function, which accepts signed transaction objects and outputs the transaction ID.</p>
    
    <p>Below are examples of rekey transactions and close amount to transactions, which are sent in succession (BUT NOT A GROUP TRANSACTION, WHICH WE WILL LEARN ABOUT LATER).</p>
    
    <p class="content">
    <code>
    // Repeat the process for the Rekey Transaction and the Close Remainder to Transaction<br><br>
    
    // Rekey Transaction<br>
    const rekeyToNewAccountPayment = algosdk.makePaymentTxnWithSuggestedParams(<br>
        senderAddress,<br>
        newAccountAddress,<br>
        0,<br>
        undefined,<br>
        new TextEncoder().encode("Take care of my account for me! I'll be back in a week"),<br>
        params,<br>
        newAccountAddress<br>
    );<br><br>
    
    const signedRekeyToNewAccountPayment = rekeyToNewAccountPayment.signTxn(senderPrivateKey);<br>
    const rekeyTransactionID = await algodClient.sendRawTransaction(signedRekeyToNewAccountPayment).do();<br>
    await algosdk.waitForConfirmation(algodClient, rekeyTransactionID, 4);<br>
    console.log(rekeyTransactionID);<br><br>
    
    // New account rekeys back to the original account<br>
    const rekeyBackToOldAccountFromNewAccount = algosdk.makePaymentTxnWithSuggestedParams(<br>
        newAccountAddress,<br>
        senderAddress,<br>
        0,<br>
        undefined,<br>
        new TextEncoder().encode("Sorry! I'm too busy trading this week. Maybe ask PorkChop.algo?"),<br>
        params,<br>
        senderAddress<br>
    );<br><br>
    
    const signedRekeyBackToOldAccountFromNewAccount = rekeyBackToOldAccountFromNewAccount.signTxn(newAccountPrivateKey);<br>
    const rekeyBackTransactionID = await algodClient.sendRawTransaction(signedRekeyBackToOldAccountFromNewAccount).do();<br>
    await algosdk.waitForConfirmation(algodClient, rekeyBackTransactionID, 4);<br>
    console.log(rekeyBackTransactionID);<br><br>
    
    // Close Remainder to Transaction<br>
    const closeAccountToNewAccount = algosdk.makePaymentTxnWithSuggestedParams(<br>
        senderAddress,<br>
        newAccountAddress,<br>
        0,<br>
        newAccountAddress,<br>
        new TextEncoder().encode('Take care of my precious Algo!'),<br>
        params<br>
    );<br><br>
    
    const signedCloseAccountToNewAccount = closeAccountToNewAccount.signTxn(senderPrivateKey);<br>
    const closeAccountTransactionID = await algodClient.sendRawTransaction(signedCloseAccountToNewAccount).do();<br>
    await algosdk.waitForConfirmation(algodClient, closeAccountTransactionID, 4);<br>
    console.log(closeAccountTransactionID);<br>
    </code>
    </p>
    
    <p>DISCLAIMER: When rekeying and closing out accounts, this process is irreversible! If you don't know the person, or feel unsure about doing so, you should never use these transactions outside of testing purposes without ultimate confidence. No platforms currently utilize rekey transactions for users, but do use them internally when generating smart contracts for contract-to-contract calls, which will come later in our learning process.</p>
    
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What function is used to create a new Algorand account in the algosdk library?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) algosdk.generateAccount()</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) algosdk.createAccount()</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) algosdk.newAccount()</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) algosdk.accountCreate()</label><br>
  
          <h3>Question 2</h3>
          <p>How can you obtain the mnemonic phrase from a private key in the algosdk library?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) algosdk.secretKeyToMnemonic()</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) algosdk.privateKeyToMnemonic()</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) algosdk.mnemonicFromPrivateKey()</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) algosdk.mnemonicConvert()</label><br>
  
          <h3>Question 3</h3>
          <p>What are the minimum balance and transaction fee requirements for Algorand accounts?</p>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 0.5 Algo and 0.01 Algo per transaction</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 0.01 Algo and 0.001 Algo per transaction</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) 0.1 Algo and 0.001 Algo per transaction</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 1 Algo and 0.1 Algo per transaction</label><br>
  
          <h3>Question 4</h3>
          <p>Which method is used to send a signed transaction in the Algorand SDK?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) algodClient.sendRawTransaction()</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) algodClient.sendTransaction()</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) algodClient.submitTransaction()</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) algodClient.sendSignedTransaction()</label><br>
  
          <br>
      </form>
    
    `,
    initialCode: `const algosdk = require('algosdk');
  
  // Mnemonic phrase
  const mnemonic = 'brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual';
  
  // Recover account using the mnemonic
  const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);
  console.log('Recovered Private Key:', Buffer.from(recoveredAccount.sk).toString('base64')); // Output Private Key
  console.log('Recovered Address:', recoveredAccount.addr); // Output Address
  
    `,
  },

  {
    id: 11,
    language: 'GO',
    title: 'Variables',
    content: `
    <p>In Go, we have several data types that are used to store different kinds of information:</p>
    <ul class=inText>
        <li>Integer: Represents whole numbers without a decimal component.</li>
        <li>String: A sequence of characters enclosed within quotes.</li>
        <li>Float: Represents numbers that contain a decimal point.</li>
        <li>Boolean: Represents one of two values, true or false.</li>
        <li>List: An ordered collection of items, here using an interface{} to allow any type.</li>
        <li>Dictionary: A collection of key-value pairs where keys are strings and values are any type.</li>
    </ul>
    
    <p>It's good practice to name your variable relevant to its purpose, and use camelCase for naming conventions. Variable names cannot start with a number, include special characters other than '_', or contain spaces.</p>
    
    <p>Here are some more variable examples:</p>
    <p class=content>
    var (<br>
        itemCost        int     = 1     // The cost of an item, which will be 1 dollar<br>
        supplyRemaining int64   = 2500000000 // The number of items in inventory that are remaining<br>
        nameCTO         string  = "John Woods" // Name of a CTO<br>
        valueOfAQuarter float64 = 0.25  // The value of a quarter in dollars<br>
    )<br>
    </p>
    
    <p>There are several arithmetic operators available in Go, and they are as follows:</p>
    <p class=content>
    a := 10<br>
    b := 3<br><br>
    addition := a + b<br>
    subtraction := a - b<br>
    multiplication := a * b<br>
    division := myFloat / float64(b)<br>
    floorDivision := a / b<br>
    modulus := a % b<br>
    exponentiation := math.Pow(float64(a), float64(b))<br>
    </p>
    
    <p>Similar to integers and floats, you can also use arithmetic operators on strings:</p>
    <p class=content>result := myText + " World!"<br>
    fmt.Println("Concatenated String:", result)<br>
    repeatedString := strings.Repeat(myText, 3)<br>
    fmt.Println("Repeated String:", repeatedString)</p>
    
    <p>We won't dive into Lists, Dictionaries, or Tuples just yet, but I would like to mention, and this is something you'll see in practice later— that lists and dictionaries are mutable, whereas tuples are immutable.
    When you hear mutable, think "can be changed", where mutable means it can be changed and immutable means it cannot be changed.</p>
    
    <p>Example:</p>
    <p class=content>my_tuple = (1, 2)<br>
    print(my_tuple[0])<br>
    my_tuple[0] = 2<br>
    print(my_tuple)<br><br>
    # ERROR<br>
    #    my_tuple[0] = 2<br>
    #    ~~~~~~~~^^^<br>
    # TypeError: 'tuple' object does not support item assignment
    </p>
    
    <p>A more advanced concept to start early with, but another thing we will review later:</p>
    <h2>Examples of mutable and immutable parameters on an asset on Algorand</h2>
    <strong>Immutable Parameters:</strong></br>
    <p>These parameters can only be specified when an asset is created.</p>
    <ul class=inText>
    <li>Creator: The address of the account that created the asset.</li>
    <li>AssetName: The name of the asset.</li>
    <li>UnitName: The unit name of the asset.</li>
    <li>Total: The total number of units of the asset.</li>
    <li>Decimals: The number of digits to use after the decimal point when displaying the asset.</li>
    <li>DefaultFrozen: Whether the asset is frozen by default.</li>
    <li>URL: A URL where more information about the asset can be retrieved.</li>
    <li>MetaDataHash: A commitment to some unspecified asset metadata.</li>
    </ul>
    <strong>Mutable Parameters:</strong></br>
    <p>These parameters can be changed after the asset is created.</p>
    <ul class=inText>
    <li>Manager: The address of the account that can change the asset's mutable parameters.</li>
    <li>Reserve: The address of the account that holds the asset reserve. (Cannot be changed if initially not declared)</li>
    <li>Freeze: The address of the account that can freeze or unfreeze user asset holdings. (Cannot be changed if initially not declared)</li>
    <li>Clawback: The address of the account that can revoke user asset holdings and send them to other addresses. (Cannot be changed if initially not declared)</li>
    </ul>
    <em>*Note: Exception for various ARC types like ARC19 and ARC69 that use the reserve address and/or note field to point to metadata*</em>
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>Which of the following correctly declares a variable in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="incorrect">a) var itemCost = 1 int</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="correct">b) var itemCost int = 1</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) itemCost := int 1</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) int itemCost = 1</label><br>
  
          <h3>Question 2</h3>
          <p>Which of the following variable names is valid in Go?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="incorrect">a) 3variable</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) my-variable</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="correct">c) itemCost</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) my variable</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
          <pre>
  a := 10
  b := 3
  addition := a + b
  fmt.Println(addition)
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 13</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) 13</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) 7</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 30</label><br>
  
          <h3>Question 4</h3>
          <p>How do you perform exponentiation in Go?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="incorrect">a) a ^ b</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="correct">b) math.Pow(float64(a), float64(b))</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) a ** b</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) pow(a, b)</label><br>
  
          <br>
      </form>
    `,
    initialCode: `package main
    
    import (
        "fmt"
        "math"
        "strings"
    )
    
    var (
        myNumber     int     = 1000
        myText       string  = "Hello!"
        myFloat      float64 = 7.5
        myBool1      bool    = true
        myBool2      bool    = false
        myList       []interface{} = []interface{}{"Example", 42, true}
        myDictionary map[string]interface{} = map[string]interface{}{"key": "value"}
        itemCost     int     = 1
        supplyRemaining int64 = 2500000000
        nameCTO      string  = "John Woods"
        valueOfAQuarter float64 = 0.25
    )
    
    func main() {
        myNumber := 1
        myNumberPlusOne := myNumber + 1
        fmt.Println("My number plus one:", myNumberPlusOne)
    
        a := 10
        b := 3
    
        addition := a + b
        subtraction := a - b
        multiplication := a * b
        division := myFloat / float64(b)
        floorDivision := a / b
        modulus := a % b
        exponentiation := math.Pow(float64(a), float64(b))
    
        fmt.Println("Addition:", addition)
        fmt.Println("Subtraction:", subtraction)
        fmt.Println("Multiplication:", multiplication)
        fmt.Println("Division:", division)
        fmt.Println("Floor Division:", floorDivision)
        fmt.Println("Modulus:", modulus)
        fmt.Println("Exponentiation:", exponentiation)
    
        result := myText + " World!"
        fmt.Println("Concatenated String:", result)
    
        repeatedString := strings.Repeat(myText, 3)
        fmt.Println("Repeated String:", repeatedString)
    
        fmt.Println("List Example:", myList)
        fmt.Println("Dictionary Example:", myDictionary)
    }`,
  },
  {
    id: 12,
    language: 'GO',
    title: 'Functions',
    content: `
    <p>In Go, a function is a block of code that performs a specific task. Functions help to modularize code, making it more readable and reusable.</p>
    <p>To define a function, we use the <code>func</code> keyword followed by the function name and parentheses. Inside the parentheses, we can specify parameters that the function can accept. The code block within every function starts with a curly brace ({) and ends with a curly brace (}).</p>
    
    <p>Let's start with a simple function that prints a greeting message:</p>
    <p class=content>func greet() {<br>
        fmt.Println("Hello, world!");<br>
    }<br>
    func main() {<br>
        greet();<br>
        // Output: "Hello, world!"</p>
    
    <p>Functions can also accept parameters, which allow us to pass values into the function for processing. Here's an example:</p>
    <p class=content>func greetWithName(name string) {<br>
        fmt.Printf("Hello, %s!\n", name);<br>
    }<br>
    greetWithName("Alice"); // Output: "Hello, Alice!"<br>
    greetWithName("Bob");   // Output: "Hello, Bob!"</p>
    
    <p>Functions can return values using the <code>return</code> statement. This allows us to capture the result of a function and use it in our code. Here's an example:</p>
    <p class=content>func add(a, b int) int {<br>
        return a + b;<br>
    }<br>
    let result = add(3, 5);<br>
    fmt.Println(result); // Output: 8</p>
    
    <p>Functions can have default parameter values, which are used if no argument is provided when the function is called. Here's an example:</p>
    <p class=content>func greetWithDefaultName(name string) {<br>
        if name == "" {<br>
            name = "world";<br>
        }<br>
        fmt.Printf("Hello, %s!\n", name);<br>
    }<br>
    greetWithDefaultName("");  // Output: Hello, world!<br>
    greetWithDefaultName("Alice");  // Output: Hello, Alice!</p>
    
    <p>We can also define functions that accept a variable number of arguments using the <code>...</code> syntax. Here's an example:</p>
    <p class=content>func addMultiple(nums ...int) int {<br>
        sum := 0;<br>
        for _, num := range nums {<br>
            sum += num;<br>
        }<br>
        return sum;<br>
    }<br>
    fmt.Println(addMultiple(1, 2, 3)); // Output: 6<br>
    fmt.Println(addMultiple(4, 5, 6, 7)); // Output: 22</p>
    
    <p>The <code>...</code> syntax allows us to accept a variable number of arguments. Here's an example using a map for keyword arguments:</p>
    <p class=content>func printInfo(info map[string]interface{}) {<br>
        for key, value := range info {<br>
            fmt.Printf("%s: %v\n", key, value);<br>
        }<br>
    }<br>
    printInfo(map[string]interface{}{"name": "Alice", "age": 30, "city": "New York"});</p>
    
    <p>Functions are a fundamental part of Go programming, enabling us to create modular, reusable, and maintainable code. As we progress, we'll explore more advanced concepts and techniques related to functions.</p>
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What keyword is used to define a function in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) func</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) function</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) def</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) fn</label><br>
  
          <h3>Question 2</h3>
          <p>How do you define a function in Go that accepts a parameter?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) func greetWithName(name string) { ... }</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) func greetWithName(string name) { ... }</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) func greetWithName(name: string) { ... }</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) func greetWithName(name) string { ... }</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
          <pre>
  func add(a, b int) int {
      return a + b
  }
  result := add(3, 5)
  fmt.Println(result)
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) 8</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 35</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) 15</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 3</label><br>
  
          <h3>Question 4</h3>
          <p>How do you define a function in Go that accepts a variable number of arguments?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) func addMultiple(nums ...int) { ... }</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) func addMultiple(nums int...) { ... }</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) func addMultiple(...nums int) { ... }</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) func addMultiple(nums: int...) { ... }</label><br>
  
          <br>
      </form>
    `,
    initialCode: ``,
  },
  {
    id: 13,
    language: 'GO',
    title: 'Slices',
    content: `
    <p>Before we go over structs, which are the most common data type when sending and receiving information between applications (back-end to front-end, front-end to back-end, or back-end to websites, etc.), and this is especially true when interacting with the Algorand blockchain, I think it's important to have an understanding of how slices work.</p>
    
    <p>Below is an example of a slice:</p>
    <p class=content>var mySlice = []interface{}{7, "Hello", false, 63.5}</p>
    
    <p>A slice can hold all types of data, and you can have all kinds of data in one slice. You use slices when you need exactly that, a list. Slices are also mutable, which means we can rearrange, extend, and replace items in a slice, meaning they're super flexible!</p>
    
    <p>A slice is a collection of data enclosed between square brackets [ ], and separated by commas. An example of common kinds of data you would have in a slice on Algorand could be one that has asset IDs.</p>
    <p class=content>var assetIDs = []int{1265975021, 1138500612, 400593267}</p>
    
    <p>Or perhaps a slice of addresses:</p>
    <p class=content>var addresses = [<br>
        "WWYUMYPM2Y5NIIZTF4O5N73A4ZTZQWXS6TNP23U37LQ6WWF543SRTGKWUU",<br>
        "7IWZ342UGNQ2JVS2E6EGFD4MPUNL4ZIWDYNFZIANR6U7WZXORCRQCCN3YY",<br>
        "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA"<br>];</p>
    
    <p>Although slices don't have to be organized in any way and are not descriptive, they can be manipulated. For example, if you wanted to remove duplicate entries in a slice, you could use a map to achieve this.</p>
    <p class=content>func removeDuplicates(elements []int) []int {<br>
        encountered := map[int]bool{};<br>
        result := []int{};<br>
        for v := range elements {<br>
            if encountered[elements[v]] != true {<br>
                encountered[elements[v]] = true;<br>
                result = append(result, elements[v]);<br>
            }<br>
        }<br>
        return result;<br>
    }<br>
    mySlice := []int{1, 1, 2, 3, 4, 4};<br>
    mySliceWithoutDuplicates := removeDuplicates(mySlice);<br>
    fmt.Println(mySliceWithoutDuplicates);<br>
    # Output: [1, 2, 3, 4]</p>
    
    <p>Let's look back at the first example of a slice:</p>
    <p class=content>mySlice = []interface{}{7, "Hello", false, 63.5}</p>
    
    <p>In the slice above we have an integer at the first spot, 7; a string in the second spot, "Hello"; a boolean (true or false value) in the third spot; a float (decimal value), in the fourth spot.
    I refer to the places these items are in the slice as "spots", but the correct term is actually "indexes". We referenced them as the first, second, third, and fourth spot— however, in programming slices are zero-indexed. This means that we always start from zero, and use an integer to refer to their position in the slice. This feels strange, but it is something you should have ingrained into your mind, as this is universal across all programming when indexing for positions in a slice.</p>
    
    <p>The correct reference to the positions would be Index 0 for 7, Index 1 for "Hello", Index 2 for false, and Index 3 for 63.5. But, how would we see this utilized in a programming scenario?</p>
    
    <p>To interact with the slice, we must first assign it to a variable:</p>
    <p class=content>mySlice2 := []interface{}{7, "Hello", false, 63.5};<br>
    fmt.Println(mySlice2);</p>
    <p># Output: [7, "Hello", false, 63.5]</p>
    
    <p>... and now let's log the item at index 1 (the second item since the first item is always 0) using index notation:</p>
    <p class=content>let firstIndexMySlice = mySlice2[1];<br>
    console.log(firstIndexMySlice);</p>
    <p># Output: "Hello"</p>
    
    <p>Try logging the third index into the console using index notation. I've already defined the slice for you below. Click run when you're ready to run the code! The output should be 63.5.</p>
    
    <p>IDE WINDOW:<br>
    mySlice3 := []interface{}{7, "Hello", false, 63.5};<br>
    thirdIndexMySlice := mySlice3[3];<br>
    fmt.Println(thirdIndexMySlice);<br>
    # Output: 63.5</p>
    <p>Next chapter: Structs</p>
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is a slice in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) A mutable, ordered collection of elements</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) An immutable, ordered collection of elements</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) A mutable, unordered collection of elements</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) An immutable, unordered collection of elements</label><br>
  
          <h3>Question 2</h3>
          <p>How do you declare a slice in Go that can hold different types of data?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) var mySlice = []interface{}{7, "Hello", false, 63.5}</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) var mySlice = []{7, "Hello", false, 63.5}</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) var mySlice = [7, "Hello", false, 63.5]</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) var mySlice = {7, "Hello", false, 63.5}</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
          <pre>
  mySlice := []interface{}{7, "Hello", false, 63.5}
  fmt.Println(mySlice[1])
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) 7</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="correct">b) "Hello"</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) false</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) 63.5</label><br>
  
          <h3>Question 4</h3>
          <p>How do you remove duplicate entries from a slice in Go?</p>
          <pre>
  func removeDuplicates(elements []int) []int {
      encountered := map[int]bool{}
      result := []int{}
      for v := range elements {
          if !encountered[elements[v]] {
              encountered[elements[v]] = true
              result = append(result, elements[v])
          }
      }
      return result
  }
  mySlice := []int{1, 1, 2, 3, 4, 4}
  mySliceWithoutDuplicates := removeDuplicates(mySlice)
  fmt.Println(mySliceWithoutDuplicates)
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) Using a map to track encountered elements</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) Using a set to track encountered elements</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) Using a list to track encountered elements</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) Using a dictionary to track encountered elements</label><br>
  
          <br>
      </form>
    `,
    initialCode: ``,
  },
  {
    id: 14,
    language: 'GO',
    title: 'Structs',
    content: `
    <p>Now we'll dive into a bit more advanced data structures, structs! A struct is like a slice, except it uses curly brackets { } instead of square brackets [ ]— but most importantly, structs also differ in that they store values with keys (called fields), and can accept several data types. A struct can be highly versatile and can not only be used for data storage, but for more complex algorithms like hashmaps, which we'll go over later. Most interestingly, we can have structs with nested structs within them, and even slices as well! It's important to mention that fields and values have a colon ' : ' separator between them.</p>
    
    <p>Here's a simple example of a struct:</p>
    <p class=content>type Person struct {<br>
        Name string<br>
        Age  int<br>
    }<br>
    thisIsMyStruct := Person{Name: "John", Age: 22}</p>
    
    <p>In slices, we used a process called indexing, and the index notation format to access values, e.g.; mySlice[3]. With structs, we use a similar process called field access, and the field notation format to access values.</p>
    
    <p>The main difference is that we use fields, instead of solely integers that refer to position, to select values from a struct— and not to confuse you, but a field in a struct can also be an integer =).</p>
    
    <p>For example, in thisIsMyStruct above, you'll see the value "John" belongs to the field, "Name". As well as the value 22, belongs to the field, "Age". This is what field notation would look like for accessing a value for a specific field in a struct:</p>
    <p class=content>nameValue := thisIsMyStruct.Name<br>
    fmt.Println(nameValue)</p>
    <p># Output: "John"</p>
    
    <p>Try printing the "Age" value in the code editor below:</p>
    <p class=content>ageValue := thisIsMyStruct.Age<br>
    fmt.Println(ageValue)</p>
    <p># Output: 22</p>
    
    <p>Now we'll look over a more intricate struct, that's a bit larger and complex.</p>
    <p class=content>type PersonWithLikes struct {<br>
        Name  string<br>
        Age   int<br>
        Likes []string<br>
    }<br>
    thisIsMyStructWithLikes := PersonWithLikes{<br>
        Name:  "John",<br>
        Age:   22,<br>
        Likes: []string{"Exercise", "Cooking", "Coding"},<br>
    }</p>
    
    <p>We see something in this struct that we haven't seen before, a slice as the value to a field. Let's try accessing the 1st index of John's likes using a mix of field notation and index notation!</p>
    <p class=content>likes := thisIsMyStructWithLikes.Likes<br>
    fmt.Println(likes)</p>
    <p># Output:<br># ["Exercise", "Cooking", "Coding"]</p>
    
    <p class=content>likesFirstIndex := likes[1]<br>
    fmt.Println(likesFirstIndex)</p>
    <p># Output:<br># "Cooking"</p>
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is a struct in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) A collection of fields that can hold different data types</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) A collection of ordered elements of the same type</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) A function that returns multiple values</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) A type that defines methods</label><br>
  
          <h3>Question 2</h3>
          <p>How do you declare a struct in Go with the fields "Name" (string) and "Age" (int)?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) type Person struct { Name string; Age int }</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) type Person { string Name; int Age }</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) struct Person { Name: string, Age: int }</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) struct Person { string Name; int Age }</label><br>
  
          <h3>Question 3</h3>
          <p>What will be the result of the following code?</p>
          <pre>
  type Person struct {
      Name string
      Age  int
  }
  thisIsMyStruct := Person{Name: "John", Age: 22}
  fmt.Println(thisIsMyStruct.Name)
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) "John"</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) 22</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) "Age"</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) "Person"</label><br>
  
          <h3>Question 4</h3>
          <p>How do you access the first element of the "Likes" slice in the following struct?</p>
          <pre>
  type PersonWithLikes struct {
      Name  string
      Age   int
      Likes []string
  }
  thisIsMyStructWithLikes := PersonWithLikes{
      Name: "John",
      Age:  22,
      Likes: []string{"Exercise", "Cooking", "Coding"},
  }
  fmt.Println(thisIsMyStructWithLikes.Likes[0])
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) "Exercise"</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) "Cooking"</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) "Coding"</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) "Likes"</label><br>
  
          <br>
      </form>
    `,
    initialCode: ``,
  },
  {
    id: 15,
    language: 'GO',
    title: 'Imports',
    content: `
    <p>This code begins with package imports, which is a fancy way of saying— "someone wrote some code that does something, and I want to use that something in my code". It isn't possible to use libraries, which are just collections of code created by someone, without formally importing them at the beginning of your code. Imports must appear before usage of anything within them because like the English language, Go interpreters read from top to bottom.</p>
    
    <p>The package imports are from the Go Algorand SDK library and the standard library.</p>
    
    <p>Now let's get the status of the Algod client:</p>
    <p class=content>import (<br>
        "fmt"<br>
        "log"<br>
        "math/rand"<br>
        "strings"<br>
        "time"<br>
        "github.com/algorand/go-algorand-sdk/client/v2/algod"<br>
        "github.com/algorand/go-algorand-sdk/client/v2/common"<br>
    )<br>
    func main() {<br>
        var algodAddress = "http://localhost:4001";<br>
        var algodToken = strings.Repeat("a", 64);<br>
        algodClient, err := algod.MakeClient(algodAddress, algodToken);<br>
        if err != nil {<br>
            log.Fatalf("failed to make algod client: %v", err);<br>
        }<br>
        status, err := algodClient.Status().Do();<br>
        if err != nil {<br>
            log.Fatalf("failed to get status: %v", err);<br>
        }<br>
        fmt.Printf("Status: %+v\n", status);<br>
        rand.Seed(time.Now().UnixNano());<br>
        randomNumber := rand.Intn(101);<br>
        fmt.Println(randomNumber);<br>
    }</p>
    
    <p>The imports are:</p>
    <ul class=inText>
        <li>"fmt" for formatting and printing output.</li>
        <li>"log" for logging errors.</li>
        <li>"math/rand" for generating random numbers.</li>
        <li>"strings" for creating repeated strings.</li>
        <li>"time" for seeding the random number generator.</li>
        <li>"github.com/algorand/go-algorand-sdk/client/v2/algod" for the Algod client.</li>
        <li>"github.com/algorand/go-algorand-sdk/client/v2/common" for common headers.</li>
    </ul>
    
    <p>The Go Algorand SDK library is imported with specific paths to the required packages. This is similar to how we imported specific modules in Python.</p>
    
    <p>To install the Algorand Go SDK, you can use the following command:</p>
    <p class=content>go get -u github.com/algorand/go-algorand-sdk/...</p>
    
    <p>If you don't have Go installed, it must be installed manually, which is detailed in the Go installation guide on their website.</p>
    
    <p>We use the rand.Seed(time.Now().UnixNano()) to seed the random number generator with the current time. This ensures that we get different random numbers each time the program runs.</p>
    `,
    initialCode: ``,
  },
  {
    id: 18,
    language: 'GO',
    title: 'Getting Started with Algorand',
    content: `
    <p class="content">
    <code>
    // Guide for setting up your own node<br>
    /*<br>
    To set up your own node, visit this GitHub repository for a previous tutorial series:<br>
    <a href="https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/tree/main/Episode%201%20-%20Algorand%20Node%2C%20Python%2C%20Visual%20Studio%20Code%2C%20Ubuntu%2C%20and%20Module%20Installations">https://github.com/atsoc1993/Algorand_Discord_Bots_Tutorial_Series/tree/main/Episode%201%20-%20Algorand%20Node%2C%20Python%2C%20Visual%20Studio%20Code%2C%20Ubuntu%2C%20and%20Module%20Installations</a><br>
    Scroll down to the section called "Algorand Node Installation" — and make sure to run these commands in an Ubuntu LTS Shell (Download link in bottom resources section)<br>
    If you chose to run a node, that's wonderful! If not, I will be including sections for those programming without a node.<br>
    */<br><br>
    
    /*<br>
    If you are trying to run this code natively on your computer, and not in this browser:<br><br>
    Make sure you have GO installed: <br>
    <a href="https://go.dev/dl/">https://go.dev/dl/</a><br><br>
    
    Initialize your project by using the following command in the terminal:<br>
    'go mod init algolearn'<br><br>
    
    Ensure that the name of the file ends with '.go', and that you've installed the go algorand SDK afterwards using the following command in the IDE terminal:<br><br>
    
    go get github.com/algorand/go-algorand-sdk/...<br><br>
    
    You can copy and paste the code below into your yourFileName.go file, and use 'go run yourFileName.go' in the terminal to run it!<br>
    */<br><br>
    
    package main<br><br>
    
    import (<br>
        "context"<br>
        "fmt"<br>
        "os"<br><br>
    
        "github.com/algorand/go-algorand-sdk/client/v2/algod"<br>
    )<br><br>
    
    func main() {<br>
        // Variables for Algorand testnet node access<br>
        algodToken := "" // Leave empty for public node service, or enter your node token<br>
        algodServer := "https://testnet-api.algonode.cloud"<br><br>
    
        // Create an algod client<br>
        algodClient, err := algod.MakeClient(algodServer, algodToken)<br>
        if err != nil {<br>
            fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Fetch the node status and print it<br>
        status, err := algodClient.Status().Do(context.Background())<br>
        if err != nil {<br>
            fmt.Fprintf(os.Stderr, "Failed to get node status: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        fmt.Printf("Node status: %+v\\n", status)<br>
    }<br>
    </code>
    </p>
    
    <p>First, we import the necessary Go packages, including <code>context</code> for API call management, <code>fmt</code> for formatted output, and <code>os</code> for system-level operations. We also import <code>algod</code> from the Algorand SDK, which allows us to interact with the Algorand blockchain.</p>
    
    <p>Next, we set up variables for the token and server URL for the Algorand testnet node. These are initialized to work with a public node service, but can be customized for a private node by specifying a token.</p>
    
    <p>We then attempt to create an <code>algodClient</code> using the <code>MakeClient</code> function, passing in our server URL and token. This function returns an <code>algodClient</code> object and an error. If an error occurs during client creation, it is handled immediately by printing an error message and exiting the function.</p>
    
    <p>Using the created <code>algodClient</code>, we proceed to fetch the current node status. This is done by calling the <code>Status</code> method followed by <code>Do</code>, passing in a context to manage the request. If an error occurs, it is caught and printed, similar to the client creation step.</p>
    
    <p>If the status fetch is successful, we print the complete status object to the console to inspect its contents. Additionally, we access and print the <code>LastRound</code> information from the status object, which represents the most recent round of the Algorand consensus protocol.</p>
    
    <p>Print statement formatting:</p>
    <ul class="inText">
        <li><code>%+v</code>: This format specifier in <code>fmt.Printf</code> is used for printing structs or composite values in Go. The <code>+</code> flag adds field names to the output, making it very useful for debugging by showing both the field names and their values. In your code, it's used to display the complete status of the Algorand node, providing a detailed look at all its properties.</li>
        <li><code>%d</code>: This is used to format integers. In your code, it prints the value of <code>lastRound</code>, which is an integer representing the latest round number of the blockchain network. This specifier ensures that the number is printed as a base-10 decimal.</li>
    </ul>
    
    <p>Try running the code now!</p>
    
    <p>You'll see that you receive a dictionary with several keys and associated values, here is a list of all the keys:</p>
    
    <ul class="inText">
      <li>catchpoint</li>
      <li>catchpoint-acquired-blocks</li>
      <li>catchpoint-processed-accounts</li>
      <li>catchpoint-processed-kvs</li>
      <li>catchpoint-total-accounts</li>
      <li>catchpoint-total-blocks</li>
      <li>catchpoint-total-kvs</li>
      <li>catchpoint-verified-accounts</li>
      <li>catchpoint-verified-kvs</li>
      <li>catchup-time</li>
      <li>last-catchpoint</li>
      <li>last-round</li>
      <li>last-version</li>
      <li>next-version</li>
      <li>next-version-round</li>
      <li>next-version-supported</li>
      <li>stopped-at-unsupported-round</li>
      <li>time-since-last-round</li>
    </ul>
    
    <p>The most popular keys are <code>last-round</code>, so you know which block you are on, and perhaps <code>time-since-last-round</code>, if you should need to know that information. Other keys are primarily used by node running services, like upcoming reti-pool incentives, but otherwise are not especially useful for our purposes.</p>
    
    <p>Referencing the information from Chapter 4, for Structs, try this:</p>
    <ul class="inText">
      <li>Create a variable, and name it <code>lastRound</code></li>
      <li>Assign the value of the key <code>'last-round'</code> in the status dictionary to this variable you created</li>
      <li>Print your variable!</li>
    </ul>
    
    <p class="content">
    <code>
    package main<br><br>
    
    import (<br>
        "context"<br>
        "fmt"<br>
        "os"<br><br>
    
        "github.com/algorand/go-algorand-sdk/client/v2/algod"<br>
    )<br><br>
    
    func main() {<br>
        // Variables for Algorand testnet node access<br>
        algodToken := "" // Leave empty for public node service, or enter your node token<br>
        algodServer := "https://testnet-api.algonode.cloud"<br><br>
    
        // Create an algod client<br>
        algodClient, err := algod.MakeClient(algodServer, algodToken)<br>
        if err != nil {<br>
            fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Fetch the node status and print it<br>
        status, err := algodClient.Status().Do(context.Background())<br>
        if err != nil {<br>
            fmt.Fprintf(os.Stderr, "Failed to get node status: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // CREATE LAST ROUND VARIABLE AND PRINT THE LAST ROUND HERE<br>
    
    }<br>
    </code>
    </p>
    
    <p><strong>Reveal Answer:</strong></p>
    
    <p class="content">
    <code>
    package main<br><br>
    
    import (<br>
        "context"<br>
        "fmt"<br>
        "os"<br><br>
    
        "github.com/algorand/go-algorand-sdk/client/v2/algod"<br>
    )<br><br>
    
    func main() {<br>
        // Variables for Algorand testnet node access<br>
        algodToken := "" // Leave empty for public node service, or enter your node token<br>
        algodServer := "https://testnet-api.algonode.cloud"<br><br>
    
        // Create an algod client<br>
        algodClient, err := algod.MakeClient(algodServer, algodToken)<br>
        if err != nil {<br>
            fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Fetch the node status and print it<br>
        status, err := algodClient.Status().Do(context.Background())<br>
        if err != nil {<br>
            fmt.Fprintf(os.Stderr, "Failed to get node status: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Access last round status information<br>
        lastRound := status.LastRound<br>
        fmt.Printf("Last round: %d\\n", lastRound)<br>
    }<br>
    </code>
    </p>
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What is the correct way to create an Algorand client in Go?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) algodClient, err := algod.MakeClient(algodServer, algodToken)</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) algodClient, err := algod.NewClient(algodServer, algodToken)</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) algodClient, err := algod.InitClient(algodServer, algodToken)</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) algodClient, err := algod.CreateClient(algodServer, algodToken)</label><br>
  
          <h3>Question 2</h3>
          <p>Which package needs to be imported to use the Algorand SDK in Go?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) github.com/algorand/go-algorand-sdk/client/v2/algod</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) github.com/algorand/go-algorand/client/v2/algod</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) github.com/algorand/go-algorand-sdk/algod</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) github.com/algorand/sdk-go/client/v2/algod</label><br>
  
          <h3>Question 3</h3>
          <p>How do you fetch the status of an Algorand node in Go?</p>
          <pre>
  algodClient, err := algod.MakeClient(algodServer, algodToken)
  if err != nil {
      fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\n", err)
      return
  }
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="incorrect">a) status, err := algodClient.NodeStatus().Do(context.Background())</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) status, err := algodClient.GetStatus().Do(context.Background())</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="correct">c) status, err := algodClient.Status().Do(context.Background())</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) status, err := algodClient.FetchStatus().Do(context.Background())</label><br>
  
          <h3>Question 4</h3>
          <p>How do you access the last round from the status response in Go?</p>
          <pre>
  status, err := algodClient.Status().Do(context.Background())
  if err != nil {
      fmt.Fprintf(os.Stderr, "Failed to get node status: %s\n", err)
      return
  }
          </pre>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) lastRound := status.LastRound</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) lastRound := status["last-round"]</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) lastRound := status.Last-Round</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) lastRound := status.GetLastRound()</label><br>
  
          <br>
      </form>
    `,
    initialCode: `
    package main
    
    import (
        "context"
        "fmt"
        "os"
    
        "github.com/algorand/go-algorand-sdk/client/v2/algod"
    )
    
    func main() {
        // Variables for Algorand testnet node access
        algodToken := "" // Leave empty for public node service, or enter your node token
        algodServer := "https://testnet-api.algonode.cloud"
    
        // Create an algod client
        algodClient, err := algod.MakeClient(algodServer, algodToken)
        if err != nil {
            fmt.Fprintf(os.Stderr, "Failed to make algod client: %s\n", err)
            return
        }
    
        // Fetch the node status and print it
        status, err := algodClient.Status().Do(context.Background())
        if err != nil {
            fmt.Fprintf(os.Stderr, "Failed to get node status: %s\n", err)
            return
        }
    
        // Access last round status information
        lastRound := status.LastRound
        fmt.Printf("Last round: %d\n", lastRound)
    }
    `,
  },
  {
    id: 19,
    language: 'GO',
    title: 'Payment Transactions',
    content: `
    <p class="content">
    <code>
    package main<br><br>
    
    import (<br>
        "fmt"<br>
        "github.com/algorand/go-algorand-sdk/crypto"<br>
        "github.com/algorand/go-algorand-sdk/mnemonic"<br>
    )<br><br>
    
    func main() {<br>
        // METHOD 1: Create a New Account<br>
        newAccount := crypto.GenerateAccount()<br>
        fmt.Printf("Private Key: %s\\n", newAccount.PrivateKey)<br>
        fmt.Printf("Address: %s\\n", newAccount.Address.String())<br><br>
    
        // Convert Private Key to Mnemonic<br>
        mnemo, err := mnemonic.FromPrivateKey(newAccount.PrivateKey)<br>
        if err != nil {<br>
            fmt.Printf("Error converting private key to mnemonic: %s\\n", err)<br>
            return<br>
        }<br>
        fmt.Println("Mnemonic:", mnemo)<br><br>
    
        // METHOD 2: Use Mnemonic to Obtain Private Key<br>
        // Assuming mnemonicPhrase is obtained securely and already exists<br>
        mnemonicPhrase := "brown repeat amazing april survey fish gospel brown bless core deny plate admit burden pistol device shuffle sadness genius answer hurt analyst foot above annual"<br>
        privKey, err := mnemonic.ToPrivateKey(mnemonicPhrase)<br>
        if err != nil {<br>
            fmt.Printf("Error retrieving private key from mnemonic: %s\\n", err)<br>
            return<br>
        }<br>
        fmt.Printf("Private Key from Mnemonic: %s\\n", privKey)<br>
    }<br>
    </code>
    </p>
    
    <p>When developing in Go with the Algorand SDK, there are two primary methods for obtaining a private key and address which are necessary for signing transactions. The private key is typically managed in byte slice format and is essential for the creation and signing of transactions.</p>
    
    <p>Method 1: Create a New Account and Obtain the Private Key and Address Directly</p>
    <p>In the Algorand Go SDK, you use the <code>crypto.GenerateAccount()</code> function to generate a new account. This function returns an account object that contains both the private key and the address, not in a tuple like Python, but directly accessible via the account object properties. Once you have this account, you can print the private key and the address. These details can then be used to sign transactions or manage Algorand assets.</p>
    
    <p>After generating a new account, you can fund it by sending Algos to the generated address. This can be done through the Algorand dispenser for testnet, which is available at <a href="https://bank.testnet.algorand.network/">https://bank.testnet.algorand.network/</a>. Remember that all accounts require a minimum balance of 0.1 Algo to remain active, and each transaction typically costs a fee of 0.001 Algo.</p>
    
    <p>For wallet applications, if you need to derive the mnemonic from the private key, you can use the <code>mnemonic.FromPrivateKey()</code> function provided by the Go SDK. This function converts the private key into a human-readable mnemonic phrase.</p>
    
    <p>Method 2: Convert an Existing Mnemonic to a Private Key</p>
    <p>If you already possess a mnemonic and need to derive the corresponding private key, you can utilize the <code>mnemonic.ToPrivateKey(mnemonic string)</code> function. This function takes a string mnemonic and returns the corresponding private key. It is crucial to ensure that the mnemonic is correctly formatted, enclosed in quotes, and that it includes spaces between the words as expected in standard mnemonic phrases.</p>
    
    <p>Using the Account for Transactions</p>
    <p>Once you have an account with funds, you can use the <code>AlgodClient</code> to initiate a connection to the Algorand blockchain. This setup allows you to interact with the blockchain, send transactions, and check account details. You might engage in various transaction types such as sending Algos to another account, rekeying the account (which changes the authoritative private key for the account), or closing the account (transferring all remaining Algos to another account). Each of these actions can be encapsulated within a payment transaction using the Algorand Go SDK.</p>
    
    <p>This text should provide a clear, non-code explanation of the key processes involved in using the Algorand Go SDK for creating and managing accounts, as well as performing transactions.</p>
    
    <p class="content">
    <code>
    package main<br><br>
    
    import (<br>
        "context"<br>
        "fmt"<br>
        "github.com/algorand/go-algorand-sdk/client/algod"<br>
        "github.com/algorand/go-algorand-sdk/crypto"<br>
        "github.com/algorand/go-algorand-sdk/future"<br>
        "github.com/algorand/go-algorand-sdk/types"<br>
    )<br><br>
    
    func main() {<br>
        // Define the Algod client<br>
        algodToken := ""<br>
        algodAddress := "https://testnet-api.algonode.cloud"<br>
        headers := []*algod.Header{{Key: "X-API-Key", Value: algodToken}}<br>
        algodClient, err := algod.MakeClientWithHeaders(algodAddress, algodToken, headers)<br>
        if err != nil {<br>
            fmt.Printf("Failed to make algod client: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Existing account details<br>
        address := "I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU"<br>
        privateKey := "6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg=="<br><br>
    
        // Convert 1.001 Algo to microAlgos for transaction amount<br>
        amount := uint64(1.001 * 1e6) // Algos are expressed in microAlgos in the SDK<br><br>
    
        // Fetch the suggested transaction parameters<br>
        txParams, err := algodClient.SuggestedParams().Do(context.Background())<br>
        if err != nil {<br>
            fmt.Printf("Error getting suggested tx params: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Generate a new account<br>
        newAccount := crypto.GenerateAccount()<br>
        newAccountAddress := newAccount.Address.String()<br>
        newAccountPrivateKey := newAccount.PrivateKey<br><br>
    
        // Create a payment transaction<br>
        note := []byte("Here's your one Algo!")<br>
        tx, err := future.MakePaymentTxn(address, newAccountAddress, amount, note, "", txParams)<br>
        if err != nil {<br>
            fmt.Printf("Failed to make transaction: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Sign the transaction<br>
        signTx, err := crypto.SignTransaction(privateKey, tx)<br>
        if err != nil {<br>
            fmt.Printf("Failed to sign transaction: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Send the transaction<br>
        sendResponse, err := algodClient.SendRawTransaction(signTx).Do(context.Background())<br>
        if err != nil {<br>
            fmt.Printf("Failed to send transaction: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Wait for confirmation<br>
        confirmedTxn, err := future.WaitForConfirmation(algodClient, sendResponse.TxID, 4, context.Background())<br>
        if err != nil {<br>
            fmt.Printf("Error waiting for confirmation: %s\\n", err)<br>
            return<br>
        }<br><br>
    
        // Print the transaction ID<br>
        fmt.Printf("Transaction confirmed with ID: %s\\n", confirmedTxn.Txn.Txn.ID)<br>
    }<br>
    </code>
    </p>
    
    <p>Steps:</p>
    <ol class="inText">
        <li>Import our necessary modules</li>
        <li>Define our <code>AlgodClient</code> to initiate a connection to the chain</li>
        <li>Define our account's address and private key that we will be sending transactions from</li>
        <li>Define an amount of Algorand to send</li>
        <li>Obtain the params needed for all transactions</li>
        <li>Generate a new account for testing, so we have an address to send testnet Algorand to</li>
        <li>Define our payment transaction and its parameters</li>
        <li>Sign the transaction with our private key</li>
        <li>Assign the result of sending our signed transaction with the <code>send_transaction()</code> function from the <code>AlgodClient</code> class</li>
        <li>Use the <code>wait_for_confirmation()</code> function to ensure the transaction is successful</li>
        <li>Print the transaction ID for reference on an explorer like allo.info, <a href="https://testnet.explorer.perawallet.app/">https://testnet.explorer.perawallet.app/</a>, <a href="https://www.blockpack.app/#/explorer/home">https://www.blockpack.app/#/explorer/home</a>, or <a href="https://app.dappflow.org/explorer/home">https://app.dappflow.org/explorer/home</a></li>
    </ol>
    
    <p>We introduce a few new functions here:</p>
    <ul class="inText">
        <li>the <code>algos_to_microalgos()</code> function from the <code>algosdk.util</code> module</li>
        <li>the <code>PaymentTxn</code> class and <code>wait_for_confirmation()</code> function from the <code>algosdk.transaction</code> module</li>
        <li>The <code>send_transaction()</code> function, which is a method from the <code>AlgodClient</code> class</li>
    </ul>
    
    <p>In the Algorand SDKs, when we want to reference an amount of Algo, that amount needs to be in a format called "Microalgo"; Microalgo is essentially an amount of Algo times 1,000,000. Meaning that 1 Algo would be 1,000,000 Microalgo, and the transaction fee of 0.001 Algo is 1,000 Microalgo.</p>
    
    <p>Instead of manually calculating the microalgo amount each time, what we can do is use the <code>algos_to_microalgos()</code> function, and pass in the amount of Algo as an argument.</p>
    
    <p>The <code>PaymentTransaction</code> class comes with a lot of functionality, aside from simple payment transactions of an amount of Algo to more advanced features, including:</p>
    <ul class="inText">
        <li>the ability to rekey your account to another (giving them full access, and losing your access)</li>
        <li>closing your account (send all of your remaining Algo to them)</li>
    </ul>
    
    <p class="content">
    <code>
    PaymentTransaction format:<br><br>
    
    class PaymentTxn(<br>
        sender: str,<br>
        sp: SuggestedParams,<br>
        receiver: Any,<br>
        amt: Any,<br>
        close_remainder_to: Any | None = None,<br>
        note: Any | None = None,<br>
        lease: Any | None = None,<br>
        rekey_to: Any | None = None<br>
    )<br>
    Represents a payment transaction.<br><br>
    
    Args:<br>
        sender (str): address of the sender<br>
        sp (SuggestedParams): suggested params from algod<br>
        receiver (str): address of the receiver<br>
        amt (int): amount in microAlgos to be sent<br>
        close_remainder_to (str, optional): if nonempty, account will be closed and remaining algos will be sent to this address<br>
        note (bytes, optional): arbitrary optional bytes<br>
        lease (byte[32], optional): specifies a lease, and no other transaction with the same sender and lease can be confirmed in this transaction's valid rounds<br>
        rekey_to (str, optional): additionally rekey the sender to this address<br><br>
    
    After we define our <code>Payment Transaction</code> class parameters, we can then use the <code>sign()</code> method that is included within it. This sign function accepts our private key, and outputs a signed transaction object, which is needed to input to the <code>send_transaction()</code> function:<br><br>
    
    (method) def sign(private_key: Any) -> SignedTransaction<br>
    Sign the transaction with a private key.<br><br>
    
    Args:<br>
        private_key (str): the private key of the signing account<br><br>
    
    Returns:<br>
        SignedTransaction: signed transaction with the signature<br><br>
    
    The <code>wait_for_confirmation()</code> function requires the <code>AlgodClient</code> class variable we created, as well as the transaction ID to wait for:<br><br>
    
    (function) def wait_for_confirmation(<br>
        algod_client: AlgodClient,<br>
        txid: str,<br>
    )<br><br>
    
    Lastly, the <code>send_transaction()</code> function, which accepts signed transaction objects<br><br>
    
    (method) def send_transaction(<br>
        txn: GenericSignedTransaction,<br>
    ) -> Outputs transaction ID<br><br>
    </code>
    </p>
    
    <p>Below are examples of rekey transactions and close amount to transactions, which are sent in succession (BUT NOT A GROUP TRANSACTION, WHICH WE WILL LEARN ABOUT LATER)</p>
    
    <p class="content">
    <code>
    # Repeat the process for the Rekey Transaction and the close remainder to transaction<br><br><br>
    
    // Rekey Transaction<br>
    rekey_to_new_account_payment = PaymentTxn(<br>
        sender = address,<br>
        receiver = new_account_address,<br>
        sp = params,<br>
        amt = 0,<br>
        rekey_to = new_account_address,<br>
        note = "Take care of my account for me! I'll be back in a week"<br>
    )<br><br>
    
    signed_rekey_to_new_account_payment = rekey_to_new_account_payment.sign(private_key)<br>
    transaction_id = algod_client.send_transaction(signed_rekey_to_new_account_payment)<br>
    wait_for_confirmation(algod_client, transaction_id)<br>
    print(transaction_id)<br><br>
    
    // New account rekeys back to the original account, note that the sender is the original account but the new account uses their own private key, not the original accounts private key<br><br>
    
    rekey_back_to_old_account_from_new_account = PaymentTxn(<br>
        sender = address,<br>
        receiver = address,<br>
        sp = params,<br>
        rekey_to = address,<br>
        amt = 0,<br>
        note = "Sorry! I'm too busy trading this week. Maybe ask PorkChop.algo?"<br>
    )<br><br>
    
    signed_rekey_back_to_old_account_from_new_account = rekey_back_to_old_account_from_new_account.sign(new_account_private_key)<br>
    transaction_id = algod_client.send_transaction(signed_rekey_back_to_old_account_from_new_account)<br>
    wait_for_confirmation(algod_client, transaction_id)<br>
    print(transaction_id)<br><br>
    
    // Close remainder to transaction<br><br>
    
    close_account_to_new_account = PaymentTxn(<br>
        sender = address,<br>
        receiver = new_account_address,<br>
        sp = params,<br>
        amt = 0,<br>
        close_remainder_to = new_account_address,<br>
        note = 'Take care of my precious Algo!'<br>
    )<br><br>
    
    signed_close_account_to_new_account = close_account_to_new_account.sign(private_key)<br>
    transaction_id = algod_client.send_transaction(signed_close_account_to_new_account)<br>
    wait_for_confirmation(algod_client, transaction_id)<br>
    print(transaction_id)<br>
    </code>
    </p>
    
    <p>Although the <code>Payment Transaction</code> has many possible inputs, the bare minimum is using the sender, sp, receiver, and amt field. Anything else is at your discretion!</p>
    
    <p>DISCLAIMER: that when rekeying and closing out accounts, this process is irreversible! If you don't know the person, or feel unsure about doing so, you should never use these transactions outside of testing purposes without ultimate confidence. No platforms currently utilize rekey transactions for users, but do use them internally when generating smart contracts for contract to contract calls, which will come later in our learning process.</p>
  
      <form>
    <h1>Quiz</h1>
  
          <h3>Question 1</h3>
          <p>What function is used to generate a new account in the Algorand Go SDK?</p>
          <input type="radio" id="q1a" name="q1" value="a">
          <label for="q1a" class="correct">a) crypto.GenerateAccount()</label><br>
          <input type="radio" id="q1b" name="q1" value="b">
          <label for="q1b" class="incorrect">b) crypto.NewAccount()</label><br>
          <input type="radio" id="q1c" name="q1" value="c">
          <label for="q1c" class="incorrect">c) crypto.CreateAccount()</label><br>
          <input type="radio" id="q1d" name="q1" value="d">
          <label for="q1d" class="incorrect">d) crypto.MakeAccount()</label><br>
  
          <h3>Question 2</h3>
          <p>Which function is used to convert a private key to a mnemonic in the Algorand Go SDK?</p>
          <input type="radio" id="q2a" name="q2" value="a">
          <label for="q2a" class="correct">a) mnemonic.FromPrivateKey()</label><br>
          <input type="radio" id="q2b" name="q2" value="b">
          <label for="q2b" class="incorrect">b) mnemonic.ConvertPrivateKey()</label><br>
          <input type="radio" id="q2c" name="q2" value="c">
          <label for="q2c" class="incorrect">c) mnemonic.PrivateKeyToMnemonic()</label><br>
          <input type="radio" id="q2d" name="q2" value="d">
          <label for="q2d" class="incorrect">d) mnemonic.KeyToMnemonic()</label><br>
  
          <h3>Question 3</h3>
          <p>How do you convert an amount in Algos to microAlgos in the Algorand Go SDK?</p>
          <pre>
  amount := 1.001
  microAlgos := uint64(amount * 1e6)
          </pre>
          <input type="radio" id="q3a" name="q3" value="a">
          <label for="q3a" class="correct">a) uint64(amount * 1e6)</label><br>
          <input type="radio" id="q3b" name="q3" value="b">
          <label for="q3b" class="incorrect">b) uint64(amount * 1e3)</label><br>
          <input type="radio" id="q3c" name="q3" value="c">
          <label for="q3c" class="incorrect">c) uint64(amount * 1e5)</label><br>
          <input type="radio" id="q3d" name="q3" value="d">
          <label for="q3d" class="incorrect">d) uint64(amount * 1e4)</label><br>
  
          <h3>Question 4</h3>
          <p>Which function is used to sign a transaction in the Algorand Go SDK?</p>
          <input type="radio" id="q4a" name="q4" value="a">
          <label for="q4a" class="correct">a) crypto.SignTransaction()</label><br>
          <input type="radio" id="q4b" name="q4" value="b">
          <label for="q4b" class="incorrect">b) crypto.CreateSignedTransaction()</label><br>
          <input type="radio" id="q4c" name="q4" value="c">
          <label for="q4c" class="incorrect">c) crypto.GenerateSignedTransaction()</label><br>
          <input type="radio" id="q4d" name="q4" value="d">
          <label for="q4d" class="incorrect">d) crypto.MakeSignedTransaction()</label><br>
  
          <br>
      </form>
    `,
    initialCode: `
    package main
    
    import (
        "context"
        "fmt"
        "github.com/algorand/go-algorand-sdk/client/algod"
        "github.com/algorand/go-algorand-sdk/crypto"
        "github.com/algorand/go-algorand-sdk/future"
    )
    
    func main() {
        // Define the Algod client
        algodToken := ""
        algodAddress := "https://testnet-api.algonode.cloud"
        headers := []*algod.Header{{Key: "X-API-Key", Value: algodToken}}
        algodClient, err := algod.MakeClientWithHeaders(algodAddress, algodToken, headers)
        if err != nil {
            fmt.Printf("Failed to make algod client: %s\n", err)
            return
        }
    
        // Existing account details
        address := "I3BHPDWGH63J47JBG2P7RJLOGD3L3HEBOI4KKUKSV3MZSYFX4VFDIDYSMU"
        privateKey := "6KitD65Q7V6ZDB29EEx1YtoBeqy0PDt+78Ga4DchXItGwneOxj+2nn0hNp/4pW4w9r2cgXI4pVFSrtmZYLflSg=="
    
        // Convert 1.001 Algo to microAlgos for transaction amount
        amount := uint64(1.001 * 1e6) // Algos are expressed in microAlgos in the SDK
    
        // Fetch the suggested transaction parameters
        txParams, err := algodClient.SuggestedParams().Do(context.Background())
        if err != nil {
            fmt.Printf("Error getting suggested tx params: %s\n", err)
            return
        }
    
        // Generate a new account
        newAccount := crypto.GenerateAccount()
        newAccountAddress := newAccount.Address.String()
        newAccountPrivateKey := newAccount.PrivateKey
    
        // Create a payment transaction
        note := []byte("Here's your one Algo!")
        tx, err := future.MakePaymentTxn(address, newAccountAddress, amount, note, "", txParams)
        if err != nil {
            fmt.Printf("Failed to make transaction: %s\n", err)
            return
        }
    
        // Sign the transaction
        signTx, err := crypto.SignTransaction(privateKey, tx)
        if err != nil {
            fmt.Printf("Failed to sign transaction: %s\n", err)
            return
        }
    
        // Send the transaction
        sendResponse, err := algodClient.SendRawTransaction(signTx).Do(context.Background())
        if err != nil {
            fmt.Printf("Failed to send transaction: %s\n", err)
            return
        }
    
        // Wait for confirmation
        confirmedTxn, err := future.WaitForConfirmation(algodClient, sendResponse.TxID, 4, context.Background())
        if err != nil {
            fmt.Printf("Error waiting for confirmation: %s\n", err)
            return
        }
    
        // Print the transaction ID
        fmt.Printf("Transaction confirmed with ID: %s\n", confirmedTxn.Txn.Txn.ID())
    }
    
    `,
  },
];

export default chapters;
