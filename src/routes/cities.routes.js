const express = require('express');
const router = express.Router();
const city = require('../models/cities');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem vindo ao menu de CIDADES.'});
});

router.get('/listall', async (req, res) => {
    await city.find({}).then((cities) => {
        res.status(200).json(cities);
    }).catch((err) => {
        res.status(404).json({message:"Não consegui encontrar o que voce quer!"});
        console.error(err);
    });
});

router.get('/listname/:name', async (req, res) => {
    const name = req.params.name;

    await city.findOne({ name: name }).then((cities) => {
        if (cities == null) { 
            res.status(404).json({ message: 'Cidade não encontrada!' });
        } else {
            res.status(200).json(cities);
        }
        }).catch((err) => {
            res.status(404).json({message:"Não consegui encontrar o que voce quer!"});
            console.error(err)
    });
});

router.post('/add', async (req,res) => { 

    if (!req.body.nome) {
        res.status(400).json({ message: 'Nome é obrigatório!' });
        return;
    } else if (!req.body.bairros) {
        res.status(400).json({ message: 'Quantidade de bairros é obrigatório!' });
        return;
    } else if (!req.body.populacao) {
        res.status(400).json({ message: 'População é obrigatório!' });
        return; 
    } else if (!req.body.aniversario) {
        res.status(400).json({ message: 'Aniversário da cidade é obrigatório!' });
        return;
    }

    await city.create(req.body).then(() => {
        res.status(200).json({ message: 'Cidade cadastrada com sucesso!' });
    }).catch((err) => {
        res.status(400).json({message: "Encontramos um ERRO."});
        console.error(err);
    });
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id
    
    if (!req.body.nome) {
        res.status(400).json({ message: 'Nome é obrigatório!' });
        return;
    } else if (!req.body.bairros) {
        res.status(400).json({ message: 'Quantidade de bairros é obrigatório!' });
        return;
    } else if (!req.body.populacao) {
        res.status(400).json({ message: 'População é obrigatório!' });
        return; 
    } else if (!req.body.aniversario) {
        res.status(400).json({ message: 'Aniversário da cidade é obrigatório!' });
        return;
    }

    await city.updateOne({_id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "Cidade atualizada com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Encontramos um ERRO."});
    });
});

router.delete('/delete/:id', async (req,res) => {
    
    await city.deleteOne({_id:req.params.id}).then(() => { 
        res.status(200).json({message: "Cidade deletada com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Encontramos um ERRO."});
    });

});

module.exports = router;