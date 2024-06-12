import axios from 'axios'


export default defineEventHandler(async (event : any): Promise<void> => {
    const apiKey: string = '197b74f777f845e3ac639468bcc069b8';
    const url: string = 'https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=197b74f777f845e3ac639468bcc069b8';

    try {
        const response = await $fetch(url);
        return response;
    } catch (e) {
        console.error(e);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch data from Geoapify'
        });
    }
});
