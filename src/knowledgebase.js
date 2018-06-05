export const props = {
  COLOR: {
    name: 'Цвет',
    values: {
      red: 'Красный',
      green: 'Зеленый',
      blue: 'Голубой',
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
      Hard: 'Плотный',
      Soft: 'Жидкий',
    },
  },
  BRAND: {
    name: 'Оттенок',
    values: {
      Channel: 'Channel',
      Tiande: 'TianDe',
    },
  },
}

export const items = [
  {
    name: 'Nail Polish Pink',
    image: 'https://drive.google.com/open?id=1KHSR35XxR2EPy6aT9TlyZQEixDD0mOih',
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
    image: 'https://drive.google.com/open?id=1umkpTsWEVxh7hOROkJ4yf6OJNCC2iNVa',
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
    image: 'https://drive.google.com/open?id=1a5VbQRXSsdJiCMqMoO-xo64_9IZjI1i8',
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
    image: 'https://drive.google.com/open?id=1YXkHcRQYZLX-pLQ3JSAeefdICXjQTq4l',
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
    image: 'https://drive.google.com/open?id=1tmLnPen8xnOxfvqut601gP3WHLfPTmDl',
    props: {
      [props.COLOR.name]: props.COLOR.values.Red,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.light,
      [props.CONSIS.name]: props.CONSIS.values.Soft,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Nail Polish Red D',
    image: 'https://drive.google.com/open?id=1-0Q4RHv1XDQyT45lT8KAkIEYxNG5uc-p',
    props: {
      [props.COLOR.name]: props.COLOR.values.Red,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.hard,
      [props.BRAND.name]: props.BRAND.values.tiande,
    },
  },
  {
    name: 'Channel Red D',
    image: 'https://drive.google.com/open?id=18hwLuNLDPqmCa0b_4_enJlakbGg7996x',
    props: {
      [props.COLOR.name]: props.COLOR.values.Red,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.hard,
      [props.BRAND.name]: props.BRAND.values.Channel,
    },
  },
  {
    name: 'Channel Black',
    image: 'https://lh6.googleusercontent.com/ATpJLSzO2BpQgpXOpz6v2DOg1Bpm4PUaAcXxFAJKtgWG-zvOMcR28hoXWnsWxskdQDb-d2cbQwOLe-y7TwMI=w1360-h676',
    props: {
      [props.COLOR.name]: props.COLOR.values.black,
      [props.TEXTURE.name]: props.TEXTURE.values.glance,
      [props.HUE.name]: props.HUE.values.dark,
      [props.CONSIS.name]: props.CONSIS.values.hard,
      [props.BRAND.name]: props.BRAND.values.Channel,
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
