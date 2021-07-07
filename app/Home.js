import React, {useState} from 'react'
import {
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Dimensions,
	TouchableOpacity,
	ImageBackground,
	FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import SortButton from '../components/SortButton/SortButton'
import PurchaseHistoryTitleBar from '../components/PurchaseHistoryTitleBar/PurchaseHistoryTitleBar'
import { PurchaseOrderProvider } from '../components/context/PurchaseOrderProvider'

const Example = (props) => {
	return (
		<TouchableOpacity style={{
			...styles.dataContainer,
		 
			marginBottom:10,
			borderRadius:10,
			padding:5,
			paddingTop:15,
			paddingBottom:15,
			marginHorizontal:5,
			...props
		}}>
			<Text style={{...styles.dataText, fontWeight:'bold'}}> ETH </Text>
			<Text style={styles.dataText}> £1994.15</Text>
			<Text style={styles.dataText}> 0.01555</Text>
			<Text style={styles.dataText}> £31.01</Text>
			<Text style={styles.dataText}> 20/01/21</Text>
		</TouchableOpacity>
	)
}

//@react-native-picker/picker
const Home = () => {

	const {width,height} = Dimensions.get('window')
	const [filter, setFilter] = useState(null)
	const value ={ filter, setFilter}
	const data = [1,2,3,4,5,6,7,8,9,0,12,13,124,32,23,56]
	const render = (index) => {
		return(
			index.index==0
				? <Example borderTopLeftRadius={0} borderTopRightRadius={0}/>
				: <Example />
			
		)
	}

	return (
		<ImageBackground style={{width:width, height:height}} imageStyle={{resizeMode:'cover',}} source={require('../assets/bg.png')}>

			{/* earnings */}
			<View style={{
				flex:1,
			}}>
				<View style={{
					...styles.container,
					flex:1,
				}}>

					<View style={styles.centeredContainer}>
						<Text style={styles.text}> £200 </Text>
					</View>

					<View style={{...styles.container, alignSelf:'flex-start',paddingHorizontal:40, paddingTop:10}}>
						<Text style={styles.text}> £1000 </Text>
					</View>

					<View style={styles.centeredContainer}>
						<Text style={styles.text}> 450% </Text>
					</View>

				</View>
				
				
			</View>


			{/* Purchase History */}
			<View style={{flex:3, }}>

				<PurchaseOrderProvider value={value}>
					<PurchaseHistoryTitleBar components={[
						<RNPickerSelect
							onValueChange={(value) => console.log(value)}
							items={[
									{ label: 'Football', value: 'football' },
									{ label: 'Baseball', value: 'baseball' },
									{ label: 'Hockey', value: 'hockey' },
							]}
						>
							<TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
								<Text style={styles.dataText}>Coin</Text>
							</TouchableOpacity>
						</RNPickerSelect>,
						<SortButton text="Price"/>,
						<SortButton text="Value"/>,
						<SortButton text="Amount"/>,
						<SortButton text="Date"/>,
					]}/>
				</PurchaseOrderProvider>
	

				<FlatList
					contentContainerStylestyle={{
						...styles.container,
						justifyContent:'flex-start',
						flexDirection:'column',

					}}
					style={{ overflow:'hidden', maxHeight:height }}
					data={data}
					renderItem={render}
					keyExtractor={item=>(item)}
				/>

			</View>
					

			{/* Menu bar */}
			<View
				style={{
					...styles.centeredContainer,
					flexDirection:'row',
					borderTopEndRadius:20,
					borderTopStartRadius:20,
					alignSelf:'stretch',
					padding:10
			}}>

				<TouchableOpacity>
					<Icon name="plus" size={40} color="white" raised={true}/>
				</TouchableOpacity>


			</View>
			
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'row',
		alignSelf:'stretch'
	},
	centeredContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf:'center'
	},
	flexEndContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf:'flex-end'
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	text: {
		marginTop: 8,
		fontSize: 25,
		color: 'white',
		fontWeight:'bold'
	},
	dataText: {
		fontSize: 15,
		color:'white'
	},
	dataContainer:{
		backgroundColor:'#00000045',
		flexDirection:'row', 
		alignSelf:'stretch', 
		justifyContent:'space-around',
	}
});
export default Home