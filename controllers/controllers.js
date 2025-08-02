import Item from "../models/modelSchema.js";

export const getItemsRoutes = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      items: items,
      message: "Items fetched successfully",
    });
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(500).json({ message: "Failed to get item" });
  }
};

export const postItemRoutes = async (req, res) => {
  const { name, quantity, price, status } = req.body;
  try {
    const newItem = new Item({
      name: name,
      quantity: quantity,
      price: price,
      status: status,
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(500).json({ message: "Failed to save item" });
  }
};

export const putItemRoutes = async (req, res) => {
  const { name, quantity, price, status } = req.body;
  const { id } = req.params;
  try {
    await Item.findByIdAndUpdate(
      id,
      { name, quantity, price, status },
      { new: true }
    );
    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Failed to update item" });
  }
};

export const deleteItemRoutes = async (req, res) => {
  // get id from link
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Item ID is required" });
  }
  try {
    const response = await Item.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Failed to delete item" });
  }
};
