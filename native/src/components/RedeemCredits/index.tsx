import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Box1 from 'src/assets/images/Redeem-Online-Button-BG.png';
import Box2 from 'src/assets/images/Redeem-InStore-Button-BG.png';
import Box3 from 'src/assets/images/Donate-Candy-Button-BG.png';
// import box_eyeball from 'src/assets/images/eyeball2x.png';

import styles from './RedeemCredits.stylesheet';
import {LocalImage} from '../LocalImage';
import {Container} from '../Container';

// this should be your view rendering and should take in the props needed to render

const RedeemCreditsRenderComponent = () => {
  return (
    <Container testID={'RedeemCredits'}>
      <ScrollView contentContainerStyle={styles.RedeemWrapper} scrollEnabled={true}>
        <View>
          <Text style={styles.RedeemTitle}>Redeem Your Family</Text>
          <Text style={styles.RedeemTitle}>Candy Credits</Text>
          <Text style={styles.RedeemSubTitle}>Select your redemption method.</Text>
        </View>

        <View style={styles.RedeemInnerWrap}>
          <View style={styles.RedeemBox}>
            <LocalImage style={styles.RedeemBackgroundBox} source={Box1} />
            {/* <Image style={styles.RedeemDecoration} source={box_eyeball} /> */}
            <View style={styles.RedeemOneBoxInnerWrap}>
              <Text style={styles.RedeemOneBoxHeading}>Redeem Online</Text>
              <Text style={styles.RedeemOneBoxSubheading}>
                Choose from a list of retailers to select candy and have it shipped to your home.
              </Text>
            </View>
          </View>

          <View style={styles.RedeemBox}>
            <LocalImage style={styles.RedeemBackgroundBox} source={Box2} />
            {/* <Image style={styles.RedeemDecoration} source={box_eyeball} /> */}
            <View style={styles.RedeemOneBoxInnerWrap}>
              <Text style={styles.RedeemOneBoxHeading}>Redeem In-Store</Text>
              <Text style={styles.RedeemOneBoxSubheading}>
                Redeem your candy credits for in-store e-gift cards.
              </Text>
            </View>
          </View>

          <View style={styles.RedeemBox}>
            <LocalImage style={styles.RedeemBackgroundBox} source={Box3} />
            {/* <Image style={styles.RedeemDecoration} source={box_eyeball} /> */}
            <View style={styles.RedeemOneBoxInnerWrap}>
              <Text style={styles.RedeemOneBoxHeading}>Gift It Forward</Text>
              <Text style={styles.RedeemOneBoxSubheading}>
                Gift candy credits to families in your community.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default RedeemCreditsRenderComponent;
