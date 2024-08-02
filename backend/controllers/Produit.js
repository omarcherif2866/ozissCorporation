import Produit from "../models/Produit.js";


export  function addOnceProduits (req, res){
    Produit.create({
              nom: req.body.nom,
              description: req.body.description,
              image: `${req.file.filename}`,
              service: req.body.service
  
            })
              .then((newProduits) => {
                
                res.status(200).json({
                  nom: newProduits.nom,
                  description: newProduits.description,
                  service: newProduits.service

  
                });
              })
              .catch((err) => {
                res.status(404).json({ error: err });
              });
          }
        
    
  
  
  export function getAllProduct(req, res) {
    Produit
      .find({})
  
      .then(docs => {
        res.status(200).json(docs);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }
  
  export async function DeleteProduits(req, res) {
    const id =req.params.id
    const prd = await Produit.findByIdAndDelete(id);
    res.status(200).json({"message":" Produits deleted"});
  }
  
  export function getProduitsById(req, res){
    Produit.findById(req.params.id)
            .then((doc) => {
              res.status(200).json(doc);
            })
            .catch((err) => {
              res.status(500).json({ error: err });
            });
        }
  
  
export function putOnce(req, res) {
  let newProduits = {};
  if (req.file == undefined) {
    newProduits = {
      nom: req.body.nom,
      description: req.body.description,
      service: req.body.service
    };
  } else {
    newProduits = {
      nom: req.body.nom,
      description: req.body.description,
      image: `${req.file.filename}`,
      service: req.body.service
    };
  }

  console.log('ID du produit:', req.params.id);
  console.log('Nouvelles données:', newProduits);

  Produit.findByIdAndUpdate(req.params.id, newProduits, { new: true })
    .then((doc1) => {
      if (!doc1) {
        console.log('Produit non trouvé');
        return res.status(404).json({ error: 'Produit non trouvé' });
      }
      console.log('Produit mis à jour:', doc1);
      res.status(200).json(doc1);
    })
    .catch((err) => {
      console.error('Erreur lors de la mise à jour du produit:', err);
      res.status(500).json({ error: err });
    });
}

  
  
  