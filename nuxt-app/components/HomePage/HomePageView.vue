<script setup lang="ts">

const layout = {
  custom : 'custom',
  footer: 'footer',

};



const icon = '';
const list = ref([
 'Personalized Planning: The system allows users to input their budget and select a country or city they want to travel to. \n' +
 'Based on this information, it creates a personalized itinerary considering financial constraints.',
  'Cost Information: The system provides detailed information on the cost of accommodation (hotels, hostels, apartments), transportation (flights, rides, car rentals), and entertainment (tours, museum tickets, attractions) in the chosen destination.',
    'Money-saving Options: The system can provide users with tips on money-saving opportunities, such as using discount cards, special offers, or opting for less popular but more economical accommodation and entertainment options.',
    'Expense Tracking: The system may provide tools for monitoring expenses during the trip so that users can keep track of their budget and avoid exceeding it.',
    'Personalized Planning: The system allows users to input their budget and select a country or city they want to travel to. \n' +
    'Based on this information, it creates a personalized itinerary considering financial constraints.'
]);

</script>

<template>
  <main class="mt-10">
    <div class="container">
      <div class="top-row">
        <div class="element">
          <v-card class="card-item e-1 rounded-0" v-motion-slide-left>
            <v-card-title class="main-heading">
              Monitoring of the Balance Sheet
            </v-card-title>
            <v-card-subtitle class="main-subheading">
              Monitor your balance in real time
            </v-card-subtitle>
            <v-card-item>
              <v-img src="~/public/laptop.png" alt="laptop" style="z-index: -1; background-color: #8056C4"></v-img>
            </v-card-item>
          </v-card>
        </div>
        <div class="element">
          <v-card class="card-item e-2 rounded-0" v-motion-slide-right>
            <v-card-title class="main-heading">
              Organisational costs
            </v-card-title>
            <v-card-subtitle class="main-subheading">
              Split expenses with any trips
            </v-card-subtitle>
            <v-card-item>
              <v-img src="~/public/laptop.png" alt="laptop" style="z-index: -1; background-color: #1CC29F"></v-img>
            </v-card-item>
          </v-card>
        </div>
      </div>
      <div class="bottom-row">
        <div class="element">
          <v-card class="card-item e-3 rounded-0" v-motion-slide-left>
            <v-card-title class="main-heading">
              Managing your expenses
            </v-card-title>
            <v-card-subtitle class="main-subheading">
              Add expenses quickly
            </v-card-subtitle>
            <v-card-item>
              <v-img src="~/public/laptop.png" alt="laptop" style="background-color: #CE5E0C"></v-img>
            </v-card-item>
          </v-card>
        </div>
        <div class="element">
          <v-card class="card-item e-4 rounded-0" v-motion-slide-right>
            <v-card-title class="main-heading">
              Tickets at favourable prices
            </v-card-title>
            <v-card-subtitle class="main-subheading">
              Depending on your budget, plan your trip.
            </v-card-subtitle>
            <v-card-item>
              <v-img src="~/public/laptop.png" alt="laptop" style="z-index: -1; background-color: #373B3F"></v-img>
            </v-card-item>
          </v-card>
        </div>
      </div>
      <section class="section-adv" v-motion-slide-visible-once-left>
        <div class="text-center">
          <v-row no-gutters align="center" class="adv-row">
            <v-col cols="12" md="6">
              <div class="content-items">
                <h1 class="adv-heading">Try a travel planning system that's tailored to your finances</h1>
<!--                <v-btn class="mr-5 mt-5" variant="outlined" style="background-color: blueviolet; color: white">Sign in</v-btn>-->
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="iframe-container">
                <iframe
                    src="https://www.youtube.com/embed/wDchsz8nmbo"
                    title="1 Minute Sample Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
              </div>
            </v-col>
          </v-row>
        </div>
      </section>
      <section>
        <div class="article-container">
          <h1 class="article-heading text-center">
            The advantages of a website for a travel planning system with<br />financial considerations may include:
          </h1>
          <v-list v-for="item in list" :key="item" max-width="800" class="list mx-auto">
            <v-list-item class="list-item" v-motion-slide-visible-once-right>
              <font-awesome-icon icon="fa-solid fa-check" /> {{ item }}
            </v-list-item>
          </v-list>
        </div>
      </section>
    </div>
  </main>
  <FooterView />
</template>


<style scoped>
.container {
  max-width: 1230px;
  padding: 0 30px;
  margin: 0 auto;
}

.top-row,
.bottom-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.element {
  flex: 1;
}

.card-item.e-1 {
  background-color: #8056c4;
}
.card-item.e-2 {
  background-color: #1cc29f;
}
.card-item.e-3 {
  background-color: #ce5e0c;
}
.card-item.e-4 {
  background-color: #373b3f;
}
.main-heading,
.main-subheading {
  color: white;
  font-weight: 500;
  text-align: center;
}
.section-adv {
  background-color: blueviolet;
  padding: 20px 0;
}
.content-items {
  margin: 0 20px;
}
.adv-heading {
  font-weight: 600;
  font-size: 30px;
  color: white;
}
.iframe-container {
  position: relative;
  padding-bottom: 56.25%;
  margin: 0 30px;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: black;
  border: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.article-heading {
  margin-top: 20px;
  font-weight: 500;
  font-size: 30px;
}
.list-item {
  font-weight: 500;
  font-size: 20px;
  margin: 5px 5px;
}

@media (max-width: 1230px) {
  .element {
    display: none;
  }
}

@media (max-width: 768px) {
  .adv-heading {
    font-size: 24px;
  }
  .content-items {
    margin: 0 10px;
  }
  .iframe-container {
    margin: 20px 20px;
    padding-bottom: 75%;
  }
  .section-adv {
    width: auto;

  }
}
</style>
