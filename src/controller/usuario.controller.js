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

         if(deletedUser == null) {
            res.status(404).send({message:`Usuario não encontrado, tente novamente!`})
         }else{
            res.status(200).send({message:`sucesso, usuario deletado!`})
         }

    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const addUserAddresController = async (req, res) => {
    try {
        req.body.createAt = new Date();
        const endereco = await userService.addUserAddresService(req.params.id, req.body);

        if (endereco) {
            res.status(200).send({ message: `Endereço adicionado com sucesso!` });
        } else {
            res.status(400).send({ message: `Algo deu errado no endereco, tente novamente!` });
        }

    } catch (err) {
        console.error(`Erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado: ${err.message}` });
    }
}
const removeUserAddresController = async (req, res) => {
    try {
        const endereco = await userService.removeUserAddresService(req.params.id, req.body.addresId);
        if (endereco) {
            res.status(200).send({ message: `Endereço removido com sucesso!` });
        } else {
            res.status(400).send({ message: `Algo deu errado no endereco, tente novamente!` });
        }
    }catch (err) {
        console.error(`Erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado: ${err.message}` });
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