import React from 'react';
import { Header, Footer } from '../components/layout'
// import styles from './BaseLayout.module.scss'

interface BaseProps {
  children: React.ReactNode
}

export const VisitorLayout = ({ children }: BaseProps) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};
