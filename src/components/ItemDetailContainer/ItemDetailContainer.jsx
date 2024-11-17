import { useState, useEffect } from "react"
import { doc, getDoc} from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams()

  const getProductsById = () => {
    const docRef = doc( db, "products", idProduct )
    getDoc(docRef)
    .then((dataDb)=>{
      const productDb = { id: dataDb.id, ...dataDb.data() }

      setProduct(productDb)
    })
  }

  useEffect( ()=> {
    getProductsById()
  }, [idProduct] )

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer