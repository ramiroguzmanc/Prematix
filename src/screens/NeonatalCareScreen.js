//Dependencies
import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
//Components
import MenuOption from '../components/MenuOption';
import Colors from '../res/Colors';
import fontConfig from '../res/fontConfig';
//Assets
import bano from '../assets/images/bano_recien_nacido.jpg';
import cicatrizacion from '../assets/images/cicatrizacioncordon.jpg';
import vestir from '../assets/images/vestirbebe.jpg';
import bebesol from '../assets/images/bebesol.jpg';
import bebedormido from '../assets/images/bebedormido.jpg';
import pos1 from '../assets/images/pos1.png';
import pos2 from '../assets/images/pos2.png';
import pos3 from '../assets/images/pos3.png';
import pos4 from '../assets/images/pos4.png';

const NeonatalCareScreen = (props) => {
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
    <ScrollView style={{backgroundColor: Colors.azul}}>
      <View style={styles.container}>
        <MenuOption title="Baño del bebé" goTo="AnswerScreen" {...props}>
          <Text style={styles.p}>
            👶🏼 Alistar todo lo que se necesite para el baño del bebé (toalla,
            esponja, jabón o champú, ropa, pañal) calentando la ropa en el seno
            de la madre.
            {'\n\n'}
            👶🏼 Evitar corrientes de aire.{'\n\n'}
            👶🏼 Asegurarse que el agua esté templada, ni demasiado fría, ni
            demasiado caliente. Evitar agregar sustancias diferentes.{'\n\n'}
            👶🏼 Iniciar el baño, por la cara, continuar por la cabeza, luego
            cuerpo y por último los genitales.{'\n\n'}
            👶🏼 Secar rápidamente al bebé y vestirlo rápidamente
          </Text>
          <Image style={styles.image} source={bano} />
          <Text>Imagen tomada de descubretusalud.com{'\n'}</Text>
        </MenuOption>

        <MenuOption
          title="Cuidados con el ombligo"
          goTo="AnswerScreen"
          {...props}>
          <Text style={styles.p}>
            👶🏼 Mantenerlo limpio y seco. Retirar residuos de agua y jabón
            después del baño.{'\n\n'}
            👶🏼 Aplicar alcohol tres veces al día en la parte donde el ombligo se
            pega a la piel.{'\n\n'}
            👶🏼 Si se hunta de orina o popó, lavarlo con abundante agua y jabón,
            secarlo y aplicar alcohol.{'\n\n'}
            👶🏼 Doblar el pañal por debajo del ombligo, para mantenerlo seco y
            facilitar su desprendimiento.{'\n\n'}
            👶🏼 El ombligo se caerá generalmente después de 7 a 10 días
          </Text>
          <Image source={cicatrizacion} style={styles.image2} />
          <Text>Imagen tomada de medlineplus.gov{'\n'}</Text>
        </MenuOption>

        <MenuOption
          title="Vestido y cambio del pañal"
          goTo="AnswerScreen"
          {...props}>
          <Text style={styles.p}>
            👶🏼 Colocar ropa ancha y cómoda, de material suave y preferiblemente
            de algodón.
            {'\n\n'}
            👶🏼 Evitar lastimarle los dedos al vestirlo.{'\n\n'}
            👶🏼 Lavar ropa con jabón neutro, separada de la ropa familiar.
            {'\n\n'}
            👶🏼 Cambiar el pañal regularmente.{'\n\n'}
            👶🏼 Lavar con agua tibia las nalgas, entre piernas y debajo de los
            testículos. Si es niño retraer suavemente la piel que cubre el pene
            y en la niña limpiar de adelante hacia atrás separando los labios,
            para evitar las infecciones. Secar bien con toques suaves.{'\n\n'}
            👶🏼 Si necesita cremas protectoras para evitar las quemaduras por
            orina, en las niñas no untar al interior de los genitales.{'\n\n'}
            👶🏼 No coloque en la piel aceites, talcos o sustancias.
          </Text>
          <Image style={styles.image} source={vestir} />
          <Text>Imagen tomada de elblogdetubebe.com{'\n'}</Text>
        </MenuOption>

        <MenuOption title="Cuidados con la piel" goTo="AnswerScreen" {...props}>
          <Text style={styles.p}>
            👶🏼 La piel del niño es muy delicada, y tiene al nacer una grasa
            blanca, que no debe retirar, pues se cae sola. En ocasiones el bebé
            puede presentar un brote pequeño y de color rojo en la piel que
            desaparecerá solo. Pero si este tiene pus o materia, debe consultar
            al médico.
          </Text>
        </MenuOption>

        <MenuOption title="Exposición al sol" goTo="AnswerScreen" {...props}>
          <Text style={styles.p}>
            👶🏼 A partir del segundo día de vida del bebé, presenta una
            coloración amarilla pálida en la piel; para disminuirla colocarlo a
            la luz del día mañana y tarde a través del vidrio de una ventana,
            sin corrientes de aire, durante 10 a 15 minutos, completamente
            desnudo cubriendo los ojos y genitales. Acompáñelo siempre.
          </Text>
          <Image style={styles.image} source={bebesol} />
          <Text>Imagen tomada de okdiario.com{'\n'}</Text>
        </MenuOption>

        <MenuOption title="Ambiente y sueño" goTo="AnswerScreen" {...props}>
          <Text style={styles.p}>
            👶🏼 Acostarlo boca arriba, la cabeza elevada 30 grados, sin almohadas
            al rededor, en una cuna, con soporte en los pies para evitar
            resbalarse bajo las cobijas y ahogarse, en la misma habitación con
            sus padres.
            {'\n\n'}
            👶🏼 No fumar en la habitación del bebé.{'\n\n'}
            👶🏼 No colocarlo en el pecho de los padres cansados o bajo efectos
            del alcohol y/o drogas.{'\n\n'}
          </Text>
          <Image style={styles.image} source={bebedormido} />
          <Text>Imagen tomada de diezminutos.es{'\n'}</Text>
        </MenuOption>

        <MenuOption title="Vacunación" goTo="AnswerScreen" {...props}>
          <Text style={styles.p}>👶🏼Vacunas:</Text>
          <View style={styles.tableContainer}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={table.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={table.tableData} textStyle={styles.text} />
            </Table>
          </View>
          <Text style={styles.title}>Para tener en cuenta...</Text>
          <Text style={styles.p}>
            👶🏼 Acudir a la cita de control, donde le indicarán el esquema de
            vacunación que continúa a partir de los dos meses de vida.{'\n\n'}
            👶🏼 Vigilar el sitio de aplicación de las vacunas, para identificar
            signos de infección.
          </Text>
        </MenuOption>

        <MenuOption title="Lactancia materna" goTo="AnswerScreen" {...props}>
          <Text style={styles.p}>
            La leche materna es el alimento ideal y exclusivo durante los
            primeros 6 meses de vida del bebé, ya que ayuda:{'\n'}
          </Text>
          <Text style={styles.title}>Al bebé...</Text>
          <Text style={styles.p}>
            👶🏼 Es la primera vacuna porque trasmite defensas.{'\n\n'}
            👶🏼 Aporta nutrientes y lo protege de infecciones del instestino y
            pulmones.{'\n\n'}
            👶🏼 Favorece la maduración del cerebro y el desarrollo de la
            inteligencia.{'\n\n'}
            👶🏼 Favorece el vínculo entre padres e hijo.{'\n'}
          </Text>
          <Text style={styles.title}>A la mamá...</Text>
          <Text style={styles.p}>
            👶🏼 Es económica, sin bacterias y está a temperatura ideal.{'\n\n'}
            👶🏼 Ayuda a la recuperación del tamaño de la matriz.{'\n\n'}
            👶🏼 Disminuye el riesgo de sangrado.{'\n\n'}
            👶🏼 Favorece la pérdida de peso.{'\n\n'}
            👶🏼 Disminuye la aparición de cáncer de seno y ovario.{'\n\n'}
            👶🏼 Produce sentimientos de bienestar.{'\n\n'}
            👶🏼 Evita hincazón y dolor de los senos.{'\n'}
          </Text>
          <Text style={styles.title}>Técnicas de amamantamiento...</Text>
          <Text style={styles.p}>
            👶🏼 Lavarse las manos.{'\n\n'}
            👶🏼 Despertarlo para comer.{'\n\n'}
            👶🏼 Posición cómoda para la madre y el bebé.{'\n\n'}
            👶🏼 Ofrecer el seno al bebé introduciendo el pezón y la mitad de la
            zona oscura.{'\n\n'}
            👶🏼 Dejarlo tomar hasta que desocupe el seno.{'\n\n'}
            👶🏼 No retirar bruscamente el seno.{'\n\n'}
            👶🏼 Sacarle gases evitando movimientos bruscos.{'\n'}
          </Text>
        </MenuOption>

        <MenuOption
          title="Posiciones de amamantamiento"
          goTo="AnswerScreen"
          {...props}>
          <Text style={styles.p}>
            👶🏼 Postura sentada posición "de cuna" (vientre con vientre)
          </Text>
          <Image style={styles.image} source={pos1} />
          <Text>
            Imagen tomada de folleto cuidado en el posparto a la madre y el
            recién nacido. Grupo académico perinatal UNAL{'\n'}
          </Text>
          <Text style={styles.p}>
            👶🏼 Postura sentada posición "de cuna" cruzada (vientre con vientre)
          </Text>
          <Image style={styles.image} source={pos2} />
          <Text>
            Imagen tomada de folleto cuidado en el posparto a la madre y el
            recién nacido. Grupo académico perinatal UNAL{'\n'}
          </Text>
          <Text style={styles.p}>
            👶🏼 Postura sentada posición "de rugby" (fútbol americano)
          </Text>
          <Image style={styles.image} source={pos3} />
          <Text>
            Imagen tomada de folleto cuidado en el posparto a la madre y el
            recién nacido. Grupo académico perinatal UNAL{'\n'}
          </Text>
          <Text style={styles.p}>
            👶🏼 Postura estirada posición recostada de lado
          </Text>
          <Image style={styles.image} source={pos4} />
          <Text>
            Imagen tomada de folleto cuidado en el posparto a la madre y el
            recién nacido. Grupo académico perinatal UNAL{'\n'}
          </Text>
        </MenuOption>

        <MenuOption
          title="Fuente de información"
          goTo="AnswerScreen"
          {...props}>
          <Text style={styles.p}>
            La información suministrada en la sección "cuidado neonatal" ha sido
            recolectada del folleto "Cuidado en el posparto a la madre y el
            recién nacido" por el grupo académico materno perinatal de la
            Universidad Nacional de Colombia Sede Bogotá.
          </Text>
        </MenuOption>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.azul,
    padding: 7,
    alignItems: 'center',
    flex: 1,
  },
  p: {
    ...fontConfig.p,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  image2: {
    width: 400,
    height: 325,
    alignSelf: 'center',
    marginVertical: 20,
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {height: 70, backgroundColor: '#f1f8ff'},
  text: {margin: 3, fontSize: 18},
  title: {
    color: Colors.rosaBorder,
    alignSelf: 'center',
    ...fontConfig.title,
  },
});

export default NeonatalCareScreen;
