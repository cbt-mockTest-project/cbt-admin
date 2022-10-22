import { gql } from '@apollo/client'
import React from 'react'
import Nav from './Nav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen px-5">
      <Nav />
      <section className="max-w-screen-xl mx-auto py-5">{children}</section>
    </div>
  )
}

export default Layout
