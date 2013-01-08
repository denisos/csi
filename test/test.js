var assert = require("should"),
    sortFunctions = require(__dirname + '/../sortFunctions'),
    stringFunctions = require(__dirname + '/../stringFunctions');

/*****************  SORT FNS  **************************/

describe('sortFunctions', function(){
  describe('#insertionSort', function(){
    it('should return 1,2,3,4,5,6 for 6,5,3,4,1,2', function(){
      sortFunctions.insertionSort([6,5,3,4,1,2]).join(',').should.equal('1,2,3,4,5,6');
    });

  });

});

/*****************  STRING FNS  **************************/


describe('stringFunctions', function(){
  describe('#strCompress', function(){
    it('should return a3b2 for aaabb', function(){
      stringFunctions.strCompress('aaabb').should.equal('a3b2');
    });

    it('should return z3 for zzz', function(){
      stringFunctions.strCompress('zzz').should.equal('z3');
    });

    it('should return a1 for a', function(){
      stringFunctions.strCompress('a').should.equal('a1');
    });

    it('should return a5b3a2b1 for aaaaabbbaab', function(){
      stringFunctions.strCompress('aaaaabbbaab').should.equal('a5b3a2b1');
    });

    it('should return exception for null', function(){
        try {
           stringFunctions.strCompress(null).should.throw();
        } catch(e) {
        }
    });

  });

  describe('#strUnCompress', function(){
    it('should return aaabb for a3b2', function(){
      assert.equal('aaabb', stringFunctions.strUnCompress('a3b2'));
    });

    it('should return a for a', function(){
      assert.equal('a', stringFunctions.strUnCompress('a'));
    });

    it('should return a for a1', function(){
      assert.equal('a', stringFunctions.strUnCompress('a1'));
    });

  });



  describe('#parseUrlParams', function(){
    it('should return p1,21,p2,denis for www.mysite.com?p1=21&p2=denis', function(){
      assert.equal('p1,21,p2,denis', stringFunctions.parseUrlParams("www.mysite.com?p1=21&p2=denis"));
    });

    it('should return p1,denis for www.mysite.com?p1=denis', function(){
      assert.equal('p1,denis', stringFunctions.parseUrlParams("www.mysite.com?p1=denis"));
    }); 

    it('should return empty str for www.mysite.com', function(){
      assert.equal('', stringFunctions.parseUrlParams("www.mysite.com"));
    }); 

    it('should return empty str for www.mysite.com?', function(){
      assert.equal('', stringFunctions.parseUrlParams("www.mysite.com?"));
    });        
  });

  describe('#hasAllUniqueChars', function(){
    it('should return false for abcdefaghijk', function(){
      stringFunctions.hasAllUniqueChars("abcdefaghijk").should.be.false;
    });

    it('should return false for abcdefaghijk', function(){
      stringFunctions.hasAllUniqueChars("abcdefghijk").should.be.true;
    });

    it('should return false for abcdefaghijk', function(){
        stringFunctions.hasAllUniqueChars("").should.throw();
    });

    it('should return false for abcdefaghijk', function(){
      stringFunctions.hasAllUniqueChars("a").should.be.true;
    });
      
  });  
});

/*******************************************/


