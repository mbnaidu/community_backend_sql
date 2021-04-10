const express =  require('express');
const router = express();

const memberController = require('../controllers/memberController.js')

router.use(express.json());


router.post('/addData',function(req,res){
    const rationId = req.body.data.rationId;
    let member;
    for(let i = 0; i < req.body.data.members.length; i++) {
        member =  req.body.data.members[i];
        memberController.addMember({success: function(data){res.status(200).send(data)},
                        error:function(err){res.status(200).send(err)},
                        name:member.name,
                        rationId: rationId,
                        aadharNumber: member.aadharNumber,
                        phone:req.body.data.phone,
                        gender: member.gender,
                        age: member.age,
                        address: req.body.data.address
                        });
    }
    
});

router.post('/getData',function(req,res){
        memberController.getMembers({success: function(data){res.status(200).send(data)},
                        error:function(err){res.status(200).send(err)},
                        searchText:req.body.data.searchText
                        });
                    });

                    
router.post('/getAllData',function(req,res){
    memberController.getAllMembers({success: function(data){res.status(200).send(data)},
                    error:function(err){res.status(200).send(err)},
                    });
                });

module.exports = router;