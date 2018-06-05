import React from 'react'
import { Card, Name, Image } from './styles'

export const ProductCard = ({ name, image }) => (
  <Card>
    <Image>{image}</Image>
    <Name>{name}</Name>
  </Card>
)
