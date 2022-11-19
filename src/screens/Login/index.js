import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { spacing } from '~/configs';

import { requestLogin, setApp } from '~/redux/actions';

// const mapStateToProps = ({ app }) => ({ app });
const mapStateToProps = states => ({ app: states.app });

const mapDispatchToProps = dispatch => ({ dispatch });
//const mapDispatchToProps = asdasdasd => ({ dispatch: asdasdasd });

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { dispatch, app } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '70%', marginVertical: spacing.s }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#00000033',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}
          keyboardType="email-address"
          value={app.username}
          onChangeText={d => dispatch(setApp('username', d))}
        />

        <View style={{ margin: spacing.xs }} />

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#00000033',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
          secureTextEntry
          value={app.password}
          onChangeText={d => dispatch(setApp('password', d))}
        />
      </View>

      <TouchableOpacity
        style={{
          width: '25%',
          paddingVertical: spacing.s,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000033',
        }}
        onPress={() => dispatch(requestLogin())}>
        <Text>Login</Text>
      </TouchableOpacity>

      {app.loginLoading && <Text>LOADING LOADING</Text>}
    </View>
  );
});

export { Login };
