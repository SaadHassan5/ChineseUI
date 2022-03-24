import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import fontFamily from '../../config/fontFamily';
import { WP } from '../../config/screen-ratio';
const CELL_COUNT = 4;
export const Otp_input = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={{}}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  root: { flex: 1,  },
  title: { textAlign: 'center', fontSize: 24,fontFamily:fontFamily.regular },
  codeFieldRoot: { marginTop: 20 },
  cell: {
      fontFamily:fontFamily.regular
    width: 55,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    marginLeft:WP(5)
  },
  focusCell: {
    borderColor: '#000',
  },
});
