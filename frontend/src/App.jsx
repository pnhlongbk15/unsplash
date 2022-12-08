import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Switch from '~/router/Switch'

import { getUser } from '~/controller/authController';

const App = () => {
        const dispatch = useDispatch();
        const { isLoading, Loaded } = useSelector((state) => state.user);

        useEffect(() => {
                isLoading && !Loaded && getUser(dispatch)
        }, [isLoading])

        return (
                <>
                        {Loaded &&
                                <Switch />
                        }
                </>
        )
}

export default App
