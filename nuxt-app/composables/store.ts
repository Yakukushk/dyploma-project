import {defineStore} from 'pinia';
// @ts-ignore
import {ref, reactive, watch} from 'vue';
import L from "leaflet";

export const useStore = defineStore('store', () => {
    let id = 0;
    const images = ref([
        {
            id: id++,
            src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Warsaw, Poland",
            categoryItem: "Hotels",
            latitude: 52.25115934671655,
            longitude: 21.06425876757919,
            isMarkerShown: false
        },
        {
            id: id++,
            src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Warsaw, Poland",
            categoryItem: "Hotels",
            latitude: 52.2320286042767,
            longitude: 21.001087383337453,
            isMarkerShown: false
        },
        {
            id: id++,
            src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
            category: "Berlin, Germany",
            categoryItem: "Tours",
            latitude: 52.51760397545112,
            longitude: 13.377358069572189,
            isMarkerShown: false
        },
        {
            id: id++,
            src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
            category: "Berlin, Germany",
            categoryItem: "Tours",
            latitude: 52.50464915318902,
            longitude: 13.44018613107348,
            isMarkerShown: false
        },
        {
            id: id++,
            src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
            category: "Berlin, Germany",
            categoryItem: "Establishments",
            latitude: 47.21321,
            longitude: -1.559482,
            isMarkerShown: false
        },
        {
            id: id++,
            src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
            category: "Berlin, Germany",
            categoryItem: "Establishments",
            latitude: 47.21326,
            longitude: -1.559482,
            isMarkerShown: false
        }
    ]);
    const category = ref([
        "Hotels",
        "Tours",
        "Establishments"]);
    const city_country = ref(["All", "Warsaw, Poland", "Berlin, Germany", "Kyiv, Ukraine"]);
    const map = ref(null);
    const marker = ref([]);

    // const setPopUp = (item : any) => {
    //     map.value.closePopup();
    //     marker.value.bindPopup(`<b>${item.categoryItem}</b><br>${item.category}`).openPopup();
    // }

    const zoom = ref(6);
    const coordinates = ref([47.21322, -1.559482]);
    const imgStore = reactive(
        ['https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
            'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'])
    const addMarker = (item) => {
        const newMarker = [parseFloat(item.latitude), parseFloat(item.longitude)];
        marker.value.push(newMarker);
    }

    const handleMarkerClick = (item) => {
        coordinates.value = [parseFloat(item.latitude), parseFloat(item.longitude)];
        addMarker(item);
    };
    let ids = 0;

    const objValues = ref({
        id: 0,
        title: `Trip`,
        chips: [],
        ticks: '',
        persons: 0,
        model: null

    });


    const selections = ref([]);
    const pushOnSelection = () => {
        if (selections.value.length < 6) {
            try {

                const num = Math.floor(Math.random() * imgStore.length);
                const values = {
                    id: objValues.value.id,
                    title: objValues.value.title,
                    chips: objValues.value.chips,
                    ticks: objValues.value.ticks,
                    date: objValues.value.model,
                    persons: objValues.value.persons,
                    img: imgStore[num]
                };
                selections.value.push(values);
            } catch (e) {
                console.error(e);
            }
        } else {
            alert("Items are full, please remove items for adding other items");
        }
    };
    return {
        images,
        category,
        city_country,
        zoom,
        map,
        addMarker,
        marker,
        coordinates,
        handleMarkerClick,
        selections,
        objValues,
        pushOnSelection,

    }
});