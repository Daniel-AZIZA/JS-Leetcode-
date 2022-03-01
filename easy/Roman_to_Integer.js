const   romanToInt = function(s) {
   
    const   roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const   integer = [1, 5, 10, 50, 100, 500, 1000];
    let     count = 0;
    let     index = 0;
    const   array = s.split('')
    
    for (let i = 0; i < array.length; i++)
    {
        if (array[i - 1] == 'I' && array[i] == 'V')
            count -= 2
        if (array[i - 1] == 'I' && array[i] == 'X')
                count -= 2
        if (array[i - 1] == 'X' && array[i] == 'L')
                count -= 20
        if (array[i - 1] == 'X' && array[i] == 'C')
               count -= 20
        if (array[i - 1] == 'C' && array[i] == 'D')
                count -= 200
        if (array[i - 1] == 'C' && array[i] == 'M')
                count -= 200
        index = roman.indexOf(array[i])
        count += integer[index]
    }
    return (count);
};

console.log(romanToInt("XLCM"))
