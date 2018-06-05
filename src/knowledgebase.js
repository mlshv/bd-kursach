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
    image: 'https://lh5.googleusercontent.com/tzJeXIki7sTPyNcdJjNG0JMa4hc2WEBjZPNgh2LD-9mKSY6qY51It3rNa8c1lzq2hxlCT1XtxdADLsbrEBZQ=w1299-h675',
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
    image: 'https://lh6.googleusercontent.com/fo3aLeCTww2QboUm3_I6APRSqCK1gZwkoWpj8ew-InYeG4PpuTDoZY0y3K0o605ERp6MX5fCfS7sgnGGZzHk=w1299-h675',
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
    image: 'https://lh6.googleusercontent.com/REhnoOWumH1I5_D7X_Y9ScxjRLwR4LYi5ZOZhMlfKh8CiZ4QU_YlsfiEkve5svPBAzR4obZ3hSw6IIp9uorc=w1299-h675',
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
    image: 'https://lh3.googleusercontent.com/yvhvfGJGZFn0TweXNkSn6Mmg2_WBaTPEtjxiAiTxAAt1-HwXhJHkoB_jEX3loLBBCkvpKlR9KNJnL1PnAhMc=w1299-h675',
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
    image: 'https://lh4.googleusercontent.com/PijWFdVLonXN8LpVeyaKZS5Lu0w9O5SU2hwTOnf2SJeyL-RDXbvmAcTuUGIkkNEBLgy1GyLDtLqxwOw2f-1d=w1299-h626',
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
    image: 'https://lh4.googleusercontent.com/VEt1B-p1g8wezv4-PTpCoLywkktiiN-r_3tOf4So3dERVmdrdbFQuTfzNN48rxfS7Tu0mXAOMc5XybPDgMqR=w1299-h626',
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
    image: 'https://lh5.googleusercontent.com/hyKVKyHu05T4hS_Y69C8kK6IAYo14MUnVqobCDNV8_L8PZCEnFFXUeNkj5rMnALPykKbbnp3hsdFQjbX03SJ=w1299-h626',
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
