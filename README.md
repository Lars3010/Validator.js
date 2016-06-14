# Validator.js
Validator.js is a tiny javascript framework designed to make client side textbox validation easier. It will validate on input and use a predefined regex so you dont have to search for one. If you still want to use your own regex or expand on the system, you can do that too.

[Demo](https://jsfiddle.net/Lars3010/kc2L8rqe/4/)

## Syntax
Before we get started we will go over the syntax. Validation.js has its own selector.
```javascript
Val("#IdHere");
```

As you can see you can select an element using this method, not unlike JQuery. That’s all the syntax you need to know and you could even replace it with pure javascript or another framework if you prefer.

##Installation
1. Download Validator.js
2. Include Validator.js in your html file.

    ```html
    <script src="validator.js"></script>
    ```

3. Create a script in your footer to contain your callback functions. We will go over the callback functions later in this Readme.

    ```html
    <script type="text/javascript">
        //Callback functions here                
    </script>
    ```
    
##Setup
Setting up Validator,js is really easy. All you have to do is follow these steps:

1. Make a form and give it the Id “vl-form”.
2. Next create the textboxes and give them the following Ids:
    * vl-name: Validates a name inputfield.
    * vl-email: Validates an email inputfield.
    * vl-password: Validates a password inputfield.
    * vl-custom: Validates a custom regex.
    ```html
    <input type="text" name="vl-inputname" id="vl-name" class="vl-input"><br><br>
    <input type="text" name="vl-inputemail" id="vl-email" class="vl-input"><br><br>
    <input type="text" name="vl-inputpass" id="vl-password" class="vl-input"><br><br>
    <input type="text" name="vl-inputpass" id="vl-custom" class="vl-input"><br><br>
    <input type="submit" value="Verzenden">
    ```
3. Setup the callback functions. Got to the script tag you made in the footer. The callback functions dictate the behaviour of the validation. In this example we will make the border of the input field green or red. Every method of validation has a Succes and an Error function. I will list them here:
    * Name Fields:
    ```javascript
    function nameSuccess()
    {
        console.log("name success");
        Val("#vl-name").style.borderColor = "green";
    }
                    
    function nameError()
    {
        console.log("name error");
        Val("#vl-name").style.borderColor = "red";
    }
    ```
    * Email Fields:
    ```javascript
    function emailSuccess()
    {
        console.log("email success");
        Val("#vl-email").style.borderColor = "green";
    }
                    
    function emailError()
    {
        console.log("email error");
        Val("#vl-email").style.borderColor = "red";
    }
    ```
    * Password Fields:
    ```javascript
    function passSuccess()
    {
        console.log("password success");
        Val("#vl-password").style.borderColor = "green";
    }
    
    function passError()
    {
        console.log("password error");
        Val("#vl-password").style.borderColor = "red";
    }
    ```
    * Custom Fields:
    ```javascript
    function customSuccess()
    {
        console.log("custom success");
        Val("#vl-custom").style.borderColor = "green";
    }
     
    function customError()
    {
        console.log("custom error");
        Val("#vl-custom").style.borderColor = "red";
    }
    ```
4. Call the validation functions.
    * password function: the password function only requires its Succes and Error functions.
    * fullname function: the fullname function only requires its Succes and Error functions.
    * email function: the email function only requires its Succes and Error functions.
    * custom function: the custom function is different as it requires a regex next to its Succes and Error functions.
    ```javascript
    Val("#vl-password").password(passSuccess, passError);
    Val("#vl-name").fullname(nameSuccess, nameError);
    Val("#vl-email").email(emailSuccess, emailError);
    Val("#vl-custom").custom(/^\d+$/,customSuccess,customError); //custom function requires regex and the succes and error functions.
    ``` 
    
    
