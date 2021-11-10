export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBook.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpachChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpachChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue')
        }
    ]
}