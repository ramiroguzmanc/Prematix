import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NeonatalCareSection from './NeonatalCareSection';

const NeonatalCareScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <NeonatalCareSection
        title="Neonatal Care Screen"
        contain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae.
        Dolorem hic cum ea blanditiis excepturi consequuntur ex modi cupiditate,
        quo suscipit, fugiat non error labore molestiae quae, accusantium
        perspiciatis?"
      />
      <NeonatalCareSection
        title="Neonatal Care Screen"
        contain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae.
        Dolorem hic cum ea blanditiis excepturi consequuntur ex modi cupiditate,
        quo suscipit, fugiat non error labore molestiae quae, accusantium
        perspiciatis?"
      />
      <NeonatalCareSection
        title="Neonatal Care Screen"
        contain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae.
        Dolorem hic cum ea blanditiis excepturi consequuntur ex modi cupiditate,
        quo suscipit, fugiat non error labore molestiae quae, accusantium
        perspiciatis?"
      />
      <NeonatalCareSection
        title="Neonatal Care Screen"
        contain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae.
        Dolorem hic cum ea blanditiis excepturi consequuntur ex modi cupiditate,
        quo suscipit, fugiat non error labore molestiae quae, accusantium
        perspiciatis?"
      />
      <NeonatalCareSection
        title="Neonatal Care Screen"
        contain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae.
        Dolorem hic cum ea blanditiis excepturi consequuntur ex modi cupiditate,
        quo suscipit, fugiat non error labore molestiae quae, accusantium
        perspiciatis?"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: 'white',
  },
});

export default NeonatalCareScreen;
