import React from 'react';
import styled from 'styled-components/native' 
import {	Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const WholeScreenContainer = styled.SafeAreaView`
	height: ${height}px;
	width: ${width}px;
	background-color: #56585c;
	flex: 2;
	justify-content: center;
`;

export default WholeScreenContainer