# Validator.js
Validator.js is a tiny javascript framework designed to make client side textbox validation easier. It will validate on input and use a predefined regex so you dont have to search for one. If you still want to use your own regex or expand on the system, you can do that too.

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
```javascript
<script type="text/javascript">
    //Callback functions here                
</script>
```

##Setup
Setting up Validator,js is really easy. All you have to do is follow these steps:
