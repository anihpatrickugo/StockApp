import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { darkGrayColor, grayLightColor, primaryColor } from '../common/variables';

const Chart = ({duration}) => {

    let labels = []

    switch (duration){
        case "Day":
            labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            break;

        case "Week":
            labels = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"]
            break;

        case "Month":
            labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
            break;

        case "Year":
            labels = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
            break;
        default :
           labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
           break;    
    }

  return (
    <View>
  <LineChart
    data={{
      labels:  labels,
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width - 28} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={10}
    // yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "white",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: primaryColor,
      backgroundGradientToOpacity: 0.5,
      decimalPlaces: 2, // optional, defaults to 2dp
      strokeWidth: 2,

      color: () => primaryColor,
      labelColor: (opacity = 1) => darkGrayColor,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "4",
        strokeWidth: "1",
        stroke: primaryColor,
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  )
}

export default Chart
