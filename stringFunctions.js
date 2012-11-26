
// given a string aaabba return a3b2a1
//
module.exports.strCompress = function (strToC) {
    var curr, 
        i, 
        prev, 
        count = 1, 
        res = [];

    if (! strToC) {
        throw new Error("please pass a string");
    }    

    prev = curr = strToC.charAt(0);
    for (i = 1; i < strToC.length; i++) {
        curr = strToC.charAt(i);

        if (curr === prev) {
            count++;
        } else {
            //console.log('Str is : ', prev, count);

            res[res.length] = prev + count;

            count = 1;
            prev = curr;
        }
    }
    // catch last
    res[res.length] = curr + count;

    return res.join('');

};

// given a string a3b2a1 return aaabba
//
module.exports.strUnCompress = function (strToUC) {
    var curr, 
        i, 
        prev,
        num = '',
        res = '',
        stringIt = function(char, times) {
            var str = '';
            do {
                str += char;
                times--;

            } while (times > 0)

            return str;
        };

    prev = curr = strToUC.charAt(0);
    for (i = 1; i < strToUC.length; i++) {
        curr = strToUC.charAt(i);

        //console.log("curr is: ", curr);

        if (curr >= 0 && curr <= 9) {
            num += curr;
        } else {
            num = parseInt(num, 10);

            //console.log("num is: ", num);

            res += stringIt(prev, num);

            //console.log("res after loop is: ", res);

            num = '';
            prev = curr;
        }
    }
    res += stringIt(prev, num);

    //console.log("returning res as: ", res);

    return res;
};

//take a string and reverse it
module.exports.reverseIt = function(strToRev) {
    //string is immutable in js so must return create ew
    var i, 
        newStr = '';

    if (! strToRev) {
        throw new Error("please pass string");
    }

    for (i = strToRev.length; i >= 0; i--) {
        newStr += strToRev.charAt(i);
    }

    return newStr;
};

// parse url params e.g. given www.mysite.com?p1=21&p2=55" return p1,21,p2,55
module.exports.parseUrlParams = function(strToParse) {
    var index = 0,
        j,
        fieldValue,
        fORv = '',
        c = '',
        res = [],
        eat = function(strToEat, stopChar) {
            var fv = '',
                curr = '';

            do {
                curr = strToEat.charAt(index++)

                if (curr !== stopChar) {
                    fv += curr;
                }
            } while (curr !== stopChar && index < strToEat.length);

            return fv;      
        };


    if (! strToParse || strToParse.length <= 0) {
        throw new Error("please pass valid string")
    }


    // get past initial ?, don't care about start of string
    eat(strToParse, '?');

    while (index < strToParse.length) {
        // eat until next & or end of string
        // a fieldValue should be returned e.g. p1=22
        //
        fieldValue = eat(strToParse, '&');
 
        for (j = 0; j < fieldValue.length; j++) {
            c = fieldValue.charAt(j);
            if (c === '=') {
                res[res.length] = fORv;  // left side field
                fORv = '';
            } else {
                fORv += c;
            }
        }
        res[res.length] = fORv;   //right side value
        fORv = '';
    }

    return res.join(',');
};

