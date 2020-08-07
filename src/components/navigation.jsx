import React from 'react'
import {Button} from '../components'
import {Logo} from '../assets/logo'

const navigation = ({children}) => {
    return (
        <div>
            <div className='pa-3 ph-10 flex items-center justify-between'>
                <div className='logo'>
                    <Logo/>
                </div>
                <div>
                    <Button className='font-roboto w-8 h-4 br-r-4 b-default c-primary rb outline' value="Log in" />
                    <Button className='font-roboto w-8 h-4 br-r-27 b-primary c-secondary rb outline' value="Sign Up"/>
                </div>
            </div>

            <div className='w100 flex-1'>
                {children}
            </div>
        </div>
    )
}

export default navigation;