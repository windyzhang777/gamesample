import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {CatalogResponse} from 'src/models/Avatar';
import {ContentState} from 'src/store/content/reducer';
interface ImageCustomizationIconProps {
  catalogItem: CatalogResponse;
  content: ContentState;
}

const styles = StyleSheet.create({
  ImageCustomizationIconContainer: {
    width: 50,
    height: 70,
    margin: 8,
    position: 'relative',
  },
  ImageCustomizationIconImage: {
    width: 50,
    height: 70,
    margin: 'auto',
    position: 'absolute',
  },
  ImageCustomizationIconSingleImage: {
    width: 50,
    height: 70,
    margin: 8,
  },
});

export default function ImageCustomizationIcon({
  catalogItem,
  content,
}: ImageCustomizationIconProps) {
  if (catalogItem.ItemClass === 'avatar') {
    const avatarURL =
      content[`${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}.png`];
    const avatarDetailsURL =
      content[`${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}_details.png`];
    return (
      <View style={styles.ImageCustomizationIconContainer}>
        <Image
          source={{
            uri: avatarURL,
          }}
          style={styles.ImageCustomizationIconImage}
        />
        <Image
          source={{
            uri: avatarDetailsURL,
          }}
          style={styles.ImageCustomizationIconImage}
        />
      </View>
    );
  } else if (catalogItem.ItemClass === 'costume') {
    const costumeFrontURL =
      content[`${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}_front.png`];
    const costumeBackURL =
      content[`${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}_back.png`];
    return (
      <View style={styles.ImageCustomizationIconContainer}>
        <Image
          source={{
            uri: costumeFrontURL,
          }}
          style={styles.ImageCustomizationIconImage}
        />
        <Image
          source={{
            uri: costumeBackURL,
          }}
          style={styles.ImageCustomizationIconImage}
        />
      </View>
    );
  } else {
    const imageURL =
      content[`${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}.png`];
    return (
      <Image
        source={{
          uri: imageURL,
        }}
        style={styles.ImageCustomizationIconSingleImage}
      />
    );
  }
}
