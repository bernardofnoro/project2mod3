const express = require("express"); //import do express
const router = express.Router(); //define app como express

const state = require("../models/states");  // import do modelo country

router.get("/", (req,res) =>{
    res.status(200).json({message:"Bem vindo ao Menu de ESTADOS"})
});

router.get("/listall", async (req,res) =>{
    await state.find({}).then((states)=>{
        res.status(200).json(states);
    }).catch((err) =>{
        res.status(204).json({message:"Não consegui encontrar o que voce quer!"})
    });
})

router.get('/listname/:name', async (req, res) => {
    const name = req.params.name;

    await state.findOne({ name: name }).then((states) => {
        if (states == null) { 
            res.status(404).json({ message: 'Estado não encontrado!' });
        } else {
            res.status(200).json(states);
        }
        }).catch((err) => {
            res.status(404).json({message:"Não consegui encontrar o que voce quer!"});
            console.error(err)
    });
});

router.post('/add', async (req,res) => { //add novo estado no banco

    //validando as entradas do usuario
    if(!req.body.nome){
        res.status(400).json({message: "Nome é obrigatório!"});
        return;
    }else if(!req.body.regiao){
        res.status(400).json({message: "Região é obrigatório"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "População é obrigatório!"});
        return;
    }else if(!req.body.salariominimo){
        res.status(400).json({message: "Salário minimo é obrigatório!"});
        return;
    }
     
    

    await state.create(req.body).then(() => {
        res.status(200).json({message: " Novo estado cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Encontramos um ERRO."});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id;

    if(!req.body.nome){
        res.status(400).json({message: "Nome é obrigatório!"});
        return;
    }else if(!req.body.regiao){
        res.status(400).json({message: "Região é obrigatório"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "População é obrigatório!"});
        return;
    }else if(!req.body.salariominimo){
        res.status(400).json({message: "Salário minimo é obrigatório!"});
        return;
    }
    

    await state.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "Estado atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Encontramos um ERRO."});
    });
});


router.delete('/delete/:id', async (req,res) => {
    
        await state.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Estado deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "Encontramos um ERRO."});
        });
   
});

module.exports = router