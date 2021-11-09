const express = require("express"); //import do express
const router = express.Router(); //define app como express

const country = require("../models/countries");  // import do modelo country

router.get("/", (req,res) =>{
    res.status(200).json({message:"Bem vindo ao Menu de PAISES"})
});

router.get("/listall", async (req,res) =>{
    await country.find({}).then((countries)=>{
        res.status(200).json(countries);
    }).catch((err) =>{
        res.status(204).json({message:"Não consegui encontrar o que voce quer!"})
    });
})

router.get('/listname/:name', async (req, res) => {
    const name = req.params.name;

    await country.findOne({ name: name }).then((countries) => {
        if (countries == null) { 
            res.status(404).json({ message: 'País não encontrado!' });
        } else {
            res.status(200).json(countries);
        }
        }).catch((err) => {
            res.status(404).json({message:"Não consegui encontrar o que voce quer!"});
            console.error(err)
    });
});

router.post('/add', async (req,res) => { //add novo pais no banco

    //validando as entradas do usuario
    if(!req.body.nome){
        res.status(400).json({message: "Nome é obrigatório!"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "População é obrigatório!"});
        return;
    }else if(!req.body.lingua){
        res.status(400).json({message: "Lingua é obrigatório!"});
        return;
    }else if(!req.body.pib){
        res.status(400).json({message: "PIB é obrigatório!"});
        return;
    }
     
    

    await country.create(req.body).then(() => {
        res.status(200).json({message: " Novo País cadastrado com sucesso"});
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
    }else if(!req.body.populacao){
        res.status(400).json({message: "População é obrigatório!"});
        return;
    }else if(!req.body.lingua){
        res.status(400).json({message: "Lingua é obrigatório!"});
        return;
    }else if(!req.body.pib){
        res.status(400).json({message: "PIB é obrigatório!"});
        return;
    }
    

    await country.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "País atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Encontramos um ERRO."});
    });
});


router.delete('/delete/:id', async (req,res) => {
    
        await country.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "País deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "Encontramos um ERRO."});
        });
   
});

module.exports = router