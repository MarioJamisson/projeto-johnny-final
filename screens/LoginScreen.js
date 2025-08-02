import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/loginStyles';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/imagens/login/fundo.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* LOGO FLUTUANTE ACIMA DO CARD */}
        <View style={styles.logoWrapper}>
          <View style={styles.logoBox}>
            <Image
              source={require('../assets/imagens/login/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Fluenta</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Endereço de email</Text>
            <TextInput
              style={styles.input}
              placeholder="@mail.com"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Intro')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.infoText}>
            Esqueceu a senha? <Text style={styles.link}>Clique aqui</Text>
          </Text>
          <Text style={styles.infoText}>
            Não possui uma conta?{' '}
            <Text style={styles.link}>Crie sua conta</Text>
          </Text>

          <Text style={styles.ou}>-- Ou --</Text>

          <View style={styles.googleRow}>
            <Image source={require('../assets/imagens/login/google-colorido.png')} style={styles.googleIcon} />
            <Image source={require('../assets/imagens/login/google-cinza.png')} style={styles.googleIcon} />
            <Image source={require('../assets/imagens/login/google-colorido.png')} style={styles.googleIcon} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
