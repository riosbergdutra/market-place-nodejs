const findUserByIdController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
};

const findAllUsersController =  async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
};

const createUserController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const updateUserController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const removeUserController = async (req,res) => {
    try{



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

const addUserFavProduct = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const removeUserFavProduct = async (req,res) => {
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
    addUserFavProduct,
    removeUserFavProduct,
}