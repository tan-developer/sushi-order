export default function cartReducer (draft , action) {
  const draftItem = [...draft.item]
  // ADD and Check duplicate item
  if (action.type === 'ADD') {
    // console.log(draft.item.length)

    if (draftItem.length === 0) {
      draft.item.push(action.item) ;
      return
    }

    for (let item of draftItem) {
      if (item.id === action.item.id) {
        const index = draftItem.indexOf(item)

        draft.item[index].amount = parseFloat(draft.item[index].amount) + parseFloat(action.item.amount)

        return;

      }

    }

    draft.item.push(action.item)
  }
  
  if (action.type === 'INCREASE') {
    for (const item of draftItem) {
      if (item.id === action.id) {
        const index = draftItem.indexOf(item)

        draft.item[index].amount++
      }
    }
  }
  
  if (action.type === 'DECREASE') {
    for (const item of draftItem) {
      if (item.id === action.id) {
        const index = draftItem.indexOf(item)

        draft.item[index].amount--
      }
    }
  }

  draft.item = draft.cleaner()
  
  
}

