const userService = require("../service/usuario.service")

const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id)

        if(!user){
            return req.status(404).send({message:"usuario não encontrado"});
        }

        return res.status(200).send(user)

    }catch (err){
        if(err.kind) {
            console.log(err.kind == "ObjectId");
            return res.status(400).send({message: `Id informado está incorreto, tente novamente!`})

        }
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
};

const findAllUsersController =  async (req,res) => {
    try{
        res.status(200).send(await userService.findAllUsersService())
    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
};

const createUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({ message: `O campo 'Nome' precisa ser preenchido!` });
        }

        return res.status(201).send(await userService.createUserService(body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateUserController = async (req,res) => {
    try{
        const body = req.body
        if(!body.nome){
            return res.status(400).send({message: `O campo 'Nome' precisa ser preeencido!`})
        }

        return res.send(await userService.updateUserSerivce(req.params.id, body))

    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const removeUserController = async (req,res) => {
    try{

        const deletedUser = await userService.removeUserService(req.params.id)

        console.log(deletedUser)
        res.status(200).send({message:`sucesso, usuario deletado!`})

        // if(deletedUser.deletedCount > 0) {
        //    res.status(200).send({message:`sucesso, usuario deletado!`})
        // }else{
        //     res.status(404).send({message:`Usuario não encontrado, tente novamente!`})
        // }

    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const addUserAddresController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}
const removeUserAddresController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const addUserFavProductController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const removeUserFavProductController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddresController,
    removeUserAddresController,
    addUserFavProductController,
    removeUserFavProductController,
}