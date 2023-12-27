
export const auth = (item?): Types.IEntity.auth => ({
  id: get(item, 'id') || '',
})

