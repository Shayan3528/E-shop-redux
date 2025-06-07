import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewItem } from "../../Redux/AddingProduct/action";

function ProductInputForm() {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    imageUrl: "",
    price: 0,
    quantity: 0,
  });

  function handleNewItem(e) {
    const { name, value } = e.target;

    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFocus(e) {
    if (e.target.value === "0") {
      setNewItem((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  }
  function handleBlur(e) {
    if (e.target.value === "") {
      setNewItem((prev) => ({
        ...prev,
        [e.target.name]: 0,
      }));
    }
  }

  function handleSubmitItem(e) {
    e.preventDefault();

    dispatch(addNewItem(newItem));
    setNewItem({
      name: "",
      category: "",
      imageUrl: "",
      price: 0,
      quantity: 0,
    });
  }

  return (
    <div className="overflow-hidden rounded-md border border-gray-300 shadow-xl bg-white p-4">
      <h4 className="mt-2 mb-8 text-center text-xl leading-7 font-bold">
        Add New Product
      </h4>
      <form onSubmit={handleSubmitItem}>
        <div className="">
          <label htmlFor="inputName">Product Name</label>
          <input
            className="w-full rounded border border-gray-300 shadow px-2 py-1 focus:outline-none "
            id="inputName"
            name="name"
            type="text"
            value={newItem.name}
            onChange={handleNewItem}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="inputCategory">Category</label>
          <input
            className="w-full rounded border border-gray-300 shadow px-2 py-1 focus:outline-none "
            id="inputCategory"
            type="text"
            name="category"
            value={newItem.category}
            onChange={handleNewItem}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="inputImage">Image Url</label>
          <input
            className="w-full rounded border border-gray-300 shadow px-2 py-1  focus:outline-none"
            id="inputImage"
            type="text"
            name="imageUrl"
            value={newItem.imageUrl}
            onChange={handleNewItem}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="inputPrice">Price</label>
            <input
              className="w-full rounded border border-gray-300 shadow px-2 py-1 focus:outline-none "
              type="number"
              id="inputPrice"
              name="price"
              value={newItem.price}
              onChange={handleNewItem}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="inputQuantity">Quantity</label>
            <input
              className="w-full rounded border border-gray-300 shadow px-2 py-1 focus:outline-none "
              type="number"
              id="inputQuantity"
              name="quantity"
              value={newItem.quantity}
              onChange={handleNewItem}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 block w-full rounded-md bg-[#171c2a] px-4 py-2 text-white shadow-2xl hover:bg-[#171c2a]/80 active:bg-[#171c2a]"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductInputForm;
