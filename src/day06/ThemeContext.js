import React from 'react';

// 하나의 컨텍스트는 하나의 데이터만 전달이 가능
// 여러개의 데이터를 전달할 경우 object, 배열에 데이터를 넣어서 전달
// 컨텍스트만 사용하여 여러개의 데이터를 전달할 경우에는 컨텍스트를 중복해서 사용하면 됨
// Provider 및 Consumer를 중첩하여 사용
const ThemeContext = React.createContext('light');

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;

//