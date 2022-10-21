import { useState } from 'react'
import Loader from '../components/Loader/Loader'
import PeopleList from '../components/PeoplePage/PeopleList'

const WithErrorApi = View => {
    return props => {
        // eslint-disable-next-line
        const [errorApi, setErrorApi] = useState(false)

        return (
            <View
                setErrorApi={setErrorApi}
                errorApi={errorApi}
                {...props} />
        )
    }
}

export default WithErrorApi