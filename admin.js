// module.exports = {
//     userMiddleware: function(req, res, next){
//         if(req.params.username == "ali"){
//             next()
//         } else {
//             return res.send("Invalid User")
//         }
//        }
//     }

    module.exports = {
        useridMiddleware: function(req, res, next){
            if(req.params.id == "27" && ){
                next()
            } else {
                return res.send("Invalid ID")
            }
           }
        }

        //  module.exports = {
        //     userloginMiddleware: function(req, res, next){
        //         if(req.params.login == "Ahmed"){
        //             next()
        //         } else {
        //             return res.send("Invalid User")
        //         }
        //        }
        //     }


