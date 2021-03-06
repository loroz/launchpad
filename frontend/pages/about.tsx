import React from 'react'
import Link from 'next/link';
import cookies from 'next-cookies'
import Router from 'next/router';
import { auth } from '../lib/auth'
import Layout from '../components/layouts/Layout';
import Header from '../components/Header';

export default class extends React.Component {
  static async getInitialProps(ctx) {
    console.log('get intial props called from index')
    const { token } = cookies(ctx)
    if (typeof token !== "undefined") {
      const isLoggedIn = await auth(token)
      console.log('we have cookies(ctx)')
      console.log('cookies(ctx) :', cookies(ctx))
      return { isLoggedIn }
    } else {
      return {}
    }

  }

  render() {
    console.log('this.props: ', this.props)
    return (
      <Layout title="About | Next.js + TypeScript Example">
        <Header {...this.props} />
        <div className="container">
          <h1 className="title">About yo 👋</h1>
          <p><Link href='/'><a>Home</a></Link></p>
        </div>
      </Layout>
    )
  }


}