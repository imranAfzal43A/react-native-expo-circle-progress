import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StyleProp, TextStyle } from 'react-native';
import PropTypes from 'prop-types';
interface PercentageCircleProps {
    color?: string;
    bgcolor?: string;
    innerColor?: string;
    radius: number;
    percent: number;
    borderWidth?: number;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    disabledText?: string;
    children?: React.ReactNode;
}
const styles = StyleSheet.create({
    circle: {
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
    },
    leftWrap: {
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
    },
    rightWrap: {
        position: 'absolute',
    },
    loader: {
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: 1000,
    },
    innerCircle: {
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 11,
        color: '#888',
    },
});
const PercentageCircle: React.FC<PercentageCircleProps> = ({
    color,
    bgcolor = '#e3e3e3',
    innerColor = '#fff',
    radius,
    percent,
    borderWidth = 2,
    textStyle,
    disabled = false,
    disabledText,
    children,
}) => {
    const [leftTransformerDegree, setLeftTransformerDegree] = useState('0deg');
    const [rightTransformerDegree, setRightTransformerDegree] = useState('0deg');
    useEffect(() => {
        let leftDegree = '0deg';
        let rightDegree = '0deg';
        if (percent >= 50) {
            rightDegree = '180deg';
            leftDegree = `${(percent - 50) * 3.6}deg`;
        } else {
            rightDegree = `${percent * 3.6}deg`;
        }
        setLeftTransformerDegree(leftDegree);
        setRightTransformerDegree(rightDegree);
    }, [percent]);
    if (disabled) {
        return (
            <View
                style={[
                    styles.circle,
                    {
                        width: radius * 2,
                        height: radius * 2,
                        borderRadius: radius,
                    },
                ]}>
                <Text style={styles.text}>{disabledText}</Text>
            </View>
        );
    }
    return (
        <View
            style={[
                styles.circle,
                {
                    width: radius * 2,
                    height: radius * 2,
                    borderRadius: radius,
                    backgroundColor: bgcolor,
                },
            ]}>
            <View
                style={[
                    styles.leftWrap,
                    {
                        width: radius,
                        height: radius * 2,
                        left: 0,
                    },
                ]}>
                <View
                    style={[
                        styles.loader,
                        {
                            left: radius,
                            width: radius,
                            height: radius * 2,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            backgroundColor: color,
                            transform: [
                                { translateX: -radius / 2 },
                                { rotate: leftTransformerDegree },
                                { translateX: radius / 2 },
                            ],
                        },
                    ]}
                />
            </View>
            <View
                style={[
                    styles.leftWrap,
                    {
                        left: radius,
                        width: radius,
                        height: radius * 2,
                    },
                ]}>
                <View
                    style={[
                        styles.loader,
                        {
                            left: -radius,
                            width: radius,
                            height: radius * 2,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            backgroundColor: color,
                            transform: [
                                { translateX: radius / 2 },
                                { rotate: rightTransformerDegree },
                                { translateX: -radius / 2 },
                            ],
                        },
                    ]}
                />
            </View>
            <View
                style={[
                    styles.innerCircle,
                    {
                        width: (radius - borderWidth) * 2,
                        height: (radius - borderWidth) * 2,
                        borderRadius: radius - borderWidth,
                        backgroundColor: innerColor,
                    },
                ]}>
                {children ? (
                    children
                ) : (
                    <Text style={[styles.text, textStyle]}>{percent}%</Text>
                )}
            </View>
        </View>
    );
};
PercentageCircle.propTypes = {
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    innerColor: PropTypes.string,
    radius: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
    borderWidth: PropTypes.number,
    textStyle: PropTypes.object,
    disabled: PropTypes.bool,
    disabledText: PropTypes.string,
    children: PropTypes.node,
};
export default PercentageCircle;