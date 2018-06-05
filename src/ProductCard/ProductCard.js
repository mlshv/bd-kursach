import React from 'react'
import { Card, Name, Image } from './styles'

export const ProductCard = ({ name, image }) => (
  <Card>
    <Image src={image} />
    <Name>{name}</Name>
  </Card>
)
