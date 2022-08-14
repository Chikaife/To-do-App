import { FaPlus } from "react-icons/fa"


const AddItem =({newItem, setNewItem, haad})=>{

 

    return(
        <form className="addForm" 
        onSubmit={haad}
        >
            <label htmlFor='addItem'>Add Item</label>
            <input 
            autoFocus
            type="text"
            id="addItem"
            placeholder="Add Items"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}

             />
             <button
             type="submit"
             aria-label="Add Item"
             >
<FaPlus/>
             </button>
        </form>
    )

}
export default AddItem;