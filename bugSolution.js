```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('myKey');
        setData(value);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      // No cleanup needed in this particular case because getItem is not long running
    };
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error loading data: {error.message}</Text>;
  }
  return (
    <View>
      {data ? <Text>{data}</Text> : <Text>No data found</Text>}
    </View>
  );
};

export default MyComponent;
```