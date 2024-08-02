import Order from '../models/Order.js'; // Assurez-vous que le chemin est correct
import Produit from '../models/Produit.js'; // Assurez-vous que le chemin est correct



export const createOrder = async (req, res) => {
  try {
    const { client, produits, besoin } = req.body;

    console.log('Client:', client);
    console.log('Produits (avant parsing):', produits);

    let produitsParsed;
    try {
      produitsParsed = JSON.parse(produits);
      console.log('Produits (après parsing):', produitsParsed);
    } catch (e) {
      console.error('Erreur de parsing JSON:', e.message);
      return res.status(400).json({ message: 'Le format des produits est incorrect' });
    }

    // Vérification du format des produits
    if (!Array.isArray(produitsParsed)) {
      return res.status(400).json({ message: 'Le format des produits est incorrect' });
    }

    // Vérifie l'existence de chaque produit
    for (const item of produitsParsed) {
      if (!item.produit) {
        return res.status(400).json({ message: 'ID du produit manquant dans la requête' });
      }

      const produit = await Produit.findById(item.produit);
      if (!produit) {
        return res.status(404).json({ message: `Produit avec ID ${item.produit} non trouvé` });
      }
    }

    // Récupère les chemins des fichiers PDF uploadés
    const pdfNames = req.files.map(file => file.filename); // Récupère seulement les noms des fichiers

    // Crée une nouvelle commande
    const newOrder = new Order({
      client: client,
      produits: produitsParsed.map(item => ({
        produit: item.produit,
      })),
      besoin: besoin,
      pdf: pdfNames,
      status: 'En attente', // Par défaut, en attente
    });

    // Sauvegarde la commande dans la base de données
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    // Capture et renvoie les erreurs
    console.error('Erreur lors de la création de la commande :', error);
    res.status(500).json({ error: error.message });
  }
};

export function getAllOrders(req, res) {
  Order
    .find({})

    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
}

export const getOrdersByClientId = async (req, res) => {
  const { clientId } = req.params;

  try {
    const orders = await Order.find({ client: clientId })
      .populate('client') 
      .populate('produits.produit') 
      .exec();

    res.status(200).json(orders);
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des commandes' });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params; // Récupère l'ID de la commande à partir des paramètres de la route
  const { status } = req.body; // Récupère le nouveau statut à partir du corps de la requête

  try {
    // Vérifie si le statut est valide
    const validStatuses = ['En attente', 'Confirmée', 'Expédiée', 'Livrée', 'Annulée'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Statut invalide' });
    }

    // Trouve et met à jour le statut de la commande
    const order = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Renvoie le document mis à jour
    ).populate('client').populate('produits.produit'); // Optionnel : Peupler les champs client et produits

    if (!order) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur', error });
  }
};
