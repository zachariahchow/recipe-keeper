const React = require('react');

import Head from './head';
import Header from './header';

class Index extends React.Component {

    render() {

        return (
            <html>
                <Head />
                <body>
                    <div className="container">
                        <Header />
                        <div className="nav">
                            <a href="/" className="nav__link index-link">Home</a>
                            <a href="/recipes/new" className="nav__link add-recipe">Add a Recipe</a>
                            <a href="/recipes/" className="nav__link show-all-recipes">Show All Recipes</a>
                            <a href="/recipes/reset" className="nav__link reset-link">Reset Recipes</a>
                            <a href="/ingredients" className="nav__link ingredients-link">Ingredients List</a>
                        </div>
                        <div className="landing-page">
                            <h1>Recipe Deleted!</h1>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;