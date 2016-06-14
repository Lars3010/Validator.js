function Val(selector)
{
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);
    
    /*
    Password function for quick and easy validation.
    Uses OnInput to live validate the selected input field.
    This funtion will return a callback if there is one allowing 
    you to determine what you want to do if the provided data is true or false
    
    passSuccess returns when the password meets the requirements
    passError returns when the password does not meet the requirements
    
    The callback must be a function.
    */
    self.element.password = function(passSuccess, passError)
    {  
        self.element.oninput = function()
        {
            if(self.valPass())
            {
                if(passSuccess && typeof passSuccess === "function") 
                {
                    // execute the callback
                    return passSuccess();
                }
                
                else
                {
                    // Throw error if passSuccess is not a function or is not provided as parameter
                    throw new Error("password(passSuccess, passError): passSuccess is not a function or is not provided as parameter");
                }  
            }
            else
            {
                if(passError && typeof passError === 'function')
                {
                    // execute the callback
                    return passError();
                }
                
                else
                {
                    // Throw error if passError is not a function or is not provided as parameter
                    throw new Error("password(passSuccess, passError): passError is not a function or is not provided as parameter");
                }
            }
        }
    }
    
    /*
    Fullname function for quick and easy validation of a real name in one input field.
    Uses OnInput to live validate the selected input field.
    This funtion will return a callback if there is one allowing 
    you to determine what you want to do if the provided data is true or false
    
    nameSuccess returns when the name meets the requirements
    nameError returns when the name does not meet the requirements
    
    The callback must be a function.
    */
    
    self.element.fullname = function(nameSuccess, nameError)
    {
        self.element.oninput = function()
        {
            if(self.valName())
            {
                if(nameSuccess && typeof nameSuccess === "function") 
                {
                    // execute the callback
                    return nameSuccess();
                }
                
                else
                {
                    // Throw error if nameSuccess is not a function or is not provided as parameter
                    throw new Error("user(nameSuccess, nameError): nameSuccess is not a function or is not provided as parameter");
                }  
            }
            else
            {
                if(nameError && typeof nameError === 'function')
                {
                    // execute the callback
                    return nameError();
                }
                
                else
                {
                    // Throw error if nameError is not a function or is not provided as parameter
                    throw new Error("user(nameSuccess, nameError): nameError is not a function or is not provided as parameter");
                }
            }
        }
    }
    
    /*
    email function for quick and easy validation of a real name in one input field.
    Uses OnInput to live validate the selected input field.
    This funtion will return a callback if there is one allowing 
    you to determine what you want to do if the provided data is true or false
    
    emailSuccess returns when the email meets the requirements
    emailError returns when the email does not meet the requirements
    
    The callback must be a function.
    */
    self.element.email = function(emailSuccess,emailError)
    {
        self.element.oninput = function()
        {
            if(self.valEmail())
            {
                if(emailSuccess && typeof emailSuccess === "function") 
                {
                    // execute the callback
                    return emailSuccess();
                }
                
                else
                {
                    // Throw error if emailSuccess is not a function or is not provided as parameter
                    throw new Error("user(emailSucces, emailError): emailSucces is not a function or is not provided as parameter");
                }
            }
            else
            {
                if(emailError && typeof emailError === "function") 
                {
                    // execute the callback
                    return emailError();
                }
                
                else
                {
                    // Throw error if emailError is not a function or is not provided as parameter
                    throw new Error("user(emailSucces, emailError): emailError is not a function or is not provided as parameter");
                }
            }
        }
    }
    
    /*
    Custom function for quick and easy validation.
    Uses OnInput to live validate the selected input field.
    This funtion will return a callback if there is one allowing 
    you to determine what you want to do if the provided data is true or false
    
    customSuccess returns when the custom regex meets the requirements
    customError returns when the custom regex does not meet the requirements
    
    The callback must be a function.
    */
    
    self.element.custom = function(regex,customSucces,customError)
    {
        self.element.oninput = function()
        {
            if(self.valCustom(regex))
            {
                if(customSucces && typeof customSucces === "function")
                {
                    return customSucces();
                }
                else
                {
                    // Throw error if customSuccess is not a function or is not provided as parameter
                    throw new Error("custom(customSucces, customError): customSucces is not a function or is not provided as parameter");
                }
            }
            else
            {
                if(customError && typeof customError === "function")
                {
                    return customError();
                }
                else
                {
                    // Throw error if customError is not a function or is not provided as parameter
                    throw new Error("custom(customSucces, customError): customError is not a function or is not provided as parameter");
                }
            }
        }
    }
    
    /*
    Name validation function
    Allows for more options than the fullname function. You have to build the rest of the validation yourself.
    All this function provides is the regex and the empty test.
    */
    self.valName = function()
    {
        var val = self.element.value;
        if(val !== "")
        {
            if(/^([a-zA-Z ]{1,})*$/.test(val))
            {
                return true;    
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    
    /*
    Passwordvalidation function
    Allows for more options than the password function. You have to build the rest of the validation yourself.
    All this function provides is the regex and the empty test.
    */
    self.valPass = function()
    {
        var val = self.element.value;
        if(val !== "")
        {
            if(/(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(val))
            {
                return true;
            }
            else
            {
                return  false;
            }
        }
        else
        {
            return false;
        }
    }
    
    /*
    Emailvalidation function
    Allows for more options than the email function. You have to build the rest of the validation yourself.
    All this function provides is the regex and the empty test.
    */
    self.valEmail = function()
    {
        var val = self.element.value;
        if(val !== "")
        {
            if(/\S+@\S+/.test(val))
            {
                return true;        
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    
    /*
    customvalidation function
    Allows for more options than the custom function. You have to build the rest of the validation yourself.
    All this function provides is the place to place your regex and the empty test.
    */
    self.valCustom = function(regex)
    {
        var val = self.element.value;
        if(val !== "")
        {
            if(regex.test(val))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    
    return self.element;
}
