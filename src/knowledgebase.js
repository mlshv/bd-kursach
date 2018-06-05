export const props = {
  TEXTURE: {
    name: 'Текстура',
    values: {
      matte: 'Матовая',
      glance: 'Глянцевая',
    },
  },
  COLOR: {
    name: 'Цвет',
    values: {
      red: 'Красный',
      green: 'Зеленый',
      blue: 'Голубой',
    },
  },
}

export const items = [
  {
    name: 'Лак-мудак',
    props: {
      [props.TEXTURE.name]: props.TEXTURE.values.matte,
      [props.COLOR.name]: props.COLOR.values.red,
    },
  },
  {
    name: 'Лак-хуяк',
    props: {
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.COLOR.name]: props.COLOR.values.green,
    },
  },
  {
    name: 'Лак-макдак',
    props: {
      [props.TEXTURE.name]: props.TEXTURE.values.matte,
      [props.COLOR.name]: props.COLOR.values.blue,
    },
  },
]

/**
 * Фильтрует список из лаков по списку значений каждого из свойств
 * @param {Array<Item>} items массив лаков
 * @param {Object<string, array>} propsNames объект свойств: ключ - название свойства (цвет),
 * значение - массив из выбранный значений свойства (красный, зелёный)
 * @returns {Array<Item>}
 */
export const selectItemsByPropsNames = (itemsToFilter, selectedProps) =>
  itemsToFilter.filter((item) => {
    for (const propName in selectedProps) { // eslint-disable-line no-restricted-syntax
      if (item.props[propName]) {
        const itemPropValue = item.props[propName]
        const selectedValues = selectedProps[propName]

        if (selectedValues.length && !selectedValues.includes(itemPropValue)) {
          return false
        }
      }
    }

    return true
  })
