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

import PurchaseHistoryTitleBar from '../components/PurchaseHistoryTitleBar/PurchaseHistoryTitleBar'
import {PurchaseOrderProvider} from '../components/context/PurchaseOrderProvider'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import SortButton from '../components/SortButton/SortButton'

const Test = () =>{
	const {width,height} = Dimensions.get('window')
	const [filter, setFilter] = useState(null)
	const value ={ filter, setFilter}


  return(
    <View style={{ width:width, height:height, backgroundColor:'deepskyblue' }}>

			<PurchaseOrderProvider value={value}>
				<PurchaseHistoryTitleBar components={[
					<SortButton text="Price"/>,
					<SortButton text="Value"/>,
					<SortButton text="Amount"/>,
					<SortButton text="Date"/>,
				]}/>
			</PurchaseOrderProvider>
	
    </View>

  )
}

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

export default Test