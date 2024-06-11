// @ts-ignore
import {reactive} from "vue";

export function useFetchData() {
    let id = 0;
    const users = reactive([
        {
            id: id++,
            name: 'mail@mail.com',
            created: new Date(Date.now() - 2),
            userID: Math.random()
        },
        {
            id: id++,
            name: 'mail1@mail.com',
            created: new Date(Date.now()),
            userID: Math.random()
        },
        {
            id: id++,
            name: 'mail2@mail.com',
            created: new Date(Date.now() - 3),
            userID: Math.random()
        },
        {
            id: id++,
            name: 'mail3@mail.com',
            created: new Date(Date.now()),
            userID: Math.random()
        }
    ]);

    const FakeAPI = {
        async fetch({page, itemsPerPage, sortBy, search}) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const start = (page - 1) * itemsPerPage;
                    const end = start + itemsPerPage;

                    let filteredItems = users.slice();

                    if (search.name) {
                       users.filter(item =>
                            item.name.toLowerCase().includes(search.name.toLowerCase())
                        );
                    }


                    if (sortBy.length) {
                        const sortKey = sortBy[0].key;
                        const sortOrder = sortBy[0].order;
                        filteredItems.sort((a, b) => {
                            const aValue = a[sortKey];
                            const bValue = b[sortKey];
                            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue;
                        });
                    }

                    const paginated = filteredItems.slice(start, end);

                    resolve({items: paginated, total: filteredItems.length});
                }, 500);
            });
        }
    };

    return {
        FakeAPI,
        users
    }
}