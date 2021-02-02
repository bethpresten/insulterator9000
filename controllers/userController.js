import userModel from "../models/models"
// import vm from "v-response"
exports.createUser = (res, req, next) =>{
    let user_body = req.body;
    const new_user = new userModel(user_body);
    new_user.save()
    .then(saved =>{
        if (!saved){
            return res.status(400)
            .json(vm.ApiResponse(false, 400, "unable to save user please try again"))
            
        }
        if(saved){
            return res.status(201)
            .json(vm.ApiResponse(true, 201, "user successfully saved", saved))
        }
    }).catch (error => {
        return res.status(500)
        .json(vm.ApiResponse(false, 500, "error occured", undefined, error))
    })
};