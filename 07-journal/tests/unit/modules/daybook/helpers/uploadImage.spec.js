import cloudinary from 'cloudinary'
import axios from 'axios'
import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name: 'bramose',
    api_key: '543137763523479',
    api_secret: 'CaIwSBS1o7F8vmTZJtcB6QOqSe8'
})

describe('Pruebas en el upload image', () => {
    test('debe de cargar un archivo y retornar el url', async(done) => {
        const { data } = await axios.get('https://res.cloudinary.com/bramose/image/upload/v1637107120/sample.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')
        const url = await uploadImage(file)

        expect( typeof url ).toBe('string')

        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.jpg', '')
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done()
        })
    })
})