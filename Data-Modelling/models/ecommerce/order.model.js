import mongoose from 'mongoose';

const orderItemSchemna = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemSchemna],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
