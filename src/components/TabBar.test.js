/* eslint-disable no-undef */
import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter : new Adapter()   })

// import { Demo } from './Demo'
import TabBar from './TabBar'

describe( "TabBar Testing for Enzymes"  , ()=>{

    test('TabBar check',()=>{  let wrapper=shallow( <TabBar/> ) ; console.log(wrapper.debug())       } )
    
})

       
