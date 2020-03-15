import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { Query } from '../generated/graphql-types';

export async function createPages({ actions, graphql }: CreatePagesArgs) {

    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/PostTemplate.tsx`);

    const { data, errors } = await graphql<Query>(`
        query loadPagesQuery {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        throw errors;
    }

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.title,
            context: {
                html: node.html,
                title: node.frontmatter.title,
            },
            component: blogPostTemplate,
        });
    });
}