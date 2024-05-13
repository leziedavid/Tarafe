<template>
  <BarChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
{{ outp}}
</template>

<script setup>
import {ref,reactive,computed,onMounted,watch,watchEffect} from 'vue';
import pattern from "patternomaly"
import moment from 'moment';
import { BarChart } from "vue-chart-3"
import {Chart,BarController,CategoryScale,LinearScale,BarElement} from "chart.js"
Chart.register(BarController, CategoryScale, LinearScale, BarElement)

const props = defineProps({

  outp: {
            type: Object,
            required: true
        },

  AllDates: {
            type: Object,
            required: true
        },
});

const dataValues = ref([])
const dates = ref([])
const dataset = ref([])
const datacolors = ref([])

const colors=[
    {
      id: 1,
      icon:"dash",
      label:"#268bd2"
    },
    
    {
      id: 2,
      icon:"dash",
      label:"#2aa198"
    },
    {
      id: 3,
      icon:"dash",
      label:"#2aa178"
    },
    {
      id: 4 ,
      icon:"dash",
      label:"#2aa188"
    },
 

        ];

// const dataValues = ref([
//   [1, 3, 5, 7, 2, 4, 6],
//   [1, 5, 2, 6, 3, 7, 4]
// ])

const date = [

      { year: 2023, 
        count: 12 
      },
  ];

  console.log(date.value);

const data = computed(() => ({


  // labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  // labels:date.value.map(row => row.year),

  // datasets: dataset.value
  // datasets: [
  //     {
  //       label: "Foo",
  //       data: props['outp'].map(row => row.nombres),
  //       backgroundColor: pattern.draw("dash", "#268bd2")
  //     },
  //   ]
  

}))

const options = ref({
  plugins: {

    title: {

      text: "Statistiques de vente"

    }
  }
})

// watchEffect(() => {

//     if (props['AllDates'].length > 0) {
//       let tables = [];
//       props['AllDates'].map(function (element) {
//               tables.push(element.label);
//           })
//           dates.value = tables;
    
//       };

//       console.log(props['outp']);

//     if (props['outp'].length > 0) {

//       let tables = [];

//       props['outp'].map(function (element) {

//           element.produitsOrders.map(function (values) {
//                 tables.push(values.nombres);
//                     dataset.value.push(
//                             {
//                               label:values.nombres+' Commande',
//                               data: values.nombres,
//                               backgroundColor: pattern.draw("dash", values.code)
//                             })
//             })

//             dataValues.value =  dataset;
//         })

    
//       };
  
// });
</script>
