# react-native-expo-circle-progress

It's a cross platform component to show circular progress indicator for mobile apps and web as well.

# Screenshot


![WhatsApp Image 2024-04-07 at 6 07 49 AM](https://github.com/imranAfzal43A/react-native-circle-progress/assets/111197710/c48e3823-2143-444c-b77f-4e47a0403f01)

## Install and import package

**Installation**

```npm i react-native-expo-circle-progress```


**Import**

```import PercentageCircle from 'react-native-expo-circle-progress'; ```

## Example Percentage Circles

```jsx
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
```

## Props

| Prop          | Description                          | Type      |
|---------------|--------------------------------------|-----------|
| color         | Color of the outer circle            | string    |
| bgcolor       | Background color of the circle       | string    |
| innerColor    | Color of the inner circle            | string    |
| radius        | Radius of the circle                 | number    |
| percent       | Percentage to display                | number    |
| borderWidth   | Width of the circle's border         | number    |
| textStyle     | Style for text inside the circle     | StyleProp<TextStyle> |
| disabled      | Boolean to disable interaction       | boolean   |
| disabledText  | Text to display when disabled        | string    |
| children      | Additional content inside the circle | React.ReactNode |
