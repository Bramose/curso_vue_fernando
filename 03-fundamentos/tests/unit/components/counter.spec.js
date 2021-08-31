import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })


    // test('debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('h2 debe de tener el valor por defecto "Counter', () => {
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })

    test('el valor por defecto debe ser 100 en el p', () => {
        // Wrapper
        //pTags
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
            // console.log(pTags);
            //expect segundo p === 100
            // expect(pTags[1].text()).toEqual('100')
        expect(value).toEqual('100')
    })

    test('debe de incrementar y decrementar el contador', async() => {

        const [btnIncrease, btnDecrease] = wrapper.findAll('button')
        const value = wrapper.find('[data-testid="counter"]')

        await btnIncrease.trigger('click')

        expect(value.text()).toBe('101')

        await btnDecrease.trigger('click')
        await btnDecrease.trigger('click')

        expect(value.text()).toBe('99')

    });

    test('debe de establecer el valor por defecto', () => {
        const { start } = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start);
    })

    test('debe de mostrar la prop title', () => {
        const title = 'Hola Mundo'
        const wrapper = shallowMount(Counter, {
                props: {
                    title
                }
            })
            // console.log(wrapper.html());
        expect(wrapper.find('h2').text()).toBe(title)
    })
})