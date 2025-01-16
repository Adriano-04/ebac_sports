import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  item: Produto[]
}

const initialState: FavoritoState = {
  item: []
}

const favoritosSlice = createSlice({
  name: 'favorito',
  initialState,

  reducers: {
    favoritar: (estadoInicial, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (estadoInicial.item.find((p) => p.id === produto.id)) {
        const produtoSemFavorito = estadoInicial.item.filter(
          (p) => p.id !== produto.id
        )
        estadoInicial.item = produtoSemFavorito
      } else {
        estadoInicial.item.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
