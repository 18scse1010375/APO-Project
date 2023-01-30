/* eslint-disable no-undef */
import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter : new Adapter()   })

import Login from './Login'
import MakeCard from './MakeCard'


describe('Login Page Testing',()=>{

    test("Load Complete HTML of the Component",()=>{ let wrapper=shallow(<MakeCard/>);console.log(wrapper.debug())  }    )

}   )


