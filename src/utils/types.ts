import { ReactNode } from 'react';

export type Children = {
  children: ReactNode
}
export type FlexType = {
  $direction?: string,
  $align?: string,
  $justify?: string,
  $margin?: string
  $padding?: string
}

export type FlexChildren = {
  children: ReactNode,
  $direction?: string,
  $align?: string,
  $justify?: string,
  $margin?: string
  $padding?: string
}
