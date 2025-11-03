import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  description: { type: String },
  stock: { type: Number, default: 0 },
  Brand: { type: String, required: true },
  productType: { type: String, required: true },
  DietaryPreferance: { type: String, required: true },
  GoodFor: { type: String },
  weight: { type: String, required: true },
  customareCareDetails: { type: String },
  informationDisclaimer: { type: String },
  customerCareDetails: { type: String },
  sellerName: { type: String },
  sellerAddress: { type: String },
  sellerLicenseNo: { type: String },
  countryOfOrigin: { type: String },
  shelfLife: { type: String },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
