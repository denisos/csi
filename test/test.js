var assert = require("should"),
    sortFunctions = require(__dirname + '/../sortFunctions');
    stringFunctions = require(__dirname + '/../stringFunctions');

/*****************  SORT FNS  **************************/

describe('sortFunctions', function(){
  describe('#insertionSort', function(){
    it('should return 1,2,3,4,5,6 for 6,5,3,4,1,2', function(){
      assert.equal('1,2,3,4,5,6', sortFunctions.insertionSort([6,5,3,4,1,2]).join(','));
    });

  });

});

/*****************  STRING FNS  **************************/


describe('stringFunctions', function(){
  describe('#strCompress', function(){
    it('should return a3b2 for aaabb', function(){
      assert.equal('a3b2', stringFunctions.strCompress('aaabb'));
    });

    it('should return z3 for zzz', function(){
      assert.equal('z3', stringFunctions.strCompress('zzz'));
    });

    it('should return a1 for a', function(){
      assert.equal('a1', stringFunctions.strCompress('a'));
    });

    it('should return a5b3a2b1 for aaaaabbbaab', function(){
      assert.equal('a5b3a2b1', stringFunctions.strCompress('aaaaabbbaab'));
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


});

/*******************************************/


