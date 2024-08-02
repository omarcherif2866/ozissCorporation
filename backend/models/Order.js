import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const OrderSchema = new Schema(
  {
    client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    produits: [
      {
        produit: { type: Schema.Types.ObjectId, ref: 'Produit', required: true },
      }
    ],
    besoin: { type: String },
    pdf: [{ type: String }],
    status: { type: String, enum: ['En attente', 'Confirmée', 'Expédiée', 'Livrée', 'Annulée'], default: 'En attente' },
  },
  {
    timestamps: true
  }
);

export default model('Order', OrderSchema);
