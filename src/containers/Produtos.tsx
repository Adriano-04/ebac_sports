import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'
import { useGetProdutoQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: lista } = useGetProdutoQuery()
  const produtos = useSelector((state: RootReducer) => state.carrinho.item)
  const favoritos = useSelector((state: RootReducer) => state.favoritos.item)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {lista?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
