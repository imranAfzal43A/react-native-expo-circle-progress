# react-native-expo-circle-progress

It's a cross platform component to show circular progress indicator for mobile apps and web as well.

# Screenshot


![WhatsApp Image 2024-04-07 at 6 07 49 AM](https://github.com/imranAfzal43A/react-native-circle-progress/assets/111197710/c48e3823-2143-444c-b77f-4e47a0403f01)


# Example usage

<PercentageCircle radius={35} percent={50} color={"#3498db"} />
<PercentageCircle radius={35} percent={50} color={"#3498db"} >
      <Text>Example</Text>
      <Text>50%</Text>
</PercentageCircle>
<PercentageCircle radius={35} borderWidth={8} percent={50} color={"#3498db"} >
      <Image source={{ uri: 'https://avatars.githubusercontent.com/u/111197710?v=4' }} style={{ width: 100, height: 100 }} resizeMode='cover' />
</PercentageCircle>
<Text>50%</Text>
<PercentageCircle radius={35} percent={50} color={"#3498db"} >
      <Text>Example</Text>
</PercentageCircle>
<Text>50%</Text>
