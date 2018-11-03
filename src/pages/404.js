import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>ERROR 404: PAGE/RESOURCE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... How sad.  If you would like to head back to where you came from, hit the back button.  Otherwise, press the link below:</p>
    <Link to="/">Head back to the homepage!</Link>
  </div>
)

export default NotFoundPage
