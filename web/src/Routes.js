// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/votes/new" page={NewVotePage} name="newVote" />
      <Route path="/votes/{id:Int}/edit" page={EditVotePage} name="editVote" />
      <Route path="/votes/{id:Int}" page={VotePage} name="vote" />
      <Route path="/votes" page={VotesPage} name="votes" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
