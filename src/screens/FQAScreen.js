import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import ContainerConfig from '../res/ContainerConfig';
import MenuOption from '../components/MenuOption';
import Colors from '../res/Colors';

const FQAScreen = (props) => {
  return (
    <ScrollView style={{backgroundColor: Colors.azul}}>
      <View style={styles.Container}>
        <MenuOption
          title="¿Por qué está mi bebé en la NICU?"
          goTo="AnswerScreen"
          answer="Su bebé está en la NICU en observación y para recibir atención especial del personal de enfermería, los médicos y demás profesionales que están especialmente capacitados para cuidar a recién nacidos prematuros o enfermos."
          font="https://christianacare.org/es/maternidad/unidad-de-cuidados-intensivos-neonatales/preguntas-frecuentes-sobre-la-unidad-de-cuidados-intensivos-neonatales-neonatal-intensive-care-unit-nicu/"
          {...props}
        />
        <MenuOption
          title="¿Cuánto tiempo estará mi bebé en la NICU?"
          goTo="AnswerScreen"
          answer="Debería consultarle esto al médico de su bebé. Por lo general, los bebés se quedan en la NICU hasta que su estado mejora lo suficiente para irse a casa. Si nació de forma prematura, su bebé necesitará poder respirar bien sin ayuda, mantener una temperatura corporal normal, alimentarse bien, subir de peso con normalidad y no presentar signos o síntomas de enfermedad o infección."
          font="https://christianacare.org/es/maternidad/unidad-de-cuidados-intensivos-neonatales/preguntas-frecuentes-sobre-la-unidad-de-cuidados-intensivos-neonatales-neonatal-intensive-care-unit-nicu/"
          {...props}
        />
        <MenuOption
          title="¿Qué molestias puede presentar mi bebé?"
          goTo="AnswerScreen"
          answer={`Pujar, estornudar, hipo, tener congestión nasal y deposiciones blandas frecuentes, y el llanto son las molestias que tu bebé prematuro puede experimentar. Sin embargo, este último es la más usual y debes atenderlo lo más pronto posible.${'\n\n'}Puedes empezar por hablarle o cantarle, haciéndole sentir que estás ahí, mientras revisas cuál puede ser la causa de la molestia. Revisa su pañal, puede ser que quiera lactar o esté indispuesto por los gases. Acomódalo y no lo cubras demasiado.`}
          font="https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
          {...props}
        />
        <MenuOption
          title="¿Cuáles son los principales signos de alarma?"
          goTo="AnswerScreen"
          answer={`Existen unos signos de alarma a los que debes estar atento para acudir a los servicios de urgencias. No te descuides cuando la piel de tu bebé se torna azulada (cianosis), tenga dificultad para respirar o deje de hacerlo, sus deposiciones vienen con moco o sangre y disminuye su tono muscular, es decir que parece flácido y tiene un control deficiente de su cabeza.${'\n\n'}Consulta cuando notes signos de infección en su ombligo o tenga un descenso o aumento brusco de su temperatura corporal. El vómito frecuente y el rechazo a la alimentación también son signos de alarma.`}
          font="https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
          {...props}
        />
        <MenuOption
          title="¿Cómo manejo las visitas?"
          goTo="AnswerScreen"
          answer={`Para todos los recién nacidos, es ideal que en sus primeros 30 días de vida reciban muy pocas visitas para disminuir el riesgo de infecciones y si se trata de un bebé prematuro se deben restringir aún más. Sin embargo, quienes lo visiten deben lavarse sus manos con agua y jabón, y no permitas que le den besos.${'\n\n'}No lo expongas al contacto con personas resfriadas o con enfermedades contagiosas, así como a niños en edad escolar, pues por su edad son propensos a la gripa y enfermedades respiratorias. En caso de que tengas resfriado, puedes usar un tapaboca.`}
          font="https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
          {...props}
        />
        <MenuOption
          title="¿Cómo lo baño y alimento?"
          goTo="AnswerScreen"
          answer={`Debido a las dificultades para controlar su temperatura, su aseo sólo lo debes realizar con una esponja suave.${'\n\n'}Aliméntalo con leche materna o a la fórmula especial de prematuros indicada por el pediatra; por ningún motivo puede recibir otro tipo de alimentos. La mayoría de los bebés prematuros se alimentan entre ocho y diez veces al día, no esperes más de cuatro horas para alimentarlo.`}
          font="https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
          {...props}
        />
        <MenuOption
          title="¿Qué cosas no se deben hacer mientras mi bebé está en posición canguro?"
          goTo="AnswerScreen"
          answer={`Tu bebé debe permanecer acostado sobre tu pecho de manera horizontal, sin más ropa que su pañal y un gorro para su cabeza.${'\n\n'}No puedes moverlo de esa posición para algo diferente de alimentarlo o cambiarlo. Evita la manipulación excesiva del bebé, así como la ﬂexión e hiperextensión de su cuello. No lo calientes con lámparas o botellas con agua caliente porque puedes lesionarlo.${'\n\n'}Al igual que los demás recién nacidos, los bebés prematuros no se deben fajar ni colocarles botones en el ombligo para evitar infecciones en esa zona.`}
          font="https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
          {...props}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...ContainerConfig.pplContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FQAScreen;
