import ItemList from "./ItemList";

const Content = ({items,hadelete, handleCheck, haad})=>{


    return(
        <main>
            {items.length ?(
                   <ItemList 
                   items={items}
                   handleCheck={handleCheck}
                   hadelete={hadelete}
                  
                    />
            ) :(
                <p>EMPTY LIST</p>

            )}
        </main>
        
    )
}

export default Content