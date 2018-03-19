import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    const { textStyle } = styles;   

    return <Text style={textStyle}> Albums </Text>;
};

// Styles
const styles = {
    textStyle: {
        fontSize: 20
    }
};

// Export to other Components
export default Header;
