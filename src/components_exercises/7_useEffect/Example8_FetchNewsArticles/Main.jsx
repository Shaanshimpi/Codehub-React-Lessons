import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard.jsx'

// TODO: Fetch and display the latest space flight news articles
export default function Main() {
  // TODO 1: Create articles state (start with empty array [])
  // TODO 2: Create loading state (start with true)
  // TODO 3: Create error state (start with null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // TODO 4: Set loading true and reset error before fetching

        // TODO 5: Fetch https://api.spaceflightnewsapi.net/v4/articles/?limit=10

        // TODO 6: If the response is not ok throw new Error('Failed to fetch articles')

        // TODO 7: Parse the JSON body

        // TODO 8: Update articles state with data.results (fallback to [])
      } catch (fetchError) {
        // TODO 9: Set error message (fetchError.message)
      } finally {
        // TODO 10: Set loading to false
      }
    }

    fetchArticles()
  }, []) // TODO 11: Keep dependency array empty so it runs once on mount

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p style={{ marginBottom: '20px', color: '#7f8c8d' }}>
        SpaceFlight News Articles
      </p>

      {/* TODO 12: Show "Loading articles..." when loading is true */}

      {/* TODO 13: Show error message in red when error is not null */}

      {/* TODO 14: When not loading and no error, render the articles list */}
      {/* Hint: If articles length is 0 show "No articles found." */}

      <div>
        {/* TODO 15: Map over articles and render <ArticleCard key={article.id} {...props} /> */}
      </div>
    </div>
  )
}


