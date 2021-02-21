import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';

const CN7 = () => {
  const [table, settableState] = useState({
    tableHead: [
      'Nombre de la vacuna',
      'Enfermedad que previene',
      'Edad para colocar',
    ],
    tableData: [
      ['BCG', 'Tuberculosis', 'Recién nacido'],
      ['Hepatitis B', 'Hepatitis B', 'Recién nacido'],
      ['Polio', 'Poliomielitis', 'Recién nacido'],
    ],
  });
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Vacunación</Text>
      <Text style={style.p}>👶🏼Vacunas:</Text>
      <View style={style.tableContainer}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={table.tableHead}
            style={style.head}
            textStyle={style.text}
          />
          <Rows data={table.tableData} textStyle={style.text} />
        </Table>
      </View>
      <Text style={style.title}>Para tener en cuenta...</Text>
      <Text style={style.p}>
        👶🏼 Acudir a la cita de control, donde le indicarán el esquema de
        vacunación que continúa a partir de los dos meses de vida.{'\n\n'}
        👶🏼 Vigilar el sitio de aplicación de las vacunas, para identificar
        signos de infección.
      </Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {height: 70, backgroundColor: '#f1f8ff'},
  text: {margin: 3, fontSize: 18},
  Container: {
    ...ContainerConfig.pplContainer,
    backgroundColor: 'white',
  },
  title: {
    color: Colors.rosaBorder,
    alignSelf: 'center',
    ...fontConfig.title,
  },
  p: fontConfig.p,
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default CN7;
