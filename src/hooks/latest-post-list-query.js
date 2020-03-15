import { useStaticQuery, graphql } from "gatsby";

export const useLatestPostListQuery = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query LatestPostListQuery {
                allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
                    edges {
                        node {
                            excerpt(truncate: true, pruneLength: 200)
                            frontmatter {
                                title
                                path
                                date(formatString: "YYYY-MM-DD HH:mm:ss")
                            }
                            id
                        }
                    }
                }
            }
    `);
    return allMarkdownRemark;

}