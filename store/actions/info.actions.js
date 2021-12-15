import * as FyleSystem from 'expo-file-system'
export const UPDATE_INFO = 'UPDATE INFO'

export const updateInfo = (alias, image) => {
    return async dispatch => {

        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FyleSystem.moveAsync({
                from: image,
                to: Path,
            })
        } catch(err) {
            console.log(err.message)
        }

        dispatch({
            type: UPDATE_INFO, 
            payload: {alias, image: Path},
        })
    }
}