

////////************ pas finit ********************///////////

const isValid = function(s) {

    let str = s.split('')

    for (let i = 0; i < str.length; i++)
    {
        if (str[i] == '(' && str[i + 1] != ')')
               return (false)
        if (str[i] == '[' && str[i + 1] != ']')
               return (false)
        if (str[i] == '{' && (str[i + 1] != '}' && str[i + 3] != '}'))
               return (false)
    }
    return (str.length > 1 ? true : false)
};


console.log(isValid("(]"))
