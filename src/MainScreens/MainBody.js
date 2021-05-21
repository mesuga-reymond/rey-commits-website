import React from 'react'
import CardsList from '../components/CardsList';
import ContentTable from '../components/ContentTable';
import RandomQuotes from '../components/RandomQuotes';


function MainBody() {
    return (
        <div>
            <RandomQuotes/>
            <ContentTable/>
            <CardsList/>
        </div>
    )
}

export default MainBody
