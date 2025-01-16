import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhoState = {
  item: Produto[]
}

const initialState: carrinhoState = {
  item: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.item.find((p) => p.id === produto.id)) {
        alert('item já foi adicionado')
      } else {
        state.item.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
