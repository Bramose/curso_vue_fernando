import { shallowMount } from '@vue/test-utils'
import Entry from '@/modules/daybook/components/Entry.vue'
import { journalState } from '../../../mock-data/test-journal-state.js'


describe('pruebas con el entry component', () => {
    const mockRouter = {
        push: jest.fn()
    }

    const entry = journalState.entries[0]

    const wrapper = shallowMount(Entry, {
        props: {
            entry
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }
    })

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de redireccionar al hacer click en el entry-container', () => {
        const entryContainer = wrapper.find('.entry-container')
        entryContainer.trigger('click')
        expect(mockRouter.push).toHaveBeenCalledWith({
            name: 'entry',
            params: {
                id: entry.id
            }
        })
    })

    test('pruebas en las propiedades computadas', () => {
        const { day, month, yearDay } = wrapper.vm
        expect(day).toBe(15)
        expect(month).toBe('Noviembre')
        expect(yearDay).toBe('2021, Lunes')
    })
})