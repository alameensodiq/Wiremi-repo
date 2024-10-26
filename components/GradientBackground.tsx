import React from 'react';
import { Dimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
interface GradientBackgroundProps {
    children: any,
    colors: any,
    reduce?: any
}


const GradientBackground = ({ children, colors, reduce }:GradientBackgroundProps) => {
  const { height, width } = Dimensions.get("window");
  return (
    <LinearGradient
    style={{borderRadius: 20, width: reduce ? width * 0.42 : width * 0.91,height: reduce ? height * 0.35 : height * 0.32}}
      colors={colors}
      start={{ x: 0, y: 0 }} // Adjust starting point
      end={{ x: 1, y: 1 }}   // Adjust ending point
    >
      { children }
    </LinearGradient>
  );
};

export default GradientBackground;
