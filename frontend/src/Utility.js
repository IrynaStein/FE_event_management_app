import { Segment } from 'semantic-ui-react'
import View from './View';
import SearchComponent from './SearchComponent';
import Form from './Form';

function Utility(){
    return (
        <Segment.Inline>
            <View></View>
            <SearchComponent></SearchComponent>
            <Form></Form>
        </Segment.Inline>
    )
}

export default Utility;