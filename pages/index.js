import matter from 'gray-matter'
import About from '../components/About'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Projects from '../components/Projects'
import Button from 'react-bootstrap/Button'

import React from 'react'
import { render } from 'react-dom'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
    <div className="parallax"></div>
    <Layout pageTitle={title}>
      <div className="floating-text">
          <h1 className="title" id="resume">{description}</h1>
          <h3 className="description">Stay as long as you'd like.</h3>
          <Button variant="dark"><a href="https://github.com/jokang1005/">GitHub</a></Button>{' '}<Button variant="success"><a href="https://www.linkedin.com/in/joanneleecode/">LinkedIn</a></Button>{' '}<Button variant="outline-info"><a href="https://docs.google.com/document/d/1WB_Zfug6Pb-3-Ot0-Knl99FwnfIZ4XrB7oQyC2OpL3c/edit?usp=sharing">Resume</a></Button>
          


      </div>
    <div className="parallax-3"></div>
      <main className="floating-text">
        {/* <PostList posts={posts} /> */}
        <About />
        <Projects/>
        <p>Thanks for visiting!</p>
        <div className="parallax-6"></div>
      </main>
    
    </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}