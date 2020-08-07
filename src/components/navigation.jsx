import React from 'react'
import {Button} from '../components'
import { useHistory } from "react-router-dom";
import {Logo} from '../assets/logo'

const Navigation = ({children}) => {
    const history = useHistory();
    console.log(history)
    const pushLogin = () => {
        history.push('/signIn')
    }
    const pushSignUp = () => {
        history.push('/signUp')
    }

    const pushHome = () => {
        history.push('/')
    }

    if(history.location.pathname == '/signUp' || history.location.pathname == '/signIn') {
        return (
            <div>
                <div className='pa-3 ph-10 flex items-center justify-between'>
                    <div className='logo'>
                        <Logo/>
                    </div>
                    <div>
                        <Button className='font-roboto w-8 h-4 br-r-27 b-primary c-secondary rb outline' value="Home" onClick={pushHome}/>
                    </div>
                </div>
    
                <div className='w100 flex-1'>
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='pa-3 ph-10 flex items-center justify-between'>
                <div className='logo'>
                    <Logo/>
                </div>
                <div>
                    <Button className='font-roboto w-8 h-4 br-r-4 b-default c-primary rb outline' value="Log in" onClick={pushLogin} />
                    <Button className='font-roboto w-8 h-4 br-r-27 b-primary c-secondary rb outline' value="Sign Up" onClick={pushSignUp}/>
                </div>
            </div>

            <div className='w100 flex-1'>
                {children}
            </div>
        </div>
    )
}

export default Navigation;