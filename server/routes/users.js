var express = require('express');
var router = express.Router();

var user = {
    data: [
        {
            tagName:"vue",
            newList:[
                {
                    newTitle: "vuevuevuevue"
                },{
                    newTitle: "vuevuevuevue"
                }
            ]
        },
        {

            tagName:"第二",
            newList:[
                {
                    newTitle: "第二第二第二第二"
                },{
                    newTitle: "第二第二第二第二"
                }
            ] 
        },
        {
            tagName:"第三",
            newList:[
                {
                    newTitle: "第三第三第三第三"
                },{
                    newTitle: "第三第三第三第三"
                }
            ] 
        }
    ]
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserName', function (req, res, next) {
  res.send(user);
});

module.exports = router;