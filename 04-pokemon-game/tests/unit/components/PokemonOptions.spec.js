import { shallowMount } from "@vue/test-utils"
import PokemonOptions from '@/components/PokemonOptions'
import pokemons from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {;
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('debe de hacer match con el snapshot', () => {
        // console.log(wrapper.html());
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        const li = wrapper.findAll('li')
        expect(li.length).toEqual(4)
        expect(li[0].text()).toBe('bulbasaur')
        expect(li[1].text()).toBe('ivysaur')
        expect(li[2].text()).toBe('venusaur')
        expect(li[3].text()).toBe('charmander')
    })

    test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        // console.log(wrapper.emitted('selection'));
        expect(wrapper.emitted('selection')).toEqual([
            [1],
            [2],
            [3],
            [4]
        ])
    })
})