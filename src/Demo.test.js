/* eslint-disable no-undef */
import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter : new Adapter()   })

import { Demo } from './Demo'


describe( "Demo Testing for Enzymes"  ,()=>{

    test('object check',()=>{  let wrapper=shallow( <Demo/> ) ; console.log(wrapper.debug())       } )
    
})

       
