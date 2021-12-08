import daybookRouter from '@/modules/daybook/router'

describe('Prueba en el router module del Daybook', () => {
    test('el router debe de tener esta configuración', async() => {
    //    console.log(daybookRouter)
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function)
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                }
            ]
        })
        const promiseRoutes = []
        daybookRouter.children.forEach(child => promiseRoutes.push(child.component()))
        const routes = (await Promise.all(promiseRoutes)).map(route => route.default.name)
        expect(routes).toContain('NoEntrySelected')
        expect(routes).toContain('EntryView')
    })

    test('debe de retornal el id de la ruta', () => {
        const route = {
            params: {
                id: 'ABC-123'
            }
        }
        const entryRoute = daybookRouter.children.find(route => route.name === 'entry')
        expect(entryRoute.props(route)).toEqual({ id: 'ABC-123' })
    })
})