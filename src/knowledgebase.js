export const props = {
  COLOR: {
    name: 'Цвет',
    values: {
      red: 'Красный',
      pink: 'Розовый',
      purple: 'Фиолетовый',
      black: 'Черный',
      orange: 'Оранжевый',
    },
  },
  TEXTURE: {
    name: 'Текстура',
    values: {
      matte: 'Матовая',
      glance: 'Глянцевая',
    },
  },
  HUE: {
    name: 'Оттенок',
    values: {
      light: 'Светлый',
      dark: 'Темный',
    },
  },
  CONSIS: {
    name: 'Консистенция',
    values: {
      hard: 'Плотный',
      soft: 'Жидкий',
    },
  },
  BRAND: {
    name: 'Брэнд',
    values: {
      channel: 'Channel',
      tiande: 'TianDe',
    },
  },
}

export const items = [
  {
    name: 'Nail Polish Pink',
    image: 'https://pp.userapi.com/c845523/v845523621/6fbf9/cPcKpl6nAdE.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.pink,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.hard,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Nail Polish Orange',
    image: 'https://pp.userapi.com/c845523/v845523621/6fc01/VJGdmjaLLWo.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.orange,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.hard,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Nail Polish Pup',
    image: 'https://pp.userapi.com/c845523/v845523621/6fc09/UNGPx7qTegM.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.purple,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.hard,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Nail Polish Black',
    image: 'https://pp.userapi.com/c845523/v845523621/6fc11/XFNQAE4V2r0.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.black,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.hard,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Nail Polish Red L',
    image: 'https://pp.userapi.com/c845523/v845523621/6fc19/YUEBS442ebI.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.red,
      [props.TEXTURE.name]: props.TEXTURE.values.matte,
      [props.HUE.name]: props.HUE.values.light,
      [props.CONSIS.name]: props.CONSIS.values.soft,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Nail Polish Red D',
    image: 'https://pp.userapi.com/c845523/v845523621/6fc21/s1iBi_44LRk.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.red,
      [props.TEXTURE.name]: props.TEXTURE.values.matte,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.soft,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Channel Red D',
    image: 'https://pp.userapi.com/c845523/v845523621/6fc28/aVOz_-_f1pk.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.red,
      [props.TEXTURE.name]: props.TEXTURE.values.matte,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.soft,
      [props.BRAND.name]: props.BRAND.values.channel,
    },
  },
  {
    name: 'Channel Black',
    image: 'https://pp.userapi.com/c845523/v845523621/6fc2f/nsNhqMT7wOI.jpg',
    props: {
      [props.COLOR.name]: props.COLOR.values.black,
      [props.TEXTURE.name]: props.TEXTURE.values.matte,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.soft,
      [props.BRAND.name]: props.BRAND.values.channel,
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
