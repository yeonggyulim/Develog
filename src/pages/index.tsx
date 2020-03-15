import React from "react"
import { useLatestPostListQuery } from "../hooks/latest-post-list-query"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => { 
    const { edges } = useLatestPostListQuery();
    
    console.log('aaaa');
    return (
    <Layout>
      <SEO title="Home" />
      <h1>최근 작성한 게시글 목록</h1>
      <ul>
                {edges.map(({ node }) => (
                    <li key={node.id}>
                        <h2>
                            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                        </h2>
                        <h3>{node.frontmatter.date}</h3>
                        <p>{node.excerpt}</p>
                        <hr />
                    </li>
                ))}
        </ul>
    </Layout>
  );
};

export default IndexPage
