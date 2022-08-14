      import LineItem from "./LineItem";


      const ItemList = ({items,hadelete, handleCheck, haad} ) => {
        return (
          <ul>
          {items.map((item) =>(

            <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            hadelete={hadelete}
    
            />

          ))

          } 
          
          </ul>
        )
      }

      export default ItemList